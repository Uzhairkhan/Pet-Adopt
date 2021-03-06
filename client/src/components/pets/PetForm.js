import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="border shadow rounded col-md-8 offset-md-2 "
        style={{ padding: "20px" }}
      >
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="name">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group col-md-6">
              <label for="age">Age</label>
              <input type="text" className="form-control" id="age" />
            </div>
          </div>

          <div className="form-group">
            <label for="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label for="rescued_from">Rescued From</label>
            <input
              type="text"
              className="form-control"
              id="rescued_from"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="animal_type">Category</label>
              <select id="animal_type" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="breed">Breed</label>
              <select id="breed" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="inputZip">Gender</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
