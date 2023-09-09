import React from "react";
import profile from "../../IMG/avatar2.png";
export default function About() {
  return (
    <section id="about-me" className="my-5 abt">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="abt-info">
          <div class="abt-img">
            <img src={profile} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          "Hi 👋🏼 , I am Priyanka, I am an Software Engineer and a MBA graduate. My portfolio is a representation of all that i have learned so far in the coding bootcamp. You can find some of the projects that I worked on by myself and also as a group in the portfolio section by clicking on the portfolio tab at the top "        
          </p>
    
        </div>
      </div>
    </section>
  );
}