import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link key="fontsPre" rel="preconnect" href="https://fonts.googleapis.com" />
            <link key="staticPre" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
            <link key="fontsLink" href="https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument