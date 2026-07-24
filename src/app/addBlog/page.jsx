'use client';

import { useState } from 'react';

// Hidden admin-only route. Not linked anywhere in the site.
// Access requires the ADMIN_SECRET (validated server-side on submit).
export default function AddBlogPage() {
    const [adminSecret, setAdminSecret] = useState('');
    const [form, setForm] = useState({
        title: '',
        slug: '',
        excerpt: '',
        coverImage: '',
        author: '',
        tags: '',
        content: '',
    });
    const [status, setStatus] = useState(null); // { type: 'success' | 'error', message }
    const [submitting, setSubmitting] = useState(false);

    const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setStatus(null);

        try {
            const res = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-secret': adminSecret,
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (!res.ok || !data.success) {
                setStatus({
                    type: 'error',
                    message: data.error || 'Something went wrong.',
                });
            } else {
                setStatus({ type: 'success', message: `Blog published. ID: ${data.id}` });
                setForm({
                    title: '',
                    slug: '',
                    excerpt: '',
                    coverImage: '',
                    author: '',
                    tags: '',
                    content: '',
                });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Network error. Try again.' });
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass =
        'w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-black focus:outline-none';
    const labelClass = 'block text-sm font-medium text-gray-700 mb-1';

    return (
        <div className="min-h-screen bg-gray-50 flex items-start justify-center py-16 px-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Add Blog</h1>
                <p className="text-sm text-gray-500 mb-8">Admin only. Enter your secret key to publish.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className={labelClass}>Admin Secret *</label>
                        <input
                            type="password"
                            value={adminSecret}
                            onChange={(e) => setAdminSecret(e.target.value)}
                            className={inputClass}
                            required
                            autoComplete="off"
                        />
                    </div>

                    <hr className="border-gray-100" />

                    <div>
                        <label className={labelClass}>Title *</label>
                        <input value={form.title} onChange={update('title')} className={inputClass} required />
                    </div>

                    <div>
                        <label className={labelClass}>Slug (optional — auto-generated from title)</label>
                        <input value={form.slug} onChange={update('slug')} className={inputClass} placeholder="my-blog-post" />
                    </div>

                    <div>
                        <label className={labelClass}>Author</label>
                        <input value={form.author} onChange={update('author')} className={inputClass} placeholder="Orbillo" />
                    </div>

                    <div>
                        <label className={labelClass}>Cover Image URL</label>
                        <input value={form.coverImage} onChange={update('coverImage')} className={inputClass} placeholder="https://..." />
                    </div>

                    <div>
                        <label className={labelClass}>Tags (comma separated)</label>
                        <input value={form.tags} onChange={update('tags')} className={inputClass} placeholder="design, branding" />
                    </div>

                    <div>
                        <label className={labelClass}>Excerpt</label>
                        <textarea value={form.excerpt} onChange={update('excerpt')} className={inputClass} rows={2} />
                    </div>

                    <div>
                        <label className={labelClass}>Content *</label>
                        <textarea value={form.content} onChange={update('content')} className={inputClass} rows={12} required />
                    </div>

                    {status ? (
                        <div
                            className={`rounded-lg px-4 py-3 text-sm ${
                                status.type === 'success'
                                    ? 'bg-green-50 text-green-700 border border-green-200'
                                    : 'bg-red-50 text-red-700 border border-red-200'
                            }`}
                        >
                            {status.message}
                        </div>
                    ) : null}

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full rounded-lg bg-black text-white py-3 text-sm font-medium hover:bg-gray-800 disabled:opacity-50"
                    >
                        {submitting ? 'Publishing…' : 'Publish Blog'}
                    </button>
                </form>
            </div>
        </div>
    );
}
