import React from 'react'
import { ArrowUpRight } from "lucide-react"; // 
function Contract() {
return (
    <div>
        <section className="relative w-full h-full  mt-12  py-20 flex flex-col  overflow-hidden">
            <div
                className="absolute bg-cover bg-center inset-0 "
                style={{ backgroundImage: "url('/worldmap.svg')" }}
            ></div>
            <div className="ml-28 space-y-14 z-10">
                <h1 className="text-2xl font-semibold text-gray-800">Talent Hub</h1>
                <h2 className="text-6xl font-bold text-red-600 mt-2">Contract/<br />Temporary Hiring</h2>
                <button className="mt-6 px-6 py-2 border border-black text-black hover:bg-gray-200">
                    Consult With Us <span className="ml-2">➔</span>
                </button>
            </div>
            <div className="absolute  right-20 top-6 w-96 h-72 overflow-hidden">
                <img
                    src="/Contract.svg"
                    alt="Team"
                    className="w-auto h-full object-cover"
                />
            </div>
        </section>
        <section className='w-full mx-auto bg-pink-200 px-4  sm:px-6 lg:px-8 py-12'>
            <div className='space-y-6 ml-10'>
                <h1 className='text-3xl font-bold'>Contract & Temporary Hiring Agility When You Need It </h1>
                <p>Bussines demand can change Overnight Our Contract and temporary Staffing services ensure you always have right peoeple at right time</p>
                <div className='flex flex-col md:flex-row gap-6'>
                    <div>
                        <h2 className='text-2xl font-bold'>The DoelSoft Advantages</h2>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <img src="/logo4.svg" className='w-8 h-8' />
                                <span>Ready to Diploy professionals for immediate requirement</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/logo4.svg" className='w-8 h-8' />
                                <span>Cost-effective solutions to optimize workforce bugget</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/logo4.svg" className='w-8 h-8' />
                                <span>Cost-effective solutions to optimize workforce bugget</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/logo4.svg" className='w-8 h-8' />
                                <span>Flexibility to scale teams up or down with ease</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/logo4.svg" className='w-8 h-8' />
                                <span>pre-vetted candidates who can hit the ground running</span>
                            </div>
                        </div>
                        <button className="mt-6 px-8 py-4 border border-black text-white bg-black hover:bg-gray-600 flex items-center gap-2">
                            <span>Stay flexible. Stay Competitive with DoelSoft.</span>
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                    <img src="/Image2.svg" alt="Contract" className='w-44 h-96 ml-40 md:w-1/2 object-cover' />
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
)
}

export default Contract
