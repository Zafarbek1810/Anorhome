import Head from 'next/head'
import Services from '../src/Components/Pages/ServicesPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Services />   
    </div>
  )
}
