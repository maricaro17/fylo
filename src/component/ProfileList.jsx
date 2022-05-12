import React from "react";
import CardProfile from "./CardProfile";


const profile = [
  {
    id: 1,
    name: "Satish Patel",
    cargo: "Founder & CEO, Huddle",
    cita: `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
      become a well-oiled collaboration machine.`,
    image:
      "https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651727516/Fylo/profile-1_t9aryk.jpg",
  },
  {
    id: 2,
    name: "Bruce McKenzie",
    cargo: "Founder & CEO, Huddle",
    cita: `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
      become a well-oiled collaboration machine.`,
    image:
      "https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651727517/Fylo/profile-2_rtvry1.jpg",
  },
  {
    id: 3,
    name: "Iva Boyd",
    cargo: "Founder & CEO, Huddle",
    cita: `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
      become a well-oiled collaboration machine.`,
    image:
      "https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651727518/Fylo/profile-3_uiqdar.jpg",
  },
];
const ProfileList = () => {
  return (
    <div className="bg-dark py-4 h-400">
      <div className="d-flex justify-content-center card-list-profile">
        {profile.map((item) => (
          <CardProfile
            key={item.id}
            image={item.image}
            name={item.name}
            cita={item.cita}
            cargo={item.cargo}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
