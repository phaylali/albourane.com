import Head from 'next/head'

export default function Container({ children }) {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="page-content">{children}</main>
      {/* <Footer /> */}
    </div>
  )
}
