import { BlogPost } from '../types/blog';

export function generateRSSFeed(posts: BlogPost[], siteUrl: string = 'https://feecompare.ca'): string {
  const publishedPosts = posts.filter(post => post.published).slice(0, 20); // Latest 20 posts
  
  const rssItems = publishedPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>${post.author.name}</author>
      ${post.categories.map(cat => `<category>${cat}</category>`).join('')}
    </item>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>FeeCompare Blog</title>
    <description>Latest insights on trading fees, broker reviews, and investment strategies for Canadian investors</description>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-ca</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>FeeCompare Blog System</generator>
    ${rssItems}
  </channel>
</rss>`;
}

export function downloadRSSFeed(posts: BlogPost[]) {
  const rssContent = generateRSSFeed(posts);
  const blob = new Blob([rssContent], { type: 'application/rss+xml' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'rss.xml';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
}