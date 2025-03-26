import React from "react";
import { motion } from "framer-motion";
import { userPath } from "../../routes/routeConfig";
import connectFont from "../../assets/image/logo/connect.font.png";

const AboutSection = () => {
  return (
    <div className="relative w-full overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020817] to-[#0b1120]">
      {/* Animated dots background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==')]"></div>
      </div>

      <h1 className="text-center mb-10 text-white text-4xl font-bold">
        About Us
      </h1>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Innovating with a Digital Mindset
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-2xl font-semibold text-white">
                We are a boutique digital transformation consultancy and
                development company.
              </span>
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Since <span className="text-blue-400 font-bold">2021</span>, The
              Connect software has revolutionized digital transformation by
              providing a comprehensive solution for simplifying daily
              administrative tasks.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Our innovative platform is meticulously designed to streamline
              workflows, enhance efficiency, and promote sustainability by
              reducing paper usage.
            </p>

            <div className="pt-4">
              <a
                href={userPath.journey}
                className="px-8 py-3 cursor-pointer rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Discover Our Journey
              </a>
            </div>
          </motion.div>

          {/* Right column - visual element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-80 w-full rounded-2xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
              {/* Animated floating cards */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 left-8 w-32 h-40 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-lg"
              >
                <div className="h-3 w-3/4 bg-blue-400/30 rounded-full mb-2"></div>
                <div className="h-2 w-1/2 bg-purple-400/30 rounded-full"></div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-8 right-8 w-36 h-44 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-lg"
              >
                <div className="h-3 w-3/4 bg-purple-400/30 rounded-full mb-2"></div>
                <div className="h-2 w-1/2 bg-blue-400/30 rounded-full mb-3"></div>
                <div className="h-2 w-2/3 bg-indigo-400/30 rounded-full"></div>
              </motion.div>

              {/* Central text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="flex justify-center">
                    <img
                      src={connectFont}
                      alt="Connect Font"
                      className="w-52 h-auto mb-4"
                    />
                  </div>
                  <p className="text-gray-300">
                    Experience seamless integration, intuitive user interface,
                  </p>
                  <p className="text-gray-300">and unparalleled support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
