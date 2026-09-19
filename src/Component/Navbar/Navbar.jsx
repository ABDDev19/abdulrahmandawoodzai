import { FaGithub, FaLinkedinIn, FaSun, FaMoon } from "react-icons/fa";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    document.documentElement.setAttribute("dark-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [isOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <header className="header flex justify-between items-center gap-2.5 p-5 ">
        <div className=" w-full flex justify-between ">
          <div className="logo text-lg md:text-3xl lg:text-2xl">
            <a href="/">
              <h1 className="calligraphy-delafield font-bold">Abdulrahman.</h1>
            </a>
          </div>
          <div className="menues hidden lg:flex  items-center  gap-5">
            <div className="desktop_menu lg:flex  items-center  gap-5">
              <a href="#home">Home</a>
              <a href="#about">About</a>

              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
            {isOpen && (
              <div className="w-full ">
                <div className="mobile_menu flex flex-col w-full gap-2 ">
                  <a
                    href="#home"
                    className="calligraphy-great "
                    onClick={closeMenu}>
                    Home
                  </a>
                  <a
                    href="#about"
                    className="calligraphy-great "
                    onClick={closeMenu}>
                    About
                  </a>

                  <a
                    href="#projects"
                    className="calligraphy-great "
                    onClick={closeMenu}>
                    Projects
                  </a>
                  <a
                    href="#education"
                    className="calligraphy-great "
                    onClick={closeMenu}>
                    Education
                  </a>
                  <a
                    href="#contact"
                    className="calligraphy-great "
                    onClick={closeMenu}>
                    Contact
                  </a>
                  <div className="icon-memu flex flex-col gap-2">
                    <a
                      className=" px-3 py-1  bg-gray-100 rounded-full flex items-center justify-center gap-2"
                      href="https://github.com/ABDDev19">
                      <FaGithub className="w-5" />
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/abdulrahman-dawoodzai-2b4448403?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                      className=" px-3 py-1  bg-gray-100 rounded-full flex justify-center items-center gap-2">
                      <FaLinkedinIn className="w-5" />
                      LinkedIn
                    </a>
                    <a
                      href=""
                      className="  flex items-center px-3 py-1 bg-gray-100 rounded-full justify-center gap-2">
                      <Download className="w-5" />
                      Resume
                    </a>
                    <button
                      className="px-3 py-1 rounded-full bg-gray-100"
                      onClick={toggleTheme}>
                      {theme === "dark" ? <FaSun /> : <FaMoon />}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </button>

          <div className="icons hidden  lg:flex items-center justify-center gap-2">
            <div className="flex justify-center items-center ">
              <button onClick={toggleTheme}>
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </div>
            <a href="https://github.com/ABDDev19">
              <FaGithub className="w-5" />
            </a>
            <a
              href=""
              className="download flex items-center px-3 py-1 bg-gray-100 rounded-full justify-center gap-2">
              <Download className="w-5 " />
              Resume
            </a>
            <a href="https://www.linkedin.com/in/abdulrahman-dawoodzai-2b4448403?utm_source=share_via&utm_content=profile&utm_medium=member_ios">
              <FaLinkedinIn className="w-5" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
