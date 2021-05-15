import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism';
import headings from 'remark-autolink-headings'
import slug from 'remark-slug'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMeta {
  title: string
  publishedOn: string
  isPublished: boolean
  seoTitle: string
  abstract: string
  readTime: string
}

export interface Post {
  id: string
  contentHtml?: string, 
  meta: PostMeta
}

export function getSortedPostsData(): Post[] {
  const filenames = fs.readdirSync(postsDirectory);

  const allPostsData: Post[] = filenames.map(filename => {
    const id = filename.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents);

    return {
      id,
      meta: matterResult.data as PostMeta
    }
  }).filter(post => post.meta.isPublished)

  return allPostsData.sort((a, b) => {
    if (a.meta.publishedOn < b.meta.publishedOn) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map(filename => {
    return {
      params: {
        id: filename.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContent)

  const processedContent = await remark()
    .use(slug)
    .use(headings)
    .use(html)
    .use(prism)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()
  const stats = readingTime(contentHtml);

  return {
    id,
    contentHtml,
    meta: {
      readTime: stats.text,
      ...matterResult.data as PostMeta,
    }
  }
}