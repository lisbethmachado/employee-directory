import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-row align-items-center">
        <div className="col-auto">
          <label className="sr-only" htmlFor="inlineFormInput">Name</label>
          <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Search for users" />
        </div>
        <div className="col-auto">
          <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary mb-2">Submit</button>
        </div>
      </div>
    </form>

  );
}

export default SearchForm;