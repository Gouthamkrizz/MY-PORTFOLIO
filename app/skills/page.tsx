"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
    {
        title: "Languages",
        description: "I am proficient in several programming languages, with a primary focus on Python for data science and backend development. I also have experience with C++ for performance-critical applications and JavaScript for web interactivity.",
        skills: ["Python", "SQL", "C++", "JavaScript", "HTML/CSS"]
    },
    {
        title: "AI & Machine Learning",
        description: "I specialize in building and deploying machine learning models. From deep learning with TensorFlow and PyTorch to traditional ML with Scikit-learn, I have experience across the entire AI lifecycle.",
        skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "NLP"]
    },
    {
        title: "Tools & Platforms",
        description: "I utilize a modern suite of tools to streamline development and deployment. My workflow includes version control with Git, containerization with Docker, and cloud infrastructure management on AWS.",
        skills: ["Git & GitHub", "Docker", "AWS", "Jupyter", "PostgreSQL", "MongoDB", "Airflow"]
    },
    {
        title: "Soft Skills",
        description: "Beyond technical expertise, I value effective communication and collaboration. I thrive in agile environments and enjoy translating complex technical concepts into clear, actionable insights for stakeholders.",
        skills: ["Problem Solving", "Team Collaboration", "Technical Writing", "Agile Methodology"]
    }
];

import OrbitingSkills from "@/components/ui/orbiting-skills";

// ... existing imports

import { Code2, Brain, Database, Users } from "lucide-react";

export default function SkillsPage() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 container mx-auto bg-background transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                            Technical Arsenal
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                            My technical toolkit is built on a solid foundation of computer science principles and practical experience. I carefully select the right tools for each job, prioritizing scalability, maintainability, and performance.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            <OrbitingSkills />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => {
                        const Icon = [Code2, Brain, Database, Users][index];
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-card/60 backdrop-blur-md border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{category.title}</h3>
                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed h-24 overflow-hidden">
                                    {category.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-xs font-semibold text-muted-foreground bg-card border border-border rounded-full shadow-sm group-hover:border-primary/30 group-hover:text-primary transition-all"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </main>
    );
}
