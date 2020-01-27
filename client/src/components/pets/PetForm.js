import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="border shadow rounded col-md-8 offset-md-2 ">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="form-control" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
