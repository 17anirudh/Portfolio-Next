import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [{
        url: 'https://portfolio-next-five-ruby.vercel.app/',
        priority: 1,
        lastModified: new Date()
    }];
}