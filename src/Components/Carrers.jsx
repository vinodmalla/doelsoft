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
    <div>
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
            <div className="relative z-10 flex-1 flex flex-col justify-end pl-28 bottom-48">
                <h2 className="text-6xl gap-6 font-semibold text-red-600 mb-8">
                   DoelSoft Careers & <br />
                    <span className="block mt-4"> Opportunity</span>
                </h2>
                <button className="py-2 px-4 border border-black text-black hover:bg-gray-200 w-max">
                    Consult With Us <span className="ml-2">↗</span>
                </button>
            </div>
            {/* Image Right */}
            <div className="absolute right-36 top-12 h-[432.87px] w-[506.26px] mr-10 flex items-end justify-end z-0">
                <img
                    src="/Carrers.svg"
                    alt="Team"
                    className="w-full h-full object-contain md:object-cover"
                    style={{ objectPosition: "right bottom" }}
                />
            </div>
        </section>
<section className="bg-[#F4F6FB] py-12">
  <h1 className="text-3xl ml-28 py-8 font-bold mb-8">The Jobs Onboard</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="w-full h-auto bg-white rounded-2xl shadow-sm border p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              {/* Company logo + name */}
              <div className="flex items-center gap-3">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-10 h-10 rounded-full"
                />
                <div >
                  <h2 className="text-lg font-bold text-gray-900 relative inline-block">
                    {job.company}
                    {/* underline gradient */}
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[#222] via-[#222]/30 to-[#222]/30"></span>
                  </h2>
                </div>
              </div>

              {/* Remote badge */}
              {job.remote && (
                <span className="px-2 py-1 text-[11px] border border-gray-400/40 rounded text-gray-700 font-medium">
                  REMOTE
                </span>
              )}
            </div>

            {/* Role */}
            <div className=' border-t border-gray-200 divide-y'></div>
            <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">
              {job.role}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {job.description}
            </p>

            {/* Footer Info */}
            <div className="mt-auto border-t border-gray-200 divide-y">
              <div className="flex justify-between py-3 text-sm">
                <span className="font-bold text-gray-800">Location</span>
                <span className="text-gray-600">{job.location}</span>
              </div>
              <div className="flex justify-between py-3 text-sm">
                <span className="font-bold text-gray-800">Website</span>
                <a
                  href={`https://${job.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline"
                >
                  {job.website}
                </a>
              </div>
              <div className="flex justify-between py-3 text-sm">
                <span className="font-bold text-gray-800">Posted</span>
                <span className="text-gray-600">{job.posted}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
     <section
            className="relative bg-cover bg-center text-center  sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{ backgroundImage: "url('/Background2.svg')" }}
    
          >
            <div>
                <img src="/Vectors.svg" alt="" className="absolute left-14 top-10 h-32 w-32 object-cover object-top opacity-70 z-30" />
            </div>
            <div>
                <img src="/left.svg" alt="" className="absolute left-20 top-72   w-4 object-cover object-left opacity-70 z-30" />
            </div>
            <div>
                <img src="/right.svg" alt="" className="absolute right-96 top-12  w-20 object-cover object-right opacity-70 z-30" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/90"></div>
            <div className="relative max-w-3xl mx-auto text-white z-10 space-y-6 sm:space-y-8">
              <h2 className="text-2xl  font-kumbh  md:text-4xl font-extralight leading-tight">
               🌍   Build a Connected Future with Doelsoft
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
               👉 Partner with Doelsoft – Your trusted iOS & Android app development company in the USA & India.
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
  )
}

export default Carrers
