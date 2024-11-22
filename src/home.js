import React, { useState } from 'react';
import {
    Globe,
    Github,
    Youtube,
    Twitter,
    Linkedin,
    ExternalLink,
    ChevronDown,
    ChevronUp,
    Award,
    Rocket,
    Cloud,
    Brain,
    Book,
    MapPin
} from 'lucide-react';

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
            icon: Globe,
            details: {
                subtitles: [],
                links: [
                    { text: "Source code", url: "https://colab.research.google.com/drive/1rrUsF_seA7y9eX8X2G1CpyfqfMC4bztt" },
                    { text: "BLEU eval", url: "https://colab.research.google.com/drive/13POtxt6SNf3moHohAzR9Jhibs9RhsmBA?usp=sharing" }
                ],
                extendedDescription: "Agreement reached with the Ministry of Education of Peru to continue further fined tuning it."
            }
        },
        {
            title: "Gaia",
            description: "A no-code platform for training and deploying NMT models using LLMs",
            link: "https://gaiacloud.netlify.app/",
            icon: Rocket,
            details: {
                links: [
                    { text: "Website", url: "https://gaia-ml.com" },
                ],
                extendedDescription: "Most of the languages worldwide are still left behind because people do not have the programming skills to train neural machine translators, so I designed this tool which makes easier than ever to train NMTs for middle and low-resource languages using state-of-the-art models, NLLB-200-distilled-600M."
            }
        },
        {
            title: "Fino",
            description: "A Heroku-like platform but up to 8x cheaper.",
            link: "https://coolcloud.app/",
            icon: Cloud,
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
            description: "Get answers based on scientific research and data. Selected by the Peruvian Ministry of Education to empower +1 Million students accross Peru.",
            link: "https://vortix.io/",
            icon: Brain,
            details: {
                links: [
                    { text: "Google Play", url: "https://vortix.io/" }
                ],
                extendedDescription: "VortiX is an innovative AI-powered platform that provides answers and insights based on scientific literature. It helps researchers, students, and professionals quickly access reliable information from over 220 million academic sources."
            }
        },
        {
            title: "Athena",
            description: "Free legal assistance for citizens in Peru. Athena is among the top 20 first places globally in the Digital Gamechangers Award by the United Nations Development Programme.",
            link: "https://atena-web.app",
            icon: Award,
            details: {
                links: [
                    { text: "", url: "https://atena-web.app" }
                ],
                extendedDescription: "Athena relies on Retrieval Augmented Generation to provide free legal assistance and display the sources alongside the responses."
            }
        },
        {
            title: "EduX",
            description: "Get ready for the Duolingo English Test with our app. Trusted by +30K learners. [Discontinued]",
            link: "https://luia.app/",
            icon: Book,
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
            icon: MapPin,
            details: {
                extendedDescription: "Amazonas Travel Mark is a B2G (Business-to-Government) project developed for the Regional Government of Amazonas. This mobile app serves as a comprehensive guide for tourists, showcasing the region's attractions, accommodations, and cultural experiences."
            }
        }
    ];

    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/in/hector-alberto-diaz-gomez-56b220216", color: "text-blue-700" },
        { icon: Github, href: "https://github.com/hectordiazgomez", color: "text-gray-700" },
        { icon: Youtube, href: "https://www.youtube.com/@hectoralbertodiazgomez3490", color: "text-red-600" },
        { icon: Twitter, href: "https://twitter.com/HctorAlber2763?t=R6-urnekzZXFxf3jNNJsOw&s=09", color: "text-blue-400" }
    ];

    return (
        <div className="min-h-screen font-serif bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-blue-600">HD</h1>
                        <nav className="flex items-center space-x-6">
                            {socialLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${item.color} hover:opacity-75 transition-opacity`}
                                >
                                    <item.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="mb-16">
                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            <img
                                src="https://retinaone.blob.core.windows.net/webapp/hector_profile.jpeg"
                                alt="Hector Alberto Diaz Gomez"
                                className="w-32 h-32 rounded-full shadow-md object-cover"
                            />
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Hector Diaz</h2>
                                <p className="text-xl text-blue-600 font-medium mb-4">Machine Translation, Web Search & Economics</p>
                                <p className="text-gray-600 text-lg">
                                    Economics student at the Pontifical Catholic University of Peru.
                                    <span className="font-medium"> Emergent Ventures Fellow.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Media Appearances */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Appearances</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Speech at the Palace of Government of Peru",
                                description: "Invited by Peru's president Dina Boluarte",
                                link: "https://fb.watch/rF17c68vcY/",
                                icon: Award
                            },
                            {
                                title: "Book: Testimonies of the power of Education",
                                description: "16 Stories that Inspire (Me included). By Ministry of Education of Peru",
                                link: "https://www.pronabec.gob.pe/descargas2024/Mayo/Libro%20-%20Testimonios%20del%20poder%20de%20la%20educacio%CC%81n.pdf#page=87",
                                icon: Book
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <item.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 mb-4">{item.description}</p>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-600 hover:text-blue-700"
                                        >
                                            View More
                                            <ExternalLink className="ml-1 w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
                    <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 bg-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start space-x-4 mb-4">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <project.icon className="w-6 h-6 text-gray-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                        <p className="text-gray-600">{project.description}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-gray-600 hover:text-blue-700"
                                    >
                                        View Project
                                        <ExternalLink className="ml-1 w-4 h-4" />
                                    </a>
                                    <button
                                        onClick={() => toggleCard(index)}
                                        className="text-blue-600 hover:text-blue-700 flex items-center"
                                    >
                                        {expandedCards[index] ? (
                                            <>
                                                Less
                                                <ChevronUp className="ml-1 w-4 h-4" />
                                            </>
                                        ) : (
                                            <>
                                                More
                                                <ChevronDown className="ml-1 w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                                {expandedCards[index] && (
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <p className="text-gray-600 mb-4">{project.details.extendedDescription}</p>
                                        <div className="space-y-2">
                                            {project.details.links?.map((link, i) => (
                                                <div key={i}>
                                                    <a
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-700"
                                                    >
                                                        {link.text}
                                                    </a>
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

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-medium text-gray-900 mb-6">Let's stay in touch</p>
                        <div className="flex space-x-6">
                            {socialLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${item.color} hover:opacity-75 transition-opacity`}
                                >
                                    <item.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;