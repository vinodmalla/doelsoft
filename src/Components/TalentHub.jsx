import React from "react";
import { ArrowUpRight } from "lucide-react"; // for arrow icons

// sample images (replace with your own)
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";



function TalentHub() {
    const services = [
  { id: 1, title: "IT Staffing Solutions", image:"/Image1.svg" },
  { id: 2, title: "Contract & Temporary Hiring", image: 
"/Image2.svg"
   },
  { id: 3, title: "Permanent Hiring", image: "/Image3.svg" },
  { id: 4, title: "Executive Search", image: "/Image4.svg" },
  { id: 5, title: "RPO", image: "/Image5.svg" },
];
  return (
    <div>
    <section className="relative w-full mt-10  py-20 flex flex-col items-center text-center overflow-hidden">
      {/* Background (replace with your own image if needed) */}
      <div
  className="absolute bg-cover bg-center inset-0 "
  style={{ backgroundImage: "url('/worldmap.svg')" }}
></div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold font-sans text-red-600">
        Recruitment
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 my-2">
        &
      </h2>
      <h1 className="text-4xl md:text-5xl font-bold text-red-600">
        Staffing Services
      </h1>

      {/* Buttons */}
    {/* Buttons */}
<div className="mt-8 flex flex-wrap gap-4 z-10 relative">
  <button className="transition-all duration-300 ease-in-out flex items-center gap-2 bg-red-600 text-white px-6 py-3 font-medium hover:bg-gray-600 focus:outline-none">
    About Doelsoft <ArrowUpRight size={18} />
  </button>
  <button className="transition-all duration-300 ease-in-out flex items-center gap-2 border border-gray-600 px-6 py-3 font-medium hover:bg-red-600 hover:text-white focus:outline-none">
    Consult With Us <ArrowUpRight size={18} />
  </button>
</div>



      {/* Floating Profile Images */}
      <div className="relative w-full max-w-5xl mt-12">
        {/* Top Left */}
        <img
          src={img2}
          alt="profile1"
          className="absolute -top-80 left-0 w-28 h-28 rounded-full object-cover "
        />
        {/* Middle Left */}
        <img
          src={img1}
          alt="profile2"
          className="absolute -top-8 -left-0 w-28 h-28 rounded-full object-cover "
        />
        {/* Top Right */}
        <img
          src={img3}
          alt="profile3"
          className="absolute -top-80 right-0 w-24 h-24 rounded-full object-cover "
        />
        {/* Bottom Right */}
        <img
          src={img4}
          alt="profile4"
          className="absolute bottom-0 -top-8 right-4 w-28 h-28 rounded-full object-cover "
        />
        {/* Bottom Center */}
        <img
          src={img5}
          alt="profile5"
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full object-cover"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-8 justify-items-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full sm:w-[280px] md:w-[320px] bg-black text-white shadow-lg  overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
      </section>
      <section className="py-10 bg-[#F3F3F3] w-[#1440px] h-[#576px] text-start  font-sans">
      <h1 className="text-4xl font-bold ml-10 text-black mb-4">
        Why Doelsoft?
      </h1>
      <p className="text-lg text-black ml-10 mb-10 max-w-3xl mx-auto">
        When it comes to recruitment, we don't just deliver candidates we deliver confidence.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div className="border border-black p-10 w-[#294px] h-[#255px]  text-left">
          <img src={"./Tailored.svg"} className="w-10 h-10 mb-4" />{/* Replace with actual icon, e.g., from react-icons */}
          <h3 className="text-lg font-bold mb-2">
            Tailored Approach
          </h3>
          <p>Every solution is designed to match your unique challenges.</p>
        </div>
        <div className="border border-black p-10 w-[#294px] h-[#255px] text-left">
           <img src={"./Unmatched.svg"} className="w-10 h-10 mb-4" /> {/* Replace with checkmark icon */}
          <h3 className="text-lg font-bold mb-2">
            Unmatched Quality
          </h3>
          <p>Strict screening ensures only the best reach you.</p>
        </div>
        <div className="border border-black   p-10 w-[#294px] h-[#255px] text-left">
            <img src={"./Precision.svg"} className="w-10 h-10 mb-4" />{/* Replace with target icon */}
          <h3 className="text-lg font-bold mb-2">
            Speed with Precision
          </h3>
          <p>Fast closures without compromising fit.</p>
        </div>
        <div className="border border-black p-10 w-[#294px] h-[#255px]  text-left">
           <img src={"./Partnership.svg"} className="w-10 h-10 mb-4" /> {/* Replace with handshake icon */}
          <h3 className="text-lg font-bold mb-2">
            Long-Term Partnership
          </h3>
          <p>More than a vendor, we are your hiring ally.</p>
        </div>
      </div>
    </section>
   
    <div className=" p-10 ml-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values at Doelsoft</h1>
      <p className="text-black mb-6 ">
        At Doelsoft, we don't just fill roles we build partnerships that fuel growth. Every staffing solution we provide, whether contract,
        permanent, offshore, or nearshore, is anchored in our unwavering core values. These principles guide us in creating meaningful
        connections between businesses and talent, ensuring trust, success, and long-term impact.
      </p>

      <div className="space-y-6 ml-14">
        <div className="bg-white p-4 flex items-start gap-4">
          <img src={"./Trustworthy.svg"} className="w-10 h-10 " />
          <div>
            <h3 className="text-black text-lg font-semibold">Trustworthy Dependable in Every Step</h3>
            <p className="text-black">
              Your trust is our greatest responsibility. At Doelsoft, a promise is never taken lightly we deliver on time, every time. From urgent
              contract needs to building long-term teams, our clients rely on us because we consistently keep our word and stand by our commitments.
            </p>
          </div>
        </div>

        <div className="bg-white p-4   flex items-start gap-4">
          <img src={"./Stewardship.svg"} className="w-10 h-10 " />
          <div>
            <h3 className="text-black text-lg font-semibold">Stewardship Taking Responsibility, Driving Results</h3>
            <p className="text-black">
              We see ourselves as stewards of your vision. That means taking ownership of every process and outcome whether sourcing exceptional
              permanent hires or managing offshore teams. Through proactive solutions and transparent communication, we safeguard your goals as if they were our own.
            </p>
          </div>
        </div>

        <div className="bg-white p-4  flex items-start gap-4">
         <img src={"./Credibility.svg"} className="w-10 h-10 " />
          <div>
            <h3 className="text-black text-lg font-semibold">Credibility Trust Built on Action</h3>
            <p className="text-black">
              In today's competitive staffing landscape, credibility is everything. At Doelsoft, we back our words with consistent action. Every
              decision, every placement, and every engagement is grounded in honesty, fairness, and reliability so you can count on us to be a
              partner you trust, time after time.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 flex items-start gap-4">
          <img src={"./Respect.svg"} className="w-10 h-10 " />
          <div>
            <h3 className="text-black text-lg font-semibold">Respect People First, Always</h3>
            <p className="text-black">
              Behind every role is a person, and behind every business is a vision. We honor both. With humility and empathy, we treat every
              candidate and client as partners in success. Our respectful approach creates inclusive environments where diverse talent thrives and
              collaboration flourishes.
            </p>
          </div>
        </div>

        <div className="bg-white p-4  flex items-start gap-4">
        <img src={"./Respect.svg"} className="w-10 h-10 " />
          <div>
            <h3 className="text-black text-lg font-semibold">Result-Oriented Excellence You Can Measure</h3>
            <p className="text-black">
              We don't just promise results—we deliver them. With strong processes, proven methodologies, and decades of experience, we provide
              reliable outcomes that give you a competitive edge. Every staffing solution is designed to add measurable value to your business.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-8 bg-red-600 text-white text-center ">
        <p>
          At Doelsoft, our values are not just words they are the foundation of every decision, every interaction, and every success story we help create. Partner with us, and let's
          build not just your team, but your future.
        </p>
      </div>
    </div>
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
  );
}

export default TalentHub;
