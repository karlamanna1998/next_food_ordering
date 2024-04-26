import Image from 'next/image'
import Link from 'next/link'
import Header from './components/layout/header/header'
import Hero from './components/layout/hero/hero'
import HomeMenu from './components/layout/homeMenu/homeMenu'
import SectionHeader from './components/layout/sectionHeader/sectionHeader'
import Footer from './components/layout/footer/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />

      <section className='text-center my-16'>
        <SectionHeader mainHeading={"About Us"} subHeading={'OUR STORY'} />
        <p className='max-w-2xl mx-auto mt-4 text-gray-500'>
          lorem ipqwdwq QUI;WQ QUIQ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio libero, aliquam  sit amet ultrices et, ullamcorper et nisi. Praesent pulvinar vitae felis.  sit amet ultrices et, ullamcorper et nisi. Praesent pulvinar vitae felis.  sit amet ultrices et, ullamcorper et nisi. Praesent pulvinar vitae felis.     </p>
      </section>

      <section className='text-center'>
        <SectionHeader mainHeading={"Contact Us"} subHeading={"DON'T HESITATE"} />
        <div className='mt-4'>
          <a href='tel:+918050259088' className='text-4xl underline text-gray-500'>+918050259088</a>
        </div>
      </section>
      
      <Footer />
    </>
  )
}
