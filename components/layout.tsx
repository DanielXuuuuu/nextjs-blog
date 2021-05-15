import Head from 'next/head'

import styled from 'styled-components'

import styles from './layout.module.css'

const name = 'Daniel Xu'
export const siteTitle = 'Next.js Sample Website'


const SayHelloHeader = styled.h1`
  font-size: 2.5rem;
  padding: 0;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
const SectionHeader = styled(SayHelloHeader)`
  font-size: 1.5rem;
  color: #FF0878;
`

const AboutMe = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  color: #555;
  margin: 0 auto 2rem;
`

const Footer = styled.footer`
  width: 100%;
  padding: 3rem;
  position: absolute;
  bottom: 0;
  text-align: center;
  background: ${({ theme }) => theme.footer}; 
  background-image: ${({ theme }) => theme.footer}; 
  color: ${({ theme }) => theme.text}; 
`
const FooterLinkContainer = styled.div`
  margin: 1.3rem 0;
`
const FooterLink = styled.a`
  color: inherit;
  &+& {
    margin-left: 1rem;
  }
`

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.container}>
        {home &&
          <>
            <SayHelloHeader>Hey, I'm Daniel Xu.</SayHelloHeader>
            <AboutMe>I am a undergraduate student at Sun Yat-Sen University, major in software engineering. After graduation，I think I will be a Front-end developer. 💻</AboutMe>
            <SectionHeader>Blogs</SectionHeader>
          </>
        }
        <main>{children}</main>
      </div>
      <Footer>
        <div>✌️</div>
        <FooterLinkContainer>
          <FooterLink href="https://github.com/DanielXuuuuu" target="__blank">github</FooterLink>
          <FooterLink href="/rss/feed.xml" target="__blank">rss</FooterLink>
          <FooterLink href="https://twitter.com/danielxuuuuu" target="__blank">twitter</FooterLink>
        </FooterLinkContainer>
        <small>© 2021 {name}. All Rights Reserved.</small>
      </Footer>
    </>
  )
}