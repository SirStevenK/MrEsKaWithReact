import Document, { Html, Head, Main, NextScript } from 'next/document'
// import 'core-js';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8" />
            <link href="https://fonts.googleapis.com/css?family=Roboto|Acme|Permanent Marker|Lato|Signika&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.12.1/react-datepicker.min.css"/>
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