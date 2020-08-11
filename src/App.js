import plants from './plants.json';
import React, { useState } from 'react';
import axios from 'axios';
import PlantsTable from './components/PlantsTable';
import SearchForm from './components/SearchForm';

function App() {
  // const [search, setSearch] = useState("");
  // const [plants, setPLants] = useState(plants.Jason);

  //   const getEmployeeList = () => axios.get(
  //     "https://randomuser.me/api/?results=50&nat=us"
  //   ).then((res) => {
  //     console.log(res.data.result)
  //     const employeeData = res.data.results
  //     setEmployees([...employee, employeeData])
  //   })
  // }

  // function getPlantsList() {
  //   axios.get(
  //     "https://randomuser.me/api/?results=50&nat=us"
  //   ).then((res) => {
  //     console.log(res.data.results)
  //     const plantsData = res.data.results
  //     // setEmployees(employeeData)
  //   })
  // }

  return (
    <div className="container">
      <header className="App-header align-center">
        <h1>This will be a Plant Directory app.</h1>
      </header>
      <h5>Search plants directory:</h5>
       <SearchForm/>
       <PlantsTable plants ={plants}/>
       
    </div>
  );
  }

export default App;
