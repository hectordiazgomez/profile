import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";
import { HiOutlineExternalLink, HiChevronDown, HiChevronUp } from "react-icons/hi";
import SiHuggingface from "./assets/hflogo.png"

const Home = () => {


    const [expandedCards, setExpandedCards] = useState({});

    const toggleCard = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const projects = [
        {
            title: "Yumi Language Translator",
            description: "State of the Art Model for Aguaruna-Spanish Translation.",
            link: "https://huggingface.co/hectordiazgomez/nllb-spa-awa-v3",
            icon: SiHuggingface,
            details: {
                subtitles: [],
                links: [
                    { text: "Source code", url: "https://colab.research.google.com/drive/1rrUsF_seA7y9eX8X2G1CpyfqfMC4bztt" },
                    { text: "BLEU eval", url: "https://colab.research.google.com/drive/13POtxt6SNf3moHohAzR9Jhibs9RhsmBA?usp=sharing " }
                ],
                extendedDescription: "NLLB-200-600M Fine-tuned for Aguaruna-Spanish Translation. Agreement reached with the Ministry of Education of Peru to continue further fined tuning it from December 2024 onwards since the policy to publish government academic books has just changed on June 2024 and now all academic books, published for low-resource language students, will always be published in two languages: Spanish and an indigenous language, thus creating rich parallel sentences for training for 42 low-resource languages spoken in Peru."
            }
        },
        {
            title: "CoolCloud",
            description: "Where the simplicity of Heroku meets the cost-effectiveness of AWS",
            link: "https://coolcloud.app/",
            icon: "https://coolcloud.app/favicon.ico",
            details: {
                links: [
                    { text: "Website", url: "https://coolcloud.app/" },
                    { text: "Demo", url: "https://youtu.be/9nO4jN6Q3c4?si=uNdSRVdvOqT8T7cW" }
                ],
                extendedDescription: "Deploy nodeJS servers in minutes. Forget about EC2 instances, load balancers, hosted zones, etc,. and deploy with a couple of clicks"
            }
        },
        {
            title: "VortiX",
            description: "Get answers based on scientific research and data. Selected by the Ministry of Education to empower over a million students accross Peru.",
            link: "https://vortix.io/",
            icon: "https://hator.blob.core.windows.net/mywebsite/vortex_logo_latest.png",
            details: {
                links: [
                    { text: "Google Play", url: "https://play.google.com/store/apps/details?id=com.vortexai.mobile" }
                ],
                extendedDescription: "VortiX is an innovative AI-powered platform that provides answers and insights based on scientific literature. It helps researchers, students, and professionals quickly access reliable information from over 220 million academic sources."
            }
        },
        {
            title: "EduX",
            description: "Get ready for the Duolingo English Test with our app. Trusted by +30K learners.",
            link: "https://luia.app/",
            icon: "https://luya.blob.core.windows.net/edux/luialogo.png",
            details: {
                links: [
                    { text: "Google Play", url: "https://play.google.com/store/apps/details?id=com.edux.quizui" }
                ],
                extendedDescription: "EduX is a comprehensive preparation platform for the Duolingo English Test. It offers practice tests, personalized study plans, and interactive lessons to help learners improve their English skills and achieve their desired scores."
            }
        },
        {
            title: "Amazonas Travel Mark",
            description: "B2G Proyect: Mobile app for the Regional Government of Amazonas.",
            link: "https://play.google.com/store/apps/details?id=com.amazonas.app",
            icon: FaGithub,
            details: {
                extendedDescription: "Amazonas Travel Mark is a B2G (Business-to-Government) project developed for the Regional Government of Amazonas. This mobile app serves as a comprehensive guide for tourists, showcasing the region's attractions, accommodations, and cultural experiences."
            }
        }
    ];


    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">Hector Diaz</h1>
                    <nav className="flex space-x-4">
                        {[
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/hector-alberto-diaz-gomez-56b220216", color: "text-blue-700" },
                            { icon: FaGithub, href: "https://github.com/hectordiazgomez", color: "text-gray-700" },
                            { icon: FaYoutube, href: "https://www.youtube.com/@hectoralbertodiazgomez3490", color: "text-red-600" },
                            { icon: FaTwitter, href: "https://twitter.com/HctorAlber2763?t=R6-urnekzZXFxf3jNNJsOw&s=09", color: "text-blue-400" },
                        ].map((item, index) => (
                            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className={`${item.color} hover:opacity-75 transition-opacity`}>
                                <item.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <section className="bg-white shadow rounded-lg p-6 mb-12">
                    <div className="flex items-center mb-6">
                        <img src="https://luya.blob.core.windows.net/edux/hector_profile.jpeg" alt="Hector Alberto Diaz Gomez" className="w-24 h-24 rounded-full mr-6 shadow-md" />
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Hector Alberto Diaz Gomez</h2>
                            <p className="text-lg text-blue-600 font-medium">Machine Translation, Web Search & Economics</p>
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Economics student at the Pontifical Catholic University of Peru. <a className='font-medium'>Emergent Ventures Fellow.</a>
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Appearances</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "Speech at the Palace of Government of Peru",
                                description: "Invited by Peru’s president Dina Boluarte",
                                link: "https://fb.watch/rF17c68vcY/",
                                linkText: "View video"
                            },
                            {
                                title: "Book: Testimonies of the power of Education",
                                description: "16 Stories that Inspire (Me included). By Ministry of Education of Peru",
                                link: "https://www.pronabec.gob.pe/descargas2024/Mayo/Libro%20-%20Testimonios%20del%20poder%20de%20la%20educacio%CC%81n.pdf#page=87",
                                linkText: "View book"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 hover:text-blue-600">
                                    {item.linkText}
                                    <HiOutlineExternalLink className="ml-1" />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects?.map((project, index) => (
                            <div key={index} className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    {typeof project.icon === 'string' ? (
                                        <img src={project.icon} alt={project.title} className="w-8 h-8 mr-3" />
                                    ) : (
                                        <project.icon className="w-8 h-8 mr-3 text-blue-500" />
                                    )}
                                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 hover:text-blue-600">
                                        View Project
                                        <HiOutlineExternalLink className="ml-1" />
                                    </a>
                                    <button
                                        onClick={() => toggleCard(index)}
                                        className="text-blue-500 hover:text-blue-600 flex items-center"
                                    >
                                        {expandedCards[index] ? (
                                            <>
                                                See less
                                                <HiChevronUp className="ml-1" />
                                            </>
                                        ) : (
                                            <>
                                                See more
                                                <HiChevronDown className="ml-1" />
                                            </>
                                        )}
                                    </button>
                                </div>
                                {expandedCards[index] && (
                                    <div className="mt-4 border-t pt-4">
                                        <p className="text-gray-600 text-justify mb-4">{project.details.extendedDescription}</p>
                                        <div className=''>
                                            {project?.details?.links?.map((link, i) => (
                                                <div>
                                                    <a
                                                        key={i}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-500 underline cursor-pointer hover:text-blue-600 py-2"
                                                    > {link.text} </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-semibold mb-4">Let's stay in touch</p>
                        <div className="flex space-x-6">
                            {[
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/hector-alberto-diaz-gomez-56b220216" },
                                { icon: FaGithub, href: "https://github.com/hectordiazgomez" },
                                { icon: FaYoutube, href: "https://www.youtube.com/@hectoralbertodiazgomez3490" },
                                { icon: FaTwitter, href: "https://twitter.com/HctorAlber2763?t=R6-urnekzZXFxf3jNNJsOw&s=09" },
                            ].map((item, index) => (
                                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                                    <item.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
