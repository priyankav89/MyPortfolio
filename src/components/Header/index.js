import React from "react";
import Navbar from "../Navbar";

export default function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
          <h1>PRIYANKA V</h1>
          </div>
          <div>
            <Navbar
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Navbar>
          </div>
        </header>
      </section>
      <section className="hero">
        <div className="herosec-cen">
        
          <h2>Welcome</h2>
          <p>
            Welcome to my portfolio page . I Have designed this portfolio webpage with React. Checkout my Portfolio by clicking on the portfolio tab, where you can view some of my work that i have done in the berkeley coding bootcamp .You can also view and download my resume by clicking on the resume tab .Contact me by just clicking on the contact tab and filling a simple form.

            </p>
        </div>
      </section>
    </div>
  );
}