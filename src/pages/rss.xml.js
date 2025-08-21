import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ id }) => {
    return id.startsWith('en/');
  });

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => 
    b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  return rss({
    title: 'Aunova Blog - Zero-Knowledge & AI Insights',
    description: 'Latest insights on Zero-Knowledge proofs, AI & Web3 integration, and decentralized infrastructure from the Aunova team.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/en/blog/${post.slug.replace('en/', '')}/`,
      author: post.data.author || 'Aunova Team',
      categories: [post.data.category, ...(post.data.tags || [])],
    })),
    customData: `<language>en-us</language>
<webMaster>christian@aunova.net (Aunova Team)</webMaster>
<copyright>© 2024 Aunova. All rights reserved.</copyright>`,
  });
}
