import React, { useState } from "react";
import "./SignUp.css";
import { FaUserAlt, FaYoutube } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

const nameRegex = /^[a-zA-Z]{3,12}$/;
const invalidNameMessage =
  "The name must be between 3 and 12 alphabetic letters";

const lastNameRegex = /^[a-zA-Z]{3,12}$/;
const invalidLastNameMessage =
  "The last name must be between 3 and 12 alphabetic letters";

function SignUp() {
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const [signedIn, setSignedIn] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

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
    if (!nameRegex.test(name)) {
      setErrorMessage(invalidNameMessage);
      return;
    }
    if (!lastNameRegex.test(lastName)) {
      setErrorMessage(invalidLastNameMessage);
      return;
    }

    console.log(`name: ${name}`);
    console.log(`lastName: ${lastName}`);
    console.log(`userType: ${userType}`);

    setSignedIn(true);
  }

  function validate({ target }) {
    const { id, value } = target;

    switch (id) {
      case "NameInput": {
        // name validation
        setName(value);

        if (!nameRegex.test(value)) setErrorMessage(invalidNameMessage);
        else if (errorMessage === invalidNameMessage) setErrorMessage("");

        break;
      }
      case "LastNameInput": {
        // last name validation
        setLastName(value);

        if (!lastNameRegex.test(value)) setErrorMessage(invalidLastNameMessage);
        else if (errorMessage === invalidLastNameMessage) setErrorMessage("");

        break;
      }
      default:
        break;
    }
  }

  return (
    <div className="SignUp">
      <CSSTransition
        in={!signedIn}
        timeout={200}
        classNames="transition"
        unmountOnExit
        onExited={() => setShowWelcomeMessage(true)}
      >
        <form className="SignUpForm">
          <h2>Tell us about you</h2>
          <p>
            Please tell a bit about you so that we can personalize your
            onboarding experience
          </p>

          <label htmlFor="NameInput">Name</label>
          <input
            id="NameInput"
            className="InputText"
            type="text"
            placeholder="Your name..."
            onChange={validate}
          />

          <label htmlFor="LastNameInput">Last Name</label>
          <input
            id="LastNameInput"
            className="InputText"
            type="text"
            placeholder="Your last name..."
            onChange={validate}
          />

          <label>I'm a</label>
          <div className="row">
            <div className="column">
              <label htmlFor="StudentInput">
                <input
                  className="UserType"
                  type="radio"
                  id="StudentInput"
                  value="student"
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
                  value="youtuber"
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

          <div id="errorBox">
            <CSSTransition
              in={errorMessage !== ""}
              timeout={200}
              classNames="transition"
              unmountOnExit
            >
              <div id="errorMessage">{errorMessage}</div>
            </CSSTransition>
          </div>

          {/* {errorMessage && <div className="alert">{errorMessage}</div>} */}

          <button onClick={signUp} id="createAccountBtn" type="button">
            <FaUserAlt className="LocalIcon" size="30" />
            <span>Create Account</span>
          </button>
        </form>
      </CSSTransition>

      <CSSTransition
        in={showWelcomeMessage}
        timeout={200}
        classNames="transition"
        unmountOnExit
      >
        <div className="WelcomeMessage">
          <FaCheckCircle
            size="70px"
            color="#3C82B9"
            style={{ marginBottom: "20px" }}
          />
          <br />
          Your{" "}
          <span
            style={{
              color:
                userType === "youtuber"
                  ? "#C4302B"
                  : userType === "student"
                  ? "#3C82B9"
                  : "",
            }}
          >
            {userType}
          </span>{" "}
          account have been created !
        </div>
      </CSSTransition>
    </div>
  );
}

export default SignUp;
