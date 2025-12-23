import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const year = new Date().getFullYear();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/about', label: 'About' },
        { path: '/skills', label: 'Skills' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col max-w-3xl mx-auto px-6 sm:px-8 bg-background text-primary selection:bg-white/20">
            <header className="py-8 sm:py-12 flex justify-between items-center relative z-20">
                <Link to="/" className="text-xl font-semibold tracking-tight hover:text-white/80 transition-colors">
                    Ankur Rana
                </Link>
                <nav className="flex gap-1 sm:gap-2">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-secondary hover:text-white'
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute left-0 right-0 -bottom-1 h-[1px] bg-white"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </header>

            <main className="flex-1 py-8 relative">
                {children}
            </main>

            <footer className="py-12 border-t border-white/5 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-secondary">
                <div className="flex gap-6">
                    <a href="https://github.com/ranaji114" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/ankur-rana-5a67a73a1/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="mailto:ranaankur442@gmail.com" className="hover:text-white transition-colors">Email</a>
                </div>
                <p>© {year} Ankur Rana. Built with intention.</p>
            </footer>
        </div>
    );
};
