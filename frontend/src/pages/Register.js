import React from "react";

// hook that we are going to use
import { useRef, useState, useEffect } from "react";

import axios from "axios";
// assets
import "./Register.css";
import registerImage from "../asset/img/registerImage.jpg";
import { FcCheckmark } from "react-icons/fc";

//validated user name/must start with lowercase or upper letter/, password /1 lowercase, 1 uppercase, 1 diggit/
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{5,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  //allowed us to set the focus on the user input
  const userRef = useRef();
  // if we get the error, we can put the focus on that
  const errRef = useRef();

  //state for user field, user'll type to user input, validName: whether the name validate or not, user input : whether we have focus on input field or not
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // errrMsg stage for posible error message, success, whether we success submit register form or not
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //apply for setting the focus when the component load
  useEffect(() => {
    userRef.current.focus();
  }, []); // The empty dependency array [] ensures the code runs once when the component mounts.

  // validate the user name
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(user);
    console.log(result);
    setValidName(result);
  }, [user]); // anytime user change, it will check the validation of that field

  // validate the password
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  useEffect(() => {
    "use strict";

    // DOM apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".validated-form");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []); // The empty dependency array [] ensures the code runs once when the component mounts.

  return (
    <>
      <section >
        {/* //define what will hold the error when the error exist */}
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>

        <div style={{height: '100vh'}} className="container-fluid justify-content-center d-flex align-items-center  route-register">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
              <div className="card shadow">
                <img
                  src={registerImage}
                  className="card-img-top"
                  style={{ "max-height": "800px" }}
                />
                <div className="card-body">
                  <div className="card-title text-center my-0">
                    Create your Lego account
                  </div>
                  <form noValidate className="validated-form">
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Email{" "}
                        <FcCheckmark className={validName ? "valid" : "hide"} />
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        ref={userRef} // allow us to set focus on input
                        autoComplete="off" // don't want suggest value in this field
                        onChange={(e) => setUser(e.target.value)} // provide the event and set user stage, it tide the input to the user stage
                        aria-invalid={validName ? "false" : "true"}
                        id="username"
                        name="username"
                        required
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)} //if the user field is focus we setting it to true
                        onBlur={() => setUserFocus(false)}
                      />
                      {/* // uidnote match aria-describedby, if userfocus is on, user is already typed, and not the valid name */}
                      <div
                        id="uidnote"
                        className={`${
                          userFocus && user && !validName
                            ? "instructions"
                            : "offscreen"
                        }  errmsg`}
                      >
                        4 to 24 characters. <br />Must begin with a letter. <br />Letters,
                        numbers, underscores, hyphens allowed.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Password" className="form-label">
                        Password
                        <FcCheckmark
                          className={pwd && validPwd ? "valid" : "hide"}
                        />
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="Password"
                        name="password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        required
                      />
                      <div
                        id="pwdnote"
                        className={`${
                          pwdFocus && !validPwd ? "instructions" : "offscreen"
                        } errmsg`}
                      >
                        5 to 24 characters.
                        <br />
                        include letters and a number <br />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="ConfirmPassword" className="form-label">
                        Confirm Password
                        <FcCheckmark
                          className={matchPwd && validMatch ? "valid" : "hide"}
                        />
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="ConfirmPassword"
                        name="confirmPassword"
                        aria-describedby="confirmnote"
                        aria-invalid={validMatch ? "false" : "true"}
                        onChange={(e) => setMatchPwd(e.target.value)}
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        required
                      />
                      <div
                        id="confirmnote"
                        className={`${
                          matchFocus && !validMatch
                            ? "instructions"
                            : "offscreen"
                        } errmsg`}
                      >
                        Not match the first password input field.
                      </div>
                    </div>
                    <div class="d-grid ">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <p className="text-center mt-3 mb-0">
                    Have an account? <a href="/">Sign in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;