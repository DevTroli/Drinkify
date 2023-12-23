import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  GrayBackground: '#CACACA',
  gray: '#b5b5b5',
  TitleGray: '#6C5F5B',
  white: '#f9f9f9',
  whiteSecondary: '#F4F4F4',
  darkGreen: '#0E720E',
  green: '#0F8B0F',
  Black: '#000000'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
    color: ${Colors.darkGreen};
    max-width: 100vw;
    heigth: 100%;
  }

  body {
    background-color: ${Colors.GrayBackground};
  }

  .container {
    margin: 0 auto;
    max-width: 100vw;
  }
`
export const ButtonLink = styled(Link)`
  max-width: 19rem;
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: ${Colors.green};
  color: ${Colors.white};
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1rem;
  text-align: center;
  text-decoration: none;
  margin-bottom: 0.75rem;

  &:hover {
    background-color: ${Colors.darkGreen};
  }
`
