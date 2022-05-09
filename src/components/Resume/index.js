import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
 

function Resume() {

  return (
    <section className="my-5" >
      <h1 id="about">See my LinkedIn below</h1>
      {/* add a cover image here if needed */}
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
        LinkedIn: https://www.linkedin.com/in/stephen-carlin-14838b21/
        </p>
      </div>
    </section>
  )
}


export default Resume;
