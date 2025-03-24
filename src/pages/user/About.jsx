import UserLayout from "../../components/layout/UserLayout";

function About() {
  return (
    <UserLayout>
      <div className="max-w-3xl mx-auto bg-gradient-to-r  text-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-center text-blue-400">
          ABOUT US
        </h1>
        <h2 className="text-2xl font-semibold text-center mt-2 text-gray-300">
          Innovating with a Digital Mindset
        </h2>

        <p className="mt-6 text-lg text-gray-300 text-center">
          We are a boutique digital transformation consultancy and development
          company.
        </p>

        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          Since <span className="font-semibold text-blue-400">2021</span>,
          <span className="font-semibold text-blue-400"> The Connect</span>{" "}
          software has revolutionized digital transformation by simplifying
          daily administrative tasks.
        </p>

        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          Our platform is meticulously designed to streamline workflows, enhance
          efficiency, and promote sustainability by reducing paper usage.
        </p>

        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          Experience seamless integration, an intuitive user interface, and
          unparalleled support with
          <span className="font-semibold text-blue-400"> The Connect</span>,
          your partner in digital evolution.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </UserLayout>
  );
}

export default About;
