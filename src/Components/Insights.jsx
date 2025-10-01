import React from 'react'
import { ArrowUpRight } from 'lucide-react';

function Insights() {
     const insights = [
  {
    img: "/Client1.svg", // replace with your image
    client: "Client Name",
    title: "Top AI Consulting Trends 2025",
    desc: "What matters now and how leaders can build durable advantage.",
  },
  {
    img: "/client2.svg",
    client: "Client Name",
    title: "AI-Powered Software Development",
    desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
  },{
    img: "/Client1.svg", // replace with your image
    client: "Client Name",
    title: "Top AI Consulting Trends 2025",
    desc: "What matters now and how leaders can build durable advantage.",
  },
  {
    img: "/client2.svg",
    client: "Client Name",
    title: "AI-Powered Software Development",
    desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
  },{
    img: "/Client1.svg", // replace with your image
    client: "Client Name",
    title: "Top AI Consulting Trends 2025",
    desc: "What matters now and how leaders can build durable advantage.",
  },
  {
    img: "/client2.svg",
    client: "Client Name",
    title: "AI-Powered Software Development",
    desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
  },{
    img: "/Client1.svg", // replace with your image
    client: "Client Name",
    title: "Top AI Consulting Trends 2025",
    desc: "What matters now and how leaders can build durable advantage.",
  },
  {
    img: "/client2.svg",
    client: "Client Name",
    title: "AI-Powered Software Development",
    desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
  },{
    img: "/Client1.svg", // replace with your image
    client: "Client Name",
    title: "Top AI Consulting Trends 2025",
    desc: "What matters now and how leaders can build durable advantage.",
  },
  {
    img: "/client2.svg",
    client: "Client Name",
    title: "AI-Powered Software Development",
    desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
  },{
    img: "/Client1.svg", // replace with your image
    client: "Client Name",
    title: "Top AI Consulting Trends 2025",
    desc: "What matters now and how leaders can build durable advantage.",
  },
  {
    img: "/client2.svg",
    client: "Client Name",
    title: "AI-Powered Software Development",
    desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
  },
 
];
  return (
    <div className="relative max-w-screen mx-auto font-kumbh bg-white mt-8">
         <section
            className="relative w-full h-auto min-h-[550px] flex flex-col md:flex-row items-end overflow-hidden py-10"
            style={{
                backgroundImage: "url('/worldmap.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        > 
            {/* Content Left */}
            <div className="relative z-10 flex-1 flex flex-col justify-end pl-28 bottom-48">
                <h2 className="text-6xl gap-6 font-semibold text-red-600 mb-8">
                    DoelSoft Insights & <br />
                    <span className="block mt-4">Leadership</span>
                </h2>
                <button className="py-2 px-4 border border-black text-black hover:bg-gray-200 w-max">
                    Consult With Us <span className="ml-2">↗</span>
                </button>
            </div>
            {/* Image Right */}
            <div className="absolute right-36 top-12 h-[432.87px] w-[506.26px] mr-10 flex items-end justify-end z-0">
                <img
                    src="/Digitalaccessibility.svg"
                    alt="Team"
                    className="w-full h-full object-contain md:object-cover"
                    style={{ objectPosition: "right bottom" }}
                />
            </div>
        </section>
        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {insights.map((item, i) => (
            <div
              key={i}
              className="relative  shadow-lg group h-64 sm:h-[416px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1E1E1E]  text-white p-6 sm:p-6">
                <p className="text-xs sm:text-sm text-gray-300">{item.client}</p>
                <h3 className="text-base sm:text-lg font-semibold mt-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">{item.desc}</p>
                <button className="mt-3 ml-96 p-2 rounded-full bg-[#1E1E1E] hover:bg-white/20 transition">
                  <ArrowUpRight
                    className="border border-white rounded-full text-center"
                    size={24}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
       <section
              className="relative bg-cover bg-center text-center mt-6  sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
              style={{ backgroundImage: "url('/Background2.svg')" }}
      
            >
              <div>
                  <img src="/Vectors.svg" alt="" className="absolute left-14 top-10 h-32 w-32 object-cover object-top opacity-70 z-30" />
              </div>
              <div>
                  <img src="/left.svg" alt="" className="absolute left-20 top-72   w-4 object-cover object-left opacity-70 z-30" />
              </div>
              <div>
                  <img src="/right.svg" alt="" className="absolute right-96 top-12  w-20 object-cover object-right opacity-70 z-30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/90"></div>
              <div className="relative max-w-3xl mx-auto text-white z-10 space-y-6 sm:space-y-8">
                <h2 className="text-2xl  font-kumbh  md:text-4xl font-extralight leading-tight">
                 🌍 Build a Connected Future with Doelsoft
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                 👉 Partner with Doelsoft – Your trusted iOS & Android app development company in the USA & India.
                </p>
                <button className="flex items-center gap-2 bg-red-600 hover:bg-gray-600 text-white font-light px-6 sm:px-8 py-4 text-base sm:text-lg shadow-lg transition justify-center mx-auto">
                  Talk to an Expert{" "}
                  <ArrowUpRight
                    className="border border-white rounded-full text-center"
                    size={24}
                  />
                </button>
              </div>
            </section>
      
    </div>
  )
}

export default Insights
