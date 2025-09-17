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
    },[])

    
  return (
    <div className='w-full h-full '>
   <section className="w-full min-h-screen flex justify-center bg-white">
  <div className="max-w-7xl w-full mx-auto px-4 py-10 sm:py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
    {/* Left Content */}
    {CursolDetails.map((details, index) => (
      <div
        key={index}
        className={`flex-1 font-kumbh transition-opacity duration-700 ${
          cursol === index ? "opacity-100 relative" : "opacity-0 absolute"
        } w-full md:w-1/2`}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold w-full">
          {details.h11}
          <br />
          <span className="text-red-600 mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {details.h22}
          </span>
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4">
          {details.p}
        </p>

        <div className="flex flex-col sm:flex-row mt-6 md:mt-10 gap-4">
          <button className="bg-red-600 hover:bg-gray-900 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 font-medium">
            Explore Solutions ↗
          </button>
          <button className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 font-medium border border-black hover:bg-red-600 hover:text-white">
            Consult with Us ↗
          </button>
        </div>

        <div className="mt-6 md:mt-8">
          <div className="flex gap-4 sm:gap-6 md:gap-8 animate-marquee whitespace-nowrap">
            {[spring, wipro, zingo, mevatron, menlo, tech].map((logo, i) => (
              <div
                key={i}
                className="w-16 sm:w-20 md:w-24 h-12 sm:h-14 md:h-16 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`logo-${i}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
          <p className="text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl py-4 md:py-6">
            Trusted by{" "}
            <span className="font-medium">
              Leading Enterprises & Fast–Growing Teams
            </span>
          </p>
        </div>
      </div>
    ))}

    {/* Right Content */}
    <div className="relative flex-1 flex flex-col items-center w-full md:w-1/2 mt-8 md:mt-0">
      <img
        src={mask}
        alt="mask"
        className="absolute  md:w-full rounded-full bg-gray-200"
      />

      <img
        src={CursolDetails[cursol].img}
        alt={CursolDetails[cursol].h22}
        className={`w-full h-auto ${cursol==0 ? "animate-moveOnce" :""}  z-50 object-contain`}
      />

      {/* Testimonials */}
      {Testimonial.map((item, index) => (
        <div
          key={index}
          className={`absolute top-40 sm:top-48 md:top-56 lg:top-64 right-2 sm:right-3 md:right-4 bg-white z-50 shadow-xl rounded-md p-2 sm:p-3 md:p-4 w-40 sm:w-48 md:w-56 lg:w-60 transition-opacity duration-1000 ${
            index === testimonialIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xs sm:text-sm md:text-base italic text-gray-600">
            "{item.quote}"
          </p>
          <div className="flex items-center mt-2 gap-2">
            <RxAvatar size={20} sm={24} md={28} />
            <div>
              <p className="text-xs sm:text-sm md:text-base font-semibold">
                {item.name}
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                Founder @ {item.company}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Floating Tags */}
      <div className='md:mt-20'>
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24  left-0 bg-white shadow-md rounded-md px-2 sm:px-3 py-1 sm:py-2 flex items-center gap-2 text-xs sm:text-sm md:text-base">
        <span className="font-semibold">Budget Friendly</span>
        <span className="text-xs text-red-600">Life Long</span>
      </div>
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-0 bg-white shadow-md rounded-md px-2 sm:px-3 py-1 sm:py-2 flex items-center gap-2 text-xs sm:text-sm md:text-base">
        <span className="font-semibold">Native, Fast & Powerful</span>
        <span className="text-xs text-red-600">AI leverage</span>
      </div>
        
      </div>
      
    </div>

    {/* Vertical Carousel Indicators */}
    <div className="hidden md:flex flex-col gap-2  md:gap-4 absolute right-2  md:right-4 top-1/2 -translate-y-1/2">
      {CursolDetails.map((_, index) => (
        <button
          key={index}
          onClick={() => setCursol(index)}
          className={`w-2 h-6 sm:h-7 md:h-8 rounded-full transition-all duration-300 ${
            cursol === index ? "bg-red-600" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  </div>
</section>

<section className="w-full min-h-screen bg-black">
  <h1 className="text-white text-xl  font-bold pl-4 sm:pl-6 pt-6 sm:pt-8">
    Industries We Serve
  </h1>
  <div className="px-4 sm:px-6 flex flex-col items-center justify-center gap-4 sm:gap-6">
    <h2 className="text-white text-3xl md:text-4xl  font-semibold text-center">
      AI for Every Industry
    </h2>
    <p className="text-white text-lg  px-4  text-center">
      We turn domain challenges into measurable outcomes with modern <br /> cloud, trusted data, and production-ready AI.
    </p>
  </div>
  <div className="grid grid-cols-2 md:flex flex-row gap-4  py-20 md:py-24  px-4 md:px-48">
    {services.map((service, i) => (
      <div
        key={i}
        className="flex flex-col items-center hover:scale-105 duration-300"
      >
        <img
          src={service.logo}
          alt={service.title}
          className="py-4  px-4 w-28 md:w-48 h-auto object-contain"
        />
        <p className="text-white text-lg w-28  md:w-48  text-center">
          {service.title}
        </p>
      </div>
    ))}
  </div>
</section>
    <section className='w-full h-full bg-white flex flex-col md:flex-row gap-10'>
      <div className='w-[#70%] mx-16 items-start md:items-center  py-10'>
        <div className='flex-1 space-y-6 font-kumbh'>
          <h1 className='font-bold text-3xl md:text-4xl'>DoelSoft<br/>Core Services</h1>
          <p className='text-lg'>We Combine AI,Cloud & Data to design,build and <br/> scale secure digital products aligned to measurable outcomes.</p>
          <img src="Robot2.svg" alt='robot2' className='w-96 h-auto animate-moveOnce'/>
         { /*<img src={button} alt='button' className=' pl-10 pt-10 w-64 h-auto  '/> */}
         <p className='bg-red-600 text-white px-16 py-6 font-medium  text-2xl hover:bg-gray-900 w-[#38px] h-[#28px]'>Explore AI Strategy<span className='justify-center rounded-full border px-1.5 py-0 m-14 '>&#8599;</span></p>
        
          </div>

      </div>
      <div className="relative w-[#30%]  grid grid-cols-1 md:grid-cols-2 gap-6 mx-16 py-10">
        <div className='border   border-gray-600 px-10 py-8'>
          <img src={AI} alt='AI' className='w-12 h-auto mb-4'/>
          <h3 className='text-black font-semibold text-xl'>AI Strategry & Consulting</h3>
          <ul className='list-disc list-inside text-gray-600 mt-4 space-y-2'>
            <li>Gen-AI features & Copilots</li>
            <li>Microservices & API,Integrations</li>
            <li>Performance,security,observability</li>

          </ul>
        </div>
        <div className='border border-gray-600 px-10 py-8'>
          <img src={cloud} alt='cloud' className='w-12 h-auto mb-4'/>
          
          <h3 className='text-black font-semibold text-xl'>Cloud & AI Infrastructure</h3>
          <ul className='list-disc list-inside text-gray-600 mt-4 space-y-2'>
            <li>Cloud migrations & Modernization</li> 
            <li>MLOPs Platfroms,model serving</li>
            <li>Cost,reliability & security baselines</li>

          </ul>
        </div>
        <div className='border border-gray-600 px-10 py-8'>
          <img src={data} alt='data' className='w-12 h-auto mb-4'/>
          <h3 className='text-black font-semibold text-xl'>Data Science & Analytics</h3>
          <ul className='list-disc list-inside text-gray-600 mt-4 space-y-2'>
            <li>Data engineering & Governace</li>
            <li>ML modeling & evaluation</li>
            <li>BI dashboards & decision intelligence</li>

          </ul>
        </div>
        <div className='border border-gray-600 px-10 py-8'>
          <img src={Intelligent} alt='Intelligent' className='w-12 h-auto mb-4'/>
          <h3 className='text-black font-semibold text-xl'>Intelligent Software Deve</h3>
          <ul className='list-disc list-inside text-gray-600 mt-4 space-y-2'>
            <li>Gen-AI features & copilotsn</li>
            <li>Microservices & APIs, integrations</li>
            <li>Performance, security, observability</li>

          </ul>
        </div>
        <div className='border border-gray-600 px-10 py-8'>
          <img src={CyberSecurity} alt='CyberSecurity' className='w-12 h-auto mb-4'/>
          <h3 className='text-black font-semibold text-xl'>AI-Enhanced CyberSecurity</h3>
          <ul className='list-disc list-inside text-gray-600 mt-4 space-y-2'>
            <li>Anomaly & fraud detection</li>
            <li>Identity,access & zero-trust</li>
            <li>Compilance hardening & monitoring</li>

          </ul>
        </div>
        <div className='border border-gray-600 px-10 py-8'>
          <img src={Accessibility} alt='Accessibility' className='w-12 h-auto mb-4'/>
          <h3 className='text-black font-semibold text-xl'>Accessibility Inclusive Design</h3>
          <ul className='list-disc list-inside text-gray-600 mt-4 space-y-2'>
            <li>Accessibility audits & remediation</li>
            <li>Inclusive UX writing & patterns</li>
            <li>Continuous accessibility in CI/CD</li>

          </ul>
        </div>
        

      </div>

    </section>
     <section className="relative bg-gradient-to-r from-green-200 via-yellow-100 to-red-200 py-16 px-6">
      <div className="max-w-6xl mx-auto text-left">
        <h3 className="text-lg text-gray-700">Doelsoft</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">How we work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-red-600 text-white rounded-md p-6 flex flex-col justify-between shadow-lg hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                {step.icon}
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-sm mb-6">{step.desc}</p>
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
    <section className='w-full h-full bg-white flex flex-col md:flex-row gap-10'>
      <div className='w-[#70%] mx-16 items-start md:items-center  py-10'>
         <div className="relative flex-1 flex flex-col items-center top-0">
          {/* Robot Image with animation */}
          
             <img src={Background} alt='mask' className='absolute  w-38 h-96 bg-gray-200 ' />
          <img 
            src="/Girl.svg"
            alt="Girl" 
            className="w-1/2 md:w-full h-full z-50  animate-none" 
          />

          {/* Testimonial Card */}
          {Testimonial.map((item, index) =>(
          <div className={`absolute top-80 right-0  mt-10   h-38 bg-white z-50  shadow-xl rounded-md ml-18 pl-16   p-4 w-60  transition-opacity duration-1000 ${
          index === testimonialIndex ? 'opacity-100' : 'opacity-0 '}`} key={index}>
            <p className="text-sm italic text-gray-600">
                "{item.quote}"
            </p>
            <div className="flex items-center mt-2 gap-2 bg-white ">
              <RxAvatar  size={36}/>
              <div className=''>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-gray-500">Founder @ {item.company}</p>
              </div>
            </div>
          </div>
))}

          </div>
     

      </div>
      <div className='w-[#30%] mx-16 py-40 md:py-10'>
        <h1 className='font-bold text-3xl md:text-4xl py-8'>Why Doelsoft</h1>
        <p className='py-4'>We turn AI, Cloud & Data into measurable outcomes shipping production systems with governance, security, and accessibility built in.</p>
        <h2 className='font-bold text-2xl md:text-3xl'>Proof points</h2>
        <ul className='list-disc list-inside text-black mt-4 space-y-2'>
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
        

    </section>
  
   <section className="relative bg-white py-0 px-48">
  <div className="hidden md:flex flex-row flex-wrap gap-6">
    {frames.map((frame, i) => (
      <div key={i} className="flex flex-col justify-between">
        <img
          src={frame}
          alt={`Frame ${i + 1}`}
          className="w-full md:w-56 h-full m-4 rounded-xl  object-cover"
        />
      </div>
    ))}
  </div>
</section>
 <section className="bg-white py-2 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Outcomes We Deliver
        </h2>
        <p className="mt-4 text-gray-600">
          We apply AI, Cloud & Data to move the metrics that matter speed, cost,
          and customer experience backed by production-grade delivery.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-lg shadow-lg ${
              card.type === "solid" ? card.bg : ""
            } ${card.type==="solid" ? "h-80" :"h-full"} ${card.type==="solid" ? "justify-center" : ""}`}
          >
            {/* For image-based cards */}
            {card.type === "image" && (
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-70 p-6">
                  <h3 className={`text-lg font-semibold ${card.text}`}>
                    {card.title}
                  </h3>
                  <p className={`mt-2 text-sm ${card.text}`}>{card.desc}</p>
                </div>
              </div>
            )}

            {/* For solid-color cards */}
            {card.type === "solid" && (
              <div className="p-8 flex flex-col items-start">
                {card.icon && (
                  <img
                    src={card.icon}
                    alt="icon"
                    className="w-12 h-12 mb-4"
                  />
                )}
                <h3 className={`text-lg font-semibold ${card.text}`}>
                  {card.title}
                </h3>
                <p className={`mt-2 text-sm ${card.text}`}>{card.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
   <section
  className="relative bg-cover bg-center text-center py-40 mt-10 px-6 overflow-hidden"
  style={{
    backgroundImage: "url('/Background1.svg')", // replace with your image
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-red-900/60"></div>

  {/* Animated Background Zoom */}
  <div className="absolute inset-0 scale-105 transform animate-[pulse_10s_infinite]"></div>

  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 px-4 md:px-12 lg:px-20">
    {/* Left Heading */}
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white px-2 py-4 rounded-lg text-center md:text-left">
      Where Talent, Trust & <br /> Code Add Up
    </h1>

    {/* Right Counters */}
    <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-6 md:gap-10 bg-transparent rounded-lg">
      <div className="text-center">
        <Counter target="120" suffix="+" />
        <p className="text-white text-lg md:text-xl">Employees</p>
      </div>

      <p className="hidden md:block text-white font-bold text-3xl">|</p>

      <div className="text-center">
        <Counter target="150" suffix="+" />
        <p className="text-white text-lg md:text-xl">Clients</p>
      </div>

      <p className="hidden md:block text-white font-bold text-3xl">|</p>

      <div className="text-center">
        <Counter target="500" suffix="K" />
        <p className="text-white text-lg md:text-xl">Lines of Code</p>
      </div>
    </div>
  </div>
</section>

<section className="px-6 md:px-12 py-12 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            DoelSoft Insights & Thought Leadership
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Practical playbooks from the field AI, Cloud & Data patterns that ship results.
          </p>
        </div>
        <button className="mt-6 md:mt-0 flex items-center gap-2 bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition">
          View all Insights <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((item, i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden shadow-lg group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:w-full md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <p className="text-sm text-gray-300">{item.client}</p>
              <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
              <button className="mt-3 p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="px-6 md:px-12 py-16 bg-white">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Featured Solutions</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Opinionated, production-ready solutions that turn AI, Cloud & Data into outcomes fast.
        </p>
      </div>

      {/* Layout: Left cards, Right image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {solutions.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-lg shadow-sm transition hover:shadow-md ${
                item.type === "bg"
                  ? "bg-gray-100"
                  : "border border-red-500 bg-white"
              }`}
            >
              <img src={item.icon} alt={item.title} className="h-10 w-10 mb-4" />
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="p-6 rounded-lg bg-red-600 text-white flex flex-col justify-between">
            <h3 className="font-semibold text-lg">Talk to an Expert</h3>
            <button className="mt-4 w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-red-600 transition">
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

       
        <div className="flex justify-center lg:justify-end">
          <img
            src="/Solution.svg" 
            alt="Solution Graphic"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
        <section
      className="relative bg-cover bg-center text-center py-24 px-6 overflow-hidden"
      style={{
        backgroundImage:
          "url('/Background2.svg')", // replace with your image
      }}
    >
      {/* Dark + Red Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-red-900/60"></div>

      {/* Animated Background Zoom */}
      <div className="absolute inset-0 scale-105 transform animate-[pulse_10s_infinite]"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-white z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Let’s Build the Future Together
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
          Tell us your goals. We’ll design the runway then deliver it with AI,
          Cloud & Data.
        </p>
        <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition mx-auto">
          Talk to an Expert <ArrowUpRight size={20} />
        </button>
      </div>
    </section>




    </div>
  )
}

export default Home