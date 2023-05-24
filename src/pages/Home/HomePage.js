import React from 'react'
import Banner from '../../components/Banner'
import Content from '../../components/Content'
import CTA from '../../components/CallToAction'
import Footer from '../../components/Footer'
import Icongroup from '../../components/Icongroup'
import Education from '../../components/Education'
import Info from '../../components/Info'
function HomePage() {
  return (
    <>
      <Banner />
      <Info/>
      <Content />
      <Icongroup/>
      <Education/>
      <CTA />
      <Footer/>
    </>
  )
}

export default HomePage