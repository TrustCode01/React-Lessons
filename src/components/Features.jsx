import React from 'react'
import Sermons from '../assets/sermons.jpg'
function Features() {
  return (
    
    <section className=" container mx-auto p-5 sm:p-10 md:p-16 relative">

<h2 className='text-center p-6 text-4xl '>Welcome to Tariro Assembly</h2>
<p className="text-center pb-10">We zealously share the good news of Jesus Christ with all people, driven by a deep love for the lost and a desire to see lives transformed. “How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard? And how can they hear without someone preaching to them?” (Romans 10:14)</p>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">

        <div className="sm:col-span-6 lg:col-span-5">
          <a href="#">
            <div className="h-56 bg-contain bg-no-repeat text-center overflow-hidden"
              style={{ backgroundImage: `url('${Sermons}')` }}
              title="Pastor praying for congregants">
            </div>
          </a>
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="">
              <a href="#"
                className="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out">
                SERMONS
              </a>
              <a href="#"
                className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                The word of God that transforms lives!
              </a>
              <p className="text-gray-700 text-justify mt-2">
              Our sermons are rooted in the teachings of the Bible, guiding us to walk in faith and obedience. As it is written in Psalm 119:105, "Your word is a lamp to my feet and a light to my path." Join us as we explore the profound wisdom of the Scriptures and strive to embody its principles in our daily lives.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:col-span-6 lg:col-span-4">
          <article className="flex items-start mb-3 p-3 bg-gray-300">
            <div className="text-sm">
              <h3 className="text-lg">Home Groups</h3>
              <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">
                We meet every Wednesday to study the word of God from 6:00PM to 7:00PM
              </a>
            </div>
          </article>
          <article className="flex items-start mb-3 p-3 bg-gray-300">
            <div className="text-sm w-full">
              <p className="text-lg">Thursday Service</p>
              <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">
              Join us every Thursday from 6 to 7:30 PM at the church for praise, prayer, and teachings to deepen our intimacy with the Lord.
              </a>
            </div>
          </article>
          <article className="flex items-start mb-3 p-3 bg-gray-300">
            <div className="text-sm">
              <p className="text-lg">Couples Ministry</p>
              <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">
              Through the Word of God, our teachings are fortifying marriages, building lasting and stronger bonds.
              </a>
            </div>
          </article>
          <article className="flex items-start p-3 bg-gray-300">
            <div className="text-sm w-2/3">
              <p className="text-lg">Youth Ministry</p>
              <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">
                Nurturing our children to seek God' guidance in their lives.
              </a>
            </div>
          </article>
        </div>

        <div className="sm:col-span-12 lg:col-span-3">
            <div className="h-56 bg-cover text-center overflow-hidden"
              style={{ backgroundImage: `url('https://tailwindcss.com/img/card-left.jpg')` }}
              title="Woman holding a mug">
            </div>
          
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div>
              <a href="#"
                className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                Empowering lives through Christ- centered ministries.
              </a>
              <p className="text-gray-700  mt-2">
              Our church ministries serve the community and foster spiritual growth through youth programs, Bible studies, outreach, and support groups, all rooted in Christ's love. Join us to inspire, uplift, and share the message of hope and salvation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features