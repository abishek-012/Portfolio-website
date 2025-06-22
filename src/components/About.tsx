import React from 'react';
import { Cpu, Zap, BookOpen } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: "Embedded Systems",
      description: "Designing and developing microcontroller-based solutions for real-world applications"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-500" />,
      title: "Academic Excellence",
      description: "Strong foundation in ECE fundamentals with focus on practical implementation"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Circuit Design",
      description: "Analyzing and designing electronic circuits with focus on efficiency and reliability"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Hi! I'm Abishek, a 3rd year Electronics & Communication Engineering student at SSN College of Engineering, graduating in 2027. I'm passionate about technology and innovation, specializing in embedded systems and the fascinating intersection between hardware and software.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                My academic journey at SSN has equipped me with a strong foundation in circuit design, signal processing, and microcontroller programming. I enjoy tackling complex engineering challenges and creating solutions that have real-world impact.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                When I'm not studying or working on projects, you'll find me exploring emerging technologies, contributing to open-source projects, or learning new programming languages to expand my technical toolkit.
              </p>
            </div>

            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-slate-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;