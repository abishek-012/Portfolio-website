import { Github, Linkedin, Mail} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Abishek Kandan</h3>
              <p className="text-slate-300">Electronics & Communication Engineer</p>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              <a
                href="https://github.com/abishek-012"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/abishekkandan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:abishekkandan05@gmail.com"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-300 flex items-center justify-center space-x-1">
              <span>© 2025 Abishek Kandan. Built with passion for technology.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;