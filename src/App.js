import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'about', 
    description: 'About me' },

    {name: 'contact',
      description: 'Contact information'},

    { name: 'portfolio', 
    description: 'Portfolio of projects' },

    { name: 'resume', 
    description: 'Work resume' },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[1]);

function findCategory(str) {
  // receive string value and loop through categories
  const selectedCategory=categories.find(category => {
    return category.name===str;
  })
  setCurrentCategory(selectedCategory)
 };

//  use a switch case - key in () will be currentCategory, since it stays the same so we can figure out what to render
// if currentCategory.name===portfolio, do some sort of code
 function renderCategory() {
  switch (currentCategory.name) {
    case "about":
      return <About/>

      case "contact":
        return <Contact/>

      case "portfolio":
      return <Portfolio/>

      case "resume":
        return <Resume/>

      // if it doesn't find a match, return About page
    default:
      return <About/>
      break;
  }
 }

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        findCategory={findCategory}
      ></Nav>
      <main>
        {/* <Portfolio currentCategory={currentCategory}></Portfolio>
        <About></About> */}
      {renderCategory()}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )

}

export default App;
