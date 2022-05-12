import React from "react";
import { Container } from "react-bootstrap";

const ImgInicial = () => {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center">
          <img
            src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651727513/Fylo/illustration-intro_z9dscx.png"
            width="700"
            height="500"
            className="justify-content-center"
            alt="features"
          />
        </div>
      </Container>
    </>
  );
};

export default ImgInicial;
