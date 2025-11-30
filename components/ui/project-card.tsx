"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    image: string;
    links: { github: string; demo: string };
    category: string;
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, image, links, category }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-full w-full rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-[1px]"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-slate-900 shadow-lg"
            >
                {/* Content Container */}
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-950 flex flex-col">
                    {/* Image Section */}
                    <div className="relative h-48 w-full overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold text-white bg-blue-600/80 backdrop-blur-sm rounded-full border border-blue-400/30">
                            {category}
                        </span>
                    </div>

                    {/* Text Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1" title={title}>{title}</h3>
                        <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                            {description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {tech.slice(0, 3).map((t) => (
                                <span key={t} className="px-2 py-1 text-[10px] font-mono text-cyan-400 bg-cyan-950/30 rounded border border-cyan-900/50">
                                    {t}
                                </span>
                            ))}
                            {tech.length > 3 && (
                                <span className="px-2 py-1 text-[10px] font-mono text-slate-500">+{tech.length - 3}</span>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 mt-auto">
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white" asChild>
                                <a href={links.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4 mr-2" /> Code
                                </a>
                            </Button>
                            <Button variant="default" size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white border-none" asChild>
                                <a href={links.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" /> Demo
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
