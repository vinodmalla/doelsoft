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
     <h1 className="text-lg md:text-xl font-semibold text-gray-800">Talent Hub</h1>
        <h2 className="text-3xl md:text-5xl font-bold text-red-600 mt-2">IT Staffing Solutions</h2>

    <button className="py-2 px-5 border border-black ml-[53px] md:ml-[9px]  text-black hover:bg-gray-200 transition-all duration-200">
      Consult With Us <span className="ml-2">↗</span>
    </button>
  </div>

  {/* Right Image */}
  <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
    <img
    src="/ITStaffing.svg" 
      alt="Team"
      className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
    />
  </div>
</section>
    <section className="w-full mx-auto bg-black px-4 sm:px-6 lg:px-8 py-12">
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto items-center lg:items-start">
    
    {/* Left Content */}
    <div className="ml-0 sm:ml-8 space-y-6 text-center lg:text-left">
      <h1 className="text-white text-2xl sm:text-3xl">
        IT Staffing Solutions <br className="hidden sm:block" /> Powering Your Digital Growth
      </h1>

      <p className="text-white text-sm sm:text-base leading-relaxed">
        The IT landscape evolves at lightning speed. To stay ahead, you need
        <br className="hidden sm:block" /> professionals who can adapt, innovate, and deliver. At DoelSoft, we connect you
        <br className="hidden sm:block" /> with experts who bring both technical excellence and a problem-solving mindset.
      </p>

      <h2 className="text-white text-xl sm:text-2xl">Why Choose DoelSoft IT Staffing?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center lg:justify-items-start">
        {Staffing.map((item, index) => (
          <div
            key={index}
            className="border border-black p-6 sm:p-8 md:p-10 w-64 sm:w-72 h-auto sm:h-56 bg-red-600 flex flex-col items-center text-center sm:text-left"
          >
            <img src={item.img} alt="icon" className="w-12 h-12 object-contain" />
            <p className="text-white py-6 sm:py-10 text-sm sm:text-base">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center lg:justify-start">
        <button className="mt-6 px-8 sm:px-24 md:px-36 py-3 sm:py-4 border border-white text-white hover:bg-gray-200 hover:text-black text-sm sm:text-base">
          Build your next-gen IT Team with DoelSoft. ↗
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full h-auto md:w-1/2  mt-[100px] l-0 lg:ml-20 flex justify-center lg:justify-end">
      <img
        src="/Image1.svg"
        alt="ITStaffing"
        className="w-full h-full max-w-screen-2xl object-contain"
      />
    </div>
  </div>
</section>

   <div className="p-6 sm:p-8 md:p-10 lg:p-12 ml-4 sm:ml-8 md:ml-10">
  <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
    Our Core Values at Doelsoft
  </h1>

  <p className="text-black mb-6 text-sm sm:text-base text-center md:text-left">
    At Doelsoft, we don't just fill roles — we build partnerships that fuel growth. Every staffing solution we provide, whether
    contract, permanent, offshore, or nearshore, is anchored in our unwavering core values. These principles guide us in creating
    meaningful connections between businesses and talent, ensuring trust, success, and long-term impact.
  </p>

  <div className="space-y-6 ml-0 sm:ml-6 md:ml-14">
    {/* Trustworthy */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img src={"./Trustworthy.svg"} className="w-10 h-10 p-1 border border-black mx-auto sm:mx-0" alt="Trustworthy" />
      <div>
        <h3 className="text-black text-lg font-semibold text-center sm:text-left">
          Trustworthy — Dependable in Every Step
        </h3>
        <p className="text-black text-sm sm:text-base text-center sm:text-left">
          Your trust is our greatest responsibility. At Doelsoft, a promise is never taken lightly — we deliver on time, every
          time. From urgent contract needs to building long-term teams, our clients rely on us because we consistently keep our
          word and stand by our commitments.
        </p>
      </div>
    </div>

    {/* Stewardship */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img src={"./Stewardship.svg"} className="w-10 h-10 mx-auto p-1 border border-black sm:mx-0" alt="Stewardship" />
      <div>
        <h3 className="text-black text-lg font-semibold text-center sm:text-left">
          Stewardship — Taking Responsibility, Driving Results
        </h3>
        <p className="text-black text-sm sm:text-base text-center sm:text-left">
          We see ourselves as stewards of your vision. That means taking ownership of every process and outcome — whether sourcing
          exceptional permanent hires or managing offshore teams. Through proactive solutions and transparent communication, we
          safeguard your goals as if they were our own.
        </p>
      </div>
    </div>

    {/* Credibility */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img src={"./Credibility.svg"} className="w-10 h-10 mx-auto p-1 border border-black sm:mx-0" alt="Credibility" />
      <div>
        <h3 className="text-black text-lg font-semibold text-center sm:text-left">
          Credibility — Trust Built on Action
        </h3>
        <p className="text-black text-sm sm:text-base text-center sm:text-left">
          In today's competitive staffing landscape, credibility is everything. At Doelsoft, we back our words with consistent
          action. Every decision, placement, and engagement is grounded in honesty, fairness, and reliability — so you can count on
          us to be a partner you trust, time after time.
        </p>
      </div>
    </div>

    {/* Respect */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img src={"./Respect.svg"} className="w-10 h-10 mx-auto p-1 border border-black sm:mx-0" alt="Respect" />
      <div>
        <h3 className="text-black text-lg font-semibold text-center sm:text-left">
          Respect — People First, Always
        </h3>
        <p className="text-black text-sm sm:text-base text-center sm:text-left">
          Behind every role is a person, and behind every business is a vision. We honor both. With humility and empathy, we treat
          every candidate and client as partners in success. Our respectful approach creates inclusive environments where diverse
          talent thrives and collaboration flourishes.
        </p>
      </div>
    </div>

    {/* Result-Oriented */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img src={"./Respect.svg"} className="w-10 h-10 mx-auto p-1 border border-black sm:mx-0" alt="Result-Oriented" />
      <div>
        <h3 className="text-black text-lg font-semibold text-center sm:text-left">
          Result-Oriented — Excellence You Can Measure
        </h3>
        <p className="text-black text-sm sm:text-base text-center sm:text-left">
          We don't just promise results — we deliver them. With strong processes, proven methodologies, and decades of experience,
          we provide reliable outcomes that give you a competitive edge. Every staffing solution is designed to add measurable
          value to your business.
        </p>
      </div>
    </div>
  </div>

  <div className="mt-6 p-6 sm:p-8 bg-red-600 text-white text-center ">
    <p className="text-sm sm:text-base leading-relaxed">
      At Doelsoft, our values are not just words — they are the foundation of every decision, every interaction, and every success
      story we help create. Partner with us, and let's build not just your team, but your future.
    </p>
  </div>
</div>


           <section
             className="relative w-full  bg-cover bg-center text-center py-16   sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
             style={{ backgroundImage: "url('/Background2.svg')",marginTop:"50px" } }
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
                 🌍  Build a <span className="font-semibold">Connected Future</span> with Doelsoft
               </h2>
           
               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2">
                 👉 Partner with Doelsoft – Your trusted iOS & Android app development company in the USA & India.
               </p>
           
               <button className="flex items-center gap-2 bg-red-600 hover:bg-gray-600 text-white font-medium px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg shadow-lg transition-all duration-300 ease-in-out">
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

