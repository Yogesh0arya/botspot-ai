import Head from 'next/head'
import TopPage from '../components/TopPage'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Botspot AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <div className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-purple-600">
      <TopPage />
      
      <Body />

      <Footer />
    </div>
     

     
    </div>
  )
}
