import React from 'react'
import { ArrowUpRight } from 'lucide-react'

function Executive() {
  const features = [
    {
      icon: "/Ex1.svg",
      title: "Global network of CXOs, VPs, and senior executives",
    },
    {
      icon: "/Ex2.svg",
      title: "Confidential and precise headhunting approach",
    },
    {
      icon: "/Ex3.svg",
      title: "Rigorous evaluation of leadership competencies and cultural fit",
    },
    {
      icon: "/Ex4.svg",
      title: "Consistent delivery of high-impact leaders for critical roles",
    },
  ];
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
     <div className="relative z-10 flex-1 flex flex-col items-start justify-center space-y-6 text-center md:text-left">
      <h1 className="text-lg md:text-xl font-semibold text-gray-800">Talent Hub</h1>
    <h2 className="text-3xl md:text-5xl font-bold text-red-600 mt-2">
      Excutive Search
    </h2>

    <button className="py-2 px-5 border border-black ml-[45px] md:ml-[9px]  text-black hover:bg-gray-200 transition-all duration-200 ">
      Consult With Us <span className="ml-2">↗</span>
    </button>
  </div>

  <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
    <img
      src="/excutive.svg"
      alt="Team"
      className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
    />
  </div>
</section>
<section
      className="relative bg-cover bg-center py-20 px-6 md:px-12 lg:px-24"
      style={{ backgroundImage: "url('/Ex_back.svg')" }} // Replace with your background image path
    >
      <div className="max-w-6xl mx-auto text-center text-black">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Executive Search Finding Leaders Who Inspire
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Every successful business is led by visionary leaders. Through our
          executive search practice, we identify and secure top-tier leaders who
          can set strategy, drive growth, and inspire performance across your
          organization.
        </p>

        {/* Why Clients Trust Section */}
        <h3 className="text-2xl font-semibold mb-8">
          Why Clients Trust Doelsoft for Leadership Hiring:
        </h3>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="border rounded-md bg-white hover:shadow-lg transition p-6 flex flex-col items-center text-center"
            >
              <img src={item.icon} alt={item.title} className="w-10 h-10 mb-4" />
              <p className="text-gray-700 text-sm md:text-base font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-none flex items-center gap-2 hover:bg-gray-900 transition">
            Secure leaders who define the future with Doelsoft.
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
<section
            className="relative w-full  bg-cover bg-center text-center py-16  sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{ backgroundImage: "url('/Background2.svg')",marginTop:"2px" } }
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

export default Executive
