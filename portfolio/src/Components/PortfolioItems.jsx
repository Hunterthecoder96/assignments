import React from 'react';
import Portfolio from './Portfolio';

export default function PortfolioItem({ title, img, stack, link }) {
  return (
    <div className="project-display">
      <h3>{title}</h3>
      <img src={img} alt="portfolio" className="project-photo" />
      <div>
        <p>
          {stack.map((item) => (
            <span>{item}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
