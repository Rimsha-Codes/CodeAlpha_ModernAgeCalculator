import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Me</h3>
          <p>
            Hi, I’m <span className="font-semibold text-green-400">Rimsha Arshad</span>, 
            the creator of this Age Calculator. Passionate about coding & learning new tech.✨.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#feedback" className="hover:text-white">Feedback</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={18}/> rimshaarshad11223@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18}/> +92 XXX XXX XXXX
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18}/> Sialkot, Pakistan
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><Facebook /></a>
            <a href="#" className="hover:text-white"><Twitter /></a>
            <a href="#" className="hover:text-white"><Instagram /></a>
            <a href="#" className="hover:text-white"><Linkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Created with 💙 by <span className="text-green-400">Rimsha Arshad</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
