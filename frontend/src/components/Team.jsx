import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Rana Muhammad Shafiq",
      role: "Chief Executive Officer (CEO)",
      image: "/images/gmi/shafiq.jpg",
      social: { linkedin: "#", twitter: "#", mail: "mailto:shafiq@gulfmarketingint.com" }
    },
    {
      name: "Malik Asad Zaman",
      role: "Country Manager",
      image: "/images/gmi/asad.jpg",
      social: { linkedin: "#", twitter: "#", mail: "mailto:asad@gulfmarketingint.com" }
    },
    {
      name: "Ali Raza",
      role: "IT Manager",
      image: "/images/gmi/ali.png",
      social: { linkedin: "#", twitter: "#", mail: "mailto:ali@gulfmarketingint.com" }
    }
  ];

  return (
    <section className="py-24 bg-primary-50 relative overflow-hidden" id="team">
      
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3 block">Expertise</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Team</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Passionate professionals dedicated to bringing the best medical and diagnostic tools to the healthcare sector.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white hover:border-primary-100 relative overflow-hidden"
            >
              {/* Card top border accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Profile Image container */}
              <div className="relative mx-auto w-40 h-40 mb-6">
                <div className="absolute inset-0 bg-primary-100 rounded-full scale-105 group-hover:scale-110 transition-transform duration-500"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-inner group-hover:border-primary-50 transition-colors"
                  onError={(e) => {
                    e.target.src = '/images/gmi/logo.png';
                    e.target.classList.add('object-contain', 'p-4');
                  }}
                />
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-primary-600 font-semibold text-lg mb-6">{member.role}</p>
              
              {/* Social links */}
              <div className="flex justify-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <a href={member.social.mail} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-white hover:bg-red-500 transition-colors">
                  <Mail size={18} />
                </a>
                <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-600 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href={member.social.twitter} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-white hover:bg-sky-500 transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
