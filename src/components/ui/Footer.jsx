import React, { useState } from "react";
import { Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Connect</h3>
            <p className="text-gray-300 mb-4">
              Innovative IT solutions driving digital transformation for
              businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Instagram].map((Icon, index) => (
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
                "Home",
                "Services",
                "About Us",
                "Contact",
                "Careers",
                "Portfolio",
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
                "Cloud Computing",
                "Web Development",
                "AI Solutions",
                "IT Consulting",
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
                <span className="text-sm">
                  Ground floor, Crezenta Plaza, NH, Edappal Junction, Malappuram
                  - 679576
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-blue-400" />
                <span className="text-sm">+91 8086500023</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-blue-400" />
                <span className="text-sm">itmanager@edentu.com</span>
              </div>
            </div>

            {/* Embedded Map (Placeholder) */}
            <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.95865345321675!2d76.00799589410707!3d10.785368745743632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b971affc4395%3A0x12d120533f60d852!2sMohandas%20Associates%2C%20Crescent%20Plaza!5e0!3m2!1sen!2sin!4v1742840314917!5m2!1sen!2sin"
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
              © 2025 Edentu pvt ltd. All Rights Reserved.
            </p>
            <div className="space-x-4">
              {/* <a
                href="#"
                className="text-gray-300 hover:text-white transition text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition text-sm"
              >
                Terms of Service
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
