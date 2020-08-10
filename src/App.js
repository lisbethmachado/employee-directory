import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [employees, setEmployees] = useState([]);

  //   const getEmployeeList = () => axios.get(
  //     "https://randomuser.me/api/?results=50&nat=us"
  //   ).then((res) => {
  //     console.log(res.data.result)
  //     const employeeData = res.data.results
  //     setEmployees([...employees, employeeData])
  //   })
  // }

  function getEmployeeList() {
    axios.get(
      "https://randomuser.me/api/?results=50&nat=us"
    ).then((res) => {
      console.log(res.data.result)
      const employeeData = res.data.result
      setEmployees(...employees, employeeData)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>This will be an Employee Directory app.</h1>
      </header>
      <h5>Search employee directory:</h5>
      <button onClick={getEmployeeList}>Click Me!</button>
    </div>
  );
}

export default App;
