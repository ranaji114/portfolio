import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SEO } from '../components/SEO';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9] as const
        }
    }
};

export const Home = () => {
    return (
        <>
            <SEO title="Entry Level Software Engineer Portfolio" />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col justify-center min-h-[70vh] space-y-24"
            >

                {/* Intro Section - Asymmetric alignment */}
                <motion.div variants={itemVariants} className="flex flex-col items-start max-w-4xl pt-12">
                    <div className="w-full flex flex-col sm:flex-row gap-8 sm:gap-16 items-start">
                        {/* Photo */}
                        <motion.div
                            variants={itemVariants}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-neutral-800 border-2 border-neutral-700/50 flex items-center justify-center overflow-hidden shrink-0 mt-2"
                        >
                            <img src="/ankur.png" alt="Ankur Rana" className="w-full h-full object-cover" />
                        </motion.div>

                        <div className="space-y-6">
                            <div className="space-y-1">
                                <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-bold tracking-tighter text-primary">
                                    Ankur Rana.
                                </motion.h1>
                                <motion.p variants={itemVariants} className="text-xl text-secondary font-medium tracking-wide">
                                    Software Engineer
                                </motion.p>
                            </div>

                            {/* Visual Tension */}
                            <motion.div variants={itemVariants} className="max-w-xl pt-4">
                                <p className="text-2xl sm:text-3xl text-primary/90 leading-snug text-balance font-light">
                                    I build systems that hold up when I’m not looking.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Action Area */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 items-start sm:items-center sm:ml-auto max-w-sm w-full">
                    <Link
                        to="/projects"
                        className="group w-full sm:w-auto flex items-center justify-between sm:justify-center gap-4 px-8 py-4 bg-primary text-background font-medium rounded-lg hover:bg-white/90 transition-all relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Proof of Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    <div className="flex gap-6 px-2 w-full justify-between sm:justify-start sm:w-auto">
                        <a
                            href="https://github.com/ranaji114"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-white transition-colors text-sm font-medium tracking-wide uppercase border-b border-transparent hover:border-white/50 pb-0.5"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ankur-rana-5a67a73a1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-white transition-colors text-sm font-medium tracking-wide uppercase border-b border-transparent hover:border-white/50 pb-0.5"
                        >
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};
