import Link from 'next/link';
import { getBlogsCollection } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Blog | Orbillo',
    description: 'Insights, updates and stories from the Orbillo team.',
};

async function getBlogs() {
    try {
        const blogs = await getBlogsCollection();
        const docs = await blogs.find({}).sort({ createdAt: -1 }).toArray();
        return docs.map((doc) => ({ ...doc, _id: doc._id.toString() }));
    } catch (error) {
        console.error('Blog page fetch error:', error);
        return [];
    }
}

const BlogPage = async () => {
    const blogs = await getBlogs();

    // NOTE: Plain structural page — design & styling to be added by you.
    return (
        <main className="min-h-screen max-w-[1380px] mx-auto px-5 md:px-8 py-24">
            <h1 className="text-3xl md:text-5xl bricolage text-white mb-10">Blog</h1>

            {blogs.length === 0 ? (
                <p className="text-white/60 outfit">No blog posts yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Link
                            key={blog._id}
                            href={`/blogs/${blog._id}`}
                            className="block border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors"
                        >
                            {blog.coverImage ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={blog.coverImage}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover rounded-xl mb-4"
                                />
                            ) : null}
                            <h2 className="text-white text-xl bricolage mb-2">{blog.title}</h2>
                            {blog.excerpt ? (
                                <p className="text-white/60 outfit text-sm line-clamp-3">{blog.excerpt}</p>
                            ) : null}
                            <p className="text-white/40 outfit text-xs mt-4">
                                {blog.author} · {new Date(blog.createdAt).toLocaleDateString()}
                            </p>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
};

export default BlogPage;
