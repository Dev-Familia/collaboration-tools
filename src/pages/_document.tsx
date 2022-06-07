import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import { basePath } from '@/routes'

const Document: React.FC = () => {
  const PATH = basePath

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href={`${PATH}/favicon.ico`} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${PATH}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${PATH}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${PATH}/favicon-16x16.png`}
        />
        <meta name="theme-color" content="#6B46C1" />
        <link rel="manifest" href={`${PATH}/manifest.json`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
