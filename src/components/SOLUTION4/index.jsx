import React, { useState } from "react";

function SOLUTION4() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");

  const [second_largest, setSecond_Largest] = useState("");

  const handleSubmit = (event) => {
    console.log("Number1", typeof num1);
    console.log("Number2", num2);
    console.log("Number3", num3);
    event.preventDefault();

    // c4
    if (num1 >= num2 && num1 >= num3) {
      if (num2 >= num3) {
        setSecond_Largest(num2);
      } else {
        setSecond_Largest(num3);
      }
    } else if (num2 >= num1 && num2 >= num3) {
      if (num1 >= num3) {
        setSecond_Largest(num1);
      } else {
        setSecond_Largest(num3);
      }
    } else if (num1 >= num2) {
      setSecond_Largest(num1);
    } else {
      setSecond_Largest(num2);
    }
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setNum3("");
    setSecond_Largest("");
  };

  return (
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">
            FIND SECOND NUMBER LARGEST - SOLUTION 4
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <legend>Find the largest number</legend>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Number1</label>
                <input
                  type="number"
                  className="form-control"
                  id
                  name="num1"
                  value={(num1 + "").replace(/^0+/, "")}
                  onChange={(e) => setNum1(+e.target.value)} // convert string-number to number
                  placeholder="Enter number1"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Number2</label>
                <input
                  type="number"
                  className="form-control"
                  id
                  value={(num2 + "").replace(/^0+/, "")}
                  name="num2"
                  onChange={(e) => setNum2(+e.target.value)}
                  placeholder="Enter number2"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Number3</label>
                <input
                  type="text"
                  className="form-control"
                  id
                  name="num3"
                  value={(num3 + "").replace(/^0+/, "")} // convert number to string
                  onChange={(e) => setNum3(+e.target.value)} // convert string-number to string
                  placeholder="Enter number3"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Second Largest</label>
                <input
                  type="text"
                  className="form-control"
                  id
                  placeholder="Largest number"
                  value={second_largest}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button onClick={handleReset} className="btn btn-danger">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SOLUTION4;
