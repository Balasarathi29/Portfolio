import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Smartphone, Globe, PenTool, Terminal, Braces, SquareCode, GitBranch, DatabaseZap} from 'lucide-react';
import SkillCard from '../components/SkillCard';

const Skills = () => {
    const skills = [
        { name: 'React', level: 90, icon: Code2, color: '#61DAFB' },
        { name: 'JavaScript', level: 85, icon: Terminal, color: '#F7DF1E' },
        { name: 'HTML/CSS', level: 95, icon: Layout, color: '#E34F26' },
        { name: 'Node.js', level: 80, icon: Server, color: '#339933' },
        { name: 'Python', level: 75, icon: Braces, color: '#3776AB' },
        { name: 'Programming C', level: 70, icon: SquareCode, color: '#A8B9CC' },
        { name: 'Git', level: 85, icon: GitBranch, color: '#F05032' },
        { name: 'MySQL', level: 80, icon: DatabaseZap, color: '#00758F' },
        { name: 'MongoDB', level: 85, icon: Database, color: '#47A248' },
        { name: 'Responsive Design', level: 90, icon: Smartphone, color: '#ec4899' },
        { name: 'UI/UX Design', level: 70, icon: PenTool, color: '#A259FF' },
        { name: 'Web Performance', level: 80, icon: Globe, color: '#06b6d4' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>My Skills</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    I've spent years cultivating my skills in web development.
                    Here are the technologies I work with to bring ideas to life.
                </p>
            </motion.div>

            <motion.div
                className="skills-grid"
                variants={container}
                initial="hidden"
                animate="show"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}
            >
                {skills.map((skill, index) => (
                    <motion.div key={index} variants={item}>
                        <SkillCard {...skill} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
