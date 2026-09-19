import { useState } from "react";
import { Code2, Palette, Layers3, ExternalLink, Sparkles } from "lucide-react";
import { projectsData } from "./ProjectsData";

export default function Projects() {
  const [category, setCategory] = useState("all");

  const filteredProjects =
    category === "all"
      ? projectsData
      : projectsData.filter((project) => project.catogray === category);

  const filterButtons = [
    {
      name: "all",
      label: "All Projects",
      icon: <Layers3 size={17} />,
    },
    {
      name: "web development",
      label: "Web Development",
      icon: <Code2 size={17} />,
    },
    {
      name: "graphic design",
      label: "Graphic Design",
      icon: <Palette size={17} />,
    },
  ];

  return (
    <section
      id="projects"
      className="
        projects-section
        w-full min-h-screen
        px-5 py-20
        md:px-10
        lg:px-20
      ">
      <div className="max-w-7xl mx-auto">
        {/* ================= TITLE ================= */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={17} className="text-purple-500" />

            <p className="uppercase tracking-[4px] text-xs md:text-sm font-medium projects-muted">
              My Work
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight projects-title">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
              Projects
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-sm md:text-base leading-relaxed projects-description">
            A collection of my web development and graphic design projects,
            created with creativity, technology, and attention to detail.
          </p>

          <div
            className="
              w-20 h-1 rounded-full mx-auto mt-7
              bg-gradient-to-r
              from-indigo-500
              via-purple-500
              to-pink-500
            "
          />
        </div>

        {/* ================= FILTER BUTTONS ================= */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {filterButtons.map((button) => (
            <button
              key={button.name}
              onClick={() => setCategory(button.name)}
              className={`
                flex items-center gap-2
                px-5 py-2.5
                rounded-full
                text-sm font-medium
                border
                transition-all duration-300

                ${
                  category === button.name
                    ? `
                      text-white
                      border-transparent
                      bg-gradient-to-r
                      from-purple-500
                      to-pink-500
                      shadow-lg
                      shadow-purple-500/20
                      scale-105
                    `
                    : `
                      projects-filter
                      hover:text-purple-500
                      hover:border-purple-500/30
                    `
                }
              `}>
              {button.icon}
              {button.label}
            </button>
          ))}
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="
                project-card
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                transition-all duration-500
                hover:-translate-y-2
              "
              style={{
                animation: `projectFadeIn 0.5s ease ${index * 100}ms both`,
              }}>
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.Project_img}
                  alt={project.Name}
                  className="
                    w-full
                    h-60
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Image overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                {/* Category */}
                <div
                  className="
                    absolute
                    top-4
                    left-4
                    flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-full
                    bg-black/60
                    backdrop-blur-md
                    border
                    border-white/10
                    text-white
                    text-xs
                    font-medium
                  ">
                  {project.catogray === "graphic design" ? (
                    <Palette size={14} />
                  ) : (
                    <Code2 size={14} />
                  )}

                  {project.catogray === "graphic design"
                    ? "Graphic Design"
                    : "Web Development"}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3
                  className="
                    project-title
                    text-xl
                    font-bold
                    transition-colors
                    duration-300
                    group-hover:text-purple-500
                  ">
                  {project.Name}
                </h3>

                <p
                  className="
                    project-description
                    mt-3
                    text-sm
                    leading-relaxed
                    line-clamp-2
                  ">
                  {project.Desc}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        project-tech
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        font-medium
                        border
                      ">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* PROJECT BUTTON */}
                {project.catogray === "web development" &&
                  project.project_demo && (
                    <a
                      href={project.project_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-6
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-5
                        py-3
                        rounded-xl
                        text-sm
                        font-medium
                        text-white
                        bg-gradient-to-r
                        from-purple-500
                        to-pink-500
                        hover:shadow-lg
                        hover:shadow-purple-500/20
                        hover:scale-[1.02]
                        active:scale-[0.98]
                        transition-all
                        duration-300
                      ">
                      <ExternalLink size={17} />
                      View Project
                    </a>
                  )}
              </div>
            </div>
          ))}
        </div>

        {/* ================= EMPTY ================= */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div
              className="
                w-16
                h-16
                rounded-2xl
                flex
                items-center
                justify-center
                bg-purple-500/10
                text-purple-500
              ">
              <Layers3 size={28} />
            </div>

            <h3 className="project-title mt-5 text-xl font-bold">
              No Projects Found
            </h3>

            <p className="project-description mt-2">
              There are no projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
