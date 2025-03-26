import React from "react";

const WavyBackground = () => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      zIndex: "-1",
      overflow: "hidden",
    }}>
      {/* Floating Elements */}
      <div className="floating-elements" style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        zIndex: "1", // ✅ Ensure it's above the background
        pointerEvents: "none", // ✅ Prevents blocking interactions
      }}>
        <div className="circle" style={{ top: "10%", left: "10%" }}></div>
        <div className="circle" style={{ top: "30%", left: "50%" }}></div>
        <div className="circle" style={{ top: "60%", left: "30%" }}></div>
        <div className="circle" style={{ top: "80%", left: "80%" }}></div>
      </div>

      {/* SVG Waves */}
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "50vh" }}
      >
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,218.7C672,235,768,213,864,202.7C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128V320H0Z"
        ></path>
      </svg>
    </div>
  );
};

export default WavyBackground;
