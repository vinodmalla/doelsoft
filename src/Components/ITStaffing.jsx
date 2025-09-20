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
    <div>
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
       <section className="py-10 bg-[#F3F3F3] w-[#1440px] h-[#576px] text-start  font-sans">
            <h1 className="text-4xl font-bold ml-10 text-black mb-4">
              Why Doelsoft?
            </h1>
            <p className="text-lg text-black ml-10 mb-10 max-w-3xl mx-auto">
              When it comes to recruitment, we don't just deliver candidates we deliver confidence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="border border-black p-10 w-[#390px] h-[#255px]  text-left">
                <img src={"./Tailored.svg"} className="w-10 h-10 mb-4" />{/* Replace with actual icon, e.g., from react-icons */}
                <h3 className="text-lg font-bold mb-2">
                  Tailored Approach
                </h3>
                <p>Every solution is designed to match your unique challenges.</p>
              </div>
              <div className="border border-black p-10 w-[#294px] h-[#255px] text-left">
                 <img src={"./Unmatched.svg"} className="w-10 h-10 mb-4" /> {/* Replace with checkmark icon */}
                <h3 className="text-lg font-bold mb-2">
                  Unmatched Quality
                </h3>
                <p>Strict screening ensures only the best reach you.</p>
              </div>
              <div className="border border-black   p-10 w-[#294px] h-[#255px] text-left">
                  <img src={"./Precision.svg"} className="w-10 h-10 mb-4" />{/* Replace with target icon */}
                <h3 className="text-lg font-bold mb-2">
                  Speed with Precision
                </h3>
                <p>Fast closures without compromising fit.</p>
              </div>
              <div className="border border-black p-10 w-[#294px] h-[#255px]  text-left">
                 <img src={"./Partnership.svg"} className="w-10 h-10 mb-4" /> {/* Replace with handshake icon */}
                <h3 className="text-lg font-bold mb-2">
                  Long-Term Partnership
                </h3>
                <p>More than a vendor, we are your hiring ally.</p>
              </div>
            </div>
          </section>
           <section
                  className="relative bg-cover bg-center text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
                  style={{
                    backgroundImage: "url('/Background2.svg')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-red-900/60"></div>
                  <div className="relative max-w-3xl mx-auto text-white z-10 space-y-6 sm:space-y-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
                      Let’s Build the Future Together
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                      Tell us your goals. We’ll design the runway then deliver it with AI,
                      Cloud & Data.
                    </p>
                    <button className="flex items-center gap-2 bg-red-600 hover:bg-gray-600 text-white font-semibold px-6 sm:px-8 py-4  text-base sm:text-lg shadow-lg transition justify-center mx-auto">
                      Talk to an Expert <ArrowUpRight size={20} />
                    </button>
                  </div>
                </section>
                


    
    </div>
  )
}

export default ITStaffing

