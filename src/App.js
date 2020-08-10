import React, { useState } from 'react';
import axios from 'axios';
import EmployeeTable from './components/EmployeeTable';
import SearchForm from './components/SearchForm';

function App() {
  // const [employees, setEmployees] = useState();

  //   const getEmployeeList = () => axios.get(
  //     "https://randomuser.me/api/?results=50&nat=us"
  //   ).then((res) => {
  //     console.log(res.data.result)
  //     const employeeData = res.data.results
  //     setEmployees([...employees, employeeData])
  //   })
  // }

  // function getEmployeeList() {
  //   axios.get(
  //     "https://randomuser.me/api/?results=50&nat=us"
  //   ).then((res) => {
  //     console.log(res.data.results)
  //     const employeeData = res.data.results
  //     setEmployees(employeeData)
  //   })
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>This will be an Employee Directory app.</h1>
      </header>
      <h5>Search employee directory:</h5>
       <SearchForm/>
       <EmployeeTable/>
       
    </div>
  );
}

export default App;
