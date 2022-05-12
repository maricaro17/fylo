import React from "react";
import { Container } from "react-bootstrap";
import Card from "./Card";

const data = [
  {
    id: 1,
    title: "Access your files, anywhere",
    parrafo: `The ability to use a smartphone, tablet, or computer to access your account means your 
files follow you everywhere.`,
    image:
      "https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651727504/Fylo/icon-access-anywhere_dwqgnp.svg",
  },
  {
    id: 2,
    title: "Security you can trust",
    parrafo: `2-factor authentication and user-controlled encryption are just a couple of the security 
    features we allow to help secure your files.`,
    image:
      "https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651727512/Fylo/icon-security_q2magh.svg",
  },
  {
    id: 3,
    title: "Real-time collaboration",
    parrafo: `Securely share files and folders with friends, family and colleagues for live collaboration. 
    No email attachments required.`,
    image:
      "https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651727507/Fylo/icon-collaboration_mr3yz6.svg",
  },
  {
    id: 4,
    title: "Store any type of file",
    parrafo: `Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
    file types to be securely stored and shared.`,
    image:
      "https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651727505/Fylo/icon-any-file_hyumsc.svg",
  },
];
const CardList = () => {
  return (
    <div className="bg-dark">
      <Container className="d-flex">
        <div className="row">
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              parrafo={item.parrafo}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CardList;
