import React, { useState } from "react";
import "./SignUp.css";
import { FaUserAlt, FaYoutube } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

function SignUp() {
  let [userType, setUserType] = useState("");
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");

  function updateUserType({ target }) {
    const value = target.value;
    if (value === userType) {
      setUserType("");
      target.checked = false;
    } else {
      setUserType(value);
    }
  }

  function signUp() {
    console.log(`name: ${name}`);
    console.log(`lastName: ${lastName}`);
    console.log(`userType: ${userType}`);
  }

  return (
    <div className="SignUp">
      <form className="SignUpForm">
        <h2>Tell us about you</h2>
        <p>
          Please tell a bit about you so that we can personalize your onboarding
          experience
        </p>

        <label htmlFor="NameInput">Name</label>
        <input
          id="NameInput"
          className="InputText"
          type="text"
          placeholder="Your name..."
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="LastNameInput">Last Name</label>
        <input
          id="LastNameInput"
          className="InputText"
          type="text"
          placeholder="Your last name..."
          onChange={(event) => setLastName(event.target.value)}
        />

        <label>I'm a</label>
        <div className="row">
          <div className="column">
            <label htmlFor="StudentInput">
              <input
                className="UserType"
                type="radio"
                id="StudentInput"
                value="Student"
                name="UserType"
                onClick={updateUserType}
              />
              <span>
                <MdSchool className="LocalIcon" size="30" />
                Student
              </span>
            </label>
          </div>
          <div className="column">
            <label htmlFor="YoutuberInput">
              <input
                className="UserType"
                type="radio"
                id="YoutuberInput"
                value="Youtuber"
                name="UserType"
                onClick={updateUserType}
              />
              <span>
                <FaYoutube className="LocalIcon" size="30" />
                Youtuber
              </span>
            </label>
          </div>
        </div>

        <button onClick={signUp} id="createAccountBtn" type="button">
          <FaUserAlt className="LocalIcon" size="30" />
          <span>Create Account</span>
        </button>
      </form>
    </div>
  );
}

export default SignUp;
