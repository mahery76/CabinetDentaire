import './App.css';
import {addPatient} from './services/addPatient';

function App() {
  return (
    <div className="App">
      <form onSubmit={addPatient}>

        <button type="submit"> Ajouter patient</button>
      </form>
      
    </div>
  );
}

export default App;
