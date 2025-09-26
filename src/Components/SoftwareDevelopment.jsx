import React from "react";
import { ArrowUpRight } from "lucide-react";

// Sample image imports (replace with actual images in your assets folder)

const SoftwareDevelopment = () => {
  return (
    <div className="w-full font-kumbh bg-white mt-8">
      <section
        className="relative w-full h-auto min-h-[550px]  flex flex-col md:flex-row items-end overflow-hidden py-10"
        style={{
          backgroundImage: "url('/worldmap.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Left */}
         <div className="relative z-10 flex-1 flex flex-col justify-end pl-28 bottom-48">
        

    <h2 className="text-6xl gap-6 font-semibold text-red-600 mb-8">
    Custom Software <br /> 
    <span className="block mt-4">Development</span>
</h2>
                <button className="  py-2 border border-black text-black hover:bg-gray-200 w-max">

                    Consult With Us <span className="ml-2">↗</span>

                </button>

            </div>
        {/* Image Right */}
        <div  className=" absolute right-36 top-12  h-[#432.87px] w-[#506.26px] mr-10 flex items-end justify-end z-00">
          <img
            src="/SoftwareDevelopment.svg"
            alt="Team"
            // Corrected typo from md:object-coverr and ensure object-cover fills the space
            className="w-full h-full object-contain md:object-cover"
            style={{ objectPosition: "right bottom" }}
          />
        </div>
      </section>

      {/* Description Section */}
      <section className=" mx-auto px-6 md:px-24 mt-4 py-20 bg-[#F4F6FB] grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Custom Software Development Crafted Around Your Business Needs
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Doelsoft, we believe every business is unique, and so should be
            its software solutions. Our custom software development services
            focus entirely on creating applications tailored precisely to your
            company’s goals, challenges, and target audience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our expert team works closely with you throughout the process from
            initial consultation to final delivery ensuring the solution we
            build not only meets your technical requirements but also drives
            real business value. We emphasize collaboration, transparency, and a
            user-first approach to deliver software that is intuitive, reliable,
            and scalable as your business evolves.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="gearImg.svg"
            alt="Custom Software"
            className="max-w-sm transform transition-transform duration-500 hover:scale-110 drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Why Partner Section */}
      <section className=" mx-auto px-0 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          {/* Changed max-w-sm to w-full to allow image to be responsive */}
          <img src="businessTeam.svg" alt="Business Team" className="w-full max-w-sm mx-auto" />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Why Partner with Doelsoft?
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">✔ Tailor-Made Solutions:</span> We
              design and develop software that fits your specific workflows and
              priorities, avoiding generic products.
            </li>
            <li>
              <span className="font-semibold">
                ✔ Client-Focused Collaboration:
              </span>{" "}
              Your vision guides every stage. We maintain continuous
              communication.
            </li>
            <li>
              <span className="font-semibold">✔ Empowering User Experiences:</span>{" "}
              Simplicity and efficiency to engage and accomplish tasks seamlessly.
            </li>
            <li>
              <span className="font-semibold">✔ Cutting-Edge Technologies:</span>{" "}
              We build future-ready solutions that grow with your organization.
            </li>
            <li>
              <span className="font-semibold">✔ End-to-End Support:</span> Beyond
              development, we provide maintenance and upgrades.
            </li>
          </ul>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="w-full bg-[#F4F6FB] mx-auto py-16 px-6 md:px-36">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-10">
          Our Areas of Expertise
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              src: "E1.svg",
              text: "Customized web and mobile apps tailored to your audience.",
            },
            {
              src: "E2.svg",
              text: "Cloud-based platforms offering flexibility and security.",
            },
            {
              src: "E3.svg",
              text: "Modernizing legacy systems to reduce costs and enhance functionality.",
            },
            {
              src: "E4.svg",
              text: "Integration’s and automation’s to streamline your workflows.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-6 bg-gray-100 shadow hover:shadow-md transition"
            >
              {/* Removed redundant mr-2 on the image since gap-3 handles spacing */}
              <img src={item.src} alt="" className="w-10 h-10 flex-shrink-0" />
              <h3 className="font-semibold text-lg">{item.text}</h3>
            </div>
          ))}
        </div>
        {/* Cleaned up Red Rectangle */}
        <div className="bg-red-600 text-white max-w-7xl mx-auto text-center mt-10 p-12 text-lg font-medium">
          Choose Doelsoft for custom software crafted with your business at its
          heart, delivering solutions that empower growth and operational
          excellence.
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="relative bg-cover bg-center text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundImage: "url('/Background2.svg')" }}
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
          <button className="flex items-center gap-2 bg-red-600 hover:bg-gray-600 text-white font-light px-6 sm:px-8 py-4 text-base sm:text-lg shadow-lg transition justify-center mx-auto">
            Talk to an Expert{" "}
            <ArrowUpRight
              className="border border-white rounded-full text-center"
              size={24}
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;