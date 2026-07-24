import { NextResponse } from 'next/server';
import { getBlogsCollection } from '@/lib/mongodb';

// Always run fresh — blog data is dynamic.
export const dynamic = 'force-dynamic';

// GET /api/blogs — public. Returns all blogs (newest first).
export async function GET() {
    try {
        const blogs = await getBlogsCollection();
        const docs = await blogs.find({}).sort({ createdAt: -1 }).toArray();

        const data = docs.map((doc) => ({
            ...doc,
            _id: doc._id.toString(),
        }));

        return NextResponse.json({ success: true, blogs: data });
    } catch (error) {
        console.error('GET /api/blogs error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch blogs' },
            { status: 500 }
        );
    }
}

// POST /api/blogs — admin only. Requires the correct admin secret.
export async function POST(req) {
    try {
        // Secret can be sent via header or in the JSON body.
        const headerSecret = req.headers.get('x-admin-secret');
        const body = await req.json();
        const secret = headerSecret || body.adminSecret;

        if (!secret || secret !== process.env.ADMIN_SECRET) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { title, slug, excerpt, content, coverImage, author, tags } = body;

        if (!title || !content) {
            return NextResponse.json(
                { success: false, error: 'Title and content are required' },
                { status: 400 }
            );
        }

        const now = new Date();
        const blog = {
            title,
            slug: slug || title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
            excerpt: excerpt || '',
            content,
            coverImage: coverImage || '',
            author: author || 'Orbillo',
            tags: Array.isArray(tags) ? tags : (tags ? String(tags).split(',').map((t) => t.trim()).filter(Boolean) : []),
            createdAt: now,
            updatedAt: now,
        };

        const blogs = await getBlogsCollection();
        const result = await blogs.insertOne(blog);

        return NextResponse.json(
            { success: true, id: result.insertedId.toString() },
            { status: 201 }
        );
    } catch (error) {
        console.error('POST /api/blogs error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to create blog' },
            { status: 500 }
        );
    }
}
