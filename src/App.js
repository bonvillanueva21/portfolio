import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import Technologies from "./components/technologies";
import Experience from "./components/experience";
import Projects from "./components/projects";
import { ToggleDarkMode } from "./components/Buttons";
function App() {
  return (
    <div className="min-h-screen text-base bg-gray-100 dark:bg-gray-950 selection:text-orange-500 transition-color duration-300">
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      {/* navbar */}
      <Navbar />
      <ToggleDarkMode />
      <div className="container overflow-x-hidden mx-auto px-2 md:px-8">
        {/* about */}
        <div className="border-b border-neutral-600 p-4 md:mb-35">
          <div className="flex flex-wrap">
            {/* left content */}
            <div className="w-full md:w-2/5 pb-10">
              <div className="flex flex-col items-center justify-center md:mr-6">
                <Hero />
              </div>
            </div>

            {/* right content */}
            <div className="w-full md:w-3/5">
              <div className="flex flex-col items-center md:items-start">
                {/* about me  */}
                <AboutMe />

                {/* technologies */}
                <Technologies />

                {/* experience */}
                <Experience />

                {/* projects */}
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
