import React from 'react'
import { Briefcase,ArrowUpRight} from "lucide-react";
function Carrers() {
    const jobs = [
  {
    id: 1,
    company: "Bunsen Studio",
    role: "Senior Web Designer",
    description:
      "Hi, we're Bunsen. We do creative work for science companies solving tough problems, like brain-computer interfaces or biology tools.",
    location: "United States",
    website: "bunsenstudio.com",
    posted: "15 hours ago",
    remote: true,
  },
  {
    id: 2,
    company: "Studio Vi",
    role: "Digital (Visual) Designer Internship",
    description:
      "We are a Digital Human Experience Design Studio. We believe digital should enhance human potential, not distract.",
    location: "Netherlands",
    website: "studiovi.com",
    posted: "5 days ago",
    remote: false,
  },
  {
    id: 3,
    company: "Digital Cover",
    role: "UX/UI designer - Directeur artistique web",
    description:
      "Êtes-vous passionné par la création de sites captivants et inspirants ? Rejoignez-nous pour repousser les limites UX.",
    location: "France",
    website: "digital-cover.com",
    posted: "21 days ago",
    remote: false,
  },
  {
    id: 4,
    company: "Digital Cover",
    role: "Creative Developer - Front-end H/F",
    description:
      "Vous êtes une personne créative et rigoureuse ? Venez travailler sur des projets innovants avec notre équipe.",
    location: "France",
    website: "digital-cover.com",
    posted: "21 days ago",
    remote: false,
  },
  {
    id: 5,
    company: "Limesharp",
    role: "UX/UI Designer",
    description:
      "We design & build top-tier eCommerce websites for luxury and premium brands around the globe.",
    location: "United Kingdom",
    website: "limesharp.net",
    posted: "27 days ago",
    remote: true,
  },
  {
    id: 6,
    company: "ROCANI Studio",
    role: "Senior 3D Artist",
    description:
      "At Rocani Studio, we craft immersive digital narratives with cutting-edge 3D design and storytelling.",
    location: "Germany",
    website: "rocani.studio",
    posted: "1 month ago",
    remote: true,
  },
  // ---------- Add 12 more companies ----------
  {
    id: 7,
    company: "Intelli Tek",
    role: "React Developer",
    description: "Join us to build scalable web apps with React, Tailwind & cloud technologies.",
    location: "India",
    website: "intellitek.com",
    posted: "2 weeks ago",
    remote: true,
  },
  {
    id: 8,
    company: "OpenAI",
    role: "AI Research Engineer",
    description: "Work on advanced AI systems and contribute to safe AGI research.",
    location: "United States",
    website: "openai.com",
    posted: "10 days ago",
    remote: true,
  },
  {
    id: 9,
    company: "Tesla",
    role: "UI Engineer",
    description: "Design next-gen vehicle UI systems for electric mobility solutions.",
    location: "United States",
    website: "tesla.com",
    posted: "5 days ago",
    remote: false,
  },
  {
    id: 10,
    company: "Spotify",
    role: "Frontend Engineer",
    description: "Create beautiful music streaming experiences used by millions worldwide.",
    location: "Sweden",
    website: "spotify.com",
    posted: "3 days ago",
    remote: true,
  },
  {
    id: 11,
    company: "Google",
    role: "Cloud Solutions Architect",
    description: "Help businesses migrate and scale with Google Cloud technologies.",
    location: "United States",
    website: "google.com",
    posted: "1 week ago",
    remote: true,
  },
  {
    id: 12,
    company: "Amazon",
    role: "Software Engineer",
    description: "Work on high-scale eCommerce systems and AWS cloud infrastructure.",
    location: "United States",
    website: "amazon.com",
    posted: "1 week ago",
    remote: false,
  },
  {
    id: 13,
    company: "Netflix",
    role: "Product Designer",
    description: "Design seamless streaming interfaces for millions of global users.",
    location: "United States",
    website: "netflix.com",
    posted: "12 days ago",
    remote: true,
  },
  {
    id: 14,
    company: "Microsoft",
    role: "Full Stack Developer",
    description: "Work on enterprise-scale apps across Azure cloud and Office 365 ecosystem.",
    location: "United States",
    website: "microsoft.com",
    posted: "8 days ago",
    remote: true,
  },
  {
    id: 15,
    company: "Adobe",
    role: "UI/UX Designer",
    description: "Join Adobe XD & Photoshop teams to craft creative software experiences.",
    location: "United States",
    website: "adobe.com",
    posted: "6 days ago",
    remote: false,
  },
  {
    id: 16,
    company: "Figma",
    role: "Design Engineer",
    description: "Shape the future of collaborative design tools with our product team.",
    location: "United States",
    website: "figma.com",
    posted: "2 weeks ago",
    remote: true,
  },
  {
    id: 17,
    company: "Meta",
    role: "AR/VR Designer",
    description: "Build immersive Metaverse experiences with cutting-edge AR/VR tools.",
    location: "United States",
    website: "meta.com",
    posted: "1 month ago",
    remote: true,
  },
  {
    id: 18,
    company: "Stripe",
    role: "Frontend Developer",
    description: "Craft payment UIs for millions of businesses worldwide.",
    location: "United States",
    website: "stripe.com",
    posted: "2 weeks ago",
    remote: true,
  },
];
  return (
    <div  className="w-full min-h-screen font-kumbh space-y-6 mt-16 flex flex-col justify-end">
      <section
  className="relative w-full min-h-[550px] flex flex-col md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
  style={{
    backgroundImage: "url('/worldmap.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Left Content */}
  <div className="relative z-10 flex-1 flex flex-col space-y-6 items-start justify-center text-center md:text-left">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-red-600 leading-snug mb-6">
      DoelSoft Careers & <br className="hidden sm:block" />
      <span className="block mt-2">Opportunity</span>
    </h2>

    <button className="py-2 px-5 border border-black ml-[45px] md:ml-[9px]  text-black hover:bg-gray-200 transition-all duration-200 ">
      Consult With Us <span className="ml-2">↗</span>
    </button>
  </div>

  {/* Right Image */}
  <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
    <img
      src="/Carrers.svg"
      alt="Team"
      className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
    />
  </div>
</section>

<section className="bg-[#F4F6FB] py-10 sm:py-12">
  {/* Title */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center md:text-left md:ml-20 lg:ml-28">
    The Jobs Onboard
  </h1>

  {/* Jobs Grid */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {jobs.map((job, index) => (
      <div
        key={index}
        className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 flex flex-col hover:shadow-md transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          {/* Company Info */}
          <div className="flex items-center gap-3">
            <img
              src={job.logo}
              alt={job.company}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="relative">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                {job.company}
              </h2>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[#222] via-[#222]/30 to-[#222]/30"></span>
            </div>
          </div>

          {/* Remote Badge */}
          {job.remote && (
            <span className="px-2 py-1 text-[10px] sm:text-[11px] border border-gray-400/40 rounded text-gray-700 font-medium">
              REMOTE
            </span>
          )}
        </div>

        {/* Role */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-2 mb-3">
          {job.role}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {job.description}
        </p>

        {/* Footer Info */}
        <div className="mt-auto border-t border-gray-200 divide-y">
          <div className="flex justify-between py-3 text-xs sm:text-sm flex-wrap">
            <span className="font-bold text-gray-800">Location</span>
            <span className="text-gray-600">{job.location}</span>
          </div>

          <div className="flex justify-between py-3 text-xs sm:text-sm flex-wrap">
            <span className="font-bold text-gray-800">Website</span>
            <a
              href={`https://${job.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline break-words"
            >
              {job.website}
            </a>
          </div>

          <div className="flex justify-between py-3 text-xs sm:text-sm flex-wrap">
            <span className="font-bold text-gray-800">Posted</span>
            <span className="text-gray-600">{job.posted}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

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
      🌍  Build a <span className="font-semibold">Connected Future</span> with Doelsoft
    </h2>

    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2">
      👉 Partner with Doelsoft – Your trusted iOS & Android app development company in the USA & India.
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
  )
}

export default Carrers
