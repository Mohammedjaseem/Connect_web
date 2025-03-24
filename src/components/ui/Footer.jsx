import React, { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Mail, 
  Phone,
  Menu,
  X 
} from 'lucide-react';

const Footer = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">TechSphere Solutions</h3>
            <p className="text-gray-300 mb-4">
              Innovative IT solutions driving digital transformation for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-200 hover:text-blue-400 transition transform hover:scale-110"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Home', 'Services', 'About Us', 
                'Contact', 'Careers', 'Portfolio'
              ].map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Cloud Computing', 'Cybersecurity', 
                'Web Development', 'AI Solutions', 
                'IT Consulting', 'Data Analytics'
              ].map((service, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Map */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-xl font-semibold mb-4">Contact & Location</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-blue-400" />
                <span className="text-sm">123 Tech Street, Innovation Park, CA 94000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-blue-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-blue-400" />
                <span className="text-sm">contact@techsphere.com</span>
              </div>
            </div>

            {/* Embedded Map (Placeholder) */}
            <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.982575961036!2d-73.98823548468069!3d40.748817479374555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1622744660606!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 TechSphere Solutions. All Rights Reserved.
            </p>
            <div className="space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;