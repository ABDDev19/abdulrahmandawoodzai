import { useEffect, useState } from "react";
import { all_imgs } from "../../images";

export default function Hero() {
  const titles = [
    "GRAPHIC DESIGN",
    "WEB DESIGN",
    "UI / UX DESIGN",
    "BRAND DESIGN",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="gradient gradient-1"></div>
        <div className="gradient gradient-2"></div>
      </div>

      <div className="hero-content">
        {/* Small top text */}

        {/* Animated text */}
        <div className="hero-title-box">
          <h1 key={current} className="hero-title calligraphy-allura">
            {titles[current]}
          </h1>
        </div>

        {/* Image */}
        <div className="hero-photo">
          <img src={all_imgs.main_img} alt="Abdulrahman" />
        </div>

        {/* Description */}
        <p className="hero-description">
          I create clean and meaningful digital experiences through design and
          technology.
        </p>

        {/* Bottom information */}
        <div className="hero-info">
          <span>GRAPHIC DESIGN</span>
          <span>•</span>
          <span>WEB DESIGN</span>
          <span>•</span>
          <span>UI / UX</span>
        </div>
      </div>
    </section>
  );
}
