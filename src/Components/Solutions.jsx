import React, { useState } from "react";
import {
  FaQuoteRight,
  FaStar,
  FaStarHalfAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

function Solutions() {
  const [coursol, setCoursol] = useState(0);

  const services = [
    { title: "CUSTOM SOFTWARE DEVELOPMENT", img: "/servicescustom.svg", link: "/softwareDevelopment", color: "red" },
    { title: "MOBILE APP DEVELOPMENT", img: "/servicesmobile.svg", link: "/mobileDevelopment", color: "black" },
    { title: "SALESFORCE SOLUTIONS", img: "/servicessalesforce.svg", link: "/salesforce", color: "red" },
    { title: "WEB DESIGN & DEVELOPMENT", img: "/servicesweb.svg", link: "/servicesweb", color: "black" },
    { title: "UI/UX DESIGN SERVICES", img: "/servicesuiux.svg", link: "/servicesuiux", color: "black" },
    { title: "DIGITAL ACCESSIBILITY", img: "/servicesaccessibility.svg", link: "/digitalaccessibilit", color: "red" },
    { title: "MICROSOFT SOLUTIONS", img: "/servicesmicrosoft.svg", link: "/servicesmicrosoft", color: "black" },
    { title: "MULESOFT SOLUTIONS", img: "/servicesmulesoft.svg", link: "/servicesmulesoft", color: "red" },
    { title: "IOT SOLUTIONS", img: "/servicesiot.svg", link: "/servicesiot", color: "red" },
    { title: "EMBEDDED TECHNOLOGIES", img: "/servicesembedded.svg", link: "/servicesembedded", color: "black" },
    { title: "FLAWLESS QA SERVICES", img: "/servicesqa.svg", link: "/servicesqa", color: "red" },
    { title: "AI SERVICES", img: "/servicesai.svg", link: "/servicesai", color: "black" },
  ];

  const reviews = [
    {
      name: "Davit Millar",
      role: "CEO, PParkview Int, Ltd",
      img: "/reviews/client1.jpg",
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl, tincidunt commodo sit. Et, purus lectus odio cursus placerat leo, non etiam. Neque at leo risus orci.",
    },
    {
      name: "Sarah Johnson",
      role: "CTO, Cloudverse Solutions",
      img: "/reviews/client2.jpg",
      rating: 5,
      text: "Working with the team was an absolute pleasure. Their commitment, quality of work, and expertise truly exceeded our expectations!",
    },
    {
      name: "Michael Adams",
      role: "Founder, TechFlow Labs",
      img: "/reviews/client3.jpg",
      rating: 4,
      text: "They provided excellent service and delivered our project ahead of schedule. Highly recommended for software development needs!",
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <div className="flex items-center text-yellow-400 mb-3">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {halfStar && <FaStarHalfAlt />}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen font-kumbh space-y-6 mt-16 flex flex-col justify-end">
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[550px] flex flex-col md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
        style={{
          backgroundImage: "url('/worldmap.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex-1 flex flex-col space-y-6 items-center md:items-start justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[71.5px] font-semibold text-[#EF0E0E] leading-snug mb-6">
            Secure, Accessible, <br className="hidden sm:block" />
            <span className="block mt-2">AI-Powered</span>
            <span className="block mt-2">Services</span>
          </h2>
          <button className="py-2 px-5 border border-black text-black hover:bg-gray-200 transition-all duration-200">
            Consult With Us <span className="ml-2">↗</span>
          </button>
        </div>

        <div className="mt-10 md:mt-24 flex justify-center md:justify-end flex-1">
          <img
            src="/Solutions.svg"
            alt="Team"
            className="w-72 sm:w-[340px] md:w-[420px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-[#F3F3F3] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto mb-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-normal text-gray-800">
            Our Services from Strategy to Scale
          </h2>
          <p className="text-gray-600 font-inter mt-3 text-sm sm:text-base">
            We turn roadmaps into running systems governed, observable, and ready to grow on modern cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[86rem] mx-auto px-4 md:px-6">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden shadow-md group">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className={`py-4 sm:py-6 text-white text-sm font-semibold ${
                  service.color === "red" ? "bg-red-600" : "bg-[#282828]"
                }`}
              >
                <Link to={service.link}>{service.title}</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-8 sm:right-28 bottom-0 opacity-60">
          <img src="/logo4.svg" alt="logo" className="w-16 sm:w-[6.5rem] h-auto" />
        </div>
      </section>

      {/* CLIENT REVIEWS */}
      <section className="py-20 bg-white">
        <div className="text-center mb-10 px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Client Reviews
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            What People Say About Us
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-6">
          {reviews.length > 0 && (
            <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 max-w-lg w-full text-center relative transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{reviews[coursol].name}</h3>
              <p className="text-sm sm:text-md text-gray-500 mb-3">{reviews[coursol].role}</p>
              {renderStars(reviews[coursol].rating)}
              <p className="text-gray-700 italic leading-relaxed text-sm sm:text-base">
                "{reviews[coursol].text}"
              </p>
              <div className="flex justify-center gap-6 mt-8">
                <button
                  onClick={() => setCoursol((prev) => (prev > 0 ? prev - 1 : reviews.length - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={() => setCoursol((prev) => (prev + 1) % reviews.length)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          )}

          <div className="relative">
            <div className="hidden md:flex  absolute -top-6 -left-6 bg-[#080808] w-20 h-20 rounded-tr-[62.5px] rounded-bl-[62.5px] items-center justify-center">
              <FaQuoteRight className="text-red-500 text-3xl" />
            </div>
            <img
              src="/Solution2.svg"
              alt="Client"
              className="object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg z-10"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
       <section
                    className="relative w-full  bg-cover bg-center text-center py-16 md:h-[568px]   sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
                      className="absolute left-10 sm:left-20 bottom-10 sm:top-70 w-3 sm:w-4 object-contain opacity-70 z-30"
                    />
                    <img
                      src="/right.svg"
                      alt="right"
                      className="absolute right-10 sm:right-40 lg:right-72 top-6 sm:top-12 w-10 sm:w-16 md:w-20 object-contain opacity-70 z-30"
                    />
                  
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/90"></div>
                  
                    {/* Main Content */}
                    <div className="relative max-w-3xl mx-auto md:mt-8 text-white z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-7 md:space-y-8">
                      <h2 className="text-xl md:text-[56px] font-manrope font-bold whitespace-nowrap leading-snug px-2">
                        Let's Build the Future Together
                      </h2>
                  
                      <p className="text-sm sm:text-[30px] font-inter text-gray-200 leading-relaxed px-2">
                        Tells Us your goals.We'll design the runaway then deliver it with AI,Could and Data.
                      </p>
                  
                      <button className="flex items-center gap-2  bg-red-600 hover:bg-gray-600 text-white font-medium px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-xl  shadow-lg transition-all duration-300 ease-in-out">
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

export default Solutions;
