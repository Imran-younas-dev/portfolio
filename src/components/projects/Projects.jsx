import { Link } from "react-scroll";
import SectionWrapper from "../SectionWrapper";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

const Projects = ({ projectsData }) => {
  const [projects] = useState([...projectsData].reverse());

  const categories = [...Array.from(new Set(projects.map((s) => s.category)))];

  const [category, setCategory] = useState(categories[0]);

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [viewAll, setViewAll] = useState(0);
  const [defaultView, setDefaultView] = useState(3);
  const [loading, setLoading] = useState(false);

  const filterProjects = (cat) => {
    setViewAll(0);
    setDefaultView(6);
    setCategory(cat);
    setFilteredProjects(
      projects.filter((p) => p.category.toLowerCase() === cat.toLowerCase())
    );
  };

  const handleViewMoreClick = () => {
    setLoading(true);
    setTimeout(() => {
      setViewAll((prev) => (defaultView || prev) + 3);
      setDefaultView(0);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    filterProjects(
      categories.includes("MERN Stack") ? "MERN Stack" : categories[0]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionWrapper id="projects" className="mx-4 md:mx-0 min-h-screen">
      <h2 className="text-4xl text-center">Projects</h2>

      <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
        {categories.map((c, i) => (
          <span
            key={i}
            onClick={() => filterProjects(c)}
            className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${
              category.toLowerCase() === c.toLowerCase()
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100 hover:dark:bg-grey-900"
            } cursor-pointer transition-all`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
        {filteredProjects.slice(0, defaultView || viewAll).map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>

      {
        viewAll < filteredProjects.length && (
            filteredProjects.length > 6 && (
                <ViewAll
                  //   scrollTo="projects"
                  title={loading ? "Loading..." : "View More"}
                  handleClick={handleViewMoreClick}
                  loading={loading}
                />
              )
        )
      }
    </SectionWrapper>
  );
};

export default Projects;

export const ViewAll = ({ handleClick, title, scrollTo,loading }) => {
  return (
    <>
      <div className="bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
      <div className="text-center -translate-y-24">
        {title === "View More" ? (
            <>
            <button
            onClick={handleClick}
            className={`bg-orange-600  text-white px-4 py-1.5 rounded-md hover:shadow-xl transition-all ${
                loading ? "loading animate-pulse" : ""
            }`}
            disabled={loading}
          >
            {title}
          </button>
            </>
        ) : (
          <Link
            to={scrollTo}
            className={`bg-violet-600 text-white px-4 ${
              title === "View All" ? "animate-bounce" : "animate-none"
            } cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
            offset={-60}
            smooth={true}
            duration={500}
            // @ts-ignore
            onClick={() => handleClick()}
          >
            {title}
          </Link>
        )}
      </div>
    </>
  );
};