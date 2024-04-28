import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaArrowRight } from "react-icons/fa"

const Home = () => {
    return (
        <>
            <div className="flex bg-white">
                <div className="w-1/2 2xl:w-1/3 py-6 flex justify-center">
                    <p className="text-3xl text-blue-500 font-bold hover:text-blue-600 transition duration-300">Hector Diaz</p>
                </div>
                <div className="2xl:w-1/4"></div>
                <div className="w-1/2 flex justify-evenly items-center 2xl:w-1/4 py-6">
                    <a href="https://www.linkedin.com/in/hector-alberto-diaz-gomez-56b220216" target="_blank" >
                        <FaLinkedin className="w-5 h-auto text-gray-500 cursor-pointer hover:text-blue-500 transition duration-300 transform hover:scale-110" />
                    </a>
                    <a href="https://github.com/hectordiazgomez" target="_blank">
                        <FaGithub className="w-5 h-auto text-gray-500 cursor-pointer hover:text-gray-600 transition duration-300 transform hover:scale-110" />
                    </a>
                    <a href="https://www.youtube.com/@hectoralbertodiazgomez3490" target="_blank">
                        <FaYoutube className="w-5 h-auto text-gray-500 cursor-pointer hover:text-red-500 transition duration-300 transform hover:scale-110" />
                    </a>
                    <a href="https://twitter.com/HctorAlber2763?t=R6-urnekzZXFxf3jNNJsOw&s=09" target="_blank">
                        <FaTwitter className="w-5 h-auto text-gray-500 cursor-pointer hover:text-blue-400 transition duration-300 transform hover:scale-110" />
                    </a>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-3/5 2xl:w-5/12">
                    <a className="flex pt-10 items-center">
                        <img src="https://luya.blob.core.windows.net/edux/hector_profile.jpeg" className="w-1/5 h-auto rounded-full mr-6 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" />
                        <p className="text-2xl font-bold text-blue-800">Hector Alberto Diaz Gomez</p>
                    </a>
                    <p className="text-blue-600 text-xl font-semibold pt-6">Machine Translation, Web Search & Economics</p>
                    <p className=" text-justify text-gray-500 text-lg italic pt-3 leading-relaxed">Economics student at the Pontifical Catholic University of Peru. I am building different projects aimed at bridging language barriers.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-3/5 2xl:w-5/12">
                    <p className="text-2xl font-bold pt-10">Media:</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded border-blue-100 border-2 p-4 my-6 sm:w-3/5 2xl:w-5/12 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                    <h3>
                        <a href="https://fb.watch/rF17c68vcY/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-blue-500 text-xl">
                            Inaugural speech at the Palace of Government of Peru
                        </a>
                    </h3>
                    <p className="text-base text-blue-700 pb-2 pt-1">
                        Invited as a success case to speak at the inaugural speech for the increase of Government scholarships from 5,000 to 10,000.
                    </p>
                    <div className="w-full flex justify-end">
                        <a href="https://fb.watch/rF17c68vcY/" target="_blank" rel="noopener noreferrer" className="rounded border border-blue-400 flex items-center text-blue-400 hover:bg-blue-50 px-3 py-1.5 text-sm font-medium transition duration-300">
                            View video
                            <span className="sr-only">Opens in a new window</span>
                            <FaArrowRight className="ml-2" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-3/5 2xl:w-5/12">
                    <p className="text-2xl font-bold pt-10">Stuff I make:</p>
                </div>
            </div>
            {[
                {
                    title: "A language translator from Spanish into Awajun",
                    description: "A language translator between Awajun and Spanish trained from scratch. I developed the first version using a sequence to sequence architecture, and the second model using Meta NLLB. Awajun is an indigenous language spoken in northern Peru.",
                    websiteLink: "https://github.com/hectordiazgomez/yumi_translator",
                },
                {
                    title: "Konlap: A cross-language search engine",
                    description: "Find information in +100 languages",
                    websiteLink: "https://konlap.com/",
                    logo: "https://konlap.com/_next/static/image/public/webstore.1d33f5319b640ab544993bbc9d4dbe50.png?imwidth=128",
                },
                {
                    title: "LuIA: Get ready for the Duolingo English Test",
                    description: "Trusted by tens of thousands of students worldwide to get ready for the Duolingo English Test, a low cost English certification test widely accepted worldwide.",
                    websiteLink: "https://luia.app/",
                    googlePlayLink: "https://play.google.com/store/apps/details?id=com.edux.quizui",
                    logo: "https://luya.blob.core.windows.net/edux/luialogo.png",
                },
                {
                    title: "Vortex",
                    description: "An academic search engine to find, chat and extract relevant academic information from English academic sources. Breaking language barriers for non-English speakers and making academic search more interactive than ever.",
                    websiteLink: "https://vortix.io/",
                    googlePlayLink: "https://play.google.com/store/apps/details?id=com.vortexai.mobile",
                    logo: "https://luya.blob.core.windows.net/edux/vortex_logo.png",
                },
                {
                    title: "Babel Project",
                    description: "Based on my experience creating a language translator, now I am creating a no code tool to train language translators from scratch just by uploading your parallel corpus dataset and setting some configurations.",
                    websiteLink: "https://babelproject.io/",
                    logo: "https://luya.blob.core.windows.net/edux/tower.svg",
                },
            ].map((project, index) => (
                <div key={index} className={`flex justify-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="w-11/12 rounded border-blue-100 border p-4 my-6 sm:w-3/5 2xl:w-5/12 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                        <a href={project.websiteLink} target="_blank" className="font-semibold flex items-center hover:underline text-blue-500 text-xl">
                            {project.logo && <img src={project.logo} className="w-7 h-auto mr-3" />}
                            {project.title}
                        </a>
                        <p className="text-base text-justify text-blue-700 pb-2 pt-1">{project.description}</p>
                        <div className="w-full flex justify-end">
                            <a href={project.websiteLink} target="_blank" className="rounded border mr-4 flex items-center border-blue-400 text-blue-400 hover:bg-blue-50 px-3 py-1.5 text-sm font-medium transition duration-300">
                                Website <FaArrowRight className="ml-2" />
                            </a>
                            {project.googlePlayLink && (
                                <a href={project.googlePlayLink} target="_blank" className="rounded flex items-center border border-blue-400 text-blue-400 hover:bg-blue-50 px-3 py-1.5 text-sm font-medium transition duration-300">
                                    Google Play <FaArrowRight className="ml-2" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-3/5 2xl:w-5/12">
                    <p className="text-2xl font-bold pt-10">B2G projects:</p>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className="w-11/12 rounded border-blue-100 border p-4 my-6 sm:w-3/5 2xl:w-5/12 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                    <a href="https://play.google.com/store/apps/details?id=com.amazonas.app" target="_blank" className="font-semibold hover:underline text-blue-500 text-xl">Amazonas Travel Mark</a>
                    <p className="text-base text-blue-700 pb-2 pt-1">A mobile app developed for the Regional Government of Amazonas. I built it after winning a public bid.</p>
                    <div className="w-full flex justify-end">
                        <a href="https://play.google.com/store/apps/details?id=com.amazonas.app" target="_blank" className="rounded border border-blue-400 text-blue-400 hover:bg-blue-50 px-3 py-1.5 text-sm font-medium transition duration-300">
                            Google Play
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="py-8 w-3/4 2xl:w-1/4">
                    <div className="flex justify-center">
                        <p className="pb-3 text-xl font-semibold">Let's stay in touch</p>
                    </div>
                    <div className="flex justify-evenly">
                        <a href="https://www.linkedin.com/in/hector-alberto-diaz-gomez-56b220216" target="_blank">
                            <FaLinkedin className="w-5 h-auto text-gray-500 cursor-pointer hover:text-blue-500 transition duration-300 transform hover:scale-110" />
                        </a>
                        <a href="https://github.com/hectordiazgomez" target="_blank">
                            <FaGithub className="w-5 h-auto text-gray-500 cursor-pointer hover:text-gray-600 transition duration-300 transform hover:scale-110" />
                        </a>
                        <a href="https://www.youtube.com/@hectoralbertodiazgomez3490" target="_blank">
                            <FaYoutube className="w-5 h-auto text-gray-500 cursor-pointer hover:text-red-500 transition duration-300 transform hover:scale-110" />
                        </a>
                        <a href="https://twitter.com/HctorAlber2763?t=R6-urnekzZXFxf3jNNJsOw&s=09" target="_blank">
                            <FaTwitter className="w-5 h-auto text-gray-500 cursor-pointer hover:text-blue-400 transition duration-300 transform hover:scale-110" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;