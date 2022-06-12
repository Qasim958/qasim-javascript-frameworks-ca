import React, { useState } from "react";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
import { messageBox, validatEmail, validateValueLng } from "./Login";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function contactForm() {
    if (validateContactForm(firstName, lastName, email, subject, message)) {
      messageBox("Form submitted successfully", "contactMsg", "green");
    }
  }

  function validateContactForm(firstName, lastName, email, subject, message) {
    if (!validateValueLng(firstName, 3)) {
      messageBox("First name Should be atleat 3 characters Long", "firstNameMsg", "red");
      return false;
    } else {
      messageBox(" ", "firstNameMsg", "green");
    }
    if (!validateValueLng(lastName, 4)) {
      messageBox("Last name Should be atleat 4 characters Long", "lastNameMsg", "red");
      return false;
    } else {
      messageBox(" ", "lastNameMsg", "green");
    }
    if (!validatEmail(email, 0)) {
      messageBox("Enter valid email address", "emailMsg", "red");
      return false;
    } else {
      messageBox(" ", "emailMsg", "green");
    }
    if (!validateValueLng(subject, 15)) {
      messageBox(
        "Subject should be minimum 15 characters long",
        "subjectMsg",
        "red"
      );
      return false;
    } else {
      messageBox(" ", "subjectMsg", "green");
    }
    if (!validateValueLng(message, 25)) {
      messageBox(
        "Message should be minimum 25 characters long",
        "messageMsg",
        "red"
      );
      return false;
    } else {
      messageBox(" ", "messageMsg", "green");
    }

    return true;
  }

  return (
    <>
      <Nav active="contact" />
      <main>
        <section className="productsSection">
          <div className="sectionHeading">
            <h3>Contact</h3>
          </div>
          <form
            id="conactForm"
            onSubmit={(e) => {
              e.preventDefault();
              contactForm();
            }}
          >
            <div id="contactMsg"></div>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <div id="firstNameMsg"></div>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Last Name"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <div id="lastNameMsg"></div>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailMsg"></div>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <div id="subjectMsg"></div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div id="messageMsg"></div>
            </div>

            <div className="form-group">
              <button>Submit</button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
