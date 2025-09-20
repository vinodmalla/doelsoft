import spring from '../assets/spring.svg'
import wipro from '../assets/wipro.svg'
import zingo from '../assets/Zingo.svg'
import mevatron from '../assets/mevatron.svg' 
import menlo from '../assets/menlo.svg'
import tech from '../assets/techmahindra.svg'
import Counter from './Counter';
import {useState, useEffect } from 'react'
import { RxAvatar } from "react-icons/rx";
import mask from "../assets/mask.svg";
import BFSI from "../assets/BFSI.svg";
import Healthcare from "../assets/Healthcare.svg";
import ECommerce from "../assets/E-Commerce.svg";
import { ArrowUpRight } from "lucide-react";
import Startups from "../assets/Startups.svg";
import AI from "../assets/AI.svg";
import Intelligent from "../assets/Intelligent.svg";
import cloud from "../assets/Cloud.svg";
import CyberSecurity from "../assets/CyberSecurity.svg";
import data from "../assets/Data.svg";
import Accessibility from "../assets/Accessibility.svg";
import Background from "../assets/Background.svg";

import { Compass, Ruler, Truck, Share2 } from "lucide-react";
import frame1 from '../assets/Frame 172.svg';
import frame2 from '../assets/Frame 173.svg';
import frame3 from '../assets/Frame 174.svg';
import frame4 from '../assets/Frame 175.svg';
import secure from '../assets/Secure.svg';
import Cloud_Done from '../assets/Cloud_Done.svg';

import Applied from '../assets/Applied_AI.svg';

function Home() {
    const [testimonialIndex,setTestimonialIndex]=useState(0)
    const [cursol,setCursol]=useState(0)
    const CursolDetails=[{
      h11:"Accelerate Digital Transformation with ",
      h22:"AI, Cloud & Data",
      img:"/robot.svg",
      p:"We design, build, and scale secure digital products combining applied AI,modern cloud architectures, and human expertise to deliver real business outcomes."
    },
  {
      h11:"People Powered",
      h22:"Staffing Excellence",
      img:"/businessman.svg",
      p:"Driven by talent, guided by expertise we connect the right people with the right opportunities to fuel lasting business success."
  }
,{
   h11:"Accessibility First,",
   h22:"Inclusion Always",
   img:"/medium.svg",
   p:"From accessibility to true inclusion, we ensure every interaction empowers every user"

}]
    const services=[{
        title:"BFSI",
        logo:BFSI
    },
  {
        title:"Healthcare",
        logo:Healthcare
  },
{
        title:"E-Commerce",
        logo:ECommerce
},{
        title:"Manufacturing",
        logo:"/Manufacturing.svg"
},{
        title:"Telecom",
        logo:"/Telecom.svg"
},{
        title:"Startups",
        logo:Startups
}]
    const solutions = [
  {
    icon: "/artificial.svg", // replace with actual icons
    title: "Recruitment Intelligence",
    desc: "Cut time-to-hire with AI-powered parsing, shortlisting, and scheduling.",
    type: "border",
  },
  {
    icon: "/intelligence1.svg",
    title: "AI Copilots for Operations",
    desc: "Automate knowledge work across service, support, and back-office.",
    type: "bg",
  },
  {
    icon: "/fraud.svg",
    title: "Fraud & Risk Analytics",
    desc: "Spot anomalies early with streaming ML and governed models.",
    type: "border",
  },
  {
    icon: "/Group_A.svg",
    title: "Accessibility AI & Compliance",
    desc: "Ship inclusive products with automated audits and remediation.",
    type: "bg",
  },
  {
    icon: "/Group_B.svg",
    title: "Cloud Modernization Accelerator",
    desc: "Migrate, containerize, and optimize applications seamlessly.",
    type: "border",
  },
  {
    icon: "/Group_C.svg",
    title: "Customer 360 & Personalization",
    desc: "Unify customer data into one view for tailored experiences.",
    type: "border",
  },
];
    const Testimonial=[
       { quote:" Welcome to the epicenter of AI innovation. Future Tech AI News is your passport",
        name:"Ajay sharma",
        company:"Techoly",
        avitor:""
    },
     { quote:" Welcome to the epicenter of AI innovation. Future Tech AI News is your passport"
,
        name:"Avinash",
        company:"Tech world",
        avitor:""
    },
     { quote:" Welcome to the epicenter of AI innovation. Future Tech AI News is your passport",
        name:"Tim Cook",
        company:"apple",
        avitor:""
    }
]
const steps = [
  {
    title: "Discover",
    desc: "Value, Opportunities & Risks",
    icon: <Compass className="w-8 h-8 text-white" />,
  },
  {
    title: "Design",
    desc: "Blueprint, Governance, KPIs",
    icon: <Ruler className="w-8 h-8 text-white" />,
  },
  {
    title: "Deliver",
    desc: "Build, Integrate, Harden, Ship",
    icon: <Truck className="w-8 h-8 text-white" />,
  },
  {
    title: "Scale",
    desc: "MLOps, FinOps improvement",
    icon: <Share2 className="w-8 h-8 text-white" />,
  },
];
const frames=[frame1,frame2,frame3,frame4];
const cards = [
    {
      title: "Applied AI, Not Experiments",
      desc: "From roadmap to production, we ship AI that drives measurable business results.",
      bg: "bg-red-600",
      text: "text-white",
      icon: Applied, // replace with your svg/icon
      type: "solid",
    },
    {
      title: "Data to Decisions",
      desc: "A modern data stack and dashboards so teams act on trusted, real-time insights.",
      image:
       "/Decisions.svg", // replace with your image
      text: "text-white",
      type: "image",
    },
    {
      title: "Cloud Done Right",
      desc: "Modern, secure architectures on AWS/Azure/GCP that scale reliably and cost-effectively.",
      image:
       Cloud_Done, // replace with your image
      text: "text-white",
      type: "image",
    },
    {
      title: "Secure & Accessible by Design",
      desc: "Enterprise-grade security and WCAG-aligned experiences, built in from day one.",
      bg: "bg-red-600",
      text: "text-white",
      icon:secure, // replace with your svg/icon
      type: "solid",
    },
  ];
  const insights = [
  {
    img: "/Client1.svg", // replace with your image
    client: "Client Name",
    title: "Top AI Consulting Trends 2025",
    desc: "What matters now and how leaders can build durable advantage.",
  },
  {
    img: "/Client2.svg",
    client: "Client Name",
    title: "AI-Powered Software Development",
    desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
  },
  {
    img: "/Client3.svg",
    client: "Client Name",
    title: "Designing Accessibility",
    desc: "Inclusive patterns for enterprise-ready applications.",
  },
];
useEffect(()=>{
        const intervalid=setInterval(()=>{ setTestimonialIndex((prevIndex)=>(prevIndex+1)%Testimonial.length)},3000);
       
        return(()=>{clearInterval(intervalid)

            
        })
    },[Testimonial.length]) // Added dependency for safety

    
  return (
    <div className='w-full h-full'>
      {/* Hero Section - Responsive with equal spacing */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 gap-6 lg:gap-12">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
          {CursolDetails.map((details, index) => (
            <div
              key={index}
              className={`flex-1 font-kumbh transition-opacity duration-700 ${
                cursol === index ? "opacity-100 relative" : "opacity-0 absolute"
              } w-full`}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                {details.h11}
                <br />
                <span className="text-red-600 block mt-2 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  {details.h22}
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {details.p}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-gray-600 text-white px-6 sm:px-8 py-3 font-medium rounded transition">
                  Explore Solutions ↗
                </button>
                <button className="bg-white text-black px-6 sm:px-8 py-3 font-medium border border-black hover:bg-red-600 hover:text-white rounded transition">
                  Consult with Us ↗
                </button>
              </div>

              <div className="mt-6 lg:mt-8">
                <div className="flex gap-4 sm:gap-6 animate-marquee whitespace-nowrap overflow-hidden">
                  {[spring, wipro, zingo, mevatron, menlo, tech].map((logo, i) => (
                    <div
                      key={i}
                      className="w-16 sm:w-20 lg:w-24 h-12 sm:h-14 lg:h-16 flex items-center justify-center flex-shrink-0"
                    >
                      <img
                        src={logo}
                        alt={`logo-${i}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-black font-bold text-lg sm:text-xl lg:text-2xl py-4 lg:py-6 text-center sm:text-left">
                  Trusted by{" "}
                  <span className="font-medium">
                    Leading Enterprises & Fast–Growing Teams
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Content - Image and Testimonials */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center gap-4 lg:gap-0 mt-8 lg:mt-0">
          <img
            src={mask}
            alt="mask"
            className="absolute inset-0 w-1/2 mt-16 ml-40 justify-center h-1/2 bg-gray-200 object-cover hidden lg:block"
          />

          <img
            src={CursolDetails[cursol].img}
            alt={CursolDetails[cursol].h22}
            className={`w-full h-auto max-w-md mx-auto items-center mb-24 lg:max-w-none ${cursol==0 ? "animate-moveOnce" :""} z-50 object-contain`}
          />

          {/* Testimonials - Stacked on mobile */}
          <div className="flex flex-col items-end gap-2 lg:absolute lg:top-1/4 lg:right-0">
            {Testimonial.map((item, index) => (
              <div
                key={index}
                className={`bg-white z-50 shadow-xl rounded-md p-3 sm:p-4 w-48 sm:w-56 lg:w-60 transition-opacity duration-1000 ${
                  index === testimonialIndex ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                <p className="text-xs sm:text-sm italic text-gray-600 leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="flex items-center mt-2 gap-2">
                  <RxAvatar size={20} className="sm:w-6 sm:h-6" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold">
                      {item.name}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Founder @ {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Tags - Responsive positioning */}
          <div className="flex flex-col sm:flex-row justify-between w-full max-w-md mx-auto lg:absolute lg:bottom-0 lg:w-auto gap-2 lg:gap-4">
            <div className="bg-white shadow-md rounded-md px-3 py-2 flex items-center gap-2 text-xs sm:text-sm">
              <span className="font-semibold">Budget Friendly</span>
              <span className="text-red-600">Life Long</span>
            </div>
            <div className="bg-white shadow-md rounded-md px-3 py-2 flex items-center gap-2 text-xs sm:text-sm">
              <span className="font-semibold">Native, Fast & Powerful</span>
              <span className="text-red-600">AI leverage</span>
            </div>
          </div>
        </div>

        {/* Vertical Carousel Indicators - Hidden on mobile */}
        <div className="hidden lg:flex flex-col gap-4 absolute right-4 top-1/2 -translate-y-1/2">
          {CursolDetails.map((_, index) => (
            <button
              key={index}
              onClick={() => setCursol(index)}
              className={`w-2 h-8 rounded-full transition-all duration-300 ${
                cursol === index ? "bg-red-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Industries Section - Responsive grid */}
      <section className="w-full h-2/3 bg-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-white text-xl sm:text-2xl font-bold pl-0 sm:pl-4 pt-4 sm:pt-6 mb-8">
          Industries We Serve
        </h1>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">
            AI for Every Industry
          </h2>
          <p className="text-white text-base sm:text-lg mt-4 px-4">
            We turn domain challenges into measurable outcomes with modern <br className="hidden sm:block" /> cloud, trusted data, and production-ready AI.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row gap-6 lg:gap-8 px-4 lg:px-12 lg:mx-auto max-w-6xl justify-center">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center hover:scale-105 duration-300 py-4"
            >
              <img
                src={service.logo}
                alt={service.title}
                className="w-20 sm:w-24 lg:w-32 h-auto object-contain mb-2"
              />
              <p className="text-white text-base sm:text-lg text-center">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services Section - Responsive flex */}
      <section className='w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto'>
          <div className='flex-1 space-y-6 lg:space-y-8'>
            <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight'>DoelSoft<br/>Core Services</h1>
            <p className='text-lg leading-relaxed'>We Combine AI,Cloud & Data to design,build and <br className="hidden lg:block"/> scale secure digital products aligned to measurable outcomes.</p>
            <img src="Robot2.svg" alt='robot2' className='w-full max-w-sm sm:max-w-md lg:w-96 h-auto animate-moveOnce mx-auto lg:mx-0'/>
            <button className='bg-red-600 hover:bg-gray-600 text-white px-8 sm:px-16 py-4 font-medium text-lg rounded transition block mx-auto lg:mx-0 w-full sm:w-auto'>
              Explore AI Strategy ↗
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {[
              { icon: AI, title: "AI Strategy & Consulting", list: ["Gen-AI features & Copilots", "Microservices & API,Integrations", "Performance,security,observability"] },
              { icon: cloud, title: "Cloud & AI Infrastructure", list: ["Cloud migrations & Modernization", "MLOPs Platforms,model serving", "Cost,reliability & security baselines"] },
              { icon: data, title: "Data Science & Analytics", list: ["Data engineering & Governance", "ML modeling & evaluation", "BI dashboards & decision intelligence"] },
              { icon: Intelligent, title: "Intelligent Software Deve", list: ["Gen-AI features & copilots", "Microservices & APIs, integrations", "Performance, security, observability"] },
              { icon: CyberSecurity, title: "AI-Enhanced CyberSecurity", list: ["Anomaly & fraud detection", "Identity,access & zero-trust", "Compliance hardening & monitoring"] },
              { icon: Accessibility, title: "Accessibility Inclusive Design", list: ["Accessibility audits & remediation", "Inclusive UX writing & patterns", "Continuous accessibility in CI/CD"] }
            ].map((service, i) => (
              <div key={i} className='border border-gray-600 px-6 py-6 '>
                <img src={service.icon} alt={service.title} className='w-10 h-auto mb-4'/>
                <h3 className='text-black font-semibold text-lg sm:text-xl mb-4'>{service.title}</h3>
                <ul className='list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base'>
                  {service.list.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative bg-cover bg-center text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: "url('/Mask group.svg')",
        }}>
        <div className="max-w-6xl mx-auto text-left">
          <h3 className="text-lg text-gray-700 mb-2">Doelsoft</h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">How we work</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-red-600 text-white  p-6 flex flex-col justify-between shadow-lg hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3 mb-4">
                  {step.icon}
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm mb-6 leading-relaxed">{step.desc}</p>
                <div className="flex justify-end">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-red-600 transition">
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Doelsoft Section - Responsive flex */}
      <section className='w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto'>
          <div className='flex-1 relative flex flex-col items-center justify-center lg:justify-start'>
            <img src={Background} alt='background' className='absolute inset-0 w-full h-full bg-gray-200 object-cover hidden lg:block' />
            <img 
              src="/Girl.svg"
              alt="Girl" 
              className="w-full max-w-md h-auto z-10 animate-none relative" 
            />

            {/* Testimonials */}
            <div className="flex flex-col items-end gap-2 absolute top-1/2 right-0 mt-8 lg:mt-0">
              {Testimonial.map((item, index) =>(
                <div className={`bg-white z-50 shadow-xl rounded-md p-4 w-56 transition-opacity duration-1000 ${
                  index === testimonialIndex ? 'opacity-100 block' : 'opacity-0 hidden'}`} key={index}>
                  <p className="text-sm italic text-gray-600 leading-relaxed">
                      "{item.quote}"
                  </p>
                  <div className="flex items-center mt-2 gap-2">
                    <RxAvatar size={24} />
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-gray-500">Founder @ {item.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex-1 space-y-6 lg:space-y-8 py-8 lg:py-10'>
            <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl'>Why Doelsoft</h1>
            <p className='py-4 text-lg leading-relaxed'>We turn AI, Cloud & Data into measurable outcomes shipping production systems with governance, security, and accessibility built in.</p>
            <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl'>Proof points</h2>
            <ul className='list-disc list-inside text-black mt-4 space-y-2 text-base'>
              <li>Agile transformation</li>
              <li>Cost Reduction</li>
              <li>Focusing on customers centric goals</li>
              <li>Tailor-made engagement models as per Client requirement</li>
              <li>Top class quality services</li>
              <li>Offshoring</li>
              <li>Cost-effective solutions</li>
              <li>Resource Optimization</li>
              <li>Customized solutions as per client requirement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Frames Section */}
      <section className="relative bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-12 lg:px-48">
        <div className="hidden md:flex flex-row flex-wrap gap-6 justify-center">
          {frames.map((frame, i) => (
            <div key={i} className="flex flex-col justify-between flex-1 min-w-[200px]">
              <img
                src={frame}
                alt={`Frame ${i + 1}`}
                className="w-full h-48 sm:h-56 rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
        {/* Mobile fallback: Stack frames */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {frames.map((frame, i) => (
            <img
              key={i}
              src={frame}
              alt={`Frame ${i + 1}`}
              className="w-full h-48 rounded-xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Outcomes We Deliver
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            We apply AI, Cloud & Data to move the metrics that matter speed, cost,
            and customer experience backed by production-grade delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`relative overflow-hidden  shadow-lg h-64 sm:h-80 ${
                card.type === "solid" ? `${card.bg} flex items-center justify-center p-6 sm:p-8` : ""
              }`}
            >
              {card.type === "image" && (
                <div className="relative h-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-70 p-4 sm:p-6">
                    <h3 className={`text-base sm:text-lg font-semibold ${card.text}`}>
                      {card.title}
                    </h3>
                    <p className={`mt-2 text-sm ${card.text}`}>{card.desc}</p>
                  </div>
                </div>
              )}

              {card.type === "solid" && (
                <div className="flex flex-col items-start gap-4">
                  {card.icon && (
                    <img
                      src={card.icon}
                      alt="icon"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  )}
                  <h3 className={`text-base sm:text-lg font-semibold ${card.text}`}>
                    {card.title}
                  </h3>
                  <p className={`text-sm ${card.text}`}>{card.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Counters Section */}
      <section
        className="relative bg-cover bg-center text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: "url('/Background1.svg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-red-900/60"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Where Talent, Trust & <br className="hidden lg:block" /> Code Add Up
          </h1>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-6 sm:gap-10 bg-transparent rounded-lg">
            <div className="text-center">
              <Counter target="120" suffix="+" />
              <p className="text-white text-base sm:text-lg md:text-xl">Employees</p>
            </div>

            <p className="hidden sm:block text-white font-bold text-2xl sm:text-3xl">|</p>

            <div className="text-center">
              <Counter target="150" suffix="+" />
              <p className="text-white text-base sm:text-lg md:text-xl">Clients</p>
            </div>

            <p className="hidden sm:block text-white font-bold text-2xl sm:text-3xl">|</p>

            <div className="text-center">
              <Counter target="500" suffix="K" />
              <p className="text-white text-base sm:text-lg md:text-xl">Lines of Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 max-w-6xl mx-auto">
          <div className="flex-1 mb-6 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              DoelSoft Insights & Thought Leadership
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl text-base sm:text-lg">
              Practical playbooks from the field AI, Cloud & Data patterns that ship results.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-red-600 text-white font-semibold px-6 py-3  hover:bg-gray-600 transition w-full lg:w-auto justify-center">
            View all Insights <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {insights.map((item, i) => (
            <div
              key={i}
              className="relative  overflow-hidden shadow-lg group h-64 sm:h-72"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 sm:p-6">
                <p className="text-xs sm:text-sm text-gray-300">{item.client}</p>
                <h3 className="text-base sm:text-lg font-semibold mt-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">{item.desc}</p>
                <button className="mt-3 p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Solutions Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-white">
        <div className="mb-12 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Featured Solutions</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
            Opinionated, production-ready solutions that turn AI, Cloud & Data into outcomes fast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-7xl mx-auto items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {solutions.map((item, i) => (
              <div
                key={i}
                className={`p-6  shadow-sm transition hover:shadow-md ${
                  item.type === "bg"
                    ? "bg-gray-100"
                    : "border border-red-500 bg-white"
                }`}
              >
                <img src={item.icon} alt={item.title} className="h-10 w-10 mb-4 object-contain" />
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}

            <div className="p-6  bg-red-600 hover:bg-gray-600 text-white flex flex-col  justify-between sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-base sm:text-lg mb-4">Talk to an Expert</h3>
              <button className="self-end w-10 h-10 flex items-center justify-center rounded-full  border border-white hover:bg-white hover:text-red-600 transition">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/Solution.svg" 
              alt="Solution Graphic"
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="relative bg-cover bg-center text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: "url('/Background2.svg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-red-900/60"></div>
        <div className="relative max-w-3xl mx-auto text-white z-10 space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
            Let’s Build the Future Together
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
            Tell us your goals. We’ll design the runway then deliver it with AI,
            Cloud & Data.
          </p>
          <button className="flex items-center gap-2 bg-red-600 hover:bg-gray-600 text-white font-semibold px-6 sm:px-8 py-4  text-base sm:text-lg shadow-lg transition justify-center mx-auto">
            Talk to an Expert <ArrowUpRight size={20} />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home