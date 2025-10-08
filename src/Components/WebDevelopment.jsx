import React from 'react';
import { ArrowUpRight } from 'lucide-react';

function WebDevelopment() {
  const features = [
    {
      icon: '/p1.svg',
      title: 'Client-Centric Approach',
      description: 'We prioritize your goals and user experience to craft tailored solutions.',
    },
    {
      icon: '/p2.svg',
      title: 'Agile & Transparent Process',
      description: 'Faster delivery with consistent feedback, flexibility, and collaboration.',
    },
    {
      icon: '/p3.svg',
      title: 'Cutting-Edge Technologies',
      description: 'Built using React, Angular, Node.js, PHP, and more modern frameworks.',
    },
    {
      icon: '/p4.svg',
      title: 'Global Delivery Model',
      description: 'Serving clients across the USA, India, UAE, and beyond with excellence.',
    },
    {
      icon: '/p5.svg',
      title: 'Proven Results',
      description: 'High-performance websites driving engagement, conversions, and ROI.',
    },
  ];

  return (
    <div className="w-full font-kumbh bg-white mt-8 overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[550px] flex flex-col md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
        style={{
          backgroundImage: "url('/worldmap.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Left Content */}
        <div className="relative z-10 flex-1 flex flex-col space-y-6 items-start justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-red-600 leading-snug mb-6">
            Web Design <br className="hidden sm:block" />
            <span className="block mt-2">& Development</span>
          </h2>
          <button className="py-2 px-5 border border-black mx-auto md:mx-0 text-black hover:bg-gray-200 transition-all duration-200">
            Consult With Us <span className="ml-2">↗</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
          <img
            src="/WebDevelopment.svg"
            alt="Web Development"
            className="w-64 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      {/* Crafting Websites Section */}
      <section className="mx-auto px-6 sm:px-12 md:px-24 py-16 bg-[#F4F6FB] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-extralight text-black">
            🚀 Doelsoft Web Development <br /> Crafting Websites That Drive Growth
          </h2>
          <p className="text-black text-base sm:text-lg leading-relaxed">
            In the digital age, your website is your brand’s online identity. At Doelsoft, we specialize in creating
            websites that are not only visually appealing but also robust, scalable, and user-friendly.
          </p>
          <p className="text-black text-base sm:text-lg leading-relaxed">
            Whether it’s a startup seeking a brand presence or an enterprise platform targeting global customers, our
            development solutions are designed to meet your evolving business goals.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/WebTeam.svg"
            alt="Web Team"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto"
          />
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto px-6 sm:px-10 lg:px-20 py-12 grid gap-10 md:grid-cols-2 items-center">
        {/* Left Image */}
        <div className="flex flex-col justify-center md:justify-start">
          <img
            src="/Developer.svg"
            alt="Developer"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
          <img
            src="/Developer1.svg"
            alt="Developer"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extralight text-black leading-tight text-center md:text-left">
            💻 Our Web Development Expertise
          </h2>
          <div className="space-y-6">
            {[
              {
                src: '/m1.svg',
                title: 'Custom Web Development',
                desc: 'Tailor-made websites built with your brand and business in mind.',
              },
              {
                src: '/m2.svg',
                title: 'Responsive Web Design',
                desc: 'Seamless experience across desktops, tablets, and mobile devices.',
              },
              {
                src: '/m3.svg',
                title: 'E-Commerce Development',
                desc: 'Online stores with smooth payment, product management, and order workflows.',
              },
              {
                src: '/m4.svg',
                title: 'CMS-Based Websites',
                desc: 'WordPress, Drupal, and custom solutions for easy content management.',
              },
              {
                src: '/m5.svg',
                title: 'Single-Page Applications (SPA)',
                desc: 'Dynamic and fast-loading apps using React, Angular, or Vue.',
              },
              {
                src: '/m6.svg',
                title: 'Website Maintenance & Support',
                desc: 'Regular updates, performance optimization, and security management.',
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
                  <h3 className="text-lg sm:text-xl font-semibold text-black">{item.title}</h3>
                  <p className="text-gray-600 text-base sm:text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[#F4F6FB] py-10">
        <div className="px-6 sm:px-12 md:px-20 text-center md:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extralight">🏭 Industries We Empower with Web Solutions</h1>
          <p className="text-gray-600">Doelsoft delivers tailored web solutions for a wide range of industries:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-6 sm:px-12 md:px-20 gap-6">
          {[
            { src: '/ecommerce.svg', title: 'E-Commerce & Retail', desc: 'Online stores, payment gateways, and customer portals.' },
            { src: '/health_care.svg', title: 'Healthcare & Life Sciences', desc: 'Patient management, booking systems, and HIPAA-compliant platforms.' },
            { src: '/finance.svg', title: 'Banking & FinTech', desc: 'Secure digital banking, investment dashboards, and payment systems.' },
            { src: '/education.svg', title: 'Education & E-Learning', desc: 'Learning management systems and student engagement portals.' },
            { src: '/travel.svg', title: 'Travel & Hospitality', desc: 'Booking portals, itinerary management, and service automation.' },
            { src: '/realestate.svg', title: 'Real Estate', desc: 'Property listings, virtual tours, and CRM integrations.' },
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

      {/* Talent Pool Section */}
      <section className="bg-white py-12">
        <div className="text-center px-6 sm:px-10 md:px-20 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extralight mb-4">👨‍💻 Doelsoft Web Development Talent Pool</h1>
          <p className="text-base sm:text-lg text-gray-700">
            Our team ensures every project is delivered with precision and creativity:
          </p>
        </div>

        <div className="container mx-auto px-6 sm:px-10 md:px-20 grid gap-6 sm:grid-cols-2">
          {[
            { src: '/s1.svg', desc: 'Skilled Front-End Developers for responsive, intuitive, and interactive interfaces.' },
            { src: '/w1.svg', desc: 'Experienced Back-End Engineers for secure, scalable, and high-performance systems.' },
            { src: '/w2.svg', desc: 'Expert Full-Stack Developers for end-to-end solutions combining front-end and back-end expertise.' },
            { src: '/w3.svg', desc: 'Creative UI/UX Designers focused on accessibility, engagement, and seamless navigation.' },
            { src: '/w4.svg', desc: 'QA Specialists ensuring bug-free, high-performing, and secure websites.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 bg-white border border-gray-200 shadow-md hover:shadow-lg transition"
            >
              <img src={item.src} alt="" className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 mx-auto sm:mx-0" />
              <p className="text-gray-800 text-base sm:text-lg text-center sm:text-left">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-[#F4F6FB] py-12 px-6 sm:px-10 lg:px-20 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extralight mb-6 text-center md:text-left">
              💡 Why Choose Doelsoft for Web Development?
            </h1>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-4  p-4 "
                >
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-white bg-white mx-auto sm:mx-0">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-semibold text-black">{feature.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/WomanWeb.svg"
              alt="Web Developer"
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
  );
}

export default WebDevelopment;
