import fvrs from "./../assets/images/projects/fvrs.png";
import reactPortfolio from "./../assets/images/projects/react-portfolio.png";

export const experience = [
  {
    year: "2024 - Present",
    role: "Software Developer",
    company: "LGU San Carlos",
    description:
      "Design, develop, and maintain web applications using Bootstrap, Tailwind CSS and PHP, Integrated with MySql databse. Collaborated with stakeholders to create functional, user-friendly, and efficient solutions that meet the needs of the community.",
  },
];

export const projects = [
  {
    img: fvrs,
    title: "Fishing Vessel Registration System",
    description:
      "A fully functional system allows users to easily register fishing vessels, manage renewals, and process cancellations. It also offers the ability to generate and print detailed reports, providing an efficient way to track and manage vessel data.",
    techonologies: ["Bootstrap", "CSS", "Javascipt", "PHP", "MySql"],
  },
  {
    img: reactPortfolio,
    title: "Web Portfolio",
    description: "A personal web portfolio designed to showcase my skills, projects, and experience.",
    techonologies: ["React.js", "Tailwind"],
  },
];

export const animationConfig = (hasAnimated, setHasAnimated, delay) => ({
  initial: { x: 200, opacity: 0 },
  animate: hasAnimated ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  onViewportEnter: () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  },
  transition: { type: "spring", stiffness: 50, delay },
});

export const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      case: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
