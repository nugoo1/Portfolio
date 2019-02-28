import React from 'react'
import GlobalStyle from '../styles/global'
import SEO from './SEO'
import 'typeface-cantata-one'
import 'typeface-open-sans'
import Header from "./header";

const Layout = () => (
  <>
    <SEO />
    <GlobalStyle />
    <Header />
  </>
)

export default Layout
