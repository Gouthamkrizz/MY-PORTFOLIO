"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const experiences = [
    {
        date: "2025 - Present",
        title: "Chief Media Head",
        company: "The Kada",
        description: "Spearheading the company's overall media strategy, including content creation, distribution, public relations, and brand positioning across all platforms. Responsible for driving audience engagement, optimizing media spend, and ensuring brand consistency and growth.",
        achievements: [
            "Led the transformation of the media production workflow, resulting in a 50% increase in content output and a 25% growth in cross-platform audience engagement.",
            "Successfully executed a global rebranding campaign and PR initiative, which improved brand perception scores by 15% and secured top-tier media placements.",
            "Mentored and restructured the media and content teams, establishing best practices for creative excellence, performance tracking, and cross-departmental collaboration."
        ]
    },
    {
        date: "2023-2025",
        title: "BACKEND Learning Engineer",
        company: "VYOMA IT  SOLUTIONS",
        description: "Focused on supporting the data science team by assisting in the development and deployment of foundational computer vision models. Primary responsibilities included data annotation, model tuning, and integrating AI algorithms into proof-of-concept industrial applications.",
        achievements: [
            "Assisted senior engineers in developing and rigorously testing a custom CNN model for defect detection, contributing to the system achieving a 98% accuracy rate.",
            "Executed key steps in the MLOps pipeline, including preparing high-quality training datasets and validating model performance metrics prior to production deployment.",
            "Learned to deploy and optimize simple machine learning models on edge devices, gaining practical experience in balancing performance and resource constraints."
        ]
    },
    {
        date: "2023-2024",
        title: "Junior Sql Developer",
        company: "GENX  HOSTING",
        description: "Contributed to critical backend services for a high-performance gaming server hosting platform. Gained practical experience in API development, optimizing PostgreSQL databases for high concurrency, and ensuring low-latency data delivery essential for real-time multiplayer environments.",
        achievements: [
            "Assisted in developing and maintaining foundational microservices (using Python/FastAPI) responsible for user authentication and server provisioning for thousands of concurrent users.",
            "Optimized high-volume SQL queries in PostgreSQL, specifically targeting session management and player data retrieval, to ensure low-latency performance critical for a seamless gaming experience.",
            "Wrote comprehensive unit and integration tests for new API endpoints, directly contributing to the stability and reliability of the hosting environment."
        ]
    }
];



export default function ExperiencePage() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 container mx-auto bg-background transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
                    Where I've Worked
                </h1>

                <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 mb-24">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <span className="inline-block px-3 py-1 mb-2 text-xs font-mono text-primary-foreground bg-primary rounded-full border border-primary/20">
                                {exp.date}
                            </span>

                            <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                            <h4 className="text-lg text-muted-foreground mb-4">{exp.company}</h4>

                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                {exp.description}
                            </p>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>


            </motion.div>
        </main>
    );
}
