import React from "react";
import { ArrowUpRight } from "lucide-react"; // for arrow icons

// sample images (replace with your own)
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import { Link } from "react-router";



function TalentHub() {
    const services = [
  { id: 1, title: "IT Staffing Solutions", image:"/Image1.svg",link:"/itstaffing" },
  { id: 2, title: "Contract & Temporary Hiring", image: 
"/Image2.svg",link:"/contract"
   },
  { id: 3, title: "Permanent Hiring", image: "/Image3.svg",link:"/permanent" },
  { id: 4, title: "Executive Search", image: "/Image4.svg",link:"/excutive" },
  { id: 5, title: "RPO", image: "/Image5.svg",link:"/rpo" },
];
  return (
    <div>
   <section className="relative w-full mt-10 py-20 flex flex-col items-center text-center overflow-hidden">
  {/* Background */}
  <div
    className="absolute bg-cover bg-center inset-0"
    style={{ backgroundImage: "url('/worldmap.svg')" }}
  ></div>

  {/* Headings */}
  <div className="relative z-10 px-4">
    <h1 className="text-4xl md:text-5xl font-bold font-sans text-red-600">
      Recruitment
    </h1>
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 my-2">
      &
    </h2>
    <h1 className="text-4xl md:text-5xl font-bold text-red-600">
      Staffing Services
    </h1>
  </div>

  {/* Buttons */}
  <div className="mt-8 flex flex-wrap justify-center gap-4 z-10 relative px-4">
    <button className="transition-all duration-300 ease-in-out flex items-center gap-2 bg-red-600 text-white px-6 py-3 font-medium hover:bg-gray-600 focus:outline-none">
      About Doelsoft <ArrowUpRight size={18} />
    </button>
    <button className="transition-all duration-300 ease-in-out flex items-center gap-2 border border-gray-600 px-6 py-3 font-medium hover:bg-red-600 hover:text-white focus:outline-none">
      Consult With Us <ArrowUpRight size={18} />
    </button>
  </div>

  {/* Floating Profile Images */}
  <div className="relative w-full max-w-5xl mt-12 px-4">
    {/* Top Left */}
    <img
      src={img1}
      alt="profile1"
      className="absolute -top-80 left-2 sm:-top-72 sm:left-8 md:-top-80 md:-left-24 w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 rounded-full object-cover"
    />
    {/* Middle Left */}
    <img
      src={img3}
      alt="profile2"
      className="absolute top-1 left-4 sm:-top-8 sm:-left-4 md:-top-8 md:-left-36 w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 rounded-full object-cover"
    />
    {/* Top Right */}
    <img
      src={img2}
      alt="profile3"
      className="absolute -top-80 right-2 sm:-top-72 sm:right-8 md:-top-80 md:-right-24 w-16 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover"
    />
    {/* Bottom Right */}
    <img
      src={img4}
      alt="profile4"
      className="absolute -bottom-20 right-4 sm:-top-4 md:-top-14 md:-right-24 w-29 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover"
    />
    {/* Bottom Center */}
    <img
      src={img5}
      alt="profile5"
      className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full object-cover"
    />
  </div>
</section>

     <section className="w-full bg-white py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Recruitment & Staffing Services
        </h2>
        <p className="text-gray-600 mt-4">
          At Doelsoft, we believe that recruitment is more than filling vacancies
          it’s about creating partnerships that shape the future of businesses.
          We combine deep industry knowledge, advanced hiring practices, and a
          powerful talent network to deliver people who not only meet
          requirements but also inspire growth.
        </p>
        <p className="font-semibold mt-4">
          With us, you don’t just hire resources. You hire results.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-1 md:mr-7 justify-items-center">
        {services.slice(0,3).map((service) => (
          <div
            key={service.id}
            className="w-full sm:w-[280px] md:w-[320px] bg-black text-white shadow-lg  overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center"><Link to={service.link} >
              <h3 className="text-lg font-semibold">{service.title}</h3></Link>
            </div>
          </div>
        ))}

        
      </div>
      <div className="md:ml-72 grid grid-cols-1 md:grid-cols-2 md:mr-52 py-14">
        {services.slice(3).map((service) => (
          <div
            key={service.id}
            className="w-full sm:w-[280px] md:w-[320px] bg-black text-white shadow-lg  overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center"><Link to={service.link} >
              <h3 className="text-lg font-semibold">{service.title}</h3></Link>
            </div>
          </div>
        ))}
      </div>
      </section>
      <section className="py-10 bg-[#F3F3F3] w-[#1440px] h-[#576px] text-start  font-sans">
      <h1 className="text-4xl md:ml-32 font-bold ml-10 text-black mb-4">
        Why Doelsoft?
      </h1>
      <p className="text-lg text-black ml-10 md:ml-32 mb-10 max-w-3xl mx-auto">
        When it comes to recruitment, we don't just deliver candidates we deliver confidence.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:ml-32 max-w-7xl mx-auto">
        <div className="border border-black p-10 mx-10  md:mx-auto md:w-[#294px] h-[#255px]  text-left">
          <img src={"./Tailored.svg"} className="w-10 h-10 mb-4" />{/* Replace with actual icon, e.g., from react-icons */}
          <h3 className="text-lg font-bold mb-2">
            Tailored Approach
          </h3>
          <p>Every solution is designed to match your unique challenges.</p>
        </div>
        <div className="border border-black mx-10  md:mx-auto p-10 w-[#294px] h-[#255px] text-left">
           <img src={"./Unmatched.svg"} className="w-10 h-10 mb-4" /> {/* Replace with checkmark icon */}
          <h3 className="text-lg  font-bold mb-2">
            Unmatched Quality
          </h3>
          <p>Strict screening ensures only the best reach you.</p>
        </div>
        <div className="border border-black mx-10  md:mx-auto  p-10 w-[#294px] h-[#255px] text-left">
            <img src={"./Precision.svg"} className="w-10 h-10 mb-4" />{/* Replace with target icon */}
          <h3 className="text-lg font-bold mb-2">
            Speed with Precision
          </h3>
          <p>Fast closures without compromising fit.</p>
        </div>
        <div className="border border-black mx-10 md:mx-auto p-10 w-[#294px] h-[#255px]  text-left">
           <img src={"./Partnership.svg"} className="w-10 h-10 mb-4" /> {/* Replace with handshake icon */}
          <h3 className="text-lg font-bold mb-2">
            Long-Term Partnership
          </h3>
          <p>More than a vendor, we are your hiring ally.</p>
        </div>
      </div>
    </section>
   
  <div className="p-6 sm:p-8 md:p-10 lg:p-12 ml-4 sm:ml-8 md:ml-20">
  <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
    Our Core Values at Doelsoft
  </h1>

  <p className="text-black mb-6 text-sm sm:text-base text-center md:text-left">
    At Doelsoft, we don't just fill roles — we build partnerships that fuel growth. Every staffing solution we provide, whether
    contract, permanent, offshore, or nearshore, is anchored in our unwavering core values. These principles guide us in creating
    meaningful connections between businesses and talent, ensuring trust, success, and long-term impact.
  </p>

  <div className="space-y-6 ml-0 sm:ml-6 md:ml-14">
    {/* Trustworthy */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img src={"./Result.svg"} className="w-14 h-14 mx-auto p-2 border border-black sm:mx-0" alt="Trustworthy" />
      <div>
        <h3 className="text-black text-lg font-semibold text-center sm:text-left">
          Trustworthy — Dependable in Every Step
        </h3>
        <p className="text-black text-sm sm:text-base text-center sm:text-left">
          Your trust is our greatest responsibility. At Doelsoft, a promise is never taken lightly — we deliver on time, every
          time. From urgent contract needs to building long-term teams, our clients rely on us because we consistently keep our
          word and stand by our commitments.
        </p>
      </div>
    </div>

    {/* Stewardship */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img  src={"./Trustworthy.svg"} className="w-14 h-14 mx-auto p-2 border border-black sm:mx-0" alt="Stewardship" />
      <div>
        <h3 className="text-black text-lg font-semibold text-center sm:text-left">
          Stewardship — Taking Responsibility, Driving Results
        </h3>
        <p className="text-black text-sm sm:text-base text-center sm:text-left">
          We see ourselves as stewards of your vision. That means taking ownership of every process and outcome — whether sourcing
          exceptional permanent hires or managing offshore teams. Through proactive solutions and transparent communication, we
          safeguard your goals as if they were our own.
        </p>
      </div>
    </div>

    {/* Credibility */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img  src={"./Stewardship.svg"} className="w-14 h-14 mx-auto p-2 border border-black sm:mx-0" alt="Credibility" />
      <div>
        <h3 className="text-black text-lg font-semibold text-center sm:text-left">
          Credibility — Trust Built on Action
        </h3>
        <p className="text-black text-sm sm:text-base text-center sm:text-left">
          In today's competitive staffing landscape, credibility is everything. At Doelsoft, we back our words with consistent
          action. Every decision, placement, and engagement is grounded in honesty, fairness, and reliability — so you can count on
          us to be a partner you trust, time after time.
        </p>
      </div>
    </div>

    {/* Respect */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img src={"./Credibility.svg"}  className="w-14 h-14 mx-auto p-2 border border-black sm:mx-0" alt="Respect" />
      <div>
        <h3 className="text-black text-lg font-semibold text-center sm:text-left">
          Respect — People First, Always
        </h3>
        <p className="text-black text-sm sm:text-base text-center sm:text-left">
          Behind every role is a person, and behind every business is a vision. We honor both. With humility and empathy, we treat
          every candidate and client as partners in success. Our respectful approach creates inclusive environments where diverse
          talent thrives and collaboration flourishes.
        </p>
      </div>
    </div>

    {/* Result-Oriented */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img src={"./Respect.svg"}className="w-14 h-14 mx-auto p-2 border border-black  sm:mx-0" alt="Result-Oriented" />
      <div>
        <h3 className="text-black text-lg font-semibold text-center sm:text-left">
          Result-Oriented — Excellence You Can Measure
        </h3>
        <p className="text-black text-sm sm:text-base text-center sm:text-left">
          We don't just promise results — we deliver them. With strong processes, proven methodologies, and decades of experience,
          we provide reliable outcomes that give you a competitive edge. Every staffing solution is designed to add measurable
          value to your business.
        </p>
      </div>
    </div>
  </div>

  <div className="mt-6 p-6 sm:p-8 bg-red-600 text-white text-center ">
    <p className="text-sm sm:text-base leading-relaxed">
      At Doelsoft, our values are not just words — they are the foundation of every decision, every interaction, and every success
      story we help create. Partner with us, and let's build not just your team, but your future.
    </p>
  </div>
</div>

 
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

export default TalentHub;
