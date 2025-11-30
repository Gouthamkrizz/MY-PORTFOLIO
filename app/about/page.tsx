"use client";

import { motion, Variants } from "framer-motion";

export default function AboutPage() {
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
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 container mx-auto overflow-hidden bg-background transition-colors duration-300">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.1, 0.15, 0.1],
                        x: [0, 50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto relative z-10"
            >
                <motion.div variants={itemVariants} className="mb-12 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-primary">
                        About Me
                    </h1>
                    <div className="h-1 w-24 bg-primary rounded-full mx-auto md:mx-0" />
                </motion.div>

                <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                    <motion.p variants={itemVariants} className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                        Hello! My name is Goutham, and I am a passionate software engineer dedicated to building intelligent systems that solve real-world problems. My journey into the world of technology began with a curiosity about how data drives decision-making, which quickly evolved into a deep-seated love for <strong className="text-foreground">Data Engineering</strong> and <strong className="text-foreground">Artificial Intelligence</strong>.
                    </motion.p>

                    <motion.p variants={itemVariants} className="p-6 bg-card/80 border border-border rounded-2xl backdrop-blur-sm hover:bg-card transition-colors shadow-sm">
                        With a strong foundation in <strong className="text-primary">Python</strong> and <strong className="text-primary">SQL</strong>, I specialize in designing scalable data pipelines, optimizing database architectures, and developing machine learning models that deliver actionable insights. I believe that code is not just about syntax; it's about creating efficient, maintainable, and human-centered solutions. Whether it's automating a complex ETL process or fine-tuning a neural network, I approach every challenge with a problem-solving mindset and a commitment to excellence.
                    </motion.p>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gradient-to-br from-primary/5 to-blue-500/5 border border-border rounded-2xl">
                            <h3 className="text-xl font-bold text-foreground mb-2">Innovation</h3>
                            <p className="text-sm text-muted-foreground">Constantly exploring new technologies and frameworks to stay at the forefront of the ever-evolving tech landscape.</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-border rounded-2xl">
                            <h3 className="text-xl font-bold text-foreground mb-2">Impact</h3>
                            <p className="text-sm text-muted-foreground">Leveraging technology to create positive societal change and drive meaningful outcomes through open-source collaboration.</p>
                        </div>
                    </motion.div>

                    <motion.p variants={itemVariants}>
                        Over the years, I have had the privilege of working on diverse projects, ranging from predictive analytics engines to large-scale computer vision systems. My experience has taught me the importance of adaptability and continuous learning. Beyond the code, I am a strong advocate for knowledge sharing, mentoring aspiring developers, and discussing the ethical implications of AI.
                    </motion.p>
                </div>
            </motion.div>
        </main>
    );
}
