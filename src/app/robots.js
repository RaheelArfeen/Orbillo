export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/_next/',
                    '/addBlog',
                    '/admin/',
                    '/wp-admin/',
                    '/wp-content/',
                    '/wp-includes/',
                    '/*?*',
                ],
            },
        ],
        sitemap: 'https://www.orbillo.com/sitemap.xml',
        host: 'https://www.orbillo.com',
    }
}