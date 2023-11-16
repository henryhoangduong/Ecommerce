import React from "react";

// hook that we are going to use
import { useRef, useState, useEffect } from "react";

import axios from "axios";
// assets
import "./Register.css";
import registerImage from "../asset/img/registerImage.jpg";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";

import Login from "./Login";
//validated user name/must start with lowercase or upper letter/, password /1 lowercase, 1 uppercase, 1 diggit/
const USER_REGEX = /^[A-z ]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{5,24}$/;
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PHONE_REGEX = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
const Register = () => {
  //allowed us to set the focus on the user input
  const userRef = useRef();
  // if we get the error, we can put the focus on that
  const errRef = useRef();

  //state for user field, user'll type to user input, validName: whether the name validate or not, user input : whether we have focus on input field or not
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [phoneNmbr, setPhoneNmbr] = useState("");
  const [validPhoneNmbr, setValidPhoneNmbr] = useState(false);
  const [phoneNmbrFocus, setPhoneNmbrFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // errrMsg stage for posible error message, success, whether we success submit register form or not
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //set state for address select options
  // const [addressNum,setAddressNum] = useState("");
  const [adrssNum, setAdrssNum] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const [citiesField, setCitiesField] = useState([]);
  const [districtsField, setDistrictsField] = useState([]);
  const [wardsField, setWardsField] = useState([]);

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

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    // console.log(email);
    // console.log(result);
    setValidEmail(result);
    console.log("register.js useEffect valid email: ", result);
  }, [email]);

  useEffect(() => {
    const result = PHONE_REGEX.test(phoneNmbr);
    // console.log(email);
    // console.log(result);
    setValidPhoneNmbr(result);
    console.log("register.js useEffect setValidPhoneNmbr: ", result);
  }, [phoneNmbr]);

  // validate the password
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    console.log(pwd);
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd, email]);

  const handleCity = (data) => {
    const filter = citiesField.filter((city) => city.name == data);
    setDistrictsField(filter[0].districts);
    setCity(data);
    // console.log("Register.js handleDistrict : ", filter[0].Districts);
  };
  const handleDistrict = (data) => {
    const filter = districtsField.filter((district) => district.name == data);
    setWardsField(filter[0].wards);
    setDistrict(data);
  };

  useEffect(() => {
    var Parameter = {
      url: "https://provinces.open-api.vn/api/?depth=3",
      method: "GET",
      responseType: "application/json",
    };
    var promise = axios(Parameter);
    promise.then(function (result) {
      const data = JSON.parse(result.data);
      // renderAddress(data);
      setCitiesField(data);
      // console.log("Register.js promise setCities: ",data);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // const REGISTER_URL = "http://127.0.0.1:8000/api/register";
      const userInput = {
        name: user,
        email: email,
        phone:phoneNmbr,
        password: pwd,
        address: `${adrssNum}, ${ward}, ${district}, ${city}`,
      };
      console.log("user input", userInput);
      // const res = await axios.post(REGISTER_URL, userInput);
      // console.log(res);
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (e) {
      if (!e?.response) {
        setErrMsg("No Server Response");
      } else if (e.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("An error occurred. Please try again later.");
      }
    }
  }

  return (
    <>
      {success == true ? (
        <section>
          <div
            style={{ height: "100vh" }}
            className="container-fluid justify-content-center d-flex align-items-center  route-register fs-5"
          >
            <div className="row">
              <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
                <div className="card shadow">
                  <img
                    src={registerImage}
                    className="card-img-top"
                    style={{ "max-height": "800px" }}
                  />
                  <div className="card-body">
                    <div className="card-title text-center my-0 ">
                      <p className="fs-3 fw-bold font-monospace ">
                        Congratulation, You created your acount, let's check it
                        out!
                      </p>
                    </div>
                    <Login />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div
            style={{ height: "100vh" }}
            className="container-fluid justify-content-center d-flex align-items-center  route-register fs-5"
          >
            <div className="row">
              <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
                <div className="card shadow">
                  <img
                    src={registerImage}
                    className="card-img-top"
                    style={{ "max-height": "800px" }}
                  />
                  {/* //define what will hold the error when the error exist */}
                  <p
                    ref={errRef}
                    className={`${
                      errMsg ? "alert alert-danger" : "offscreen"
                    } text-center`}
                    role="alert"
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <div className="card-body">
                    <div className="card-title text-center my-0 ">
                      <p className="fs-3 fw-bold font-monospace ">
                        Create your Lego account
                      </p>
                    </div>
                    <form className="validated-form" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label
                          for="validationServer03"
                          htmlFor="username"
                          className="form-label"
                        >
                          Name{" "}
                        </label>
                        <input
                          className={`form-control  ${
                            validName ? "is-valid" : ""
                          } ${!validName && user ? "is-invalid" : ""}`}
                          type="text"
                          ref={userRef} // allow us to set focus on input, focus when combonent load
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

                        <div id="uidnote" className="invalid-feedback">
                          4 to 24 characters. Must begin with a letter. <br />
                          Letters, numbers, underscores, hyphens allowed.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          for="email"
                          htmlFor="email"
                          className="form-label"
                        >
                          Email{" "}
                        </label>
                        <input
                          className={`form-control  ${
                            validEmail ? "is-valid" : ""
                          } ${!validEmail && email ? "is-invalid" : ""}`}
                          type="text"
                          onChange={(e) => setEmail(e.target.value)} // provide the event and set user stage, it tide the input to the user stage
                          aria-invalid={validEmail ? "false" : "true"}
                          id="email"
                          name="email"
                          required
                          aria-describedby="uidnote"
                          onFocus={() => setEmailFocus(true)} //if the user field is focus we setting it to true
                          onBlur={() => setEmailFocus(false)}
                        />
                        {/* // uidnote match aria-describedby, if userfocus is on, user is already typed, and not the valid name */}

                        <div id="uidnote" className="invalid-feedback">
                          email not right!
                        </div>
                      </div>

                      {/* address input start--- */}
                      <div className="mb-3">
                        <label
                          for="phoneNmbr"
                          htmlFor="phoneNmbr"
                          className="form-label"
                        >
                          phone number{" "}
                        </label>

                        <input
                          className={`form-control  ${
                            phoneNmbr && validPhoneNmbr ? "is-valid" : ""
                          } ${
                            !validPhoneNmbr && phoneNmbr ? "is-invalid" : ""
                          }`}
                          type="tel"
                          onChange={(e) => setPhoneNmbr(e.target.value)} // provide the event and set user stage, it tide the input to the user stage
                          aria-invalid={validPhoneNmbr ? "false" : "true"}
                          id="phoneNmbr"
                          name="phoneNmbr"
                          value={phoneNmbr}
                          placeholder="Enter a phone number"
                          required
                          aria-describedby="phone"
                          onFocus={() => setPhoneNmbrFocus(true)} //if the user field is focus we setting it to true
                          onBlur={() => setPhoneNmbrFocus(false)}
                        />
                        {/* // uidnote match aria-describedby, if userfocus is on, user is already typed, and not the valid name */}

                        <div id="phone" className="invalid-feedback">
                          not valid yet!
                        </div>
                      </div>
                      <p>
                        <input
                          class="box"
                          type="text"
                          name="adrss"
                          placeholder="Enter your address"
                          required
                          onChange={(e) => setAdrssNum(e.target.value)}
                        />
                      </p>
                      <select
                        name="city"
                        id="city"
                        class="box"
                        required
                        onChange={(e) => handleCity(e.target.value)}
                      >
                        <option value="" disabled selected>
                          Select Tỉnh/Thành
                        </option>
                        {citiesField.map((city) => (
                          <option key={city.code} value={`${city.name}`}>
                            {city.name}
                          </option>
                        ))}

                        {/* <!-- Add Tỉnh/Thành options here --> */}
                      </select>

                      <select
                        name="district"
                        id="district"
                        class="box"
                        required
                        onChange={(e) => handleDistrict(e.target.value)}
                      >
                        <option value="" disabled selected>
                          Select Quận/Huyện
                        </option>
                        {districtsField.map((district) => (
                          <option
                            key={district.code}
                            value={`${district.name}`}
                          >
                            {district.name}
                          </option>
                        ))}
                        {/* <!-- Add Quận/Huyện options here --> */}
                      </select>

                      <select
                        name="ward"
                        id="ward"
                        class="box"
                        required
                        onChange={(e) => setWard(e.target.value)}
                      >
                        <option value="" disabled selected>
                          Select Phường/Xã
                        </option>
                        {wardsField.map((ward) => (
                          <option key={ward.code} value={`${ward.name}`}>
                            {ward.name}
                          </option>
                        ))}
                        {/* <!-- Add Thị Xã options here --> */}
                      </select>
                      {/* address input end--- */}

                      <div className="mb-3">
                        <label htmlFor="Password" className="form-label">
                          Password
                        </label>
                        <input
                          className={`form-control  ${
                            pwd && validPwd ? "is-valid" : ""
                          } ${!validPwd && pwd ? "is-invalid" : ""}`}
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
                        <div id="pwdnote" className="invalid-feedback">
                          5 to 24 characters.
                          <br />
                          include letters and a number <br />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="ConfirmPassword" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          className={`form-control  ${
                            matchPwd && validMatch ? "is-valid" : ""
                          } ${!validMatch && matchPwd ? "is-invalid" : ""}`}
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
                        <div id="confirmnote" className="invalid-feedback">
                          Not match the first password input field.
                        </div>
                      </div>
                      <div class="d-grid ">
                        <button
                          disabled={
                            !validName || !validPwd || !validMatch
                              ? true
                              : false
                          }
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
      )}
    </>
  );
};

export default Register;
