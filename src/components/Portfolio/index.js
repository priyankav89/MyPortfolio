import React from "react";
import calories from "../../IMG/calories&me.jpg";
import pet from "../../IMG/PET.png";
import car from "../../IMG/RENTMYWHIP.png";


export default function Portfolio() {
  return (
    <div>
      <section id="work" className="projects">
        <div className="flex-row">
          <h2 className="section-title">PORTFOLIO</h2>
        </div>

        <div className="proj">
          <h2 className="section-title secondary-border">PROJECTS</h2>
          <div className="proj-info">
            <div className="proj-img">
              <a href="https://bibekmain.github.io/Project-1-G10/">
                {" "}
                <img
                  src={calories}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Calories & Me"
                />
              </a>
              <div className="proj-text">
              <h4>CALORIES & ME</h4>
              <p>
                This website browse and retrieve the nutritional information 
                and brand of any food or meal searched. 
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className="proj">
          <div className="proj-info">
            <div className="proj-img">
              <a href="https://find-your-pet-f291172b2d8b.herokuapp.com/">
                {" "}
                 <img
                  src={pet}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Pet"
                /> 
              </a>
              <div className="proj-text">
              <h4>FIND MY PET BESTFRIEND</h4>
              <p>
              This website helps the user find and adopt pets from their nearest 
              location by registering an account that can save their preferred 
              pets to adopt.
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="proj">
          <div className="proj-info">
            <div className="proj-img">
              <a href="https://rent-my-whip-f97dda1c806d.herokuapp.com">
                {" "}
                 <img
                  src={car}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Car"
                /> 
              </a>
              <div className="proj-text">
              <h4>RENT MY WHIP</h4>
              <p>
              Rent My Whip is an open-source project that focuses on the online car rental experience.
              This platform serves as a dynamic marketplace connecting vehicle owners with individuals seeking short-term vehicle rentals
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}