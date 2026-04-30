import { MetadataRoute } from 'next';

const BASE_URL = 'https://prayersandblessings.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-01-01');

  const staticRoutes = [
    { url: `${BASE_URL}`, changeFrequency: 'daily' as const, priority: 1.0, lastModified },
    { url: `${BASE_URL}/prayers`, changeFrequency: 'weekly' as const, priority: 0.9, lastModified },
    { url: `${BASE_URL}/blessings`, changeFrequency: 'weekly' as const, priority: 0.9, lastModified },
    { url: `${BASE_URL}/collections`, changeFrequency: 'weekly' as const, priority: 0.9, lastModified },
    { url: `${BASE_URL}/guides`, changeFrequency: 'weekly' as const, priority: 0.9, lastModified },
    // Prayer sub-pages
    { url: `${BASE_URL}/prayers/morning-prayers`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    { url: `${BASE_URL}/prayers/healing-prayers`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    { url: `${BASE_URL}/prayers/gratitude-prayers`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    { url: `${BASE_URL}/prayers/protection-prayers`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    { url: `${BASE_URL}/prayers/success-prayers`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    { url: `${BASE_URL}/prayers/prayers-for-anxiety`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    { url: `${BASE_URL}/prayers/evening-prayers`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    { url: `${BASE_URL}/prayers/prayers-for-strength`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    { url: `${BASE_URL}/prayers/prayers-for-grieving`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    // Blessing sub-pages
    { url: `${BASE_URL}/blessings/family-blessings`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    { url: `${BASE_URL}/blessings/birthday-blessings`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    { url: `${BASE_URL}/blessings/bedtime-blessings`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    { url: `${BASE_URL}/blessings/success-blessings`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    { url: `${BASE_URL}/blessings/wedding-blessings`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified },
    // Collections
    { url: `${BASE_URL}/collections/21-morning-prayers`, changeFrequency: 'monthly' as const, priority: 0.7, lastModified },
    { url: `${BASE_URL}/collections/bedtime-blessings`, changeFrequency: 'monthly' as const, priority: 0.7, lastModified },
    { url: `${BASE_URL}/collections/prayers-difficult-times`, changeFrequency: 'monthly' as const, priority: 0.7, lastModified },
    { url: `${BASE_URL}/collections/family-blessing-bundle`, changeFrequency: 'monthly' as const, priority: 0.7, lastModified },
    // Guides
    { url: `${BASE_URL}/guides/how-to-pray`, changeFrequency: 'monthly' as const, priority: 0.7, lastModified },
    { url: `${BASE_URL}/guides/building-prayer-routine`, changeFrequency: 'monthly' as const, priority: 0.7, lastModified },
    { url: `${BASE_URL}/guides/prayer-for-beginners`, changeFrequency: 'monthly' as const, priority: 0.7, lastModified },
    { url: `${BASE_URL}/guides/types-of-prayer`, changeFrequency: 'monthly' as const, priority: 0.7, lastModified },
    // Static / EEAT
    { url: `${BASE_URL}/about`, changeFrequency: 'yearly' as const, priority: 0.6, lastModified },
    { url: `${BASE_URL}/contact`, changeFrequency: 'yearly' as const, priority: 0.6, lastModified },
    { url: `${BASE_URL}/editorial-guidelines`, changeFrequency: 'yearly' as const, priority: 0.5, lastModified },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: 'yearly' as const, priority: 0.4, lastModified },
    { url: `${BASE_URL}/terms-of-use`, changeFrequency: 'yearly' as const, priority: 0.4, lastModified },
    { url: `${BASE_URL}/cookies-policy`, changeFrequency: 'yearly' as const, priority: 0.4, lastModified },
    { url: `${BASE_URL}/sitemap`, changeFrequency: 'monthly' as const, priority: 0.5, lastModified },
  ];

  return staticRoutes;
}
