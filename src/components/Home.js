import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../app/appActions";
import { Facebook, Google, Linkedin, Twitter } from "react-bootstrap-icons";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.countryList());
  }, []);

  const { currentstate } = useSelector((state) => ({
    currentstate: state.app,
  }));

  const { country_list } = currentstate;
  console.log(country_list);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Countries
          </a>
          <div className="d-flex">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">
                  All
                </a>
                <a class="nav-link" href="#">
                  Asia
                </a>
                <a class="nav-link" href="#">
                  Europe
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="card-dummy">
          {country_list?.map((e, i) => {
            return (
              <>
                <div class="card" style={{ width: "450px" }}>
                  <div class="card-body">
                    <div className="row">
                      <div className="col-12 col-lg-6 col-md-6 col-xl-6 ">
                        <img width={100} height={80} src={e.flag} />
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 col-xl-6 ">
                        <h6>{e.name}</h6>
                        <p>
                          <small>{e.region}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="row justify-content-center" style={{ padding: "50px" }}>
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
    </>
  );
}
