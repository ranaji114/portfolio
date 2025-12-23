import { SEO } from '../components/SEO';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9] as const
        }
    }
};

export const Projects = () => {
    return (
        <>
            <SEO title="Projects | Software Engineering Portfolio" />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-32 py-12"
            >

                {/* Main Feature - Nexora */}
                <motion.section variants={itemVariants} className="space-y-8">
                    <header className="space-y-2 border-l-2 border-primary pl-6">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-accent text-sm font-mono tracking-wider uppercase"
                        >
                            Primary Focus
                        </motion.span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">Nexora</h2>
                        <p className="text-xl text-secondary max-w-xl">
                            A complex social graph engine exploring real-time interaction and permission logic.
                        </p>
                    </header>

                    <div className="grid gap-12 sm:grid-cols-12 pt-8">
                        <div className="sm:col-span-8 space-y-8">
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">The Engineering Challenge</h3>
                                <p className="text-secondary text-lg leading-relaxed text-balance">
                                    Social platforms look simple but drown in edge cases. Nexora isn't just a clone; it's a study in <strong>state synchronization</strong>. I engineered a relational schema to handle race conditions in follower counts and implemented optimistic UI updates to mask network latency.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">System Internals</h3>
                                <ul className="list-disc list-outside ml-4 text-secondary space-y-2">
                                    <li>Real-time websocket subscriptions for live feedback loops (likes/comments).</li>
                                    <li>Row Level Security (RLS) policies ensuring private content stays private.</li>
                                    <li>Complex join strategies for efficient feed generation.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="sm:col-span-4 flex flex-col justify-end space-y-6 border-t sm:border-t-0 sm:border-l border-border pt-6 sm:pt-0 sm:pl-8">
                            <div>
                                <h4 className="text-sm text-neutral-500 uppercase tracking-widest mb-3">Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Supabase", "TypeScript", "Realtime"].map(t => (
                                        <span key={t} className="text-sm text-primary font-mono">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <a href="https://github.com/ranaji114" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors font-medium">
                                <Github size={20} />
                                View Source
                            </a>
                        </div>
                    </div>
                </motion.section>

                {/* Secondary Projects - Compact Grid */}
                <motion.section variants={itemVariants} className="space-y-12">
                    <h3 className="text-2xl font-semibold text-white/50">Foundation Logs</h3>
                    <div className="grid gap-12 sm:grid-cols-2">

                        {/* Amazon Clone */}
                        <motion.article
                            className="space-y-4 group"
                            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                        >
                            <div className="flex justify-between items-baseline">
                                <h4 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">Amazon Clone</h4>
                                <span className="text-xs font-mono text-neutral-500">Frontend Arch</span>
                            </div>
                            <p className="text-secondary leading-relaxed">
                                A deep dive into complex local state. I avoided simple prop drilling and implemented a performant Context-based cart system to handle e-commerce flows without frame drops.
                            </p>
                            <div className="pt-2 flex gap-4 text-xs font-mono text-neutral-400">
                                <span>React</span>
                                <span>Context API</span>
                                <span>Responsive Design</span>
                            </div>
                        </motion.article>

                        {/* Tic-Tac-Toe */}
                        <motion.article
                            className="space-y-4 group"
                            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                        >
                            <div className="flex justify-between items-baseline">
                                <h4 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">Tic-Tac-Toe</h4>
                                <span className="text-xs font-mono text-neutral-500">Algorithm</span>
                            </div>
                            <p className="text-secondary leading-relaxed">
                                Not just a game, but a lesson in immutability. I built a "time travel" feature that required strictly pure functions and derived state calculations to prevent mutation bugs.
                            </p>
                            <div className="pt-2 flex gap-4 text-xs font-mono text-neutral-400">
                                <span>Game Logic</span>
                                <span>Pure Functions</span>
                                <span>History Stack</span>
                            </div>
                        </motion.article>

                    </div>
                </motion.section>

            </motion.div>
        </>
    );
};
