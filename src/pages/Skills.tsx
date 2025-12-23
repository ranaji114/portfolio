import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const skills = {
    comfortable: [
        "React", "TypeScript", "JavaScript (ES6+)",
        "Tailwind CSS", "HTML5/CSS3", "Git", "Vite"
    ],
    learning: [
        "Backend Architecture", "Node.js", "Database Design",
        "System Design", "Supabase", "API Security"
    ]
};

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
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export const Skills = () => {
    return (
        <>
            <SEO title="Technical Skills | Entry Level Software Engineer" />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8 sm:space-y-12 py-6 sm:py-8"
            >
                <header className="space-y-3 sm:space-y-4">
                    <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-primary">Technical Reality</motion.h1>
                    <motion.p variants={itemVariants} className="text-secondary max-w-xl text-sm sm:text-base">
                        I believe in being honest about what I know and what I am actively working to understand. No inflated percentages.
                    </motion.p>
                </header>

                <div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2">
                    <section className="space-y-6">
                        <motion.h2 variants={itemVariants} className="text-xl font-semibold text-primary border-b border-border pb-4">
                            Comfortable With
                        </motion.h2>
                        <ul className="flex flex-col gap-3">
                            {skills.comfortable.map((skill) => (
                                <motion.li variants={itemVariants} key={skill} className="flex items-center gap-3 text-secondary group hover:text-primary transition-colors">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 group-hover:bg-accent transition-all"></span>
                                    {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <motion.h2 variants={itemVariants} className="text-xl font-semibold text-primary border-b border-border pb-4">
                            Currently Learning
                        </motion.h2>
                        <ul className="flex flex-col gap-3">
                            {skills.learning.map((skill) => (
                                <motion.li variants={itemVariants} key={skill} className="flex items-center gap-3 text-secondary group hover:text-primary transition-colors">
                                    <span className="w-1.5 h-1.5 rounded-full border border-secondary/50 group-hover:border-accent transition-all"></span>
                                    {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </section>
                </div>
            </motion.div>
        </>
    );
};
