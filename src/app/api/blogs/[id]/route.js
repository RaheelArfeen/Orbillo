import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getBlogsCollection } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

// GET /api/blogs/:id — public. Looks up by Mongo _id, falling back to slug.
export async function GET(req, { params }) {
    try {
        const { id } = await params;
        const blogs = await getBlogsCollection();

        let doc = null;
        if (ObjectId.isValid(id)) {
            doc = await blogs.findOne({ _id: new ObjectId(id) });
        }
        if (!doc) {
            doc = await blogs.findOne({ slug: id });
        }

        if (!doc) {
            return NextResponse.json(
                { success: false, error: 'Blog not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            blog: { ...doc, _id: doc._id.toString() },
        });
    } catch (error) {
        console.error('GET /api/blogs/[id] error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch blog' },
            { status: 500 }
        );
    }
}

// DELETE /api/blogs/:id — admin only.
export async function DELETE(req, { params }) {
    try {
        const secret = req.headers.get('x-admin-secret');
        if (!secret || secret !== process.env.ADMIN_SECRET) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { id } = await params;
        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { success: false, error: 'Invalid id' },
                { status: 400 }
            );
        }

        const blogs = await getBlogsCollection();
        const result = await blogs.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { success: false, error: 'Blog not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('DELETE /api/blogs/[id] error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to delete blog' },
            { status: 500 }
        );
    }
}
