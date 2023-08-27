import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import illu from "../images/Illustration.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="4" md="6">
          <div className="text-center text-md-start mt-4 pt-2">
            <p class="h5">Sign In</p>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              New User? &nbsp;
              <a href="#!" className="link-primary">
                Create an Account
              </a>
            </p>
          </div>

          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Keep me signed in"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>

          <div className="text-center text-md-start mt-4 pt-2 d-grid">
            <MDBBtn
              className="mb-0 px-5"
              size="lg"
              color="dark"
              onClick={() => {
                if (email != null || password != null) {
                  navigate("/home");
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email and Passowrd can't be empty",
                  });
                }
              }}
            >
              Sign In
            </MDBBtn>
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Sign in with</p>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center">
            {/* <p className="lead fw-normal mb-0 me-3">Sign in with</p> */}
            <MDBBtn
              floating
              size="lg"
              tag="a"
              className="me-2"
              style={{ border: "1px solid black" }}
            >
              {" "}
              <MDBIcon
                fab
                icon="google"
                color="black"
                style={{ background: "white" }}
              />
            </MDBBtn>

            <MDBBtn
              floating
              size="lg"
              tag="a"
              className="me-2"
              style={{ border: "1px solid black" }}
            >
              <MDBIcon
                fab
                icon="facebook-f fa-thin"
                color="black"
                style={{ background: "white" }}
              />
            </MDBBtn>

            <MDBBtn
              floating
              size="lg"
              tag="a"
              className="me-2"
              style={{ border: "1px solid black" }}
            >
              <MDBIcon
                fab
                icon="twitter"
                color="black"
                style={{ background: "white" }}
              />
            </MDBBtn>

            <MDBBtn
              floating
              size="lg"
              tag="a"
              className="me-2"
              style={{ border: "1px solid black" }}
            >
              <MDBIcon
                fab
                icon="linkedin-in"
                color="black"
                style={{ background: "white" }}
              />
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol id="image-col" col="10" md="6">
          <img src={illu} class="img-fluid" alt="Sample image" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
