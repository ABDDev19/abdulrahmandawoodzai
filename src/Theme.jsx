// import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    document.documentElement.setAttribute("dark-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      {" "}
      <button onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>
    </div>
  );
}
