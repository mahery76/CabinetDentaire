import React from "react";
import { addDocteur } from "../services/addDocteur";

function Docteur() {
  return (
    <div>
      <form onSubmit={addDocteur}>
        <button type="submit"> Ajouter Docteur</button>
      </form>
    </div>
  );
}

export default Docteur;
