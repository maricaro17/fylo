import React from "react";
import { Container } from "react-bootstrap";

const Title = () => {
  return (
    <div className="bg-shape w-100">
      <Container>
        <div className="d-flex justify-content-center">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 p-4 p-b1">
              <h1 className="mb-4 fw-bold ">
                All your files in one secure location, accessible anywhere.
              </h1>
              <p className="fs-4 px-5">
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.
              </p>
              <div>
                <button className="btn-principal">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Title;
