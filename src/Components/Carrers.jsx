import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

function Carrers() {
  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      level: "Mid-Level",
      location: ["Chennai", "Madurai"],
      responsibility:
        "Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases, and APIs.",
      details: {
        responsibilities: [
          "Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular.",
          "Building and maintaining server-side application logic, databases, and APIs using Node.js, Python, or Java.",
          "Using Git to manage code changes and collaborate with other developers.",
          "Implementing security best practices to protect applications.",
        ],
        specifications: [
          "Proficiency in front-end technologies like React or Angular.",
          "Experience in back-end technologies like Node.js, Python, or Java.",
          "Experience managing databases (SQL & NoSQL).",
          "Knowledge of web security best practices.",
          "Excellent collaboration skills.",
        ],
        type: "Full-time",
        workplace: "Hybrid",
        experience: "Minimum 3 Years",
        salary: "Commensurate with experience and skills",
        jobLocation: ["Chennai", "Madurai", "Coimbatore"],
      },
    },
    {
      id: 2,
      title: "React Developer",
      level: "Mid-Level",
      location: ["Chennai", "Madurai"],
      responsibility:
        "Designing and implementing user interfaces using HTML, CSS, and React. Building and maintaining server-side logic and APIs.",
    },
    {
      id: 3,
      title: "Flutter Developer",
      level: "Mid-Level",
      location: ["Chennai", "Madurai"],
      responsibility:
        "Designing and implementing cross-platform apps using Flutter, maintaining responsive UI and optimizing performance.",
    },
    {
      id: 4,
      title: "MERN Stack Developer",
      level: "Mid-Level",
      location: ["Chennai", "Madurai"],
      responsibility:
        "Developing applications using MongoDB, Express, React, and Node.js. Managing database integrations and deployment.",
    },
  ];

  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [bannerMargin, setBannerMargin] = useState("0px");

  useEffect(() => {
    // Dynamically adjust banner spacing based on window width
    const handleResize = () => {
      setBannerMargin(window.innerWidth >= 768 ? "-44px" : "0px");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden font-kumbh mt-16 flex flex-col space-y-6">
      {/* ===== Hero Section ===== */}
      <section
        className="relative w-full min-h-[550px] flex flex-col md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
        style={{
          backgroundImage: "url('/worldmap.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Content */}
        <div className="relative z-10 flex-1 space-y-10 flex flex-col items-start justify-center text-center md:text-left">
          <h2  className="text-3xl ml-[55px] sm:text-5xl md:text-6xl lg:text-[71.5PX] md:-mt-20 md:-ml-2 font-semibold font-kumbh text-[#EF0E0E] leading-snug mb-8">
            DoelSoft Careers & <br /> <span>Opportunity</span>
          </h2>
             <button className="py-4 px-10   border border-black ml-[45px] md:-ml-1  text-black hover:bg-gray-200 transition-all duration-200">
      Consult With Us <span className="ml-2">↗</span>
    </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-14 md:flex-1 flex justify-center md:justify-end relative z-0">
          <img
            src="/carrers1.svg"
            alt="carrers"
            className="w-72 sm:w-[340px] md:w-[420px] lg:w-[500px] h-auto"
          />
        </div>
      </section>

      {/* ===== Job Search Banner ===== */}
      <div className="min-h-screen  bg-[#F4F6FB] py-8" > {/* Header */} <header className=" md:ml-24 py-6 px-6 text-2xl md:text-4xl font-semibold text-gray-900"> The Jobs Onboard </header>
      <div
        className=" bg-[#FEB800]  md:h-[220px] h-auto flex flex-col md:flex-row items-center px-6 md:px-16 py-8 md:py-10"
        
      >
        
        <img
          src="/carrerss.svg"
          alt="Career"
          className="w-auto h-[180px] md:-ml-6 md:w-auto bg-transparent md:h-[220px] mt-4 md:mt-0"
        />

        {/* Search + Filters */}
        <div className="flex  flex-col  items-center md:items-start gap-4 md:gap-6 w-full md:w-[60%] px-4">
          <input
            type="text"
            placeholder="Search for Jobs"
            className="border border-black w-full bg-[#FEB800] text-black px-4 py-2 focus:outline-none"
          />

          <div className="flex flex-col sm:flex-cow md:flex-row sm:justify-start justify-center md:justify-start items-center gap-4 w-full">
            <select className="border border-black bg-[#FEB800] px-6 py-2 w-full md:w-auto">
              <option>All Experience Level</option>
              <option>Fresher</option>
              <option>Mid-Level</option>
              <option>Senior</option>
            </select>

            <select className="border border-black bg-[#FEB800] px-6 py-2 w-full md:w-auto">
              <option>All Locations</option>
              <option>Chennai</option>
              <option>Madurai</option>
              <option>Coimbatore</option>
            </select>

            <select className="border border-black bg-[#FEB800] px-6 py-2 w-full md:w-auto">
              <option>All Categories</option>
              <option>Full Stack</option>
              <option>Frontend</option>
              <option>Backend</option>
            </select>

            <button className="bg-[#EF0E0E] hover:bg-red-700 text-white whitespace-nowrap px-6 py-2 w-full md:w-auto transition">
              View Jobs
            </button>
          </div>
        </div>
      </div>

      {/* ===== Jobs Section ===== */}
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-12 py-8 bg-gray-50">
        {/* Left: Job List */}
        <div className="md:w-1/2 bg-white border border-gray-200 shadow-md p-4 overflow-hidden max-h-[100vh]">
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className={`p-4 mb-4 border cursor-pointer transition ${
                selectedJob.id === job.id
                  ? "border-red-500 bg-red-50"
                  : "border-gray-200 hover:bg-gray-100"
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {job.title}
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-2">
                <span className="bg-[#E7EBF1] px-2 py-1 rounded">
                  {job.level}
                </span>
                {job.location.map((loc, i) => (
                  <span key={i} className="bg-[#E7EBF1] px-2 py-1 rounded">
                    {loc}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-3">
                {job.responsibility.substring(0, 120)}...
              </p>
            </div>
          ))}
        </div>

        {/* Right: Job Details */}
        <div className="md:w-2/3 bg-white border border-gray-200 shadow-md p-6">
          <h2 className="text-2xl font-bold text-black mb-2">
            {selectedJob.title}
          </h2>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
            <span className="bg-[#E7EBF1] px-2 py-1">{selectedJob.level}</span>
            {selectedJob.location.map((loc, i) => (
              <span key={i} className="bg-[#E7EBF1] px-2 py-1">
                {loc}
              </span>
            ))}
          </div>

          <h4 className="font-semibold text-gray-700 mb-2">
            Primary Responsibility:
          </h4>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {selectedJob.responsibility}
          </p>

          {selectedJob.details && (
            <>
              <h4 className="font-semibold text-gray-700 mb-2">
                Job Specification:
              </h4>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {selectedJob.details.specifications.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>

              <div className="text-gray-700 space-y-2 text-sm">
                <p>
                  <strong>Employment Type:</strong> {selectedJob.details.type}
                </p>
                <p>
                  <strong>Workplace Type:</strong>{" "}
                  {selectedJob.details.workplace}
                </p>
                <p>
                  <strong>Experience Required:</strong>{" "}
                  {selectedJob.details.experience}
                </p>
                <p>
                  <strong>Salary:</strong> {selectedJob.details.salary}
                </p>
                <p>
                  <strong>Job Location:</strong>{" "}
                  {selectedJob.details.jobLocation.join(", ")}
                </p>
              </div>
            </>
          )}

          <button className="mt-6 bg-[#EF0E0E] hover:bg-red-700 text-white px-6 py-2 transition">
            Apply Now
          </button>
        </div>
      </div>
      </div>

      {/* ===== CTA Section ===== */}
     
      <section
                             className="relative w-full  bg-cover bg-center text-center py-16 md:h-[568px]   sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
                             style={{ backgroundImage: "url('/Background2.svg')",marginTop:"1px" } }
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
                               className="absolute left-10 sm:left-20 bottom-10 sm:top-70 w-3 sm:w-4 object-contain opacity-70 z-30"
                             />
                             <img
                               src="/right.svg"
                               alt="right"
                               className="absolute right-10 sm:right-40 lg:right-72 top-6 sm:top-12 w-10 sm:w-16 md:w-20 object-contain opacity-70 z-30"
                             />
                           
                             {/* Dark overlay */}
                             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/90"></div>
                           
                             {/* Main Content */}
                             <div className="relative max-w-3xl mx-auto md:mt-8 text-white z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-7 md:space-y-8">
                               <h2 className="text-xl md:text-[56px] font-manrope font-bold whitespace-nowrap leading-snug px-2">
                                🌍 Build a <span className="font-semibold">Connected Future</span>{" "}
            with Doelsoft
                               </h2>
                           
                               <p className="text-sm sm:text-[30px] font-inter text-gray-200 leading-relaxed px-2">
                                 👉 Partner with Doelsoft – Your trusted iOS & Android app development company in the USA & India.
                               </p>
                           
                               <button className="flex items-center gap-2  bg-red-600 hover:bg-gray-600 text-white font-medium px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-xl  shadow-lg transition-all duration-300 ease-in-out">
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

export default Carrers;
