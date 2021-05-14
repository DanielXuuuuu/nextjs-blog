import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#FFF',
  footer: '#FAFAFB',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#0E141B',
  footer: 'linear-gradient(#1F2932, #0E141B)',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle`
  body {
    min-height: 100vh;
    position: relative;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.2s linear;
  }
`