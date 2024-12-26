import React from 'react'
import PageHeader from '../components/PageHeader'
import Banner from '../assets/sermon.jpg'
import Footer from '../components/Footer'
import SermonCard from '../components/SermonCard'
const services=[
  {
    poster: '',
    src: 'https://www.youtube.com/watch?v=1oM',
    title: 'Sermon Title',
    description: 'Sermon Description'
  },
{
  poster: '',
  src: '#',
  title: 'Sermon Title',
  description: 'Sermon Description'
},
{
  poster: '',
  src: '#',
  title: 'Sermon Title',
  description: 'Sermon Description'
},
{
  poster: '',
  src: '#',
  title: 'Sermon Title',
  description: 'Sermon Description'
},
{
  poster: '',
  src: '#',
  title: 'Sermon Title',
  description: 'Sermon Description'
},
{
  poster: '',
  src: '#',
  title: 'Sermon Title',
  description: 'Sermon Description'
},
{
  poster: '',
  src: '#',
  title: 'Sermon Title',
  description: 'Sermon Description'
},
{
  poster: '',
  src: '#',
  title: 'Sermon Title',
  description: 'Sermon Description'
},
  
]

function Sermons() {
  return (
    <div className='pt-16'>
      <PageHeader
      title='Our Sermons '
      image = {Banner}
      />

<div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {services.map((service, index) => (
            <SermonCard
              key={index}
              {...service}
            />
          ))}
        </div>

      
    </div>
    <Footer/>
    </div>
  )
}

export default Sermons;