import { useEffect } from "react";
import bgShape from "../assets/images/bg-shape.svg";
import introImage from "../assets/images/IntroBildeNettside.png";

export default function Header() {
  useEffect(() => {
    const navbar = document.querySelector(".nav-bar");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar?.classList.add("bg-white", "shadow-sm");
      } else {
        navbar?.classList.remove("bg-white", "shadow-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bgShape})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right -450px",
      }}
    >
      <div className="nav-bar fixed top-0 left-0 w-full flex justify-between items-center px-8 py-8 transition-colors duration-300 ease-in-out">
        <nav>
          <ul className="flex gap-5">
            <li>
              <a
                href="/"
                className="hover:underline hover:underline-offset-8 hover:decoration-amber-200 hover:decoration-4 hover:text-amber-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:underline hover:underline-offset-8 hover:decoration-amber-200 hover:decoration-4 hover:text-amber-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline hover:underline-offset-8 hover:decoration-amber-200 hover:decoration-4 hover:text-amber-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-lg">
          <h1 className="text-2xl">eline jørgensen</h1>
        </div>
      </div>

      <div className="info-with-image flex gap-5 items-center flex-grow">
        <div className="flex-1 flex flex-col items-end">
          <h1 className="text-right text-amber-600 text-5xl font-semibold">
            Hi, I'm Eline.
          </h1>
          <h1 className="text-right text-amber-600 text-5xl font-semibold">
            A Software Developer.
          </h1>
          <p className="text-right mt-6 max-w-lg">
            A software developer currently pursuing an MSc in Computer Science
            and Engineering at DTU (Technical University of Denmark). With a
            strong interest in both frontend and backend development, I am
            passionate about creating digital experiences and always eager to
            learn more about new challenges in the tech world!
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={introImage} alt="intro-img" width={400} />
        </div>
      </div>
    </header>
  );
}
