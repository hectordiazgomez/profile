import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

const Home = () => {
    return (
        <>
        <div className="flex">
<div className="w-1/2 2xl:w-1/4 py-10 flex justify-center">
                    <p className="text-2xl text-blue-600 font-semibold hover:text-blue-700">Hector Diaz</p>
</div>
<div className="2xl:w-1/2">

</div>
<div className="w-1/2 2xl:w-1/4 py-10">
                    <a href="https://www.linkedin.com/in/hector-alberto-diaz-gomez-56b220216" target="_blank" className="text-lg bg-blue-600 rounded-xl px-5 py-2 text-white font-semibold  cursor-pointer">Linkedin</a>
</div>
        </div>
            <div className="bg-[url('https://luya.blob.core.windows.net/edux/bg_profile.jpg')] w-full h-48 object-cover">
        </div>
        <div className="flex justify-center">
<div className="w-11/12 sm:w-3/5 2xl:w-5/12">
<p className="text-3xl font-semibold pt-10 text-blue-800">Hector Alberto Diaz Gomez</p>
<p className="text-blue-800 text-xl font-semibold pt-6">AI & Economics</p>
<p className="font-semibold text-lg pt-3">Economics student at the Pontifical Catholic University of Peru. I am building different projects aimed at bridging language barriers.</p>
</div>
        </div>
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-3/5 2xl:w-5/12">
                    <p className="text-xl font-semibold pt-10">Staff I make:</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded hover:bg-blue-50 cursor-pointer border-blue-200 border p-3 my-6 sm:w-3/5 2xl:w-5/12">
                    <a href="https://github.com/hectordiazgomez/yumi_translator" target="_blank" className="font-semibold hover:underline text-blue-700">A language translator from Spanish into Awajun</a>
                    <p className="text-sm text-blue-900">The repository contains the code and resources for training a sequence-to-sequence model to translate from Spanish to Awajun, an indigenous language spoken in the Peruvian Amazon.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded hover:bg-blue-50 cursor-pointer border-blue-200 border p-3 my-6 sm:w-3/5 2xl:w-5/12">
                    <a href="https://konlap.com/" target="_blank" className="font-semibold hover:underline text-blue-700">Konlap: A cross-language search engine</a>
                    <p className="text-sm text-blue-900">Find information from different languages</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded hover:bg-blue-50 cursor-pointer border-blue-200 border p-3 my-6 sm:w-3/5 2xl:w-5/12">
                    <a href="https://luia.app/" target="_blank" className="font-semibold hover:underline text-blue-700">LuIA: Get ready for the Duolingo English Test</a>
                    <p className="text-sm text-blue-900">Trusted by thousands of students worldwide to get ready for the Duolingo English Test, an English certification test widely accepted worldwide.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded hover:bg-blue-50 cursor-pointer border-blue-200 border p-3 my-6 sm:w-3/5 2xl:w-5/12">
                    <a href="https://vortix.io/" target="_blank" className="font-semibold hover:underline text-blue-700">Vortex</a>
                    <p className="text-sm text-blue-900">An academic search engine to find, chat and extract relevant academic information from English academic sources</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded hover:bg-blue-50 cursor-pointer border-blue-200 border p-3 my-6 sm:w-3/5 2xl:w-5/12">
                    <a href="https://babelproject.io/" target="_blank" className="font-semibold hover:underline text-blue-700">Babel Project</a>
                    <p className="text-sm text-blue-900">Based on my experience creating a language translator, now I am creating a no code tool to train language translators from scratch just by uploading sentence pair datasets and setting some configurations.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-3/5 2xl:w-5/12">
                    <p className="text-xl font-semibold pt-10">B2G projects:</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 rounded hover:bg-blue-50 cursor-pointer border-blue-200 border p-3 my-6 sm:w-3/5 2xl:w-5/12">
                    <a href="https://play.google.com/store/apps/details?id=com.amazonas.app" target="_blank" className="font-semibold hover:underline text-blue-700">Amazonas Travel Mark</a>
                    <p className="text-sm text-blue-900">A mobile app developed for the Regional Government of Amazonas after a public bid</p>
                </div>
            </div>
        <div className="flex justify-center">
<div className="py-8 w-3/4 2xl:w-1/4">
<div className="flex justify-center">
                        <p className="pb-3">Lets stay in touch</p>
</div>
                    <div className="flex justify-evenly">
                        <a href="https://www.linkedin.com/in/hector-alberto-diaz-gomez-56b220216" target="_blank" ><FaLinkedin href="https://www.linkedin.com/in/hector-alberto-diaz-gomez-56b220216" target="_blank" className="w-5 h-auto text-gray-700 cursor-pointer hover:text-gray-800" /></a>
                        <a href="https://github.com/hectordiazgomez" target="_blank"><FaGithub className="w-5 h-auto text-gray-700 cursor-pointer hover:text-gray-800" /></a>
                        <a href="https://www.youtube.com/@hectoralbertodiazgomez3490" target="_blank"><FaYoutube className="w-5 h-auto text-gray-700 cursor-pointer hover:text-gray-800" /></a>
                        <a href="https://twitter.com/HctorAlber2763?t=R6-urnekzZXFxf3jNNJsOw&s=09" target="_blank"><FaTwitter className="w-5 h-auto text-gray-700 cursor-pointer hover:text-gray-800" /></a>
                    </div>
</div>
        </div>
        </>
    );
}

export default Home;