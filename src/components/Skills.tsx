import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "C/C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "MATLAB", level: 75 },
      ]
    },
    {
      title: "Hardware & Tools",
      skills: [
        { name: "Arduino", level: 95 },
        { name: "PCB Design", level: 82 },
        { name: "Oscilloscope", level: 85 },
        { name: "Multimeter", level: 90 },
      ]
    },
    {
      title: "Technologies",
      skills: [
        { name: "Embedded C", level: 75 },
        { name: "Signal Processing", level: 80 },
        { name: "Communication Systems", level: 78 },
        { name: "Control Systems", level: 75 },
        { name: "Web Development", level: 82 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A comprehensive skill set spanning hardware design, embedded programming, and modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;