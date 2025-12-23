import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export const About = () => {
    return (
        <>
            <SEO title="About Ankur Rana" />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-xl space-y-16 py-12"
            >

                {/* Section 1 */}
                <motion.section variants={itemVariants} className="space-y-4">
                    <h1 className="text-3xl font-bold text-primary tracking-tight">
                        I don’t just watch tutorials.
                    </h1>
                    <p className="text-secondary text-lg leading-relaxed">
                        I build systems. My learning process is aggressive: I take apart existing solutions and rebuild them to understand the core mechanics. I treat every error as a curriculum and every bug as a mandatory lesson.
                    </p>
                </motion.section>

                {/* Section 2 */}
                <motion.section variants={itemVariants} className="space-y-4 border-l-2 border-neutral-800 pl-6">
                    <h2 className="text-xl font-medium text-white">Why I Build</h2>
                    <p className="text-secondary leading-relaxed">
                        Software is an exercise in logic and discipline. I build because I enjoy the rigor of optimization and the satisfaction of a type-safe codebase. I want to create tools that are reliable, not just functional.
                    </p>
                </motion.section>

                {/* Section 3 */}
                <motion.section variants={itemVariants} className="space-y-4">
                    <h2 className="text-xl font-medium text-white">The Goal</h2>
                    <p className="text-secondary leading-relaxed">
                        I am currently a student, but my output is professional. I am seeking a role that pushes me into the deep end of backend complexity and frontend performance.
                    </p>
                </motion.section>

            </motion.div>
        </>
    );
};
