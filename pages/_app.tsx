import { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import Link from 'next/link'

import styled, { ThemeProvider } from "styled-components"
import useDarkMode from 'use-dark-mode'

import { lightTheme, darkTheme, GlobalStyles } from '../themeConfig'
import utilStyles from '../styles/utils.module.css'
import '../styles/global.css'
import '../styles/prism.css'

import Light from '../assets/svg/light.svg'
import Dark from '../assets/svg/dark.svg'
import Rss from '../assets/svg/rss.svg'

const HeaderWrapper = styled.div`
  border-bottom: rgb(190, 190, 190) 0.1rem solid;
`

const Header = styled.header`
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const IconContainer = styled.span`
  display: flex;
`
const Icon = styled.span`
  color: inherit;
  fill: currentColor;
  cursor: pointer;
  &+& {
    margin-left: 1rem;
  }
`
const LinkIcon = styled(Icon)``

function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme} darkMode={darkMode}>
      <GlobalStyles />
      {isMounted &&
        <>
          <HeaderWrapper>
            <Header>
              <h3 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>Daniel's Blog.</a>
                </Link>
              </h3>
              <IconContainer>
                <Icon onClick={darkMode.toggle}>{darkMode.value ? <Dark /> : <Light />}</Icon>
                <LinkIcon as="a" href="/rss/feed.xml" target="__blank"><Rss /></LinkIcon>
              </IconContainer>
            </Header>
          </HeaderWrapper>
          <Component {...pageProps} />
        </>}
    </ThemeProvider >
  )
}

export default App