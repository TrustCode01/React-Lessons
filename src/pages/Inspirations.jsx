import React from 'react'
import PageHeader from '../components/PageHeader'
import Banner from '../assets/inspirationBanner.jpg'
import Footer from '../components/Footer'
function Inspirations() {
  return (
    <div>
        <PageHeader 
        title= 'Biblical Inspirations'
        image ={Banner}/>
        <Footer/>
    </div>
  )
}

export default Inspirations