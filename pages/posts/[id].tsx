import Head from 'next/head'

import Layout from '../../components/layout'
import Date from '../../components/date'
import utilsStyles from '../../styles/utils.module.css'

import { getAllPostIds, getPostData, Post } from '../../lib/posts'

import { GetStaticPaths, GetStaticProps } from 'next'

export default function PostDetail({
  postData
}: {
  postData: Post
}) {

  const {
    meta,
    contentHtml
  } = postData

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article>
        <h1 className={utilsStyles.headingXl}>{meta.title}</h1>
        <div className={utilsStyles.lightText}>
          <Date dateString={meta.publishedOn} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData,
    }
  }
}
