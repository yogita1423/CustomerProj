import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

import { geturl } from "./Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSVLink } from "react-csv";

//import { deleteurl } from "./Config";
//import { puturl } from "./Config";

const Customer = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch(geturl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("getdata");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (EmployeeID) => {
    const res2 = await fetch(
      `https://7bctswkz46.execute-api.us-east-1.amazonaws.com/employee/${EmployeeID}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      console.log("error");
    } else {
      console.log("user deleted");
      getdata();
    }
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="top">
          <h1>
            CUSTOMER DETAILS <i class="fa-solid fa-user-tie"></i>
          </h1>
        </div>
        <div className="add-btn">
          <Link to="/customerInfo" class="btn btn-primary">
            ADD DATA &nbsp;
            <i class="fa-solid fa-plus"></i>
          </Link>
        </div>
        <div className="download-btn">
          <CSVLink data={getuserdata} className="btn btn-success mb-3">
            DOWNLOAD IN EXCEL&nbsp; <i class="fa-solid fa-download"></i>
          </CSVLink>
        </div>
      </section>
      <div className="Table">
        <div className="container-fluid ">
          <table class="table table-lights table-striped">
            <thead>
              <tr className="Emptable">
                <th scope="col">Sr No</th>
                <th scope="col">CustomerID</th>
                <th scope="col">CustomerName</th>
                <th scope="col">ProductName</th>
                <th scope="col">Quantity</th>
                <th scope="col">CustomerPhoneNo</th>
                <th scope="col">DeliveryAddress</th>
                <th scope="col">DateOfDelivery</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <tr className="Emptable">
                      <th scope="row">{id + 1}</th>
                      <td className="hide">{element.CustomerID}</td>
                      <td className="hide">{element.CustomerName}</td>
                      <td className="hide">{element.ProductName}</td>
                      <td className="hide">{element.Quantity}</td>
                      <td className="hide">{element.CustomerPhoneNo}</td>
                      <td className="hide">{element.DeliveryAddress}</td>
                      <td className="hide">{element.DateOfDelivery}</td>

                      <td className="d-flex justify-content-between ">
                        <Link to="/view:id">
                          <button className="btn btn-success">
                            <i class="fa-regular fa-eye"></i>
                            <br />
                            View
                          </button>
                        </Link>
                        <Link to="/Edit">
                          <button className="btn btn-primary" id="updatebtn">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <br />
                            Update
                          </button>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteuser(element.EmployeeID)}
                        >
                          <i class="fa-solid fa-trash"></i>
                          <br />
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      {/* <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table> */}
      <Footer />
    </>
  );
};

export default Customer;
//how to make a table responsive?
