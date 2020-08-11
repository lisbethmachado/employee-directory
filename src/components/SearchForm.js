import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-row align-items-center">
        <div className="col-md-11">
          <label className="sr-only" htmlFor="inlineFormInput">Search</label>
          <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Search for users" />
        </div>
        <div className="col-md-1">
          <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary mb-2">Submit</button>
        </div>
      </div>
    </form>

  );
}

export default SearchForm;