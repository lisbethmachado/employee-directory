import plantsJson from './plants.json';
import React, { useState } from 'react';
import PlantsTable from './components/PlantsTable';
import SearchForm from './components/SearchForm';

function App() {
  const [search, setSearch] = useState("");
  let plants;
  if (!search) {
    plants = plantsJson;
  } else {
    plants = plantsJson.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });
  }
  return (
    <div className="container">
      <header className="App-header align-center">
        <h1>This will be a Plant Directory app.</h1>
      </header>
      <h5>Search plants directory by name or species:</h5>
      <SearchForm
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <PlantsTable plants={plants} />
    </div>
  );
}

export default App;
