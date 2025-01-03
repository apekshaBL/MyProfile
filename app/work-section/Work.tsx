
import paySphere from '../../public/projects/payspere.png'
import estate from '../../public/projects/estate.png'
import lms from '../../public/projects/lms.png'
import pokedex from '../../public/projects/pokedex.png'
import Management from '../../public/projects/Management.png'
import mystery from '../../public/projects/mystery.png'
import Image from 'next/image';
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { FaGithub, FaLink } from 'react-icons/fa';
import Link from 'next/link';


const projects = [

  {
    id: 1,
    title: "Pay Master",
    subtitle: "(Scalable Payment Platform)",
    description:
      "Architected and developed a scalable payment application featuring three robust backend services and two dynamic frontends. Optimized development workflow with Turborepo and implemented PostgreSQL and Prisma for efficient data management.",
    image: paySphere, // Replace with the actual image import or path
    link: "https://github.com/ApekshaBL", // Add the project link if available
    skills: [
      "#next.js",
      "#express.js",
      "#postgresql",
      "#prisma",
      "#turborepo",
      "#kubernetes",
      "#docker",
      "#typescript",
      "#react.js",
    ],
    accentColor: "#fff",
  },

  {
    id: 2,
    title: "Anonymous Fun",
    subtitle: "(Mystery Message Web Application)",
    description:
      "Developed an anonymous messaging platform with features like OTP verification, AI-powered message suggestions, and secure email verification using Resend Mail. Leveraged OpenAI API for intelligent suggestions and ensured data integrity with Zod schema validation.",
    image: mystery, // Replace with the actual image import or path
    link: "https://github.com/ApekshaBL", // Add the project link if available
    skills: [
      "#next.js",
      "#react.js",
      "#mongodb",
      "#nextauth.js",
      "#openai-api",
      "#resend-mail",
      "#zod",
      "#javascript",
    ],
    accentColor: "#fff",
  },

  {
    id: 3,
    title: "Edu Sphere",
    subtitle: "(Comprehensive LMS Platform)",
    description:
      "Developed a comprehensive LMS platform with user registration, course management, and role-based access control. Integrated Razorpay for a subscription-based payment model and enabled seamless file uploads with Multer and Cloudinary.",
    image: lms, // Replace with the actual image import or path
    link: "https://github.com/apekshaBL/LMS-Project", // Add the project link if available
    skills: [
      "#node.js",
      "#express.js",
      "#mongodb",
      "#jwt",
      "#razorpay",
      "#multer",
      "#cloudinary",
      "#css",
      "#html",
    ],
    accentColor: "#fff",
  },
  {
    id: 4,
    title: "Home Quest",
    subtitle: "(Real Estate Website)",
    description:
      "Find your ideal home on our MERN Stack Real Estate Website. Explore listings, create listings and enjoy a seamless user experience.",
    image: estate, // Replace with the actual image import or path
    link: "https://github.com/apekshaBL/MERN-ESTATE-WEBSITE", // Add the project link if available
    skills: [
      "#react.js",
      "#node.js",
      "#express.js",
      "#mongodb",
      "#javascript",
      "#css",
      "#html",
    ],
    accentColor: "#fff",
  },
  {
    id: 5,
    title: "Poke-Dex Project",
    subtitle: "(Practice Project)",
    description:
    "React-based application that uses Axios to fetch Pokémon data from the PokeAPI. It showcases key details such as names, images, and stats, providing an interactive and visually appealing interface. Key features include dynamic data rendering, routing with React Router, and a clean, responsive design for an engaging user experience.",
    image: pokedex, // Replace with the actual image import or path
    link: "https://github.com/apekshaBL/Pokedex_Project", // Add the project link if available
    skills: [
      "#react.js",
      "#node.js",
      "#express.js",
      "#mongodb",
      "#javascript",
      "#axios",
    ],
    accentColor: "#fff",
  },
  {
    id: 6,
    title: "Management-System Development",
    subtitle: "(Practice Project : Hospital Management System, Hotel Management System, Banking Management System)",
    description:
    "Development of various management systems, including a Hospital Management System, a Hotel Management System, and a Banking Management System. Each system is designed to streamline operations, improve user experience, and ensure efficient management within their respective domains. The Hospital Management System focuses on patient records and appointments, the Hotel Management System handles booking and customer service, and the Banking Management System provides functionalities like account management and transactions. All systems integrate key concepts of database management, user authentication, and real-time processing.",
    image: Management, // Replace with the actual image import or path
    link: "https://github.com/apekshaBL/Hotel-Reservation-Project", // Add the project link if available
    skills: [
      "#java",
      "#JDBC",
      "#SQL"
    ],
    accentColor: "#fff",
  },


];


const Work = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-10 lg:px-24"
      id="work"
    >
      <section className="bg-[#0E1016] text-[#e4ded7] max-w-screen mx-auto px-4 relative pb-8 sm:pb-16">
        <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
          <AnimatedTitle
            text={"FEATURED WORK"}
            className={
              "mb-10 pb-2 text-left text-[30px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[25px] md:mb-0 md:text-[60px] lg:text-[60px] border-b-[2px]"
            }
            wordSpace={"mr-[22px]"}
            charSpace={"mr-[0.000em]"}
          />
        </div>

        <div className="flex flex-col gap-12 sm:gap-[150px] mt-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-[80px] relative ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Vertical line */}
              <div
                className="absolute -top-20 -bottom-20 w-[2px] bg-gray-300 hidden sm:flex"
                style={{
                  left: "calc(50% - 1px)",
                }}
              ></div>

              {/* Diagonal Line */}
              <div
                className={`h-[2px] absolute hidden sm:flex ${
                  index % 2 === 0
                    ? "left-1/4 right-1/2"
                    : "left-1/2 right-1/4"
                }`}
                style={{
                  backgroundColor: project.accentColor,
                  top: "50%",
                }}
              ></div>

              {/* Circular Dot */}
              <div
                className="w-4 h-4 rounded-full border-[3px] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hidden sm:block"
                style={{
                  borderColor: project.accentColor,
                }}
              ></div>

              {/* Project Image */}
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`order-1 flex w-full justify-center sm:justify-$
                  {index % 2 === 0 ? "start" : "end"}
                }`}
              >
                <div className="flex flex-col items-center group sm:hover:scale-105 ease-in-out duration-200">
                  <Image
                    className="max-w-[400px] w-full h-[300px] object-cover mr-auto z-10 drop-shadow-[0_0px_9px_rgba(255,255,255,0.6)]"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </Link>

              {/* Project Details */}
              <div className="order-2 w-full">
                <AnimatedTitle
                  text={project.title}
                  className={
                    "mb-4 text-left text-3xl font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-2xl md:mb-4 md:text-3xl lg:text-3xl"
                  }
                  wordSpace={"mr-[12px]"}
                  charSpace={"mr-[0.000em]"}
                />
                <span
                  className="text-base md:text-lg"
                  style={{
                    color: project.accentColor,
                  }}
                >
                  {project.subtitle}
                </span>
                <AnimatedBody className="mt-2" text={project.description} />
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <div className="text-3xl">
                  <Link href={project.link} target="blank" rel="noopener noreferrer">
                    <button className="m-6">
                      <FaGithub />
                    </button>
                    <button>
                      <FaLink />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};



export default Work;
