import React from 'react'
import { Settings, DollarSign, Target, Box, Award, Globe } from "lucide-react";
import { Star, Lightbulb, ShieldCheck, Users,ArrowUpRight } from "lucide-react";
function Choose() {
    const features = [
  {
    icon: <Settings className="w-10 h-10 text-red-600" />,
    title: "Agile Transformation",
    desc: "Modernizing business processes for flexibility and speed.",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-black" />,
    title: "Cost Reduction & Resource Optimization",
    desc: "Delivering value-driven solutions while maximizing efficiency.",
  },
  {
    icon: <Target className="w-10 h-10 text-red-600" />,
    title: "Customer–Centric Solutions",
    desc: "Tailored strategies focused on achieving your business goals.",
  },
  {
    icon: <Box className="w-10 h-10 text-red-600" />,
    title: "Customized Engagement Models",
    desc: "Flexible frameworks aligned to your unique needs.",
  },
  {
    icon: <Award className="w-10 h-10 text-red-600" />,
    title: "Top–Class Quality Services",
    desc: "Excellence in every service we provide.",
  },
  {
    icon: <Globe className="w-10 h-10 text-black" />,
    title: "Offshoring & Cost–Effective Solutions",
    desc: "Leveraging global talent to deliver high-quality outcomes.",
  },
];
const coreValues = [
  {
    icon: <Star className="w-10 h-10 text-red-600" />,
    title: "Excellence",
    desc: "Delivering the highest quality in every project.",
    bg: "bg-gray-200",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-red-600" />,
    title: "Innovation",
    desc: "Continuously adopting advanced technologies and creative solutions.",
    bg: "border border-red-600",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
    title: "Integrity",
    desc: "Transparent, honest, and ethical business practices.",
    bg: "bg-gray-200",
  },
  {
    icon: <Users className="w-10 h-10 text-red-600" />,
    title: "Collaboration",
    desc: "Building strong partnerships with clients for long-term success.",
    bg: "border border-red-600",
  },
  {
    icon: <Target className="w-10 h-10 text-red-600" />,
    title: "Customer Focus",
    desc: "Ensuring every solution is aligned with client goals and adds real value.",
    bg:"bg-gray-200",
  },
];
return (
    <div className="w-full min-h-screen font-kumbh space-y-6 mt-16 flex flex-col justify-end">
        <section className="relative w-full flex-1 flex items-end overflow-hidden py-20">
            {/* Content Left */}
            <div className="relative z-10 flex-1 flex flex-col justify-end pl-28 pb-16">
                <h2 className="text-6xl font-bold text-red-600 mb-8">Why Choose<br />DoelSoft</h2>
                <button className="mt-6 px-6 py-2 border border-black text-black hover:bg-gray-200 w-max">
                    Consult With Us <span className="ml-2">↗</span>
                </button>
            </div>
            {/* Image Right */}
            <div className="absolute right-0 bottom-0 h-full w-1/2 mr-10 flex items-end justify-end z-0">
                <img
                    src="/Choose1.svg"
                    alt="Team"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'right bottom' }}
                />
            </div>
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/worldmap.svg')" }}
            ></div>
        </section>
        <section className="w-full bg-[#F3F3F3]">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
                <div className="flex-1 space-y-6 mt-10">
                    <h1 className="text-4xl font-extralight text-black mt-4 ml-10">
                      Doelsoft – Innovating Technology,<br/>Empowering Businesses

                    </h1>
                    <p className="text-start font-light text-black mt-12 ml-10">
                        Doelsoft is a leading software development and business consulting company, with a strong presence in India and the USA, delivering innovative solutions that help businesses stand out in a competitive global landscape. We specialize in software development, digital transformation, consulting, and tailor-made solutions that drive growth, efficiency, and long-term success.
                        <br /><br />
                        At Doelsoft, we turn challenges into opportunities. Our team works closely with clients to resolve complex issues, scale operations efficiently, and implement innovative strategies that accelerate business growth. We aim to transform every business vision into reality, leveraging technologically advanced solutions, expert professionals, and a commitment to excellence.
                    </p>
                </div>
                <div className="flex-1 flex items-end mt-10">
                    <img src="/Choose2.svg" alt="ITStaffing" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
        <div className="p-10 ml-10 relative">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Key Benefits We Deliver</h1>
            <div className="space-y-6 ml-14">
                <div className="bg-white p-4 flex items-start gap-4">
                    <img src={"./Trustworthy.svg"} className="w-10 h-10 border border-black " />
                    <div>
                        <h3 className="text-black text-lg font-semibold">Client-Centric Approach</h3>
                        <p className="text-black">
                            We collaborate deeply with each client to understand their unique requirements and deliver solutions that drive measurable results.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-4 flex items-start gap-4">
                    <img src={"./Stewardship.svg"} className="w-10 h-10 border border-black " />
                    <div>
                        <h3 className="text-black text-lg font-semibold">Stewardship Taking Responsibility, Driving Results</h3>
                        <p className="text-black">
                            Leveraging the latest technologies to provide scalable, secure, and high-quality services.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-4 flex items-start gap-4 relative">
                    <img src={"./Credibility.svg"} className="w-10 h-10 border border-black " />
                    <div>
                        <h3 className="text-black text-lg font-semibold">Dedicated Expert Team</h3>
                        <p className="text-black">
                            In today’s competitive staffing landscape, credibility is everything. At Doelsoft, we back our words with consistent action.<br/> Every decision, every placement, and every engagement is grounded in honesty, fairness, and reliability<br/> so you can count on us to be a  partner you trust, time after time.
                        </p>
                    </div>
                    {/* Image rendered to the right side of Dedicated Expert Team */}
                    
                </div>
                <div className="bg-white p-4 flex items-start gap-4">
                    <img src={"./Respect.svg"} className="w-10 h-10 border border-black " />
                    <div>
                        <h3 className="text-black text-lg font-semibold">Global Delivery</h3>
                        <p className="text-black">
                            Serving clients across India, the USA, and worldwide, with flexible engagement models.
                        </p>
                    </div>
                    <img
                        src="/Choose3.svg"
                        alt="Expert Team"
                        className="absolute right-[-20px] top-[#85px] -translate-y-1/2 w-auto h-80 object-contain hidden md:block"
                    />
                </div>
                <div className="bg-white p-4 flex items-start gap-4">
                    <img src={"./Respect.svg"} className="w-10 h-10 border border-black  " />
                    <div>
                        <h3 className="text-black text-lg font-semibold">Holistic Business Growth</h3>
                        <p className="text-black">
                            Strategies and solutions designed to enhance efficiency, productivity, and market competitiveness.
                        </p>
                    </div>
                </div>
            </div>       
        </div>
        <section className="w-full bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-kumbh  mb-12">
                    Why Doelsoft is Your Trusted Partner
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-10 flex flex-col gap-2 hover:shadow-md transition"
                        >
                            {/* Icon and Title in a row */}
                            <div className="flex items-center gap-4 mb-2">
                                <span className="flex-shrink-0">{item.icon}</span>
                                
                            </div>
                            {/* Description below */}
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
         <section className="w-full bg-[#f3f3f3] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light mb-12">Our Core Values</h2>

        {/* Cards + Image */}
        <div className="grid grid-cols-1 gap-10">
            {/* First row: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {coreValues.slice(0, 3).map((item, index) => (
                    <div
                        key={index}
                        className={`p-10 flex flex-col gap-3 ${item.bg}`}
                    >
                        {item.icon}
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
            {/* Second row: 2 cards + image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {coreValues.slice(3, 5).map((item, index) => (
                    <div
                        key={index}
                        className={`p-10 flex flex-col gap-3 ${item.bg}`}
                    >
                        {item.icon}
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
                {/* Image in the third column */}
                <div className="flex justify-center items-center">
                    <img src="Choose4.svg" alt="Puzzle Graphic" className="w-64 md:w-80" />
                </div>
            </div>
        </div>
        <p className="text-black text-lg font-kumbh mt-8 leading-relaxed">
          At Doelsoft, we don’t just provide services, we empower businesses to
          grow, innovate, and thrive globally. With our expertise, dedication,
          and innovative approach, we ensure that every client is one step ahead
          of the competition.
        </p>

        {/* CTA Section */}
        <div className="bg-red-600 text-white mt-10  p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-lg md:text-xl font-light text-center md:text-left">
            Get in touch <span className="font-bold">with Doelsoft today</span>{" "}
            and discover how we can accelerate your business success globally.
          </h3>
          <button className="bg-white text-black px-4 py-3  shadow-md font-medium flex items-center gap-2 hover:bg-gray-400 transition">
            Consult With Us  ↗
          </button>
        </div>
      </div>
    </section>
     <section className="relative bg-cover bg-center text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: "url('/Background2.svg')", }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-red-900/60"></div>
            <div className="relative max-w-3xl mx-auto text-white z-10 space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
                      Let’s Build the Future Together
                </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                      Tell us your goals. We’ll design the runway then deliver it with AI,
                      Cloud & Data.
                    </p>
                    <button className="flex items-center gap-2 bg-red-600 hover:bg-gray-600 text-white font-light px-6 sm:px-8 py-4  text-base sm:text-lg shadow-lg transition justify-center mx-auto">
                      Talk to an Expert <ArrowUpRight className='border border-white rounded-full text-center' size={24} />
                    </button>
                  </div>
                </section>
    </div>
)
}

export default Choose
