import React from 'react'
import { ArrowUpRight } from "lucide-react"; // for arrow icons

function ITStaffing() {
       const Staffing=[{
        img:"/Staffing1.svg",
        desc:"Access to a diverse pool of top IT professionals across lastest technologies."
    },{
        img:"/Staffing3.svg",
        desc:"Abbility to close niche and highly specialized roles with speed."
    },{
        img:"/Staffing4.svg",
        desc:"Scalable solutions for Startups,SMEs and Enterprises alike."
    },{
        img:"./Staffing5.svg",
        desc:"A balance of speed,quality and long-term fit."
    }]
  return (
    <div className="w-full min-h-screen font-kumbh space-y-6 mt-16 flex flex-col justify-end">
        <section className="relative w-full h-full  mt-12  py-20 flex flex-col  overflow-hidden">
             <div
  className="absolute bg-cover bg-center inset-0 "
  style={{ backgroundImage: "url('/worldmap.svg')" }}
></div>
      <div className="ml-28 space-y-14 z-10">
        <h1 className="text-2xl font-semibold text-gray-800">Talent Hub</h1>
        <h2 className="text-6xl font-bold text-red-600 mt-2">IT Staffing Solutions</h2>
        <button className="mt-6 px-6 py-2 border border-black text-black hover:bg-gray-200">
          Consult With Us <span className="ml-2">➔</span>
        </button>
      </div>
      <div className="absolute  right-20 top-6 w-96 h-72 overflow-hidden">
        <img
          src="/ITStaffing.svg" 
          alt="Team"
          className="w-auto h-full object-cover"
        />
      </div>
    </section>
    <section className=" w-full mx-auto bg-black px-4  sm:px-6 lg:px-8 py-12">
        <div  className='flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto'>
               <div className='ml-8 space-y-6'>
            <h1 className='text-white text-3xl'>IT Staffing Solutions <br/> Powering Your Digital Growth </h1>
            <p className='text-white'>The IT landscape evolves at lightning Speed.To Stay ahead,you need<br/>professionals who can adapt ,innovate, and deliver.At DoelSoft,we connect you<br/>
            with experts who bring both technical excellence and problem-solving mindset.</p>
            <h2 className='text-white text-2xl'>Why Choose DoelSoft IT Staffing ? </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
                {Staffing.map((item, index) => (
                    <div key={index} className=" border border-black p-10 w-72 h-56 bg-red-600">
                        <img src={item.img} alt="icon" className='' />
                        <p className='text-white py-10 '>{item.desc}</p>
                    </div>
                ))}
            </div>
            <button className="mt-6 px-36 py-4 border text-start border-white text-white hover:bg-gray-200 hover:text-black">Build your next-gen IT Team with DoelSoft. ↗</button>
        </div>
        <div className='w-auto h-auto ml-20' >
            <img src="/Image1.svg" alt="ITStaffing" className='w-full h-full object-cover'/>
        </div>
        </div>
     
      </section>
   <section className="w-full">
  <div className="p-6 sm:p-8 md:p-10 md:ml-10 relative">
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
      Key Benefits We Deliver
    </h1>

    <div className="space-y-6 md:ml-14">
      {/* Card 1 */}
      <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4 rounded-lg shadow-sm">
        <img
          src="./Trustworthy.svg"
          className="w-10 h-10 border border-black flex-shrink-0"
          alt="Client-Centric Approach"
        />
        <div>
          <h3 className="text-black text-lg font-semibold">
            Client-Centric Approach
          </h3>
          <p className="text-black text-sm sm:text-base">
            We collaborate deeply with each client to understand their unique
            requirements and deliver solutions that drive measurable results.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4 rounded-lg shadow-sm">
        <img
          src="./Stewardship.svg"
          className="w-10 h-10 border border-black flex-shrink-0"
          alt="Stewardship"
        />
        <div>
          <h3 className="text-black text-lg font-semibold">
            Stewardship Taking Responsibility, Driving Results
          </h3>
          <p className="text-black text-sm sm:text-base">
            Leveraging the latest technologies to provide scalable, secure, and
            high-quality services.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4 rounded-lg shadow-sm relative">
        <img
          src="./Credibility.svg"
          className="w-10 h-10 border border-black flex-shrink-0"
          alt="Dedicated Expert Team"
        />
        <div>
          <h3 className="text-black text-lg font-semibold">
            Dedicated Expert Team
          </h3>
          <p className="text-black text-sm sm:text-base">
            In today’s competitive staffing landscape, credibility is everything.
            At Doelsoft, we back our words with consistent action. <br />
            Every decision, every placement, and every engagement is grounded in
            honesty, fairness, and reliability <br />
            so you can count on us to be a partner you trust, time after time.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4 rounded-lg shadow-sm relative">
        <img
          src="./Respect.svg"
          className="w-10 h-10 border border-black flex-shrink-0"
          alt="Global Delivery"
        />
        <div>
          <h3 className="text-black text-lg font-semibold">Global Delivery</h3>
          <p className="text-black text-sm sm:text-base">
            Serving clients across India, the USA, and worldwide, with flexible
            engagement models.
          </p>
        </div>
        <img
          src="/Choose3.svg"
          alt="Expert Team"
          className="absolute md:right-[-20px] right-0 top-[50%] -translate-y-1/2 w-40 sm:w-60 md:w-80 object-contain hidden md:block"
        />
      </div>

      {/* Card 5 */}
      <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4 rounded-lg shadow-sm">
        <img
          src="./Respect.svg"
          className="w-10 h-10 border border-black flex-shrink-0"
          alt="Holistic Business Growth"
        />
        <div>
          <h3 className="text-black text-lg font-semibold">
            Holistic Business Growth
          </h3>
          <p className="text-black text-sm sm:text-base">
            Strategies and solutions designed to enhance efficiency,
            productivity, and market competitiveness.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


           <section
            className="relative w-full  bg-cover bg-center text-center py-16   sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{ backgroundImage: "url('/Background2.svg')",marginTop:"45px" } }
          >
            {/* Decorative Vectors */}
            <img
              src="/Vectors.svg"
              alt=""
              className="absolute left-6 sm:left-14 top-8 sm:top-10 h-20 sm:h-28 md:h-32 w-20 sm:w-28 md:w-32 object-contain opacity-70 z-30"
            />
            <img
              src="/left.svg"
              alt=""
              className="absolute left-10 sm:left-20 bottom-10 sm:top-72 w-3 sm:w-4 object-contain opacity-70 z-30"
            />
            <img
              src="/right.svg"
              alt=""
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
          
              <button className="flex items-center gap-2 bg-red-600 hover:bg-gray-600 text-white font-medium px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-md shadow-lg transition-all duration-300 ease-in-out">
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

export default ITStaffing

