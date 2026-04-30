export async function GET() {
  const BASE_URL = 'https://prayersandblessings.net';
  const buildDate = new Date().toUTCString();

  const items = [
    { title: '21 Powerful Morning Prayers for 2026', link: `${BASE_URL}/prayers/morning-prayers`, desc: 'Start each day with gratitude, intention, and divine peace with these 21 morning prayers.', pubDate: 'Wed, 01 Jan 2026 08:00:00 GMT' },
    { title: 'Healing Prayers for the Sick and Suffering', link: `${BASE_URL}/prayers/healing-prayers`, desc: 'Gentle and powerful healing prayers for those seeking divine restoration.', pubDate: 'Mon, 06 Jan 2026 08:00:00 GMT' },
    { title: 'Family Blessings: Heartfelt Words for Your Loved Ones', link: `${BASE_URL}/blessings/family-blessings`, desc: 'Powerful blessings to speak over your family every day.', pubDate: 'Fri, 10 Jan 2026 08:00:00 GMT' },
    { title: 'How to Pray: A Complete Guide for Beginners', link: `${BASE_URL}/guides/how-to-pray`, desc: 'Everything you need to begin a meaningful, transformative prayer practice.', pubDate: 'Mon, 13 Jan 2026 08:00:00 GMT' },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Prayers and Blessings</title>
    <link>${BASE_URL}</link>
    <description>Daily prayers and blessings for peace, healing, strength, and hope.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/images/logo.png</url>
      <title>Prayers and Blessings</title>
      <link>${BASE_URL}</link>
    </image>
    ${items.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <description><![CDATA[${item.desc}]]></description>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="true">${item.link}</guid>
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
