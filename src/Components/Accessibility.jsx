import React from 'react'
import { ArrowUpRight } from "lucide-react";

function Accessibility() {
    const services = [
  {
    title: "Custom Software Development & Designing",
    points: [
      "Tailor-made software solutions to meet your business goals.",
      "Intuitive and user-friendly designs for better customer experience.",
      "Scalable architecture for future growth.",
    ],
    img: "/softwareImg.svg",
    reverse: false,
  },
  {
    title: "Artificial Intelligence (AI)",
    points: [
      "Smarter automation for business processes",
      "Predictive analytics for data-driven decisions",
      "Innovative AI solutions to enhance efficiency",
    ],
    img: "aiImg.svg",
    reverse: true,
  },
  {
    title: "Digital Accessibility",
    points: [
      "Ensure inclusive and accessible digital experiences",
      "Compliance with global accessibility standards",
      "Improve usability for people with disabilities",
    ],
    img: "/accessibilityImg.svg",
    reverse: false,
  },
  {
    title: "Staffing Solutions (Domestic & US)",
    points: [
      "Access to top-tier professionals for your projects",
      "Flexible staffing models based on your requirements",
      "Support for both short-term and long-term engagements",
    ],
    img: "/staffingImg.svg",
    reverse: true,
  },
  {
    title: "Business Consulting & Digital Innovation",
    points: [
      "Modern strategies to optimize operations",
      "Reduce costs while improving efficiency",
      "Enhance customer experience and engagement",
    ],
    img: "consultingImg.svg",
    reverse: false,
  },
];

  return (
    <div className="relative max-w-screen mx-auto font-kumbh bg-white mt-8">
         
                     <section
  className="relative w-full min-h-[550px] flex flex-col md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
  style={{
    backgroundImage: "url('/worldmap.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Left Content */}
  <div className="relative z-10 flex-1 flex flex-col space-y-6 items-start justify-center text-center md:text-left">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-red-600 leading-snug mb-6">
       Doelsoft <br />
                    <span className="block mt-4">Digital Accessibility</span>
      
    </h2>

    <button className="py-2 px-5 border border-black ml-[45px] md:ml-[9px]  text-black hover:bg-gray-200 transition-all duration-200 ">
      Consult With Us <span className="ml-2">↗</span>
    </button>
  </div>

  {/* Right Image */}
  <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
    <img
      src="/Digitalaccessibility.svg"
      alt="Team"
      className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
    />
  </div>
</section>
        <section className="w-full h-full mx-auto  py-40 "   style={{
                backgroundImage: "url('/Accessibility_background.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
           
            }}>
            <div className="space-y-10">
                <h2 className="text-2xl md:text-4xl ml-24 font-extralight text-black">
                   Doelsoft – Empowering Businesses Through<br/> Technology and Innovation
                </h2>
                <p className="ml-24 text-black text-lg leading-relaxed">
                    Headquartered in Hyderabad & Established in the USA

                </p>
                <p className="ml-24 text-black text-lg leading-relaxed">
                    Doelsoft is a leading software development and digital innovation <br/>company specializing in custom software development, designing,<br/> business
                     consulting, AI, digital accessibility, and staffing solutions.<br/> We help businesses stand out, grow faster, and stay ahead of the <br/> competition.

                </p>
            </div>
           
        </section>
        <section className="relative w-full flex justify-center items-center py-10 bg-white">
         <div className="absolute  right-48 top-11">
              
          <img
            src="/logo4.svg" 
            alt="logo"
            className="w-20 h-auto"
          />
      </div>
            
      
            
      <div className="relative bg-[#464B51] mt-16 py-1  text-white flex items-center w-[90%] md:w-[80%]  overflow-hidden">
       
        <div>
              {/* Left Image */}
        

        {/* Content */}
        <div className="px-10 py-8 ml-64">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-200 leading-relaxed max-w-3xl">
            To turn business ideas into reality by delivering innovative,
            high-quality, and scalable solutions that foster sustainable growth.
            Our professional team works closely with clients to understand their
            unique needs and provide solutions that exceed expectations.
          </p>
        </div>

        </div>
      
      
        {/* Arrow Graphic (Top Right) */}
      
      </div>
    
      <div className='absolute left-44 w-64  z-30 '>
          <img src="/Accessibility_target.svg" alt='Accessibility' className='  h-[#300px] mb-[#35px] ' />
      </div>    
        
    </section>
     <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Services</h2>

        <div className="space-y-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                service.reverse ? "md:flex-row-reverse" : ""
              } bg-[#efefef99]  overflow-hidden`}
            >
              {/* Image */}
              <div className="md:w-96 w-full">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full p-6 flex flex-col justify-end mr-56">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {service.points.map((point, idx) => (
                    <div className='flex flex-row'>
                        <img src='/logo4.svg' className='h-6 w-6 inline-block mr-2 mb-2'/>
                    <li key={idx} className="flex justify-end">
                     
                      {point}
                    </li>

                    </div>
                  
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="w-full  bg-[#F4F6FB]">
      <div className='flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto  px-4'>
        <div >
          <h1 className='font-kumbh text-3xl font-extralight text-black'>💡 Why Choose Doelsoft?</h1>
          <ul className='space-y-2 mt-6'>
            <div className='flex flex-row'>
              <img src='/logo4.svg' className='h-6 w-6 inline-block mr-2 mb-2'/>
              <li className='text-black'><span className='font-bold'>Agile Transformation:</span>Faster and more flexible delivery</li>

            </div>
             <div className='flex flex-row'>
              <img src='/logo4.svg' className='h-6 w-6 inline-block mr-2 mb-2'/>
              <li className='text-black'><span className='font-bold'>Cost Optimization</span> & Resource Efficiency</li>

            </div>
             <div className='flex flex-row'>
              <img src='/logo4.svg' className='h-6 w-6 inline-block mr-2 mb-2'/>
              <li className='text-black'><span className='font-bold'>Customer-Centric Approach:</span>Focused on measurable results</li>

            </div>
             <div className='flex flex-row'>
              <img src='/logo4.svg' className='h-6 w-6 inline-block mr-2 mb-2'/>
              <li className='text-black'><span className='font-bold'>Tailor-Made Engagement Models:</span>Aligned with your business needs</li>

            </div>
             <div className='flex flex-row'>
              <img src='/logo4.svg' className='h-6 w-6 inline-block mr-2 mb-2'/>
              <li className='text-black'><span className='font-bold'>Offshoring Solutions:</span>Global scalability and efficiency</li>

            </div>
            <div className='flex flex-row'>
              <img src='/logo4.svg' className='h-6 w-6 inline-block mr-2 mb-2'/>
              <li className='text-black'><span className='font-bold'>Top-Class Quality</span>& Timely Delivery</li>

            </div>
            <div className='flex flex-row'>
              <img src='/logo4.svg' className='h-6 w-6 inline-block mr-2 mb-2'/>
              <li className='text-black'><span className='font-bold'>Top-Class Quality</span>& Timely Delivery</li>

            </div>
            <div className='flex flex-row'>
              <img src='/logo4.svg' className='h-6 w-6 inline-block mr-2 mb-2'/>
              <li className='text-black'><span className='font-bold'>End-to-End Support:</span>From planning to execution</li>

            </div>
            
            
          </ul>

        </div>
        <div className='md:ml-20 mt-10 md:mt-0'>
          <img src='/Whychooseus.svg' alt='Why Choose Us' className='w-full h-full object-cover'/>
          </div>
      </div>
    </section>
    <section className="w-full max-w-7xl py-10 mx-auto">
      {/* Our Approach Section */}
      <div className="bg-black text-white px-14 py-24 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl font-kumbh">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
          <p className="text-lg leading-relaxed text-gray-200">
            At Doelsoft, we work hand-in-hand with our clients, turning
            challenges into opportunities and ideas into impactful solutions.
            Whether you are a startup looking to launch your vision or an
            enterprise aiming to innovate, Doelsoft ensures your business stays
            ahead in today’s dynamic market.
          </p>
        </div>

        {/* Right Side Image / Illustration */}
        <div className="mt-8 lg:mt-0 lg:ml-12 flex items-center space-x-6">
          <img
            src="/illustration.svg"
            alt="Approach Illustration"
            className="max-w-sm"
          />
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="bg-red-600 text-white px-8 py-20 flex flex-col lg:flex-row items-center justify-between ">
        {/* Left Image */}
        
        
        {/* Right Content */}
        <div className="max-w-lg ml-96 font-kumbh">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg leading-relaxed">
            Transform your business with Doelsoft – technology, innovation, and
            strategic solutions across India and the USA.
          </p>
        </div>
      </div>
      <div className="px-10 relative w-full h-full z-20 top-7 bottom-0 ">
          <img
            src="/contact-lady.svg "
            alt="Contact Lady"
            className="w-96 h-96 absolute bottom-7"
          />
        </div>

    </section>
    
       <section
                    className="relative w-full  bg-cover bg-center text-center py-16   sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
                    style={{ backgroundImage: "url('/Background2.svg')",marginTop:"45px" } }
                  >
                    {/* Decorative Vectors */}
                    <img
                      src="/Vectors.svg"
                      alt="vector"
                      className="absolute left-6 sm:left-14 top-8 sm:top-10 h-20 sm:h-28 md:h-32 w-20 sm:w-28 md:w-32 object-contain opacity-70 z-30"
                    />
                    <img
                      src="/left.svg"
                      alt="left"
                      className="absolute left-10 sm:left-20 bottom-10 sm:top-72 w-3 sm:w-4 object-contain opacity-70 z-30"
                    />
                    <img
                      src="/right.svg"
                      alt="right"
                      className="absolute right-10 sm:right-40 lg:right-72 top-6 sm:top-12 w-10 sm:w-16 md:w-20 object-contain opacity-70 z-30"
                    />
                  
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/90"></div>
                  
                    {/* Main Content */}
                    <div className="relative max-w-3xl mx-auto text-white z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-7 md:space-y-8">
                      <h2 className="text-xl sm:text-2xl md:text-4xl font-kumbh font-light leading-snug px-2">
                        Let's Build the Future Together
                      </h2>
                  
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2">
                        Tells Us your goals.We'll design the runaway then deliver it with AI,Could and Data.
                      </p>
                  
                      <button className="flex items-center gap-2 bg-red-600 hover:bg-gray-600 text-white font-medium px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg  shadow-lg transition-all duration-300 ease-in-out">
                        Talk to an Expert{" "}
                        <ArrowUpRight
                          className="border border-white rounded-full p-1"
                          size={24}
                        />
                      </button>
                    </div>
                  </section>
       
       
       
      
    </div>
  )
}

export default Accessibility
