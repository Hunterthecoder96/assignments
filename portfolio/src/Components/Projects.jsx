import React from 'react';
import Portfolio from './Portfolio';
import PortfolioItems from './PortfolioItems';
export default function Projects() {
  return (
    // flex flex-col md:flex-row items-center justify-center
    <div className="portfolio">
      <h1 className="MyProjects">My Projects:</h1>
      <div className="portfolio-container">
        {Portfolio.map((project) => (
          <PortfolioItems
            title={project.title}
            img={project.img}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
