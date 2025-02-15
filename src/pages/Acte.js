import React from "react";
import { addActe } from "../services/addActe";

function Acte() {
  return (
    <div>
      <form onSubmit={addActe}>
        <button type="submit">Ajouter acte</button>
      </form>
    </div>
  );
}

export default Acte;
