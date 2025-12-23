import { SEO } from '../components/SEO';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

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
            ease: "easeOut"
        }
    }
};

export const Contact = () => {
    return (
        <>
            <SEO title="Contact | Ankur Rana" />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center py-16 sm:py-24 space-y-12 text-center"
            >

                <motion.div variants={itemVariants} className="space-y-4 max-w-xl">
                    <h1 className="text-3xl sm:text-4xl font-bold text-primary">Ready to Contribute</h1>
                    <p className="text-secondary leading-relaxed text-lg">
                        I am currently looking for internship or junior roles where I can apply my skills in impactful projects.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 w-full max-w-md justify-center">
                    <motion.a
                        href="mailto:ranaankur442@gmail.com"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-background font-medium rounded-lg hover:bg-white/90 transition-all w-full sm:w-auto"
                    >
                        <Mail size={20} />
                        Email Me
                    </motion.a>

                    <div className="flex gap-4 justify-center">
                        <motion.a
                            href="https://github.com/ranaji114"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                            className="flex items-center justify-center w-14 h-14 rounded-lg bg-surface border border-border text-secondary hover:text-white transition-all"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/ankur-rana-5a67a73a1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                            className="flex items-center justify-center w-14 h-14 rounded-lg bg-surface border border-border text-secondary hover:text-white transition-all"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4 pt-8">
                    <p className="text-2xl font-medium text-primary text-balance max-w-sm mx-auto">
                        I am ready to work. Write to me.
                    </p>
                </motion.div>

            </motion.div>
        </>
    );
};
