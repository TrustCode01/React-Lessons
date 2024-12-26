import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="w-full bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
                <div className="block">
                    <h4 className="text-xl text-white font-bold mb-7">Glad Tidings Fellowship</h4>
                    <ul className="text-lg  transition-all duration-500">
                        <li className="mb-6"><Link to="/home"  className="text-gray-400 hover:text-white">Home</Link></li>
                        <li className="mb-6"><Link to="/about"  className=" text-gray-400 hover:text-white">About</Link></li>
                        <li className="mb-6"><Link to="/services"  className=" text-gray-400 hover:text-white">Services</Link></li>
                        <li className="mb-6"><Link to="/events"  className=" text-gray-400 hover:text-white">Events</Link></li>
                        <li className='mb-6' ><Link to="/contact"  className=" text-gray-400 hover:text-white">Contact</Link></li>
                    </ul>
                </div>
                
                <div className="block">
                    <h4 className="text-xl text-white font-bold mb-7">Media</h4>
                    <ul className="text-lg  transition-all duration-500">
                        <li className="mb-6"><Link to="/sermons"  className="text-gray-400 hover:text-white">Sermons</Link></li>
                        <li className="mb-6"><Link to="/inspirations"  className=" text-gray-400 hover:text-white">Inspirations</Link></li>
                        <li className="mb-6"><Link to="/resourses"  className=" text-gray-400 hover:text-white">Resources</Link></li>
                        <li className="mb-6"><Link to="/guides"  className=" text-gray-400 hover:text-white">Guides</Link></li>
                        <li ><Link to="/gallery"  className=" text-gray-400 hover:text-white">Gallery</Link></li>
                    </ul>
                </div>
                
                <div className="block">
                    <h4 className="text-xl text-white font-bold mb-7">Resources</h4>
                    <ul className="text-lg  transition-all duration-500">
                        <li className="mb-6"><Link to="/fqa"  className="text-gray-400 hover:text-white">FAQs</Link></li>
                        <li className="mb-6"><Link to="/guide"  className=" text-gray-400 hover:text-white">Quick Start</Link></li>
                        <li className="mb-6"><Link to="/resources"  className=" text-gray-400 hover:text-white">Resources</Link></li>
                        <li className="mb-6"><Link to="/guide"  className=" text-gray-400 hover:text-white"> Guide</Link></li>
                        <li ><Link to="/teachings"  className=" text-gray-400 hover:text-white">Teachings</Link></li>
                    </ul>
                </div>
                
                <div className="block">
                    <h4 className="text-xl text-white font-bold mb-7">Support</h4>
                    <ul className="text-lg  transition-all duration-500">
                        <li className="mb-6"><Link to="/ministries"  className="text-gray-400 hover:text-white">Ministries</Link></li>
                        <li className="mb-6"><a href="#"  className=" text-gray-400 hover:text-white">Cookies</a></li>
                        <li className="mb-6"><a href="#"  className=" text-gray-400 hover:text-white">License</a></li>
                        <li className="mb-6"><a href="#"  className=" text-gray-400 hover:text-white">Terms & Conditions</a></li>
                        <li ><Link to="/privacy"  className=" text-gray-400 hover:text-white">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
            
            <div className="py-7 border-t border-gray-700 ">
                <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
                    
                         
                            
                    
                    <span className="text-gray-400  block">©
<a href="#">Glad Tidings Fellowship Tariro Assembly</a> 2024, All rights reserved.</span>
                    <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                        
                      
                                
                    
                        
                        <a href="#"  className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600">
                      social media
                                
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer