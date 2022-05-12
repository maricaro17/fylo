import React from "react";
import { Container } from "react-bootstrap";

const TitleSet = () => {
  return (
    <div className="bg-dark">
      <Container className="py-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-6">
            <img
              className="w-550"
              src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651727514/Fylo/illustration-stay-productive_sjs7sa.png"
              alt="stay-productive"
            />
          </div>
          <div className="col-md-6">
            <h1 className="mb-4 fw-bold ">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="fs-6">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a href="/#">
              See how Fylo works{" "}
              <img
                src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651727506/Fylo/icon-arrow_jiztvv.svg"
                alt="icon"
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TitleSet;
