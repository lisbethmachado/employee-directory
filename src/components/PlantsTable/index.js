import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PlantsTable({ plants }) {
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
          return (
            <tr key={plant.id}>
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
