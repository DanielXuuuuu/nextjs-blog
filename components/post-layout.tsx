import Head from 'next/head'
import Link from 'next/link'
import Date from './date'
import Layout from './layout'

import utilsStyles from '../styles/utils.module.css'
import styled from 'styled-components'

const PostTitleContainer = styled.div`
  margin: 5rem auto 3.5rem;
`

const MetaItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const MetaItem = styled.span`
  color: #666;
  font-size: 0.8rem;
  &+& {
    margin-left: 1rem;
  }
`

const BackToHome = styled.div`
  margin: 3rem 0 0;
`

export default function PostLayout({ children, frontMatter: meta }) {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article>
        <PostTitleContainer>
          <h1 className={utilsStyles.headingXl}>{meta.title}</h1>
          <MetaItemContainer>
            <MetaItem><Date dateString={meta.publishedOn} /></MetaItem>
            <MetaItem>☕ {meta.readTime + ' min read'}</MetaItem>
          </MetaItemContainer>
        </PostTitleContainer>
        {children}
      </article>
      <BackToHome>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </BackToHome>
    </Layout>
  )
}