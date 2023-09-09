import React, { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/Helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit 
    e.preventDefault();

    //checking to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      return;
      // check to see if the message is not valid. If so, we set an error message regarding the message.
    }

    if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }

    //  clear out the input after a successful submission.
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="contactme" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">CONTACT FORM</h2>
      </div>

        {/* contact form section  */}
        <div className="contact-form">
          <h3>Please fill out the details below..</h3>
          <form className="form">
            {/* Name */}
            <label for="contact-name">NAME</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder='E.g: "Joe Shmoe"'
            />

            {/* Email */}
            <label for="contact-email">EMAIL</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="youremail@example.com"
            />

            {/* Message */}
            <label for="contact-message">MESSAGE</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Write Here.."
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
    </section>
  );
}

export default Contact;