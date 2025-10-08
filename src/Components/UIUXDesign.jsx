import React from 'react'
import { ArrowUpRight } from "lucide-react";

function UIUXDesign() {
    const features = [
        {
            icon: '/p1.svg',
            title: 'User-Centric Approach',
            description: 'Designs are rooted in research, user behavior, and business objectives.',
        },
        {
            icon: "/p3.svg",
            title: 'Cross-Platform Expertise',
            description: 'Seamless experiences for web, mobile, and enterprise applications.',
        },
        {
            icon: '/p2.svg',
            title: 'Agile & Iterative Process',
            description: 'Continuous feedback, rapid prototyping, and design refinement.From API strategy to system connectivity and support.',
        },
        {
            icon: '/p4.svg',
            title: 'Innovation-Focused',
            description: 'Incorporating the latest trends in UI, UX, AR/VR, and interactive design.',
        },
        {
            icon: '/p5.svg',
            title: 'Global Delivery Model',
            description: 'Serving clients across the USA, India, and worldwide.',
        },
        {
            icon: '/p6.svg',
            title: 'Proven Success',
            description: 'Designed interfaces that increase engagement, retention, and conversions.',
        },
    ];

    return (
        <div className="w-full font-kumbh bg-white mt-8">
            
            {/* Hero Section */}
            <section
                className="relative w-full min-h-[550px] flex flex-col md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
                style={{
                    backgroundImage: "url('/worldmap.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="relative z-10 flex-1 flex flex-col space-y-6 items-start justify-center text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-red-600 leading-snug mb-6">
                        UI/UX Design <br className="hidden sm:block" />
                        <span className="block mt-2"> Services</span>
                    </h2>

                    <button className="py-2 px-5 border border-black ml-[45px] md:ml-[9px] text-black hover:bg-gray-200 transition-all duration-200 ">
                        Consult With Us <span className="ml-2">↗</span>
                    </button>
                </div>

                <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
                    <img
                        src="/UIUX.svg"
                        alt="MuleSoft"
                        className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
                    />
                </div>
            </section>

        

            {/* Services Section */}
           <section className="container mx-auto px-6 sm:px-10 lg:px-20 py-12 grid gap-10 md:grid-cols-2 items-center">
        {/* Left Image */}
       

        {/* Right Content */}
        <div className="space-y-8">
          <h2 className="text-3xl ml-10 sm:text-4xl font-extralight text-black leading-tight text-center md:text-left">
            🌟 Our UI/UX Design Services
          </h2>

          <div className="space-y-6 ml-10">
            {[
              {
                src: "/m1.svg",
                title: "MuleSoft Consulting",
                desc: "Strategy, architecture, and roadmap for enterprise integration.",
              },
              {
                src: "/m2.svg",
                title: "API Design & Development",
                desc: "Building secure, reusable, and scalable APIs.",
              },
              {
                src: "/m3.svg",
                title: "MuleSoft Implementation",
                desc: "End-to-end deployment of MuleSoft Anypoint solutions.",
              },
              {
                src: "/m4.svg",
                title: "System Integration",
                desc: "Connect ERP, CRM, databases, cloud platforms, and SaaS applications.",
              },
              {
                src: "/m5.svg",
                title: "MuleSoft Migration",
                desc: "Move from legacy integration solutions to modern MuleSoft architecture.",
              },
              {
                src: "/m6.svg",
                title: "Support & Maintenance",
                desc: "Continuous monitoring, optimization, and issue resolution.",
              },
              {
                src: "/m7.svg",
                title: "Custom Connectors & Extensions",
                desc: "Build connectors tailored to your unique business systems.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-4 items-start"
              >
                <div className="flex-shrink-0 bg-white border border-gray-300 p-4 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mx-auto sm:mx-0">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
         <div className="flex justify-center md:justify-start">
          <img
            src="/UIUXmen.svg"
            alt="UIUX Developer"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </section>
              <section className="bg-[#F4F6FB] py-10">
        <div className="px-6 sm:px-12 md:px-20 text-center md:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extralight">🏢 Industries We Serve</h1>
          <p className="text-gray-600">Doelsoft provides UI/UX design services for diverse industries, tailoring experiences to specific user needs:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-6 sm:px-12 md:px-20 gap-6">
          {[
            { src: '/ecommerce.svg', title: 'E-Commerce & Retail', desc: 'Engaging shopping journeys, personalized interfaces, and smooth checkout processes.' },
            { src: '/health_care.svg', title: 'Healthcare & Life Sciences', desc: 'Patient portals, telehealth platforms, and intuitive wellness apps.' },

            { src: '/finance.svg', title: 'Banking & FinTech', desc: 'Secure, user-friendly dashboards, transaction flows, and customer interfaces.' },
            { src: '/education.svg', title: 'Education & E-Learning', desc: 'Interactive learning experiences, gamified modules, and student portals.' },
            { src: '/travel.svg', title: 'Travel & Hospitality', desc: 'Booking platforms, itinerary planners, and immersive customer experiences.' },
            {src:"/media.svg",title:"Media & Entertainment Apps",desc:"Streaming, gaming, social media, content sharing."},
            { src: '/realestate.svg', title: 'Real Estate', desc: 'Virtual tours, property searches, and interactive listing experiences.' },
            {src:"/enterprise.svg",title:"Enterprisce Software",desc:"Dashboards, analytics tools, and productivity platforms with intuitive navigation."},
          ].map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-2 items-center hover:shadow-md transition"
            >
              <img src={item.src} alt={item.title} className="w-full h-40 object-cover" />
              <div className="sm:pl-4 mt-4 sm:mt-0 border border-black h-40 p-4 sm:p-8 text-center sm:text-left">
                <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className="bg-white py-12">
        <div className="text-center px-6 sm:px-10 md:px-20 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extralight mb-4">
           👨‍💻 Doelsoft MuleSoft Talent Pool

          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            Our team ensures every integration project delivers efficiency and scalability:

          </p>
        </div>

        <div className="container mx-auto px-6 sm:px-10 md:px-20 grid gap-6 sm:grid-cols-2">
          {[
            { src: "/t1.svg", desc: "Experienced UI Designers creating visually engaging interfaces." },
            { src: "/t2.svg", desc: "Skilled UX Designers focusing on usability, accessibility, and intuitive flows." },
            { src: "/t3.svg", desc: "Interaction & Motion Designers enhancing engagement with micro-interactions." },
            { src: "/t4.svg", desc: "Prototyping & Testing Specialists ensuring designs meet user expectations." },
            { src: "/w4.svg", desc: "User Researchers & Analysts gathering actionable insights to optimize experiences." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 bg-white border border-gray-200 shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.src}
                alt=""
                className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 mx-auto sm:mx-0"
              />
              <p className="text-gray-800 text-base sm:text-lg text-center sm:text-left">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

            {/* Why Choose Section */}
          
            <section className="bg-[#F4F6FB] py-12 px-6 sm:px-10 lg:px-20 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extralight mb-6 text-center md:text-left">
              💡 Why Choose Doelsoft for UI/UX Design?
            </h1>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-4 p-4 "
                >
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-white bg-white mx-auto sm:mx-0">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-semibold text-black">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/UIUXp.svg"
              alt="Mulesoft Professional"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

            {/* CTA Section */}
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

export default UIUXDesign
