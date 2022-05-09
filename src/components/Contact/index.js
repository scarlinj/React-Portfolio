import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function Contact() {

  return (
    <section className="my-5" >
      <h1 id="about">Contact Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Contact me at scarlinj@gmail.com
        </p>
        <p>
          My Github Profile: https://github.com/scarlinj
        </p>
      </div>
    </section>
  )
}

export default Contact

// remove the below - just "function" causing errors
// function

// export default About;