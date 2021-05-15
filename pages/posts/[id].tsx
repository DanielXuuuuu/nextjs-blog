import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '../../components/layout'
import Date from '../../components/date'
import utilsStyles from '../../styles/utils.module.css'
import styled from 'styled-components'

import { getAllPostIds, getPostData, Post } from '../../lib/posts'


const PostTitleContainer = styled.div`
  margin: 2rem auto;
`

const BorderCircleImage = styled.img`
  border-radius: 50%;
  vertical-align: middle;
`

const MetaItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const MetaItem = styled.span`
  font-size: 0.9rem;
  color: #666;
`

const BackToHome = styled.div`
  margin: 3rem 0 0;
`


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
        <PostTitleContainer>
          <h1 className={utilsStyles.headingXl}>{meta.title}</h1>
          <MetaItemContainer>
            <MetaItem>
              <BorderCircleImage
                src="/images/profile.jpeg"
                alt="Picture of the post author"
                width={25}
                height={25}
              />
              {' Daniel Xu / '}<Date dateString={meta.publishedOn} />
            </MetaItem>
            <MetaItem>☕ ☕ ☕ {meta.readTime}</MetaItem>
          </MetaItemContainer>
        </PostTitleContainer>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
      <BackToHome>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </BackToHome>
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
