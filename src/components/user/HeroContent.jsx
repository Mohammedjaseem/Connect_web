import { motion } from "framer-motion";
import partner1 from "../../assets/image/partners/edentu.dental.learning.app.png";
import partner2 from "../../assets/image/partners/malabar.dental.college.png";
import partner3 from "../../assets/image/partners/levalor.health.png";
import partner4 from "../../assets/image/partners/eranad.knowledge.city.png";
import partner5 from "../../assets/image/partners/levalor.resort.png";

const HeroContent = () => {
  return (
    <div className="flex flex-col container mx-auto p-20 lg:flex-row lg:items-center lg:justify-between">
      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 pt-10 pb-16 lg:pb-0 text-center lg:text-left"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-block px-3 py-1 mb-6 rounded-full text-sm font-semibold text-gray-700 bg-gray-200 bg-opacity-60 backdrop-blur-sm"
        >
          Transforming Business With Technology
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}  
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
        >
          <span className="block bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 text-transparent bg-clip-text">
            Connecting Your
          </span>
          <span className="block mt-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Digital Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-gray-600 text-lg sm:text-xl mb-10 max-w-lg mx-auto lg:mx-0"
        >
          We provide cutting-edge IT solutions that bridge the gap between your
          business goals and technological innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex items-center justify-center lg:justify-start space-x-6"
        >
          <div className="flex -space-x-2">
            {[partner1, partner2, partner3, partner4, partner5].map(
              (src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Partner Image ${i + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"
                />
              )
            )}
          </div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-600">10+</span> businesses
            trust us
          </p>
        </motion.div>
      </motion.div>

      {/* Hero visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full lg:w-1/2 mt-10 lg:mt-30 hidden md:flex justify-center lg:justify-end"
      >
        <div className="relative max-w-lg">
          {/* Background decorative elements */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute top-1/2 -right-16 w-64 h-64 bg-gradient-to-r from-indigo-300 to-purple-200 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute -bottom-8 left-20 w-40 h-40 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-50 blur-xl"></div>

          {/* Main visual */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="relative"
          >
            {/* Card 1 */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-16 -left-12 bg-white p-4 rounded-lg shadow-xl w-44 h-28 border border-gray-100"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div className="text-xs font-semibold text-gray-700">
                  Cloud Services
                </div>
              </div>
              <div className="flex items-end mt-3">
                <div className="w-3 h-10 bg-gray-300 rounded mx-1"></div>
                <div className="w-3 h-14 bg-gray-400 rounded mx-1"></div>
                <div className="w-3 h-8 bg-gray-300 rounded mx-1"></div>
                <div className="w-3 h-12 bg-gray-500 rounded mx-1"></div>
                <div className="w-3 h-6 bg-gray-300 rounded mx-1"></div>
              </div>
            </motion.div>

            {/* Main display */}
            <div className="relative z-10 bg-white p-6 rounded-lg shadow-2xl border border-gray-100">
              <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-md flex items-center justify-center overflow-hidden">
                {/* Animated grid background */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "center center",
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    animate={{
                      backgroundPosition: ["0px 0px", "20px 20px"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Connect logo */}
                <div className="relative z-10 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-transparent bg-clip-text text-6xl font-extrabold">
                  Connect
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div>
                  <div className="font-semibold text-gray-800">
                    Digital Transformation
                  </div>
                  <div className="text-xs text-gray-500">
                    Cloud · Security · Data
                  </div>
                </div>
                <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  Enterprise
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -bottom-16 -right-10 bg-white p-3 rounded-lg shadow-xl w-40 border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="text-xs font-medium text-gray-700">
                  System Online
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 bg-gray-200 rounded w-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gray-500 to-gray-700"
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  ></motion.div>
                </div>
                <div className="h-1.5 bg-gray-200 rounded w-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gray-500 to-gray-700"
                    initial={{ width: "0%" }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                  ></motion.div>
                </div>
                <div className="h-1.5 bg-gray-200 rounded w-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gray-500 to-gray-700"
                    initial={{ width: "0%" }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
