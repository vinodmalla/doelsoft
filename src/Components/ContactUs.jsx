import React, { useState } from "react";
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
    url: "https://www.google.com/maps/place/Manjeera+Trinity+Corporate/@17.4893763,78.3900814,17z",
    style: "left-[70%] top-[50%]",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative w-full font-kumbh bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[550px] flex flex-col md:flex-row items-center md:items-end justify-between px-6 md:px-12 lg:px-24 py-10 md:py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/worldmap.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Text Content */}
        <div className="relative z-10 flex-1 text-center md:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-red-600 leading-tight">
            Let’s Build the <br />
            <span className="block mt-2">Future Together</span>
          </h2>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 sm:gap-6 mt-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-600 w-10 md:w-6 h-10 md:h-6 mt-1" />
              <div>
                <h3 className="text-red-600 font-semibold">Address</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Office No: 604, 1st floor, Marvela Infinity Corporate, <br />
                  dNo: 1a, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="text-gray-600 w-6 h-6 mt-1" />
                <div >
                  <h3 className="text-red-600 font-semibold">Phone</h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    040 - 68853867 <br /> +1 321 204 3271
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="text-gray-600 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-red-600 font-semibold">Email</h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    info@doelsoft.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Right */}
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end flex-1">
          <img
            src="/Contact.svg"
            alt="Team"
            className="w-[280px] sm:w-[380px] md:w-[450px] lg:w-[520px] object-contain"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#F4F6FB] py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get in <span className="text-red-600">Touch</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Share your goals across AI, Cloud & Data—we’ll review and
              recommend next steps within one business day.
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

          {/* Map Section */}
          <div className="w-full lg:w-1/2 relative">
            <img src="/MAP.svg" alt="World Map" className="w-full opacity-80" />

            <div className="absolute left-[35%] top-[40%] bg-white shadow-md rounded-md px-3 py-1 flex items-center gap-2 text-sm">
              <span>🇲🇽</span> SA
            </div>

            <div className="absolute left-[28%] bottom-[38%] bg-white shadow-md rounded-md px-3 py-1 flex items-center gap-2 text-sm">
              <span>🇺🇸</span> USA
            </div>

            <div className="absolute right-[30%] top-[28%] bg-white shadow-md rounded-md px-3 py-1 flex items-center gap-2 text-sm">
              <span>🇫🇮</span> Europe
            </div>

            <div className="absolute right-[22%] bottom-[40%] bg-white shadow-md rounded-md px-3 py-1 flex items-center gap-2 text-sm">
              <span>🇮🇳</span> India
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-[#F4F6FB] overflow-hidden">
        <img
          src="/location2.png"
          alt="World Map"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <button
          onClick={() => window.open(location.url, "_blank")}
          className={`absolute ${location.style} w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition`}
          title={location.name}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-3 h-3 sm:w-4 sm:h-4"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
          </svg>
        </button>
      </section>
    </div>
  );
}

export default ContactUs;
