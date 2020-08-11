import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PlantsTable({ plants }) {
  console.log(plants[0].name)
  console.log(plants[0].species)
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Species</th>
        </tr>
      </thead>
      <tbody>
        {plants.map((plant) => {
          let i;
          return (
            <tr key={plant[i]}>
              <td>{plant.name}</td>
              <td>{plant.species}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PlantsTable;
