"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Works", path: "/works" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
            <nav className="flex items-center gap-1 p-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg">
                <Link href="/" className="px-4 py-2 font-bold text-slate-900">
                    G
                </Link>
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                                isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-blue-600 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    );
                })}
                <div className="ml-2 pl-2 border-l border-slate-200 dark:border-slate-700">
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}
