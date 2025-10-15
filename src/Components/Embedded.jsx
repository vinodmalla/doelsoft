import React from "react";
import { ArrowUpRight } from "lucide-react";

function Embedded() {
  // ✅ Features for “Why Choose Doelsoft” section
  const features = [
    {
      icon: "/ui1.svg",
      title: "Client-Centric Solutions",
      description:
        "Tailored embedded systems aligned with business objectives.",
    },
    {
      icon: "/ui2.svg",
      title: "End-to-End Expertise",
      description:
        "From concept, hardware design, firmware development, to deployment.",
    },
    {
      icon: "/ui3.svg",
      title: "Scalable & Future-Proof",
      description: "Embedded systems designed for evolving product needs.",
    },
    {
      icon: "/ui4.svg",
      title: "Global Delivery Model",
      description:
        "Serving enterprises in the USA, India, and worldwide.",
    },
    {
      icon: "/ui5.svg",
      title: "Innovation & Compliance",
      description:
        "Advanced IoT and embedded technologies with industry-standard compliance.",
    },
    {
      icon: "/ui6.svg",
      title: "Proven Success",
      description:
        "Delivered smart, connected devices that enhance efficiency and product intelligence.",
    },
  ];

  return (
    <div className="w-full font-kumbh bg-white mt-8">
      {/* 🧠 Hero Section */}
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
            Embedded
            <br className="hidden sm:block" />
            <span className="block mt-2">Technologies</span>
          </h2>

          <button className="py-2 px-5 border border-black ml-[45px] md:ml-[9px] text-black hover:bg-gray-200 hover:scale-105 transition-all duration-200">
            Consult With Us <span className="ml-2">↗</span>
          </button>
        </div>

        <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
          <img
            loading="lazy"
            src="/iot.svg"
            alt="IoT technology illustration"
            className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      {/* 🧩 About Section */}
      <section className="mx-auto px-6 sm:px-12 md:px-24 py-16 bg-[#F4F6FB] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-extralight text-black">
            🚀 Transform Your Products with
            <br />
            Doelsoft Embedded Technologies
          </h2>
          <p className="text-black text-base sm:text-lg leading-relaxed">
            Embedded technologies are the backbone of modern smart devices,
            industrial systems, and IoT solutions. At Doelsoft, we design and
            develop embedded systems that are reliable, high-performing, and
            tailored to your product requirements.
          </p>
          <p className="text-black text-base sm:text-lg leading-relaxed">
            As a trusted embedded technologies partner in the USA & India, we
            empower businesses to innovate, automate, and create intelligent
            devices that connect seamlessly to cloud platforms and digital
            ecosystems.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            loading="lazy"
            src="/iotmen.svg"
            alt="Embedded system engineer working on IoT devices"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto"
          />
        </div>
      </section>

      {/* ⚙️ Services Section */}
      <section className="container mx-auto px-6 sm:px-10 lg:px-20 py-12 grid gap-10 md:grid-cols-2 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            loading="lazy"
            src="/iotdeveloper.svg"
            alt="IoT developer creating embedded systems"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extralight text-black leading-tight text-center md:text-left">
            🌟 Our Embedded Technologies Services
          </h2>

          <div className="space-y-6">
            {[
              {
                src: "/m1.svg",
                title: "Firmware Development",
                desc: "Writing efficient, reliable code for microcontrollers, microprocessors, and SoC platforms.",
              },
              {
                src: "/m2.svg",
                title: "Embedded System Design",
                desc: "Custom hardware and software integration for sensors, controllers, and IoT devices.",
              },
              {
                src: "/m3.svg",
                title: "IoT Device Integration",
                desc: "Connecting embedded devices to cloud platforms for real-time monitoring and analytics.",
              },
              {
                src: "/m4.svg",
                title: "Real-Time Operating Systems (RTOS)",
                desc: "Designing systems with high reliability and deterministic performance.",
              },
              {
                src: "/m5.svg",
                title: "PCB Design & Prototyping",
                desc: "Complete electronic design for embedded systems and smart devices.",
              },
              {
                src: "/m6.svg",
                title: "Device Testing & Validation",
                desc: "Real-time monitoring, predictive analytics, and AI-driven decision-making.",
              },
              {
                src: "/m7.svg",
                title: "Support & Maintenance",
                desc: "Firmware updates, system optimization, and troubleshooting for deployed devices.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-4 items-start hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 bg-white border border-gray-300 p-4 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mx-auto sm:mx-0">
                  <img
                    loading="lazy"
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
      </section>

      {/* 🏢 Industries Section */}
      <section className="bg-[#F4F6FB] py-10">
        <div className="px-6 sm:px-12 md:px-20 text-center md:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extralight">
            🏢 Industries We Serve
          </h1>
          <p className="text-gray-600">
            Doelsoft provides embedded technology solutions for diverse
            industries, tailoring innovation to specific needs:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-6 sm:px-12 md:px-20 gap-6">
          {[
            {
              src: "/ecommerce.svg",
              title: "E-Commerce & Retail",
              desc: "Smart inventory systems and intelligent delivery tracking.",
            },
            {
              src: "/health_care.svg",
              title: "Healthcare & Life Sciences",
              desc: "Wearables, medical monitoring devices, and IoT healthcare solutions.",
            },
            {
              src: "/finance.svg",
              title: "Banking & FinTech",
              desc: "Secure IoT-driven transaction and monitoring devices.",
            },
            {
              src: "/education.svg",
              title: "Education & E-Learning",
              desc: "Smart classroom systems and remote learning integration.",
            },
            {
              src: "/travel.svg",
              title: "Travel & Hospitality",
              desc: "IoT-enabled guest experience and energy management.",
            },
            {
              src: "/media.svg",
              title: "Media & Entertainment",
              desc: "Smart streaming devices and connected content systems.",
            },
            {
              src: "/realestate.svg",
              title: "Real Estate",
              desc: "Smart home automation and building management systems.",
            },
            {
              src: "/enterprise.svg",
              title: "Enterprise Software",
              desc: "IoT dashboards, analytics tools, and productivity systems.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-2 items-center hover:shadow-md transition"
            >
              <img
                loading="lazy"
                src={item.src}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="sm:pl-4 mt-4 sm:mt-0 border border-black h-40 p-4 sm:p-8 text-center sm:text-left">
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 👨‍💻 IoT Talent Pool */}
      <section className="bg-white py-12">
        <div className="text-center px-6 sm:px-10 md:px-20 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extralight mb-4">
            👨‍💻 Doelsoft Embedded Technologies Talent Pool
          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            Our team ensures every embedded project delivers precision, reliability, and performance:
          </p>
        </div>

        <div className="container mx-auto px-6 sm:px-10 md:px-20 grid gap-6 sm:grid-cols-2">
          {[
            {
              src: "/t1.svg",
              desc: "Embedded System Engineers – Designing hardware-software integrated solutions.",
            },
            {
              src: "/t2.svg",
              desc: "Firmware Developers – Optimized, low-level programming for microcontrollers and devices.",
            },
            {
              src: "/t3.svg",
              desc: "IoT & Connectivity Specialists – Connecting devices securely to cloud and enterprise systems.",
            },
            {
              src: "/t4.svg",
              desc: "PCB Designers & Hardware Engineers – Circuit design, prototyping, and testing.",
            },
            {
              src: "/w4.svg",
              desc: "QA & Testing Engineers – Functional, performance, and compliance testing of embedded systems.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 bg-white border border-gray-200 shadow-md hover:shadow-lg transition"
            >
              <img
                loading="lazy"
                src={item.src}
                alt={item.desc}
                className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 mx-auto sm:mx-0"
              />
              <p className="text-gray-800 text-base sm:text-lg text-center sm:text-left">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 💡 Why Choose Section */}
      <section className="bg-[#F4F6FB] py-12 px-6 sm:px-10 lg:px-20 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extralight mb-6 text-center md:text-left">
              💡 Why Choose Doelsoft for Embedded Technologies?
            </h1>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-4 p-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-white bg-white mx-auto sm:mx-0">
                    <img
                      loading="lazy"
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

          <div className="flex-1 flex justify-center">
            <img
              loading="lazy"
              src="/iotp.svg"
              alt="IoT professional illustration"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section
        className="relative w-full bg-cover bg-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundImage: "url('/Background2.svg')", marginTop: "45px" }}
      >
        <img
          loading="lazy"
          src="/Vectors.svg"
          alt="vector design"
          className="absolute left-6 sm:left-14 top-8 sm:top-10 h-20 sm:h-28 md:h-32 w-20 sm:w-28 md:w-32 object-contain opacity-70 z-30"
        />
        <img
          loading="lazy"
          src="/left.svg"
          alt="decorative left shape"
          className="absolute left-10 sm:left-20 bottom-10 sm:top-72 w-3 sm:w-4 object-contain opacity-70 z-30"
        />
        <img
          loading="lazy"
          src="/right.svg"
          alt="decorative right shape"
          className="absolute right-10 sm:right-40 lg:right-72 top-6 sm:top-12 w-10 sm:w-16 md:w-20 object-contain opacity-70 z-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/90"></div>

        <div className="relative max-w-3xl mx-auto text-white z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-7 md:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-kumbh font-light leading-snug px-2">
            Let's Build the Future Together
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2">
            Tell us your goals. We'll design the runway and deliver it with AI,
            Cloud, and Data.
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
  );
}

export default Embedded;
