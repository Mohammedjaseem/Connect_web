import UserLayout from "../../components/layout/UserLayout";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import { motion } from "framer-motion";

function Home() {
  return (
    <UserLayout>
      {/* <BackgroundGradientAnimation> */}
      {/* Enhanced Hero Section */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="h-full w-full bg-gray-900"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Animated gradient orbs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  i % 2 === 0
                    ? "linear-gradient(135deg, #667eea, #764ba2)"
                    : "linear-gradient(135deg, #6a85b6, #bac8e0)",
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * 40 - 20],
                scale: [1, 1.05, 0.95, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 7,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          ))}

          {/* Animated lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="gray"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
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
                We provide cutting-edge IT solutions that bridge the gap between
                your business goals and technological innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 text-gray-700 font-medium rounded-lg hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
                  Learn More
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="mt-10 flex items-center justify-center lg:justify-start space-x-6"
              >
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"
                    ></div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">2,500+</span>{" "}
                  businesses trust us
                </p>
              </motion.div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end"
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

          {/* Stats section */}
          <div className="relative mt-20 lg:mt-32">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 transform skew-y-3 opacity-50 rounded-2xl"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">50+</div>
                <div className="text-sm text-gray-600">IT Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>{" "}
      {/* </BackgroundGradientAnimation> */}
    </UserLayout>
  );
}

export default Home;
