import React from 'react'
import { ArrowUpRight } from "lucide-react";

function MobileDevelopment() {
    const features = [
  {
    icon: '/p1.svg',
    title: 'Client-Centric Approach',
    description: 'We understand your business goals before coding begins.',
  },
  {
    icon: "/p2.svg",
    title: 'Agile & Transparent Process',
    description: 'Regular updates, flexibility, and faster delivery.',
  },
  {
    icon: '/p3.svg',
    title: 'Innovation-Driven',
    description: 'AI, IoT, Blockchain, AR/VR integrated into modern apps.',
  },
  {
    icon: '/p4.svg',
    title: 'Global Expertise',
    description: 'Serving startups, SMEs, and enterprises across the USA, India & worldwide.',
  },
  {
    icon: '/p5.svg',
    title: 'Proven Success',
    description: 'Apps delivered with millions of downloads and 5-star user ratings.',
  },
];
return (
    <div className="w-full font-kumbh bg-white mt-8">
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
                    Mobile App<br />
                    <span className="block mt-4">Development</span>
                </h2>
                <button className="py-2 px-4 border border-black text-black hover:bg-gray-200 w-max">
                    Consult With Us <span className="ml-2">↗</span>
                </button>
            </div>
            {/* Image Right */}
            <div className="absolute right-36 top-12 h-[432.87px] w-[506.26px] mr-10 flex items-end justify-end z-0">
                <img
                    src="/MobileDevelopment.svg"
                    alt="Team"
                    className="w-full h-full object-contain md:object-cover"
                    style={{ objectPosition: "right bottom" }}
                />
            </div>
        </section>
        <section className="mx-auto px-16 md:px-24 mt-4 py-20 bg-[#F4F6FB] grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-extralight text-black">
                    Doelsoft Mobile App Development <br /> Apps That Inspire Growtht
                </h2>
                <p className="text-black text-lg leading-relaxed">
                    In today’s digital-first world, your customers are on mobile and your business should be too. At Doelsoft,
                    a leading mobile app development company in the USA & India, we create mobile applications that are innovative,
                    scalable, and customer-centric.
                </p>
                <p className="text-black text-lg leading-relaxed">
                    From iOS and Android app development to cross-platform and enterprise mobility solutions, we bring together technology,
                    creativity, and strategy to deliver apps that help businesses grow and users stay engaged.
                </p>
            </div>
            <div className="flex justify-center">
                <img
                    src="MobileApp.svg"
                    alt="Custom Software"
                    className="max-w-sm w-auto h-auto p-4 "
                />
            </div>
        </section>
        <section className="mx-auto px-0 py-10 grid md:grid-cols-2 gap-10 items-center">
            <div className=''>
                <img src="Mobilemen.svg" alt="Business Team" className="w-full max-w-sm mx-auto" />
            </div>
            <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-kumbh font-extralight text-black">
                    🌟 Our Mobile App Development<br /> Expertise
                </h2>
                <div className="text-black text-lg leading-relaxed py-6">
                    {[
                        { src: "/m1.svg", title: "iOS App Development", desc: "Feature-rich apps optimized for iPhones, iPads, and Apple Watches with unmatched performance and design." },
                        { src: "/m2.svg", title: "Android App Development", desc: "Scalable, secure apps compatible across multiple devices and OS versions." },
                        { src: "/m3.svg", title: "Cross-Platform Development (Flutter & React Native)", desc: "Build once, deploy everywhere. Faster time-to-market and cost efficiency.\nFeature-rich apps optimized for iPhones,iPads, and Apple Watches with unmatched performance and design." },
                        { src: "/m4.svg", title: "Enterprise Mobility Solutions", desc: "Tailored apps that streamline operations, boost collaboration, and empower decision-making." },
                        { src: "/m5.svg", title: "UI/UX Design Excellence", desc: "Apps designed with accessibility, usability, and customer engagement at the core." },
                        { src: "/m6.svg", title: "App Maintenance & Suppor", desc: "Continuous updates, optimization, and technical support for seamless performance." },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-row gap-6 items-start mb-4">
                            <div className="border border-black p-2 flex items-center justify-center w-20 h-20 bg-white">
                                <img src={item.src} alt="" className="w-10 h-10 object-contain" />
                            </div>
                            <div className='ml-2'>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-gray-500 text-base whitespace-pre-line">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className='bg-[#F4F6FB] py-10'>
            <div className='px-16 md:px-20 space-y-4'>
                <h1 className='font-kumbh font-extralight text-4xl '>🏢 Industries We Serve</h1>
                <p className='text-gray-600'>Doelsoft has deep expertise in industry-specific mobile apps:</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 py-10 px-16 md:px-20 gap-6'>
                {[{src:"/ecommerce.svg", title:"E-commerce & Retail" ,desc:"Mobile shopping, AI recommendations, secure payments."},
                    {src:"/health_care.svg",title:"Healthcare Apps",desc:"Telemedicine, patient tracking, fitness solutions, HIPAA compliance."},
                    {src:"/finance.svg",title:"Banking & FinTech Apps",desc:"Digital wallets, investment platforms, secure payment gateways."},
                    {src:"/education.svg",title:"Education Apps",desc:"Online learning, gamified modules, live classes, progress tracking."},
                    {src:"/travel.svg",title:"Travel & Hospitality Apps",desc:"Bookings, loyalty programs, AR-based travel guides."},
                    {src:"/media.svg",title:"Media & Entertainment Apps",desc:"Streaming, gaming, social media, content sharing."},
                    {src:"/realestate.svg",title:"Real Estate Apps",desc:"Listings, virtual tours, intelligent property searches."},
                    {src:"/logistics.svg",title:"Logistics & Transportation Apps",desc:"Fleet management, GPS tracking, delivery solutions."}

                ].map((item, idx) => (<div
            key={idx}
            className="grid grid-cols-1 sm:grid-cols-2 items-center    hover:shadow-md transition"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="sm:pl-4 mt-4 sm:mt-0 border border-black h-40 p-8">
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          </div> ))}
            </div>

        </section>
        <section className='bg-white py-10' >
            <div>
                <h1 className='font-extralight font-kumbh text-4xl px-16 md:px-20 py-4'>👨‍💻 Our Talent Pool – Powered by Doelsoft Experts</h1>
                <p className='py-2 text-lg px-16 md:px-20'>Our skilled mobile app developers in the USA and India ensure every project is delivered with precision:</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-16 md:px-20'>
                {[{ src: "/t1.svg", desc: "Certified iOS & Android developers proficient in Swift, Kotlin, Java, React Native, and Flutter." },
                { src: "/t2.svg", desc: "Creative UI/UX designers focused on intuitive, engaging, and inclusive experiences." },
                { src: "/t3.svg", desc: "Dedicated QA testers ensuring bug-free, accessible, and performance-driven apps." },
                { src: "/t4.svg", desc: "Agile project managers delivering on-time, client-focused solutions." },
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-row  border border-white shadow-xl p-8 gap-6 ">
                        <img src={item.src} alt="" className="w-16 h-16 mb-4" />
                        <p className="text-black text-justify">{item.desc}</p>
                    </div>
                ))}
                </div>
        </section>
      <section className="px-6 md:px-16 pt-12 bg-[#F4F6FB] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-kumbh md:text-4xl font-extralight mb-8">
            💡 Why Partner with Doelsoft for Mobile App Development?
          </h1>
          
          <div className="space-y-6 ">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 ">
                <div className="border border-black p-2 flex items-center justify-center w-16 h-16 bg-white">
                    <img src={feature.icon} alt="" className="w-10 h-10 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 max-w-md pt-60 md:mx-0">
          <img
            src='/youngmen.svg'
            alt="Man holding toy plane"
            className="w-full h-auto object-cover  "
          />
        </div>

      </div>
    </section>
       

         <section
        className="relative bg-cover bg-center text-center  sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundImage: "url('/Background2.svg')" }}

      >
        <div>
            <img src="/vectors.svg" alt="" className="absolute left-14 top-10 h-32 w-32 object-cover object-top opacity-70 z-30" />
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
           🌍 Build Your Mobile Future with Doelsoft
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

export default MobileDevelopment
