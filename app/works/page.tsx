"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Predictive Analytics Engine",
        description: "A sophisticated machine learning system designed to forecast market trends based on historical financial data. Handles over 1 million records with 85% prediction accuracy.",
        tech: ["Python", "Scikit-learn", "Pandas", "FastAPI"],
        image: "/assets/project1.png",
        links: { github: "#", demo: "#" },
        category: "Data Science"
    },
    {
        title: "Data Warehouse ETL",
        description: "Automated ETL pipeline consolidating data from multiple sources. Processes over 1TB of data daily with 99.9% uptime and rigorous validation checks.",
        tech: ["SQL", "Python", "Apache Airflow", "Docker"],
        image: "/assets/project2.png",
        links: { github: "#", demo: "#" },
        category: "Data Engineering"
    },
    {
        title: "Image Recognition API",
        description: "Scalable REST API leveraging deep learning to classify images. Deployed on AWS Lambda with sub-200ms latency for real-time inference.",
        tech: ["PyTorch", "AWS Lambda", "API Gateway", "Docker"],
        image: "/assets/project1.png",
        links: { github: "#", demo: "#" },
        category: "AI/ML"
    },
    {
        title: "NLP Sentiment Analyzer",
        description: "Real-time sentiment analysis tool for customer feedback. Uses BERT models to classify reviews as positive, negative, or neutral with high precision.",
        tech: ["Python", "Hugging Face", "React", "Flask"],
        image: "/assets/project2.png",
        links: { github: "#", demo: "#" },
        category: "AI/ML"
    },
    {
        title: "Real-time Fraud Detection",
        description: "Financial security system detecting anomalies in transaction patterns. Implements isolation forests and autoencoders for robust fraud prevention.",
        tech: ["Python", "TensorFlow", "Kafka", "Spark"],
        image: "/assets/project1.png",
        links: { github: "#", demo: "#" },
        category: "Data Science"
    },
    {
        title: "Smart Recommendation System",
        description: "Personalized product recommendation engine for e-commerce. Utilizes collaborative filtering and matrix factorization to boost user engagement.",
        tech: ["Python", "Surprise Lib", "Redis", "FastAPI"],
        image: "/assets/project2.png",
        links: { github: "#", demo: "#" },
        category: "AI/ML"
    }
];

const categories = ["All", "AI/ML", "Data Science", "Data Engineering"];

export default function WorksPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 container mx-auto bg-background transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                        Featured Projects
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A collection of my work in AI, Machine Learning, and Data Engineering.
                        Solving complex problems with data-driven solutions.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            variant={activeCategory === cat ? "default" : "outline"}
                            className={`rounded-full px-6 transition-all ${activeCategory === cat
                                ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
                                : "bg-card text-muted-foreground hover:bg-muted border-border"
                                }`}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="h-[400px]" // Fixed height for the card container
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </main>
    );
}
