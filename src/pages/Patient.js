import React from "react";
import { addPatient } from "../services/addPatient";

function Patient() {
  return (
    <div>
      <form onSubmit={addPatient}>
        <button type="submit">Ajouter patient</button>
      </form>
    </div>
  );
}

export default Patient;
