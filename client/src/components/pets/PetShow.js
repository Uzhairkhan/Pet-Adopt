import React from "react";
import { Link } from "react-router-dom";
import {connect } from "react-redux"

function PetShow(props) {
  console.log(props);
  return (
    <div>
      <div className="container">
        <h2>Available Pets</h2>
        <Link to="/pets/add">Add a Pet</Link>
      </div>
    </div>
  );
}

export default connect()(PetShow)