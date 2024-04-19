import React from "react";

const Team = () => {
  return (
    <div>
      <div className="section_title text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
        <h4 className="title">Token Sale Proceeds</h4>
      </div>
      <div className="lg_pt_20 res_sm_pt_0 text-center animation" data-animation="fadeInRight" data-animation-delay="0.2s">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ marginRight: "20px" }}>
              <img
                src="assets/images/sale1.png"
                alt="sale1"
                style={{ maxWidth: "300px", maxHeight: "450px" }}
              />
            </div>
            <div>
              <p style={{ fontSize: "18px", textAlign: "center" }}>
                Buraya metin 
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ marginRight: "20px" }}>
              <img
                src="assets/images/sale2.png"
                alt="sale2"
                style={{ maxWidth: "300px", maxHeight: "450px" }}
              />
            </div>
            <div>
              <p style={{ fontSize: "18px", textAlign: "center" }}>
                Buraya metin 
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "20px" }}>
              <img
                src="assets/images/sale3.png"
                alt="sale3"
                style={{ maxWidth: "300px", maxHeight: "450px" }}
              />
            </div>
            <div>
              <p style={{ fontSize: "18px", textAlign: "center" }}>
                Buraya metin
              </p>
            </div>
          </div>
        </div>
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default Team;
