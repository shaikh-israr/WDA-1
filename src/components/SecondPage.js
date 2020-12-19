import React from "react";
import "./Home.css";
import HaderImg from "./../assets/Bg2.2.png";
import Object2 from "./../assets/object2.png";
import MobileNumber from "./../assets/icon1.png";
import Mail from "./../assets/icon2.png";
import Gmail from "./../assets/icon3.png";
import fb from "./../assets/icon4.png";
function SecondPage() {
  return (
    <>
      <div className="BackImage">
        <img
          src={HaderImg}
          alt=""
          style={{
            position: "relative",
            margin: "0",
            width: "100%",
          }}
        />
        <img
          src={Object2}
          alt=""
          style={{
            position: "absolute",
            left: "37%",
            right: "30%",
            top: "14%",
            width: "30%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "30px 30px",
          }}
        >
          <h1>Login</h1>
          <button
            style={{
              backgroundColor: "##FFFFFF;",
              color: "black",
              borderRadius: "8px",
              height: 30,
              borderBlockColor: "#F69836",
            }}
          >
            <div style={{ display: "flex" }}>
              <img src={MobileNumber} alt="" style={{ height: "20px" }} />
              <span style={{ marginLeft: "40px" }}>
                Enter Your Mobile Number
              </span>
            </div>
          </button>
          <br />
          <button
            style={{
              backgroundColor: "##FFFFFF;",
              color: "black",
              borderRadius: "8px",
              height: 30,
              borderBlockColor: "#F69836",
            }}
          >
            <div style={{ display: "flex" }}>
              <img src={fb} alt="" style={{ height: "20px" }} />
              <span style={{ marginLeft: "40px" }}>Continue with facebook</span>
            </div>
          </button>
          <br />
          <button
            style={{
              backgroundColor: "##FFFFFF;",
              color: "black",
              borderRadius: "8px",
              height: 30,
              borderBlockColor: "#F69836",
            }}
          >
            <div style={{ display: "flex" }}>
              <img src={Gmail} alt="" style={{ height: "20px" }} />
              <span style={{ marginLeft: "40px" }}>Continue with Google</span>
            </div>
          </button>
          <br />
          <button
            style={{
              backgroundColor: "##FFFFFF;",
              color: "black",
              borderRadius: "8px",
              height: 30,
              borderBlockColor: "#F69836",
            }}
          >
            <div style={{ display: "flex" }}>
              <img src={Mail} alt="" style={{ height: "20px" }} />
              <span style={{ marginLeft: "40px" }}>Continue with Email</span>
            </div>
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "25px",
            }}
          >
            <span style={{ fontSize: "15px" }}>
              By Continuing, You Agree to Our
            </span>
            <span style={{ fontSize: "15px" }}>
              Terms of Service & Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
