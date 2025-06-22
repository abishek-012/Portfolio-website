import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Abishek Kandan
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
            Electronics & Communication Engineer
          </h2>
          <h3 className="text-lg md:text-xl text-slate-400 mb-8 font-light">
            3rd Year Student | SSN College of Engineering | Graduating 2027
          </h3>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about bridging the gap between hardware and software, creating innovative solutions in embedded systems and modern web technologies.
          </p>
        </div>

        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            onClick={scrollToAbout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View My Work
          </button>
          <a href="public/Resume_2.pdf" download>
            <button className="border-2 border-slate-400 text-slate-300 hover:bg-white hover:text-slate-800 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Download Resume
            </button>
          </a>
        </div>

        <div className="animate-fade-in-up delay-500 flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/abishek-012"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/abishekkandan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:abishekkandan05@gmail.com"
            className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-slate-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;