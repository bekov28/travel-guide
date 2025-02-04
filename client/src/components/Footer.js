import React from "react";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">ABOUT</h5>
            <p>
              Travel Guide is a travel guide website that allows users to easily find and plan their
              next trip in South korea. With a simple and intuitive interface, users can read about
              popular Korean cities and plan their trip with ease. Moreover, users can add a new
              city, update the city information and can delete the destination as well.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>

            <p>
              If you need any help or have any questions, please contact us at{" "}
              <a href="#">berdiyorozu@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2025 Copyright:
        <a className="text-body" href="https://www.linkedin.com/in/berdiyor-orzikulov/">
          Berdiyor Orzikulov
        </a>
      </div>
    </footer>
  );
};

export default Footer;
