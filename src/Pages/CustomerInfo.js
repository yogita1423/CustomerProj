import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { posturl } from "./Config";
import "../App.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const CustomerInfo = () => {
  const [inpval, setINP] = useState({
    CustomerID: "",
    CustomerName: "",
    ProductName: "",
    Quantity: "",
    CustomerPhoneNo: "",
    DeliveryAddress: "",
    DateOfDelivery: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();
    const {
      CustomerID,
      CustomerName,
      ProductName,
      Quantity,
      CustomerPhoneNo,
      DeliveryAddress,
      DateOfDelivery,
    } = inpval;
    const res = await fetch(posturl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CustomerID,
        CustomerName,
        ProductName,
        Quantity,
        CustomerPhoneNo,
        DeliveryAddress,
        DateOfDelivery,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("error");
      console.log("error");
    } else {
      alert("Data Added Successfully");
    }
  };

  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  // const getdata = async (e) => {
  //   e.preventDefault();

  //   const res = await fetch("/getdata", {
  //     method: "Get",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await res.json();
  //   console.log(getdata);
  //   if (res.status === 404 || !data) {
  //     console.log("error");
  //   } else {
  //     setUserdata(data);
  //     console.log("getdata");
  //   }
  // };

  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <>
      <Navbar />
      {/* ---------------------------------------Form---------------------------------------------- */}
      <div className="container">
        <div className="Auth-form-container1">
          <form className="Auth-form1">
            <div className="Auth-form-content1">
              <h1 className="title1">
                New Customer User &nbsp;
                <i class="fa-sharp fa-solid fa-person-circle-plus"></i>{" "}
              </h1>

              <br></br>
              <div className="row">
                <div className="col-lg-6">
                  <label for="ExampleInputID" class=" form=label">
                    CustomerID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputID"
                    placeholder="Please enter CustomerID"
                    value={inpval.CustomerID}
                    onChange={setdata}
                    name="CustomerID"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputName" class=" form=label">
                    CustomerName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputName"
                    placeholder="Please enter CustomerName"
                    value={inpval.CustomerName}
                    onChange={setdata}
                    name="CustomerName"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputAddress" class=" form=label">
                    ProductName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputName"
                    placeholder="Please enter ProductName"
                    value={inpval.ProductName}
                    onChange={setdata}
                    name="ProductName"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputSalcode" class=" form=label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="ExampleInputSalCode"
                    placeholder="Please enter Quantity"
                    value={inpval.Quantity}
                    onChange={setdata}
                    name="Quantity"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputPhoneNo" class=" form=label">
                    CustomerPhoneNo
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="ExampleInputPhoneNo"
                    value={inpval.CustomerPhoneNo}
                    onChange={setdata}
                    name="CustomerPhoneNo"
                    maxlength="10"
                    pattern="\d{10}"
                    placeholder="Please enter exactly 10 digits"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputAge" class=" form=label">
                    DeliveryAddress
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputAge"
                    value={inpval.DeliveryAddress}
                    onChange={setdata}
                    name="DeliveryAddress"
                    maxlength="10"
                    pattern="\d{10}"
                    placeholder="Please enter valid age"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputStartDate" class=" form=label">
                    DateOfDelivery
                  </label>
                  <input
                    type="Date"
                    className="form-control"
                    id="ExampleInputStartDate"
                    value={inpval.DateOfDelivery}
                    onChange={setdata}
                    name="DateOfDelivery"
                    required
                  />
                </div>

                {/* <div className="col-lg-6">
                  <label for="ExampleInputPassword1" class=" form=label">
                    work
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputGrade"
                    value={inpval.work}
                    onChange={setdata}
                    name="work"
                  />
                </div> */}
                {/* <div className="col-lg-6">
                  <label for="ExampleInputPassword1" class=" form=label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputDepartment"
                    value={inpval.add}
                    onChange={setdata}
                    name="add"
                  />
                </div> */}

                {/* <div className="col-lg-6">
                  <label for="ExampleInputPassword1" class=" form=label">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    value={inpval.desc}
                    name="desc"
                    onChange={setdata}
                    id="exampleFormControlTextarea1"
                    rows="4"
                  >
                    {" "}
                  </textarea>
                </div> */}
                {/* <div className='mb-3 col-lg-12 col-md-12 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Upload Photo:
                </label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter UserName'
                  id='ExampleInputPassword1'
                />
              </div> */}
                <div className="col-lg-6" id="sub">
                  <button
                    type="submit"
                    onClick={addinpdata}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />

      <Footer />
    </>
  );
};

export default CustomerInfo;
