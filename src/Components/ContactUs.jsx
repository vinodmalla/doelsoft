import React,{useState} from 'react'
import { MapPin, Phone, Mail } from "lucide-react";


function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    message: "",
  });
  const location = {
    name: "India",
    url: "https://www.google.com/maps/place/India/",
    style: "left-[70%] top-[50%]", // adjust according to your map image
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="relative max-w-screen mx-auto font-kumbh bg-white mt-8">
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
            <div className="relative z-10  flex-1 flex flex-col justify-end  pl-[13rem] m-[-47px] bottom-48">
                <h2 className="text-6xl gap-6 font-semibold text-red-600 ">
                    Let’s Build the <br />
                    <span className="block mt-4"> Future Together</span>
                </h2>
                <div className="flex items-start gap-3 mt-2 space-y-4">
            <MapPin className="text-gray-600 w-6 h-6 mt-4" />
            <div className='flex flex-col'>
              <h1 className='text-red-600 font-extralight font-kumbh'>Address</h1>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Office No: 604, 1st floor, marvela infinity corporate, <br />
              dNo: 1a, K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072
            </p>
            </div>
          </div>
            <div className="flex flex-row gap-36  mt-5">
          {/* Phone */}
          <div className="flex  items-start gap-3">
            <Phone className='text-gray-600 w-6 h-6 mt-1'/>
            <div className='flex flex-col'>
           <h1 className='text-red-600 font-extralight font-kumbh'>Phone</h1>
          
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              040 - 68853867 <br />
              +1 321 204 3271
            </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className="text-gray-600 w-6 h-6 mt-1" />

            <div className='flex flex-col'>
              <h2 className='text-red-600 font-extra
              light font-kumbh'>Email</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              info@doelsoft.com
            </p>
          </div>
          </div>
          </div>
        </div>
            
            {/* Image Right */}
            <div className="absolute right-36 top-12 h-[432.87px] w-[506.26px] mr-10 flex items-end justify-end z-0">
                <img
                    src="/Contact.svg"
                    alt="Team"
                    className="w-full h-full object-contain md:object-cover"
                    style={{ objectPosition: "right bottom" }}
                />
            </div>
        </section>
         <section className="relative w-full bg-[#F4F6FB] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Share your goals across AI, Cloud & Data—we’ll review and recommend 
            next steps within one business day.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number *"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">How did you find us?</option>
              <option value="google">Google</option>
              <option value="linkedin">LinkedIn</option>
              <option value="friend">Friend/Referral</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Tip Us."
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button
              type="submit"
              className="bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Right Map Section */}
        <div className="w-full lg:w-1/2 relative">
          {/* Background world map (placeholder) */}
          <img
            src="/MAP.svg"
            alt="World Map"
            className="w-full opacity-80"
          />

          {/* Flags */}
          <div className="absolute left-[35%] top-[40%] bg-white shadow-md rounded-md px-3 py-1 flex items-center gap-2">
            <span>🇲🇽</span> SA
          </div>

          <div className="absolute left-[28%] bottom-[38%] bg-white shadow-md rounded-md px-3 py-1 flex items-center gap-2">
            <span>🇺🇸</span> USA
          </div>

          <div className="absolute right-[30%] top-[28%] bg-white shadow-md rounded-md px-3 py-1 flex items-center gap-2">
            <span>🇫🇮</span> Europe
          </div>

          <div className="absolute right-[22%] bottom-[40%] bg-white shadow-md rounded-md px-3 py-1 flex items-center gap-2">
            <span>🇮🇳</span> India
          </div>
        </div>
      </div>
    </section>
<section className="relative w-full h-[700px] bg-[#F4F6FB]">
      {/* Background Map */}
      <img
        src="/Location1.png" // put your map image in public folder
        alt="World Map"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* One Clickable Marker */}
      <button
        onClick={() => window.open(location.url, "_blank")}
        className={`absolute ${location.style} w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition`}
        title={location.name}
      >
        {/* Map Pin Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        </svg>
      </button>
    </section>
      
    </div>
  )
}

export default ContactUs
