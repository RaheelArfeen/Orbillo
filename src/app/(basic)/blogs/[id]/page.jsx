import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ObjectId } from 'mongodb';
import { getBlogsCollection } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

async function getBlog(id) {
    try {
        const blogs = await getBlogsCollection();
        let doc = null;
        if (ObjectId.isValid(id)) {
            doc = await blogs.findOne({ _id: new ObjectId(id) });
        }
        if (!doc) {
            doc = await blogs.findOne({ slug: id });
        }
        if (!doc) return null;
        return { ...doc, _id: doc._id.toString() };
    } catch (error) {
        console.error('Single blog fetch error:', error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const blog = await getBlog(id);
    if (!blog) return { title: 'Blog | Orbillo' };
    return {
        title: `${blog.title} | Orbillo`,
        description: blog.excerpt || undefined,
    };
}

const SingleBlogPage = async ({ params }) => {
    const { id } = await params;
    const blog = await getBlog(id);

    if (!blog) notFound();

    // NOTE: Plain structural page — design & styling to be added by you.
    return (
        <main className="min-h-screen max-w-[820px] mx-auto px-5 md:px-8 py-24">
            <Link href="/blogs" className="text-white/50 outfit text-sm hover:text-white">
                ← Back to blog
            </Link>

            <h1 className="text-3xl md:text-5xl bricolage text-white mt-6 mb-4">{blog.title}</h1>
            <p className="text-white/40 outfit text-sm mb-8">
                {blog.author} · {new Date(blog.createdAt).toLocaleDateString()}
            </p>

            {blog.coverImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full rounded-2xl mb-10"
                />
            ) : null}

            {/* Content is stored as plain text / HTML. Rendered as-is. */}
            <article className="prose prose-invert max-w-none text-white/80 outfit whitespace-pre-wrap leading-relaxed">
                {blog.content}
            </article>

            {Array.isArray(blog.tags) && blog.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-10">
                    {blog.tags.map((tag) => (
                        <span key={tag} className="text-xs text-white/60 border border-white/15 rounded-full px-3 py-1">
                            {tag}
                        </span>
                    ))}
                </div>
            ) : null}
        </main>
    );
};

export default SingleBlogPage;
