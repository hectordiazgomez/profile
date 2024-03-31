import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

const Home = () => {
    return (
        <>
            <div className="flex">
                <div className="w-1/2 2xl:w-1/3 py-10 flex justify-center">
                    <p className="text-3xl text-blue-600 font-bold hover:text-blue-700">Hector Diaz</p>
                </div>
                <div className="2xl:w-1/4"></div>
                <div className="w-1/2 flex justify-evenly items-center 2xl:w-1/4 py-10">
                    <a href="https://www.linkedin.com/in/hector-alberto-diaz-gomez-56b220216" target="_blank" ><FaLinkedin href="https://www.linkedin.com/in/hector-alberto-diaz-gomez-56b220216" target="_blank" className="w-6 h-auto text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300" /></a>
                    <a href="https://github.com/hectordiazgomez" target="_blank"><FaGithub className="w-6 h-auto text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300" /></a>
                    <a href="https://www.youtube.com/@hectoralbertodiazgomez3490" target="_blank"><FaYoutube className="w-6 h-auto text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300" /></a>
                    <a href="https://twitter.com/HctorAlber2763?t=R6-urnekzZXFxf3jNNJsOw&s=09" target="_blank"><FaTwitter className="w-6 h-auto text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300" /></a>
                </div>
            </div>
            <div className="bg-[url('https://luya.blob.core.windows.net/edux/nebulosa.jpg')] w-full h-64 object-cover">
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-3/5 2xl:w-5/12">
                    <a className="flex pt-12 items-center">
                        <img src="https://luya.blob.core.windows.net/edux/hector_profile.jpeg" className="w-1/5 h-auto rounded-full mr-6" />
                        <p className="text-4xl font-bold text-blue-800">Hector Alberto Diaz Gomez</p>
                    </a>
                    <p className="text-blue-700 text-2xl font-bold pt-8">Machine Translation, Web Search & Economics</p>
                    <p className="font-semibold text-justify text-xl pt-4 leading-relaxed">Economics student at the Pontifical Catholic University of Peru. I am building different projects aimed at bridging language barriers.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-3/5 2xl:w-5/12">
                    <p className="text-2xl font-bold pt-12">Stuff I make:</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded border-blue-200 border-2 p-5 my-8 sm:w-3/5 2xl:w-5/12">
                    <a href="https://github.com/hectordiazgomez/yumi_translator" target="_blank" className="font-bold flex items-center hover:underline text-blue-600 text-xl"> A language translator from Spanish into Awajun</a>
                    <p className="text-base text-justify text-blue-800 pb-3 pt-2">A language translator with two versions, the first one was developed using a sequence to sequence model, and the second one used Meta NLLB to train a language translator from Spanish to Awajun, an indigenous language spoken in the Peruvian Amazon.</p>
                    <div className="w-full flex justify-end">
                        <a href="https://github.com/hectordiazgomez/yumi_translator" target="_blank" className="rounded border-2 mr-5 border-blue-500 text-blue-500 hover:bg-blue-100 px-4 py-2 text-base font-semibold transition duration-300">
                            Website
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded border-blue-200 border-2 p-5 my-8 sm:w-3/5 2xl:w-5/12">
                    <a href="https://konlap.com/" target="_blank" className="font-bold flex items-center hover:underline text-blue-600 text-xl">  <img src="https://konlap.com/_next/static/image/public/webstore.1d33f5319b640ab544993bbc9d4dbe50.png?imwidth=128" className="w-8 h-auto mr-4" /> Konlap: A cross-language search engine</a>
                    <p className="text-base text-justify text-blue-800 pb-3 pt-2">Find information in +100 languages</p>
                    <div className="w-full flex justify-end">
                        <a href="https://konlap.com/" target="_blank" className="rounded border-2 mr-5 border-blue-500 text-blue-500 hover:bg-blue-100 px-4 py-2 text-base font-semibold transition duration-300">
                            Website
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded border-blue-200 border-2 p-5 my-8 sm:w-3/5 2xl:w-5/12">
                    <a href="https://luia.app/" target="_blank" className="font-bold hover:underline text-blue-600 text-xl flex items-center"> <img src="https://luya.blob.core.windows.net/edux/luialogo.png" className="w-8 h-auto mr-4" />  LuIA: Get ready for the Duolingo English Test</a>
                    <p className="text-base text-justify text-blue-800 pb-3 pt-2">Trusted by thousands of students worldwide to get ready for the Duolingo English Test, a low cost English certification test widely accepted worldwide.</p>
                    <div className="w-full flex justify-end">
                        <a href="https://luia.app/" target="_blank" className="rounded border-2 mr-5 border-blue-500 text-blue-500 hover:bg-blue-100 px-4 py-2 text-base font-semibold transition duration-300">
                            Website
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.edux.quizui" target="_blank" className="rounded border-2 border-blue-500 text-blue-500 hover:bg-blue-100 px-4 py-2 text-base font-semibold transition duration-300">
                            Google Play
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded border-blue-200 border-2 p-5 my-8 sm:w-3/5 2xl:w-5/12">
                    <a href="https://vortix.io/" target="_blank" className="font-bold hover:underline text-blue-600 text-xl flex items-center"> <img src="https://luya.blob.core.windows.net/edux/vortex_logo.png" className="w-8 h-auto mr-4" /> Vortex</a>
                    <p className="text-base text-justify text-blue-800 pb-3 pt-2">An academic search engine to find, chat and extract relevant academic information from English academic sources</p>
                    <div className="w-full flex justify-end">
                        <a href="https://vortix.io/" target="_blank" className="rounded border-2 mr-5 border-blue-500 text-blue-500 hover:bg-blue-100 px-4 py-2 text-base font-semibold transition duration-300">
                            Website
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.vortexai.mobile" target="_blank" className="rounded border-2 border-blue-500 text-blue-500 hover:bg-blue-100 px-4 py-2 text-base font-semibold transition duration-300">
                            Google Play
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded border-blue-200 border-2 p-5 my-8 sm:w-3/5 2xl:w-5/12">
                    <a href="https://babelproject.io/" target="_blank" className="font-bold hover:underline text-blue-600 text-xl flex items-center"> <img src="https://luya.blob.core.windows.net/edux/tower.svg" className="w-8 h-auto mr-4" /> Babel Project</a>
                    <p className="text-base text-blue-800 pb-3 pt-2">Based on my experience creating a language translator, now I am creating a no code tool to train language translators from scratch just by uploading sentence pair datasets and setting some configurations.</p>
                    <div className="w-full flex justify-end">
                        <a href="https://babelproject.io/" target="_blank" className="rounded border-2 border-blue-500 text-blue-500 hover:bg-blue-100 px-4 py-2 text-base font-semibold transition duration-300">
                            Website
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-3/5 2xl:w-5/12">
                    <p className="text-2xl font-bold pt-12">B2G projects:</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded border-blue-200 border-2 p-5 my-8 sm:w-3/5 2xl:w-5/12">
                    <a href="https://play.google.com/store/apps/details?id=com.amazonas.app" target="_blank" className="font-bold hover:underline text-blue-600 text-xl">Amazonas Travel Mark</a>
                    <p className="text-base text-blue-800 pb-3 pt-2">A mobile app developed for the Regional Government of Amazonas after a public bid</p>
                    <div className="w-full flex justify-end">
                        <a href="https://play.google.com/store/apps/details?id=com.amazonas.app" target="_blank" className="rounded border-2 border-blue-500 text-blue-500 hover:bg-blue-100 px-4 py-2 text-base font-semibold transition duration-300">
                            Google Play
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="py-10 w-3/4 2xl:w-1/4">
                    <div className="flex justify-center">
                        <p className="pb-4 text-xl font-semibold">Let's stay in touch</p>
                    </div>
                    <div className="flex justify-evenly">
                        <a href="https://www.linkedin.com/in/hector-alberto-diaz-gomez-56b220216" target="_blank" ><FaLinkedin href="https://www.linkedin.com/in/hector-alberto-diaz-gomez-56b220216" target="_blank" className="w-6 h-auto text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300" /></a>
                        <a href="https://github.com/hectordiazgomez" target="_blank"><FaGithub className="w-6 h-auto text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300" /></a>
                        <a href="https://www.youtube.com/@hectoralbertodiazgomez3490" target="_blank"><FaYoutube className="w-6 h-auto text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300" /></a>
                        <a href="https://twitter.com/HctorAlber2763?t=R6-urnekzZXFxf3jNNJsOw&s=09" target="_blank"><FaTwitter className="w-6 h-auto text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;