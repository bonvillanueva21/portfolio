import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="flex items-center justify-between md:mb-10 py-6 px-4 md:px-8 rounded-xl sticky top-0 z-50 bg-opacity-60 backdrop-blur-lg">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-tr ml-2 from-orange-950 via-orange-500 to-orange-300 bg-clip-text text-transparent">
          AV
        </h1>
      </div>
      <ul className="flex space-x-6 text-gray-100 font-semibold tracking-widest uppercase">
        <li className="text-xs md:text-base hover:text-gray-400 transition cursor-pointer">
          <Link to="about" smooth={true} duration={500} offset={-200}>
            About Me
          </Link>
        </li>
        <li className="text-xs md:text-base hover:text-gray-400 transition cursor-pointer">
          <Link to="experience" smooth={true} duration={500} offset={-200}>
            Experience
          </Link>
        </li>
        <li className="text-xs md:text-base hover:text-gray-400 transition cursor-pointer">
          <Link to="projects" smooth={true} duration={500} offset={-200}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
