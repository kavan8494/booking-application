import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

import "./Home.css"

const home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homecontainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
         <MailList/>
         <Footer/>
      </div>
    </div>
  )
}

export default home
