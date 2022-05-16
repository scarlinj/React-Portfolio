import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    findCategory,
  } = props;


  const handleClick = (item) => {
    console.log(item);
    // use props to get nav category, make it into lowercase
    // will not find it if the first letter capitalized
    // may not need findCategory - keep this to keep code cleaner
    findCategory(item.toLowerCase());
    // no need to "return" item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Stephen Carlin Programming
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {/* <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li> */}
          {/* categories.map will bring in contact 
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Contact')}>
              Contact Me
            </span>
          </li> */}
          {categories.map((category) => (
            <li
              className={`mx-1 ${ category.name
                // currentCategory.name === category.name
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  handleClick(category.name);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;