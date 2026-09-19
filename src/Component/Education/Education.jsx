import { useEffect, useState } from "react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "React.js", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "UI/UX Design", level: 80 },
  { name: "Bootstrap", level: 85 },
  { name: "Git & GitHub", level: 75 },
  { name: "Vibe Coding", level: 85 },
];

export default function Education() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="education"
      className="
        education-section
        w-full
        min-h-screen
        px-5
        py-20
        md:px-10
        lg:px-20
      ">
      {/* ================= HEADING ================= */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="calligraphy-allura text-4xl md:text-5xl font-bold education-title">
          Education &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Skills
          </span>
        </h2>

        <p className="max-w-2xl mx-auto mt-5 education-muted leading-relaxed">
          My learning journey, education, and the technologies I use to create
          modern digital experiences.
        </p>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* ================= EDUCATION ================= */}
        <div>
          <h3 className="education-heading text-2xl font-bold mb-8 flex items-center gap-3">
            <span
              className="
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-purple-500
                to-pink-500
                text-white
                shadow-lg
                shadow-purple-500/20
              ">
              🎓
            </span>
            Education
          </h3>

          <div className="relative pl-8">
            {/* Timeline line */}
            <div
              className="
                absolute
                left-[11px]
                top-2
                bottom-2
                w-[2px]
                bg-gradient-to-b
                from-purple-500
                via-pink-500
                to-gray-300
              "
            />

            {/* ================= FRONTEND ================= */}
            <div
              className="relative mb-10 transition-all duration-700"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateX(0)" : "translateX(-40px)",
              }}>
              <div
                className="
                  absolute
                  -left-[25px]
                  top-1
                  w-4
                  h-4
                  rounded-full
                  bg-purple-500
                  ring-4
                  ring-purple-500/20
                "
              />

              <div
                className="
                  education-card
                  p-6
                  rounded-2xl
                  border
                  hover:border-purple-500/50
                  hover:-translate-y-1
                  transition-all
                  duration-300
                ">
                <span className="text-sm text-purple-500 font-semibold">
                  Aug 8, 2025 — Feb 10, 2026
                </span>

                <h4 className="education-card-title text-xl font-bold mt-2">
                  Frontend Development
                </h4>

                <p className="education-muted mt-1">Upskill</p>

                <p className="education-muted mt-4 leading-relaxed">
                  Studied frontend development and learned how to build
                  responsive and interactive websites using modern web
                  technologies.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="
                        education-tag
                        px-3
                        py-1
                        text-xs
                        rounded-full
                      ">
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* ================= BACKEND ================= */}
            <div
              className="relative mb-10 transition-all duration-700"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateX(0)" : "translateX(-40px)",
                transitionDelay: "200ms",
              }}>
              <div
                className="
                  absolute
                  -left-[25px]
                  top-1
                  w-4
                  h-4
                  rounded-full
                  bg-pink-500
                  ring-4
                  ring-pink-500/20
                "
              />

              <div
                className="
                  education-card
                  p-6
                  rounded-2xl
                  border
                  hover:border-pink-500/50
                  hover:-translate-y-1
                  transition-all
                  duration-300
                ">
                <span className="text-sm text-pink-500 font-semibold">
                  Continuing Learning
                </span>

                <h4 className="education-card-title text-xl font-bold mt-2">
                  Backend Development
                </h4>

                <p className="education-muted mt-1">Upskill</p>

                <p className="education-muted mt-4 leading-relaxed">
                  Currently expanding my knowledge of backend development and
                  learning how web applications work behind the scenes.
                </p>
              </div>
            </div>

            {/* ================= HIGH SCHOOL ================= */}
            <div
              className="relative transition-all duration-700"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateX(0)" : "translateX(-40px)",
                transitionDelay: "300ms",
              }}>
              <div
                className="
                  absolute
                  -left-[25px]
                  top-1
                  w-4
                  h-4
                  rounded-full
                  bg-gray-500
                  ring-4
                  ring-gray-500/20
                "
              />

              <div
                className="
                  education-card
                  p-6
                  rounded-2xl
                  border
                  hover:border-gray-400/50
                  hover:-translate-y-1
                  transition-all
                  duration-300
                ">
                <span className="text-sm text-gray-500 font-semibold">
                  Graduated
                </span>

                <h4 className="education-card-title text-xl font-bold mt-2">
                  Ibrahim Khalilullah High School
                </h4>

                <p className="education-muted mt-4 leading-relaxed">
                  Completed my high school education at Ibrahim Khalilullah High
                  School.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SKILLS ================= */}
        <div>
          <h3 className="education-heading text-2xl font-bold mb-8 flex items-center gap-3">
            <span
              className="
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-blue-500
                to-cyan-500
                text-white
                shadow-lg
                shadow-blue-500/20
              ">
              ⚡
            </span>
            My Skills
          </h3>

          {/* Skills Card */}
          <div
            className="
              education-card
              p-7
              md:p-8
              rounded-2xl
              border
            ">
            <p className="education-muted mb-8">
              Technologies and tools I use to build websites and digital
              experiences.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="transition-all duration-700"
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${index * 100}ms`,
                  }}>
                  <div className="flex justify-between mb-2">
                    <span className="education-skill-name font-medium">
                      {skill.name}
                    </span>

                    <span className="education-muted text-sm">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress background */}
                  <div
                    className="
                      education-progress-bg
                      w-full
                      h-2
                      rounded-full
                      overflow-hidden
                    ">
                    {/* Progress */}
                    <div
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-purple-500
                        to-pink-500
                        transition-all
                        duration-[1200ms]
                        ease-out
                      "
                      style={{
                        width: animate ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= BIO ================= */}
          <div
            className="
              education-bio
              mt-8
              p-7
              rounded-2xl
              border
              bg-gradient-to-br
              from-purple-500/10
              to-pink-500/10
            ">
            <h4 className="education-card-title text-xl font-bold mb-3">
              About My Work
            </h4>

            <p className="education-muted leading-relaxed">
              I enjoy transforming ideas into clean, responsive, and
              user-friendly websites. My interests include frontend development,
              UI/UX design, and exploring new ways to build better digital
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
