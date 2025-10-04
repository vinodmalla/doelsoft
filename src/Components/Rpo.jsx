import React from 'react'
import { ArrowUpRight } from 'lucide-react'

function Rpo() {
  return (
    <div  className="w-full min-h-screen font-kumbh space-y-6 mt-16 flex flex-col justify-end">
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
  <div className="relative z-10 flex-1 flex flex-col items-start justify-center text-center md:text-left">
      <h1 className="text-2xl font-semibold text-gray-800">Talent Hub</h1>
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-red-600 leading-snug mb-6">
      Permanent Hiring
    </h2>

    <button className="py-2 px-5 border border-black ml-[45px] md:ml-[9px]  text-black hover:bg-gray-200 transition-all duration-200 rounded-md">
      Consult With Us <span className="ml-2">↗</span>
    </button>
  </div>

  {/* Right Image */}
  <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
    <img
      src="/Carrers.svg"
      alt="Team"
      className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
    />
  </div>
</section>
       <section className="w-full bg-[#F4F6FB] py-12">
  <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
    
    {/* Text Content */}
    <div className="md:w-1/2">
      <h1 className="text-3xl font-kumbh text-black font-light">
        Permanent Hiring <span className="font-semibold">Building Your Core Team</span>
      </h1>
      <p className="text-gray-700 mt-4 leading-relaxed">
        Sustainable success comes from building a strong foundation of permanent talent. 
        Our hiring solutions go beyond resumes. We assess candidates for technical expertise, 
        cultural alignment, and long-term value to your organization.
      </p>

      <h2 className="text-xl font-semibold text-black mt-6">
        Why Doelsoft Stands Out:
      </h2>
      <ul className="space-y-3 mt-4">
        <li className="flex items-start">
          <img src="/logo4.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
          <span className="text-black">
            Talent mapping to identify the right fit, not just a quick match
          </span>
        </li>
        <li className="flex items-start">
          <img src="/logo4.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
          <span className="text-black">
            Emphasis on reducing attrition and wrong hires
          </span>
        </li>
        <li className="flex items-start">
          <img src="/logo4.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
          <span className="text-black">
            Focus on stability and leadership potential
          </span>
        </li>
        <li className="flex items-start">
          <img src="/logo4.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
          <span className="text-black">
            Proven success across industries in building high-performing teams
          </span>
        </li>
      </ul>

      {/* CTA Button */}
      <div className="mt-8">
        <a
          href="#"
          className="inline-block bg-[#E10000] text-white font-medium px-6 py-3 rounded-md hover:bg-red-600 transition"
        >
          Hire once, hire right with Doelsoft permanent staffing.
        </a>
      </div>
    </div>

    {/* Image */}
    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <img
        src="/permanent-hiring.jpg"
        alt="Smiling professional holding 'We Are Hiring' sign"
        className="w-full max-w-md h-auto object-contain"
      />
    </div>
  </div>
</section>
<section className="py-10 bg-[#F3F3F3] w-full max-w-[1440px] mt-[2px] min-h-[576px] text-start font-sans mx-auto px-4">
  <h1 className="text-3xl sm:text-4xl font-bold ml-4 sm:ml-10 text-black mb-4">
    Why Doelsoft?
  </h1>
  <p className="text-base sm:text-lg text-black ml-4 sm:ml-10 mb-10 max-w-3xl">
    When it comes to recruitment, we don't just deliver candidates we deliver confidence.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
    <div className="border border-black p-6 sm:p-10 w-full sm:w-[390px] h-auto sm:h-[255px] text-left bg-white">
      <img src={"./Tailored.svg"} alt="Tailored" className="w-10 h-10 mb-4" />
      <h3 className="text-lg font-bold mb-2">Tailored Approach</h3>
      <p>Every solution is designed to match your unique challenges.</p>
    </div>

    <div className="border border-black p-6 sm:p-10 w-full sm:w-[294px] h-auto sm:h-[255px] text-left bg-white">
      <img src={"./Unmatched.svg"} alt="Unmatched" className="w-10 h-10 mb-4" />
      <h3 className="text-lg font-bold mb-2">Unmatched Quality</h3>
      <p>Strict screening ensures only the best reach you.</p>
    </div>

    <div className="border border-black p-6 sm:p-10 w-full sm:w-[294px] h-auto sm:h-[255px] text-left bg-white">
      <img src={"./Precision.svg"} alt="Precision" className="w-10 h-10 mb-4" />
      <h3 className="text-lg font-bold mb-2">Speed with Precision</h3>
      <p>Fast closures without compromising fit.</p>
    </div>

    <div className="border border-black p-6 sm:p-10 w-full sm:w-[294px] h-auto sm:h-[255px] text-left bg-white">
      <img src={"./Partnership.svg"} alt="Partnership" className="w-10 h-10 mb-4" />
      <h3 className="text-lg font-bold mb-2">Long-Term Partnership</h3>
      <p>More than a vendor, we are your hiring ally.</p>
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

export default Rpo
