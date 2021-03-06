import Link from 'next/link'
import Date from './date'

import utilStyles from '../styles/utils.module.css'
import styled from 'styled-components'

import { Post } from '../lib/posts'

const PostContainer = styled.article`
  margin: 0 0 3rem;
`
const PostWrapper = styled.a`
  color: inherit;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`

const PostTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`
const PostAbstract = styled.div`
  font-size: 1rem;
  margin: 0.8rem 0;
  font-weight: lighter;
`
const ReadMoreLink = styled.a`
  font-size: 0.9rem;
  font-weight: bold;
  color: inherit;
  cursor: pointer;
  display: block;
`

export default function PostSummary({
  post
}: {
  post: Post
}) {

  const {
    id,
    meta
  } = post

  return (
    <PostContainer>
      <Link href={`/posts/${id}`}>
        <PostWrapper>
          <PostTitle>{meta.title}</PostTitle>
          <small className={utilStyles.lightText}>
            <Date dateString={meta.publishedOn} />
          </small>
          <PostAbstract>{meta.abstract}</PostAbstract>
          <ReadMoreLink>Read more</ReadMoreLink>
        </PostWrapper>
      </Link>
    </PostContainer>
  )
}