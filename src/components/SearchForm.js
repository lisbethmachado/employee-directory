import React from "react";

function SearchForm({onChange, value}) {
  return (
    <form>
      <div className="form-row align-items-center">
        <div className="col-md-12">
          <label className="sr-only" htmlFor="inlineFormInput">Search</label>
          <input 
          type="text" 
          className="form-control mb-2" 
          id="inlineFormInput" 
          placeholder="Search for plants"
          value={value}
          onChange={onChange} />
        </div>
      </div>
    </form>

  );
}

export default SearchForm;