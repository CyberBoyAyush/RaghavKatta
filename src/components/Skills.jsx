import React, { useState } from 'react';
import {
    Code,
    Database,
    Server,
    Rocket,
    FileText,
    Layers
} from 'lucide-react';

const SkillsShowcase = () => {  
    const [activeSkill, setActiveSkill] = useState(null);

    const skills = [
        { name: 'MongoDB', category: 'Web', icon: <Server className="w-12 h-12" />, color: 'text-blue-400' },
        { name: 'Express', category: 'Web', icon: <Server className="w-12 h-12" />, color: 'text-green-400' },
        { name: 'React', category: 'Web', icon: <Server className="w-12 h-12" />, color: 'text-pink-400' },
        { name: 'NodeJS', category: 'Web', icon: <Server className="w-12 h-12" />, color: 'text-orange-400' },
        { name: 'C', category: 'Systems', icon: <Code className="w-12 h-12" />, color: 'text-blue-400' },
        { name: 'C++', category: 'Systems', icon: <Layers className="w-12 h-12" />, color: 'text-indigo-400' },
        { name: 'Java', category: 'Enterprise', icon: <Rocket className="w-12 h-12" />, color: 'text-red-400' },
        { name: 'Python', category: 'Data/AI', icon: <Database className="w-12 h-12" />, color: 'text-yellow-400' },
        { name: 'TypeScript', category: 'Web', icon: <FileText className="w-12 h-12" />, color: 'text-blue-300' },
        { name: 'NextJS', category: 'Web', icon: <Server className="w-12 h-12" />, color: 'text-gray-200' },
        { name: 'EJS', category: 'Web', icon: <FileText className="w-12 h-12" />, color: 'text-pink-400' },
        { name: 'Tailwind', category: 'Styling', icon: <Layers className="w-12 h-12" />, color: 'text-teal-400' },
    ];

    return (
        <div className="p-8 bg-gradient-to-br from-gray-900 to-black min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-7xl font-bold mb-16 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
                Technical Skills 
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className={`
                            relative p-6 rounded-xl shadow-xl cursor-pointer 
                            transition-all duration-300 ease-in-out
                            ring-4 ring-orange-500 ring-opacity-0
                            transform-gpu backdrop-blur-sm
                            ${activeSkill === skill.name 
                                ? 'scale-105 bg-gray-800/90 ring-opacity-100' 
                                : 'bg-gray-800/80 hover:ring-opacity-100 hover:scale-105'}
                            ${skill.color}
                        `}
                        onMouseEnter={() => setActiveSkill(skill.name)}
                        onMouseLeave={() => setActiveSkill(null)}
                    >
                        <div className="flex flex-col items-center space-y-3">
                            {skill.icon}
                            <h3 className="text-lg font-semibold text-center text-white">{skill.name}</h3>
                            <p className="text-sm text-gray-400 text-center">{skill.category}</p>
                            {activeSkill === skill.name && (
                                <div className="mt-2 text-center animate-fadeIn">
                                    <span className="text-sm text-gray-300">
                                        Expertise Level: Advanced
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsShowcase;