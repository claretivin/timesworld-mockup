import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../app/appActions";
import { Facebook, Google, Linkedin, Twitter } from "react-bootstrap-icons";
import { MDBBtn } from "mdb-react-ui-kit";

export default function Home() {
  const dispatch = useDispatch();
  // Items to display per load
  const itemsPerPage = 10;

  // State to control the number of items displayed
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [filteredCountryList, setFilteredCountryList] = useState([]); // State for filtered list

  useEffect(() => {
    dispatch(actions.countryList());
  }, []);

  const { currentstate } = useSelector((state) => ({
    currentstate: state.app,
  }));

  let { country_list } = currentstate;
  console.log(country_list);

  useEffect(() => {
    if (country_list) {
      setFilteredCountryList(country_list);
    }
  }, [country_list]);

  // Function to handle "Load More" button click
  const loadMoreItems = () => {
    setVisibleItems((prevVisible) =>
      Math.min(prevVisible + itemsPerPage, filteredCountryList?.length)
    );
  };

  //Filter function to handle the continent filter
  const filterContinent = async (region) => {
    if (region === "All") {
      setFilteredCountryList(country_list);
    } else {
      const filteredCountries = country_list.filter((e) => e.region === region);
      setFilteredCountryList(filteredCountries);
    }
    setVisibleItems(itemsPerPage);
  };

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
                <a
                  onClick={() => {
                    filterContinent("All");
                  }}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  All
                </a>
                <a
                  onClick={() => {
                    filterContinent("Asia");
                  }}
                  class="nav-link"
                  href="#"
                >
                  Asia
                </a>
                <a
                  onClick={() => {
                    filterContinent("Europe");
                  }}
                  class="nav-link"
                  href="#"
                >
                  Europe
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="card-dummy">
          {filteredCountryList?.slice(0, visibleItems).map((e, i) => {
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
        <div
          style={{ marginTop: "10px" }}
          className="d-grid gap-2 col-6 mx-auto"
        >
          {visibleItems < filteredCountryList?.length && (
            <MDBBtn onClick={loadMoreItems}>Load More</MDBBtn>
          )}
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
