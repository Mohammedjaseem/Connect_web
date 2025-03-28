import React, { useState } from "react";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaBrain,
  FaArrowRight,
  FaRocket,
  FaChartLine,
  FaHome,
  FaGem,
  FaGlobeAmericas,
  FaGamepad,
  FaSearch,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { MdWorkOutline, MdLocationOn } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { motion } from "framer-motion";
import UserLayout from "../../components/layout/UserLayout";
import thufail from "../../assets/image/team/thufail.jpg";
import shihab from "../../assets/image/team/shihab.jpg";
import haseeb from "../../assets/image/team/haseeb.jpg";
import afsal from "../../assets/image/team/afsal.png";
import anwar from "../../assets/image/team/anwar.jpg";
import harsal from "../../assets/image/team/harsal.jpg";
import jaseem from "../../assets/image/team/jaseem.jpg";
import suhad from "../../assets/image/team/suhad.jpg";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const jobOpenings = [
    // {
    //   id: 1,
    //   title: "Frontend Developer",
    //   type: "Full-time",
    //   location: "HiLITE Business Park, Calicut",
    //   department: "Frontend Development",
    //   description:
    //     "Build beautiful, responsive user interfaces using React and modern CSS frameworks.",
    //   salary: "₹30,000 - ₹40,000",
    //   icon: <FaCode className="text-blue-400 text-2xl" />,
    //   skills: ["JavaScript", "React", "Tailwind CSS", "TypeScript"],
    // },
    // {
    //   id: 2,
    //   title: "Backend Developer",
    //   type: "Full-time",
    //   location: "HiLITE Business Park, Calicut",
    //   department: "Backend Development",
    //   description:
    //     "Design and implement scalable backend systems with Node.js and cloud technologies.",
    //   salary: "₹30,000 - ₹40,000",
    //   icon: <FaServer className="text-emerald-400 text-2xl" />,
    //   skills: ["Django", "Python", "GraphQL", "REST APIs"],
    // },
    // {
    //   id: 3,
    //   title: "Mobile Developer",
    //   type: "Full-time",
    //   location: "HiLITE Business Park, Calicut",
    //   department: "App Development",
    //   description:
    //     "Create cross-platform mobile applications with React Native.",
    //   salary: "₹35,000 - ₹45,000",
    //   icon: <FaMobileAlt className="text-amber-400 text-2xl" />,
    //   skills: ["React Native", "iOS", "Android", "Flutter"],
    // },
    // {
    //   id: 4,
    //   title: "AI/ML Engineer",
    //   type: "Full-time",
    //   location: "HiLITE Business Park, Calicut",
    //   department: "Research",
    //   description:
    //     "Develop machine learning models to solve complex business problems.",
    //   salary: "₹40,000 - ₹50,000",
    //   icon: <FaBrain className="text-indigo-400 text-2xl" />,
    //   skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
    // },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Thufail Mohamed",
      role: "Founder",
      department: "Leadership",
      image: thufail,
      bio: "Entrepreneur and tech leader with a vision for building innovative digital solutions that transform businesses.",
      social: {
        linkedin: "https://www.linkedin.com/in/thufailm",
        instagram: "https://www.instagram.com/thufailm",
      },
    },
    {
      id: 2,
      name: "Shihab Mecheri",
      role: "CEO",
      department: "Leadership",
      image: shihab,
      bio: "Strategic business leader with expertise in scaling tech companies and driving operational excellence.",
      social: {
        linkedin: "https://www.linkedin.com/in/shihabmrahman/",
        instagram: "https://www.instagram.com/shihab.mecheri",
      },
    },
    {
      id: 3,
      name: "Mohammed Jaseem",
      role: "IT Manager",
      department: "Technology",
      image: jaseem,
      bio: "Full-stack expert with deep knowledge in system architecture and cloud infrastructure.",
      social: {
        linkedin: "https://www.linkedin.com/in/mohammedjaseemtp",
        instagram: "https://www.instagram.com/jassy.in",
        github: "https://github.com/Mohammedjaseem",
      },
    },
    {
      id: 4,
      name: "Suhad KT",
      role: "Frontend Developer",
      department: "Development",
      image: suhad,
      bio: "Specializes in building responsive, accessible user interfaces with React and modern CSS frameworks.",
      social: {
        linkedin: "https://www.linkedin.com/in/suhad-kt-8b62a5256",
        instagram: "https://www.instagram.com/suhad_kt",
        github: "https://github.com/ktsuhad",
      },
    },
    {
      id: 5,
      name: "Harsal M",
      role: "Graphics Designer",
      department: "Creative",
      image: harsal,
      bio: "Visual storyteller creating compelling brand identities and user-centric design systems.",
      social: {
        linkedin: "https://www.linkedin.com/in/harsal-m-9b1720289",
        instagram: "https://www.instagram.com/_harsal",
      },
    },
    {
      id: 6,
      name: "Abdul Haseeb AK",
      role: "Digital Marketing",
      department: "Marketing",
      image: haseeb,
      bio: "Data-driven marketer with expertise in SEO, content strategy, and growth marketing.",
      social: {
        linkedin: "https://www.linkedin.com/in/abdul-haseeb-ak",
        instagram: "https://www.instagram.com/abdulhaseeb.ak",
      },
    },
    {
      id: 7,
      name: "Anwar Musthafa",
      role: "Backend Developer",
      department: "Development",
      image: anwar,
      bio: "Specializes in building scalable backend systems with Django, Python, and cloud technologies.",
      social: {
        linkedin: "https://www.linkedin.com/in/anwarmusthafa",
        instagram: "https://www.instagram.com/anwar_musthafa_",
        github: "https://github.com/anwarmusthafa",
      },
    },
    {
      id: 8,
      name: "Muhammed Afsal",
      role: "Frontend Developer",
      department: "Development",
      image: afsal,
      bio: "Passionate about creating interactive web applications with React and tailwindCSS.",
      social: {
        linkedin: "https://www.linkedin.com/in/afsify",
        instagram: "https://www.instagram.com/afsify",
        github: "https://github.com/afsify",
      },
    },
  ];

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab =
      activeTab === "all" || job.department.toLowerCase() === activeTab;
    return matchesSearch && matchesTab;
  });

  const departments = [
    ...new Set(jobOpenings.map((job) => job.department.toLowerCase())),
  ];

  const whyConnectCards = [
    {
      title: "Innovative Projects",
      description: "Work on cutting-edge technology that makes a real impact.",
      icon: <FaRocket className="text-blue-400 text-3xl" />,
      gradient: "from-blue-500 to-blue-600",
      bgPattern: "bg-[url('https://grainy-gradients.vercel.app/noise.svg')]",
    },
    {
      title: "Growth Focused",
      description: "₹50k annual learning budget and mentorship programs.",
      icon: <FaChartLine className="text-emerald-400 text-3xl" />,
      gradient: "from-emerald-500 to-emerald-600",
      bgPattern: "bg-[url('https://grainy-gradients.vercel.app/noise.svg')]",
    },
    {
      title: "Flexible Work",
      description: "Hybrid options and flexible schedules for all.",
      icon: <FaHome className="text-purple-400 text-3xl" />,
      gradient: "from-purple-500 to-purple-600",
      bgPattern: "bg-[url('https://grainy-gradients.vercel.app/noise.svg')]",
    },
    {
      title: "Competitive Benefits",
      description: "Health insurance and generous leave policies.",
      icon: <FaGem className="text-amber-400 text-3xl" />,
      gradient: "from-amber-500 to-amber-600",
      bgPattern: "bg-[url('https://grainy-gradients.vercel.app/noise.svg')]",
    },
    {
      title: "Inclusive Culture",
      description: "Diverse team where every voice matters.",
      icon: <FaGlobeAmericas className="text-indigo-400 text-3xl" />,
      gradient: "from-indigo-500 to-indigo-600",
      bgPattern: "bg-[url('https://grainy-gradients.vercel.app/noise.svg')]",
    },
    {
      title: "Fun Environment",
      description: "Team retreats, hackathons, and game nights.",
      icon: <FaGamepad className="text-red-400 text-3xl" />,
      gradient: "from-red-500 to-red-600",
      bgPattern: "bg-[url('https://grainy-gradients.vercel.app/noise.svg')]",
    },
  ];

  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const hoverCard = {
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <UserLayout>
      <div className="min-h-screen text-gray-100">
        {/* Why Work With Us */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Why Join Connect?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just offering jobs - we're offering careers with
                purpose, growth, and an amazing team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyConnectCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={hoverCard}
                  className="relative group overflow-hidden rounded-2xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90 ${card.bgPattern} opacity-20`}
                  ></div>
                  <div className="absolute inset-0.5 bg-gray-900/80 rounded-2xl backdrop-blur-sm"></div>
                  <div className="relative z-10 p-8 h-full">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-6">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{card.description}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds you'll be working with at Connect.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                  onMouseEnter={() => setHoveredCard(member.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 blur transition duration-300 ${
                      hoveredCard === member.id ? "opacity-100" : ""
                    }`}
                  ></div>
                  <div className="relative bg-gray-800 rounded-2xl p-6 h-full border border-gray-700 overflow-hidden">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700 mb-4 relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                          <div className="flex gap-2">
                            <a
                              href={member.social.linkedin}
                              className="text-gray-300 hover:text-white transition"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedin />
                            </a>
                            <a
                              href={member.social.instagram}
                              className="text-gray-300 hover:text-white transition"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaInstagram />
                            </a>
                            {member.social.github && (
                              <a
                                href={member.social.github}
                                className="text-gray-300 hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaGithub />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-blue-400 mb-1">{member.role}</p>
                      <p className="text-sm text-gray-400 mb-4">
                        {member.department}
                      </p>
                      <p className="text-gray-300 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Current Openings
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're looking for talented individuals to join our growing team.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute left-3 top-3.5 text-gray-400">
                    <FaSearch />
                  </div>
                </div>
                <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                      activeTab === "all"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    All Departments
                  </button>
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setActiveTab(dept)}
                      className={`px-4 py-2 rounded-full capitalize whitespace-nowrap transition ${
                        activeTab === dept
                          ? "bg-blue-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={hoverCard}
                    className="bg-gray-700 p-6 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">{job.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-300">
                            <span className="flex items-center gap-1">
                              <MdWorkOutline /> {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <MdLocationOn /> {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <GiMoneyStack /> {job.salary}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-6 py-2 rounded-lg whitespace-nowrap transition duration-300 flex items-center gap-2">
                        Apply Now <FaArrowRight />
                      </button>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-600">
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-gray-600 text-gray-200 text-xs px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center py-12 bg-gray-700 rounded-xl"
                >
                  <h3 className="text-xl font-medium text-white">
                    No jobs found at this moment
                  </h3>
                  <p className="text-gray-400 mt-2">
                    We couldn't find any matching positions at this time
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Careers;
