import { Inter } from '@next/font/google'
import Head from 'next/head'
import EducationNews from '../components/Home/EducationNews/EducationNews'
import EntertainmentNews from '../components/Home/EntertainmentNews/EntertainmentNews'
import InternationalNews from '../components/Home/InternationalNews/InternationalNews'
import LatestNews from '../components/Home/LatestNews/LatestNews'
import LifeStyleNews from '../components/Home/LifeStyleNews/LifeStyleNews'
import Marquee from '../components/Home/Marquee/Marquee'
import Marquee1 from '../components/Home/Marquee/Marquee1'
import PoliticalNews from '../components/Home/PoliticalNews/PoliticalNews'
import SportsNews from '../components/Home/SportsNews/SportsNews'
import TechNews from '../components/Home/TechNews/TechNews'
import TrendingNews from '../components/Home/TrendingNews/TrendingNews'
import Footer from '../components/Shared/Navbar/Footer/Footer'
import Navbar from '../components/Shared/Navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     
      <Head>
        <title>News 71</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        {/* <TopBar></TopBar> */}
        <Navbar></Navbar>
        <Marquee></Marquee>
        <Marquee1></Marquee1>
        <TrendingNews></TrendingNews>
        <LatestNews></LatestNews>
        <PoliticalNews></PoliticalNews>
        <EntertainmentNews></EntertainmentNews>
        <SportsNews></SportsNews>
        <TechNews></TechNews>
        <LifeStyleNews></LifeStyleNews>
        <EducationNews></EducationNews>
        <InternationalNews></InternationalNews>
        <Footer></Footer>
      </main>
    </>
  )
}
