import React, { useState } from "react";
import illu from "../images/Illustration.png";
import { Facebook, Google, Linkedin, Twitter } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Signin() {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const login = async () => {};

  return (
    <>
      <div className="container">
        <div className="row main-row">
          <div className="col-12 col-xl-6 col-lg-6 col-md-6">
            <div className="row mb-3 justify-content-center">
              <h5>Sign In</h5>
              <p class="h6">
                New User?&nbsp;
                <a
                  href="#"
                  class="link-offset-2 link-underline link-underline-opacity-0"
                >
                  Create an account
                </a>
              </p>
            </div>
            <div class="row mb-3 justify-content-center">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="row mb-3 justify-content-center">
              <input
                type="password"
                id="inputPassword5"
                class="form-control"
                aria-describedby="passwordHelpBlock"
                placeholder="password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            {/* <div className="row justify-content-center">
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Keep me signed in
                </label>
              </div>
            </div> */}
            <div className="row justify-content-center">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => {
                  if (email != null || password != null) {
                    navigate("/home");
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Please enter Email and Passowrd",
                    });
                  }
                }}
              >
                Sign In
              </button>
            </div>
            <div className="row mb-3 justify-content-center">
              <div
                style={{
                  width: "50%",
                  height: "20px",
                  borderBottom: "1px solid black",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    background: "white",
                    padding: "0 10px",
                  }}
                >
                  Or Sign In With
                </span>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-xl-1 col-lg-1 col-md-1">
                <div className="icon-background">
                  <Google size={25} />
                </div>
              </div>
              <div className="col-12 col-xl-1 col-lg-1 col-md-1">
                <Facebook size={25} />
              </div>
              <div className="col-12 col-xl-1 col-lg-1 col-md-1">
                <Linkedin size={25} />
              </div>
              <div className="col-12 col-xl-1 col-lg-1 col-md-1">
                <Twitter size={25} />
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6">
            <img src={illu} />
          </div>
        </div>
      </div>
    </>
  );
}
