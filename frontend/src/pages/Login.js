import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Navigate,useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const [user, setuser] = useState({'email':'','password':''});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(user)
  },[user])

  function handlechange(event) {
    setuser((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    console.log(user)
  }
  async function handlelogin(event) {
    event.preventDefault();
    const url = "http://127.0.0.1:8000/api/login";
    try {
      const res = await axios.post(url, user);
      console.log(res)
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token}`;
      setAuthUser({ 'role': res.data.role })
      handleClose();
      setIsLoggedIn(true)
      if (res?.data.role === 'admin') {
        nav('/admin')
      }
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Login
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Email
              </label>
              <div class="col-sm-8">
                <input
                  name='email'
                  onChange={handlechange}
                  type="email"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword" class="col-sm-3 col-form-label">
                Password
              </label>
              <div class="col-sm-8">
                <input
                  name='password'
                  onChange={handlechange}
                  type="password"
                  class="form-control"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handlelogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
