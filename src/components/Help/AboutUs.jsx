import React from 'react'
import { 
  SquareUser,
  CheckCircle 
} from 'lucide-react';


const reviews = [
  {
    name: "Nidhi",
    date: "10-Jue-2025",
    text: "Spoke to ukta, she is very helpful and very kind, and help me in a very greater way.",
  },
  {
    name: "Tiger Associate",
    date: "10-Jue-2025",
    text: "Ukta ji is amazing always solved my problem's with in a minute very polite and calm person having such kind of employee is very good for the company.",
  },
  {
    name: "Gandhi Verma",
    date: "10-Jue-2025",
    text: "Awesome Response by fit gym team they will guide in very detailed.",
  },
  {
    name: "Radha T.",
    date: "10-Jue-2025",
    text: "Finally, I found the great Indian gym software. The previous software had poor customer support and was frustrating to use. This new software is user-friendly and has excellent customer service.",
  },
  {
    name: "Radha T.",
    date: "10-Jue-2025",
    text: "Finally, I found the great Indian gym software. The previous software had poor customer support and was frustrating to use. This new software is user-friendly and has excellent customer service.",
  },
  {
    name: "Gandhi Verma",
    date: "10-Jue-2025",
    text: "Awesome Response by fit gym team they will guide in very detailed.",
  },
];

const AboutUs = () => {
  return (
    <div>
      <header className="bg-white border-b border-gray-200  mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2 ">
          <SquareUser />
            About Us
        </h1>
      </header>

        <div
      className="w-full min-h-screen bg-cover bg-center flex flex-col items-center py-10"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?_gl=1*8twviy*_ga*MTE1MTQyNjkwNy4xNzU1MjA1MTY2*_ga_8JE65Q40S6*czE3NTc1ODQ1MjAkbzMkZzEkdDE3NTc1ODQ1MzIkajQ4JGwwJGgw')", // <-- replace with your bg image
      }}
    >
      {/* Logo Section */}
      <div className="w-full flex justify-start px-6 mb-6">
        <div className="bg-white/90 border-2 border-dashed border-blue-500 rounded-lg px-4 py-2 shadow-md">
          <h1 className="text-xl font-bold text-gray-800">
            FitGym<span className="text-blue-500">Software</span>
          </h1>
          <p className="text-xs text-gray-600">Made in India</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] max-w-7xl">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 border-t-4 border-orange-500"
          >
            {/* Stars */}
            <div className="flex text-orange-500 text-lg mb-2">
              {"★★★★★"}
            </div>
            <p className="text-sm text-gray-500">{review.date}</p>
            <h3 className="font-semibold text-gray-800">{review.name}</h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>

    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-8">
            We are Almost Everywhere
          </h2>

          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <p className="text-gray-700 text-lg">
                <span className="font-bold">1200+ Gyms</span> use FitGymSoftware
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <p className="text-gray-700 text-lg">
                Clients across <span className="font-bold">28 states</span> and{" "}
                <span className="font-bold">8 union territories</span>
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <p className="text-gray-700 text-lg">
                Clients across <span className="font-bold">100+ cities</span>
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <p className="text-gray-700 text-lg">
                Not only Gyms also used by{" "}
                <span className="font-bold">
                  Yoga, Dance, MMA, Swimming Studios
                </span>
              </p>
            </li>
          </ul>
        </div>

        {/* Right Side Map */}
        <div className="flex justify-center">
          <img
            src="/images/india-map.png" // place india-map.png inside public/images
            alt="India Map"
            className="w-72 md:w-96 opacity-80"
          />
        </div>
      </div>
    </section>

    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - App Stores */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-sm md:text-xl font-bold mb-6 ml-3">
            Available in Android & IOS
          </h1>
          <div className="flex flex-col gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" // replace with actual image in public/images
              alt="Google Play"
              className="w-68 cursor-pointer"
            />
            <img
              src="data:image/png;base64,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" // replace with actual image
              alt="App Store"
              className="w-68 cursor-pointer"
            />
          </div>
        </div>

        {/* Right Side - Ratings */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-sm md:text-xl font-bold mb-6 w-full ml-19" >
            Rating On Leading Platform
          </h1>
          <div className="grid grid-cols-2 gap-6">
            <img
              src="/images/google-reviews.png"
              alt="Google Reviews"
              className="h-20"
            />
            <img
              src="/images/getapp.png"
              alt="GetApp"
              className="h-20"
            />
            <img
              src="/images/software-advice.png"
              alt="Software Advice"
              className="h-20"
            />
            <img
              src="/images/capterra.png"
              alt="Capterra"
              className="h-20"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="w-full bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Small Heading with Line */}
        <div className="flex items-center justify-center gap-3 mb-2">
          {/* <span className="w-8 h-[2px] bg-blue-600"></span> */}
          <p className="text-blue-600 font-medium uppercase tracking-wide text-xl">
           WE GOT YOU COVERED
          </p>
        </div>

        {/* Main Heading */}
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-12">
          Reliable Support &amp; Hassle-Free Migration
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-10 flex flex-col items-center justify-center">
            <h3 className="text-base md:text-lg font-bold text-blue-700 mb-3">
              Dedicated Call and Chat Support
            </h3>
            <img
              src="/images/support.png" // place in public/images
              alt="Support"
              className="w-42 h-35 mb-6"
            />
            
            <p className="text-gray-500 text-sm mb-1">Monday to Saturday</p>
            <p className="text-gray-900 font-bold text-lg">9AM TO 9PM</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-10 flex flex-col items-center justify-center">
            <h3 className="text-base md:text-lg font-bold text-blue-700 mb-3">
              Migration from old software
            </h3>
            <img
              src="/images/migration.png" // place in public/images
              alt="Migration"
              className="w-38 h-38 mb-6"
            />
            
            <p className="text-gray-500 text-sm mb-1">Will do it within working</p>
            <p className="text-gray-900 font-bold text-lg">48 Hours</p>
          </div>
        </div>
      </div>

    </section>

    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <p className="text-xl font-medium text-blue-600 uppercase tracking-wide">
          Brands Trust Us...
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          Trusted by Leading Fitness Brands
        </h2>

        {/* Logos Grid */}
        <div className="mt-10 bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center">
            
            {/* Row 1 */}
            <img src="/logos/gymlogo.png" alt="Logo 1" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 2" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 3" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 4" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 5" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 6" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 7" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 8" className="h-16 object-contain mx-auto" />

            {/* Row 2 */}
            <img src="/logos/gymlogo.png" alt="Logo 9" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 10" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 11" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 12" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 13" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 14" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 15" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 16" className="h-16 object-contain mx-auto" />

           {/* Row 3 */}
            <img src="/logos/gymlogo.png" alt="Logo 1" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 2" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 3" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 4" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 5" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 6" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 7" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 8" className="h-16 object-contain mx-auto" />

            {/* Row 4    */}
            <img src="/logos/gymlogo.png" alt="Logo 9" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 10" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 11" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 12" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 13" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 14" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 15" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 16" className="h-16 object-contain mx-auto" />

            {/* Row 5 */}
            <img src="/logos/gymlogo.png" alt="Logo 1" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 2" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 3" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 4" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 5" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 6" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 7" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 8" className="h-16 object-contain mx-auto" />

            {/* Row 6 */}
            <img src="/logos/gymlogo.png" alt="Logo 9" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 10" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 11" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 12" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 13" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 14" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 15" className="h-16 object-contain mx-auto" />
            <img src="/logos/gymlogo.png" alt="Logo 16" className="h-16 object-contain mx-auto" />


          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left Section - Contact Info */}
        <div className="space-y-6 text-gray-800">
          {/* Phone */}
          <div>
            <h3 className="text-lg font-bold text-blue-700">Phone</h3>
            <p className='font-semibold'>Support: +91 9059059751</p>
            <p className='font-semibold'>Sales: +91 8008048787</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-bold text-blue-700">Email</h3>
            <p className='font-semibold'>Support: support@fitgymsoftware.com</p>
            <p className='font-semibold'>Sales: sales@fitgymsoftware.com</p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold text-blue-700">Address</h3>
            <p className='font-semibold mb-6'>
              AMHALA PRIVATE LIMITED, <br />
              WeWork, Rajapushpa Summit, Nanakramguda Rd, <br />
              Financial District, Gachibowli, Hyderabad, <br />
              Nanakramguda, Telangana 500032
            </p>
            <p className="mt-2 font-semibold">CIN: U73200MH2018PTC308192</p>
            <p className='font-semibold'>GSTIN: 36AAQCA8058F1ZB</p>
            <p className='font-semibold'>PAN: AAQCA8058F</p>
          </div>
        </div>

        {/* Right Section - Map */}
        <div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7794611076856!2d78.33722288840893!3d17.42236827509177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb937cd6e2b4a3%3A0x76600a7dcad90098!2sFitGymSoftware%C2%AE!5e0!3m2!1sen!2sus!4v1757590453524!5m2!1sen!2sus"
            className="w-full h-96 rounded-md shadow"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
    

    </div>
  )
}

export default AboutUs
