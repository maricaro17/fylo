import React from "react";

const SuscriptionInput = () => {
  return (
    <div className="d-flex justify-content-between mt-4">
      <input
        className="input-suscription px-4"
        type="email"
        name="email"
        id=""
        placeholder="email@example.com"
      />

      <button className="btn btn-suscription" type="submit">
        Get Started For Free
      </button>
    </div>
  );
};

export default SuscriptionInput;