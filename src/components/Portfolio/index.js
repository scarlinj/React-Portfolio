import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";



const Portfolio = ({ category }) => {
  const [currentProject, setCurrentProject] = useState();

  // show 6 projects for the user
  const [projects] = useState([
    {
      name: 'Password Generator',
      category: 'commercial',
      description:
        'Generate secure password based on user criteria',
        url: 'https://github.com/scarlinj/Challenge-3-Password-Generator.git'
    },
    {
      name: 'ReadME Generator',
      category: 'commercial',
      description:
        'Generate a readME.md file with header links',
        url: 'https://github.com/scarlinj/Challenge_9_Professional_README_Generator.git'
    },
    {
      name: 'Portfolio Generator',
      category: 'commercial',
      description:
        'Generate a profile for a user',
        url: 'https://github.com/scarlinj/portfolio-generator.git'
    },
    {
      name: 'Country Holiday Search',
      category: 'commercial',
      description:
        'Look up a country and get a list of holidays for that country',
        url: 'https://github.com/scarlinj/Project-One.git'
    },
    {
      name: 'Weather Dashboard',
      category: 'commercial',
      description:
        'Look up a ZIP code and get the weather report for that ZIP code',
        url: 'https://github.com/scarlinj/weather-dashboard.git'
    },
    {
      name: 'Recipe Blog',
      category: 'commercial',
      description:
        'Post, find, and comment on recipes from other users',
        url: 'https://github.com/scarlinj/weather-dashboard.git'
    },
  ]);

  // if filtering for projects, use the below filter:
  // error: filter is not kicking everything
  // whenever calling portfolio, passing category
  // if category is undefined, will call empty array
  console.log(category);
  const currentProjects = projects.filter(project => project.category === "commercial");

  return (
    <div>
      <div className="flex-row">
        {/* You will have to name the jpgs "1", "2", etc*/}
        {currentProjects.map((image, i) => (
          <img
          // add path to photos of project below
            // src={require(`../../../assets/projectPreview/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};


export default Portfolio;
