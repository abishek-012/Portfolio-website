import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
    title: "Electronics & Communication Engineering Student",
    company: "SSN College of Engineering",
    location: "Chennai, India",
    period: "2023 - 2027",
    description:
      "Currently pursuing Bachelor's degree in Electronics & Communication Engineering with a focus on embedded systems, signal processing, and communication technologies. Expected graduation in 2027.",
    achievements: [
      "Completed advanced coursework in Digital Signal Processing and Communication Systems",
      "Led team projects in embedded system design and web development",
      "Maintained strong academic performance with hands-on project experience"
    ]
  },
  {
    title: "Full-Stack Developement Intern",
    company: "CopterCode",
    location: "Chennai, India",
    period: "Summer 2025",
    description:
      "Worked as a full-stack development intern, gaining hands-on experience in building responsive web applications using modern technologies.",
    achievements: [
      "Built a dynamic library management system using React, Tailwind CSS, and Node.js",
      "Integrated Express APIs with MongoDB to enable CRUD operations and user authentication",
      "Collaborated in a team environment, participating in code reviews and project planning"
    ]
  },
  {
    title: "Telecommunication Intern",
    company: "BSNL-RGMMTC, IITM",
    location: "Chennai, India",
    period: "June 2025",
    description:
      "Gained practical exposure to telecom infrastructure, switching systems, and optical fiber communication.",
    achievements: [
      "Studied the operation of modern telecom switching systems",
      "Explored optical fiber communication and real-world network setups"
    ]
  },
  {
    title: "Systems Intern",
    company: "Vikra Ocean Tech",
    location: "Chennai, India",
    period: "July 2025",
    description:
      "Worked on control systems for underwater Remotely Operated Vehicles (ROVs), enhancing stability and responsiveness.",
    achievements: [
      "Designed control systems to optimize underwater ROV performance",
      "Integrated and calibrated thrusters for precise movement and control"
    ]
  }
];



  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Academic & Professional Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="ml-20">
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-800 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end mt-2 md:mt-0">
                          <div className="flex items-center text-slate-600 mb-1">
                            <Calendar size={16} className="mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-slate-600">
                            <MapPin size={16} className="mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-slate-800">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              <span className="text-slate-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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

export default Experience;