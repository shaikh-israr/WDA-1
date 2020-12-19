import React from "react";
import "./Home.css";
import HaderImg1 from "./../assets/Bg2.3.png";
import Object3 from "./../assets/object3.png";
function ThridPage() {
  return (
    <>
      <div className="BackImage">
        <img
          src={HaderImg1}
          alt=""
          style={{
            position: "relative",
            margin: "0",
            width: "100%",
          }}
        />
        <img
          src={Object3}
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
          <h2>Login</h2>
          <label
            style={{
              fontSize: "10px",
            }}
          >
            Enter Your Mobile Number
          </label>
          <input
            tyepe="number"
            value="+91|9876543210"
            style={{
              borderRadius: "8px",
              height: "32px",
              borderBlockColor: "#F69836",
            }}
          />
          <br />
          <h2>VERIFY OTP</h2>
          <label
            style={{
              fontSize: "10px",
            }}
          >
            OTP Sent to 9876543210
          </label>
          <input
            tyepe="number"
            style={{
              borderRadius: "8px",
              height: "32px",
              borderBlockColor: "#F69836",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                color: "#f69836",
              }}
            >
              Change Mobile Number
            </span>
            <span
              style={{
                fontSize: "10px",
              }}
            >
              Auto-Detect In 00:00{" "}
              <span style={{ color: "#F69836" }}>RESEND</span>
            </span>
          </div>
          <br />
          <button
            style={{
              color: "white",
              backgroundColor: "#F69836",
              height: "32px",
              border: "none",
              borderRadius: "8px",
            }}
          >
            PROCEED
          </button>
        </div>
      </div>
    </>
  );
}

export default ThridPage;
