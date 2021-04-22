import { Feed } from 'feed'
import { getSortedPostsData, getPostData } from './posts'
import fs from 'fs'

async function generateRssFeed() {

  const baseUrl = "https://nextjs-blog-danielxuuuuu.vercel.app"
  const date = new Date()
  const author = {
    name: "Daniel Xu",
    email: "979223119@qq.com",
  }
  
  const feed = new Feed({
    title: "Daniel Xu's Blog",
    description: "Welcome to my blog!",
    id: baseUrl,
    link: baseUrl,
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: `${baseUrl}/images/profile.jpeg`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Daniel Xu`,
    updated: date,
    generator: "Next.js using Feed for Node.js",
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: "https://example.com/json",
      atom: "https://example.com/atom"
    },
    author, 
  });
  
  const posts = await getSortedPostsData()
  
  posts.forEach(async (post) => {
    const url = `${baseUrl}/${post.id}`;
    const postData = await getPostData(post.id);

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: 'test', 
      content: postData.contentHtml,
      author: [author],
      contributor: [author],
      date: new Date(post.date)
    })
  })
  
  fs.mkdirSync('./public/rss', {recursive: true})
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
}

export default generateRssFeed;

