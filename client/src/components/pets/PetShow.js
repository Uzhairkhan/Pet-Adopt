import React from "react";
import { Link } from "react-router-dom";

export default function PetShow() {
  return (
    <div>
      <div className="container">
        <h2>Available Pets</h2>
        <Link to="/pets/add">Add a Pet</Link>
      </div>
    </div>
  );
}
