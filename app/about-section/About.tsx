// import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-16 md:pt-20 md:pb-24 lg:pt-20 lg:pb-36"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "FULL-STACK EXPERTISE: BEAUTIFYING BRANDS, EMPOWERING WEBSITES, CAPTIVATING CONTENT."
          }
          className={
            "mb-10 text-left text-[30px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[25px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[22px]"}
          charSpace={"mr-[0.000em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "My passion lies in creating software that addresses real-world challenges and positively impacts lives. I am deeply interested in coding, Java, and web development, continuously honing my skills to build innovative solutions."
              }
            />
            <AnimatedBody
              text={
                "Beyond work, I thrive on meaningful communication and enjoy connecting with people through thoughtful conversations. My love for public speaking, debating, and hosting events has enhanced my interpersonal and leadership abilities."
              }
              // className={"hidden"}
            />
           {/* <AnimatedBody
              text={
                "I am a dedicated professional who believes in giving my absolute best to every task, striving for excellence and delivering results with unwavering commitment. Guided by the philosophy that everything happens for a reason and the power of karma, I approach challenges with resilience and a positive mindset, always focusing on growth and learning."
              }
            />*/}

            <AnimatedBody
              text={
                " I bring energy and clarity to professional environments, leveraging my strong communication skills to drive collaboration, present ideas effectively, and achieve impactful outcomes."
              }
            />
          
          </div>


          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">

            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Programming Languages"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Java,Python,JavaScript,TypeScript."
                }
              />
            </div>

            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Web Development"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Next.js,React.js,Express.js,Node.js,Hono,Turborepo,Spring boot. "
                }
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Database Management"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "PostgreSQL,MongoDB,Prisma,MySQL,Mongoose."
                }
              />
            </div>


            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Tools & Technologies"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Git,Cloudflare Workers,Prisma Accelerate,NextAuth.js,OpenAI API,Zod,Razorpay,Cloudinary. "
                }
              />
            </div>

            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"DevOps"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Docker,CI/CD,Kubernetes,AWS."
                }
              />
            </div>

          </div>
        </div>

        {/* <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28"> */}
          {/* <SongCarousel /> */}
          {/* <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          /> */}
        </div>
      {/* </div> */}
    </section>
  );
};

export default About;
