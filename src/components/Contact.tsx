import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Interested in collaborating on exciting projects or discussing opportunities in electronics and technology? Let's connect!
            </p>
          </div>

          <div className="max-w-lg mx-auto bg-slate-800 rounded-xl p-8 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-slate-300">abishekkandan05@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-500 p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <a
                  href="tel:+91 9944821737"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  +91 99448 21737
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-purple-600 p-3 rounded-full">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">GitHub</h4>
                <a
                  href="https://github.com/abishek-012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  github.com/abishek-012
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-600 p-3 rounded-full">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/abishekkandan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  linkedin.com/in/abishekkandan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
