import React from 'react';
import { ArrowLeft, Mail, MessageCircle, Twitter, Instagram, Youtube, Linkedin, Music } from 'lucide-react';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/realwarrenlee' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/realwarrenlee' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@realwarrenlee' },
    { icon: Music, label: 'TikTok', href: 'https://tiktok.com/@realwarrenlee' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/realwarrenlee' }
  ];

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 text-white">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/80 hover:text-white mb-6 md:mb-8 transition-colors duration-200 group button-shadow hover:button-shadow-hover bg-white/5 hover:bg-white/10 rounded-lg px-3 py-2 border border-white/10"
      >
        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
        <span>Back</span>
      </button>
      
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
          <p className="text-white/80 mt-4 text-base md:text-lg">
            Got something on your mind? I'm always excited to hear about new projects, ideas, or just meet someone new.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mx-auto">
          <div className="bg-white/10 rounded-xl p-6 md:p-8 border border-white/20 backdrop-blur-sm card-shadow hover:card-shadow-hover transition-all duration-300 w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-3">
              <Mail size={20} className="text-blue-300 md:w-6 md:h-6" />
              Email
            </h3>
            <p className="text-white/80 mb-4 md:mb-6 text-base md:text-lg">
              Drop me a line directly:
            </p>
            <a 
              href="mailto:realwarrenlee@gmail.com" 
              className="text-blue-300 hover:text-blue-200 transition-colors duration-200 font-mono text-lg md:text-xl break-all hover:underline"
            >
              realwarrenlee@gmail.com
            </a>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 md:p-8 border border-white/20 backdrop-blur-sm card-shadow hover:card-shadow-hover transition-all duration-300 w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-3">
              <MessageCircle size={20} className="text-green-300 md:w-6 md:h-6" />
              Connect
            </h3>
            <p className="text-white/80 mb-4 md:mb-6 text-base md:text-lg">
              Find me on social platforms:
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110 button-shadow hover:button-shadow-hover"
                  aria-label={label}
                >
                  <Icon size={20} className="md:w-6 md:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
