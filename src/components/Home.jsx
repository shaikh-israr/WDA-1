import React from "react";
import "./Home.css";
import ImgFile from "./../assets/Bg2.1.png";
import Object1 from "./../assets/object1.png";
function Home() {
  return (
    <div className="BackImage">
      <img
        src={ImgFile}
        alt=""
        style={{
          position: "relative",
          margin: "0",
          width: "100%",
          height: 430,
        }}
      />
      <img
        src={Object1}
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
        <button
          style={{
            backgroundColor: "#F69836",
            color: "white",
            borderRadius: "4px",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Get Started
        </button>
        <br />
        <button
          style={{
            backgroundColor: "##FFFFFF;",
            color: "black",
            borderRadius: "4px",
            height: 35,
          }}
        >
          Continue without Login
        </button>
        <br />
        <button
          style={{
            backgroundColor: "##FFFFFF;",
            color: "black",
            borderRadius: "4px",
            height: 35,
          }}
        >
          Already a Tiffina Member?{" "}
          <span style={{ color: "#F69836", fontSize: "15px" }}>Login</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
