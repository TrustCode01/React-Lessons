import React from 'react'
import PageHeader from '../components/PageHeader'
import Banner from '../assets/privacy.jpg'
import Footer from '../components/Footer'

function Privacy() {
  return (
    <>
    <PageHeader
     title="Our Privacy Policies"
     image={Banner}/>

    <section className='p-4'>
  <h2 className='text-2xl font-bold'>Privacy Policy</h2>

<p className='text-xl pb-4'>Introduction</p>

Welcome to Glad Tidings Tariro's website. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information.

<h3 className='text-xl font-bold py-6'>Information We Collect</h3>

We may collect the following types of information:
<ul>
  <li>Personal Information: Name, email address, phone number, and other contact details.</li>
  <li>Demographic Information: Age, gender, and other relevant details.</li>
  <li>Your location</li>
  <li>Your personal life experince and family</li>
</ul>

<h3 className='text-xl font-bold py-6'>How We Use Your Information</h3>

<p>We use the information we collect for the following purposes:</p>
<li>Communication: To send you updates, newsletters, and other relevant information about our church and its activities.</li>
<li>Service Improvement: To improve our website and the services we offer.</li>
<li>Event Management: To manage registrations and participation in church events.</li>
<li>Donations: To process and acknowledge donations made to the church.</li>
<li>Legal Compliance: To comply with legal obligations and protect our rights.</li>

<h3 className='text-xl font-bold py-6'>Information Sharing</h3>
<p>
We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share your information with trusted third parties who assist us in operating our website, conducting our ministry, or servicing you, as long as those parties agree to keep this information confidential.
</p>

<h3 className='text-xl font-bold py-6'>Data Security</h3>
<p>
We implement a variety of security measures to maintain the safety of your personal information. Your information is stored on secure servers and is only accessible by authorized personnel.

</p>

<h3 className='text-xl font-bold py-6'>Cookies</h3>
<p>
Our website may use cookies to enhance your browsing experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.

</p>

<h3 className='text-xl font-bold py-6'>Your Consent</h3> 

<p>By using our website, you consent to our Privacy Policy.</p>

<h3>Changes to Our Privacy Policy</h3>
<p>
We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top of the page.
</p>


<h3 className='text-xl font-bold py-6'>Contact Us</h3>

<p>If you have any questions or concerns about our Privacy Policy, please contact us at:</p>
Email: [email address]
Phone: [phone number]
Address: [physical address]
<p>
Thank you for visiting our website and for your support of Glad Tidings Fellowship Tariro. We are committed to protecting your privacy and ensuring that your personal information is handled with care and respect.
</p>

    </section>
    <Footer/>
    </>
  )
}

export default Privacy