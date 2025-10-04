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

