import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Post from '../components/post'

import { getSortedPostsData } from '../lib/posts'

import { GetStaticProps } from 'next'

export default function Home({ posts }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async function getStaticProps() {

  // await generateRssFeed()

  const allPostsData = getSortedPostsData()

  return {
    props: {
      posts: allPostsData
    }
  }
}