import { all_imgs } from "../../images";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-5 py-20 md:px-10 lg:px-16 xl:px-24 overflow-hidden">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-14 lg:gap-20">
        {/* ================= TEXT ================= */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-16"
          }`}>
          {/* Small heading */}
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.3em] uppercase opacity-50 mb-3">
            Get to know me
          </span>

          {/* Main heading */}
          <h1 className="calligraphy-allura text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl leading-none">
            About Me
          </h1>

          {/* Small line */}
          <div className="w-16 h-1 rounded-full my-6 bg-linear-to-r from-indigo-500 via-purple-500 to-transparent" />

          {/* Description */}
          <p
            className="
              max-w-3xl
              text-sm
              sm:text-base
              md:text-[17px]
              leading-7
              md:leading-8
              font-medium
              opacity-75
              text-justify
            ">
            I’m Abdulrahman Dawoodzai, a passionate Frontend Developer and
            creative designer focused on building modern, interactive, and
            visually engaging digital experiences. I enjoy combining technology
            and design to create websites that are not only functional, but also
            memorable and enjoyable to use.
            <br />
            <br />
            My main focus is frontend development with React, JavaScript, HTML,
            CSS, and modern UI techniques. I’m especially interested in creating
            clean interfaces, responsive layouts, smooth interactions, and
            unique visual experiences that give each project its own identity.
            <br />
            <br />
            Alongside development, I have a strong interest in UI/UX and graphic
            design, which helps me think about both how a product works and how
            people experience it. I enjoy turning ideas, sketches, and designs
            into real websites.
            <br />
            <br />
            I’m continuously learning and experimenting with new technologies,
            design styles, animations, and development techniques. My goal is to
            grow into a well-rounded creative developer who can bridge the gap
            between design and code.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2.5 mt-8">
            {["React", "JavaScript", "UI/UX", "Graphic Design"].map((skill) => (
              <span
                key={skill}
                className="
                    px-4 py-2
                    rounded-full
                    border border-black/10 dark:border-white/10
                    text-xs sm:text-sm
                    font-semibold
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-indigo-500/50
                    hover:bg-indigo-500/10
                  ">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ================= IMAGE ================= */}
        <div
          className={`relative w-full max-w-md mx-auto transition-all duration-1000 delay-150 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-16 scale-95"
          }`}>
          {/* Glow */}
          <div
            className="
              absolute
              w-56 h-56
              md:w-72 md:h-72
              rounded-full
              bg-indigo-500/20
              dark:bg-purple-500/20
              blur-3xl
              top-1/2 left-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          />

          {/* Image Card */}
          <div
            className="
              relative
              aspect-4/5
              w-full
              overflow-hidden
              rounded-4xl
              bg-gray-900
              shadow-2xl
              rotate-2
              hover:rotate-0
              hover:-translate-y-2
              transition-all
              duration-500
              ease-out
              group
            ">
            {/* Image */}
            <img
              src={all_imgs.main_img}
              alt="Abdulrahman Dawoodzai"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Dark gradient */}
            <div
              className="
                absolute
                inset-0
                bg-linear-to-t
                from-black/80
                via-black/10
                to-transparent
              "
            />

            {/* Image text */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-[10px] tracking-[0.35em] uppercase opacity-70">
                Creative
              </p>

              <h2 className="text-2xl md:text-3xl font-bold">Developer</h2>
            </div>
          </div>

          {/* Top decoration */}
          <div
            className="
              absolute
              -top-5
              -right-5
              w-20
              h-20
              rounded-2xl
              border
              border-black/10
              dark:border-white/10
              animate-pulse
            "
          />

          {/* Bottom decoration */}
          <div
            className="
              absolute
              -bottom-5
              -left-5
              w-14
              h-14
              rounded-full
              border
              border-black/10
              dark:border-white/10
            "
          />
        </div>
      </div>
    </section>
  );
}
