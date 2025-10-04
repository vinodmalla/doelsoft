import React from "react";
import { ArrowUpRight } from "lucide-react";

function Insights() {
  const insights = [
    {
      img: "/Client1.svg",
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
    {
      img: "/Client1.svg",
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
    {
      img: "/Client1.svg",
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
    {
      img: "/Client1.svg",
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
    {
      img: "/Client1.svg",
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
    {
      img: "/Client1.svg",
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
      {/* SECTION 1: Header with background */}
      <section
        className="relative w-full h-auto min-h-[550px] flex flex-col md:flex-row items-end overflow-hidden py-10"
        style={{
          backgroundImage: "url('/worldmap.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left content */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pl-4 sm:pl-8 md:pl-28 md:bottom-48 text-center md:text-left px-4">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-semibold text-red-600 mb-6 md:mb-8 leading-snug">
            DoelSoft Insights & <br />
            <span className="block mt-4">Leadership</span>
          </h2>
          <button className="py-2 px-6 border border-black text-black hover:bg-gray-200 w-max mx-auto md:mx-0 text-sm sm:text-base">
            Consult With Us <span className="ml-2">↗</span>
          </button>
        </div>

        {/* Right image */}
        <div className="absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-36 top-6 md:top-12 h-[200px] sm:h-[320px] md:h-[432.87px] w-[260px] sm:w-[400px] md:w-[506.26px] flex items-end justify-end z-0">
          <img
            src="/Digitalaccessibility.svg"
            alt="Team"
            className="w-full h-full object-contain md:object-cover"
            style={{ objectPosition: "right bottom" }}
          />
        </div>
      </section>

      {/* SECTION 2: Insights grid */}
      <section className="px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {insights.map((item, i) => (
            <div
              key={i}
              className="relative shadow-lg group h-auto sm:h-[380px] md:h-[416px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 sm:h-60 md:h-60 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1E1E1E] text-white p-4 sm:p-6">
                <p className="text-xs sm:text-sm text-gray-300">{item.client}</p>
                <h3 className="text-base sm:text-lg font-semibold mt-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex justify-end mt-3">
                  <button className="p-2 rounded-full bg-[#1E1E1E] hover:bg-white/20 transition">
                    <ArrowUpRight
                      className="border border-white rounded-full text-center"
                      size={22}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CTA Banner */}
       <section
                    className="relative bg-cover bg-center text-center  sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
                      Let’s Build the Future Together
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
  );
}

export default Insights;
