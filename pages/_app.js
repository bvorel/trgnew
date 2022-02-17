import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import React, { createContext, useEffect, useState } from 'react'

import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import '../styles/globals.scss'
import '../styles/home.scss'
import '../styles/hero.scss'
import '../styles/text-flip.scss'
import '../styles/testimonials.scss'
import '../styles/locomotive-scroll.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MyApp({ Component, pageProps }) {

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
