import NoControlado from "./components/NoControlado";
import Controlado from "./components/Controlado";
import Cat from "./components/Cat";


const App = () => {
  return (
    <div className="container">
      <h1>Formularios</h1>
      {/* <NoControlado/> */}
      <Controlado/>
      <Cat/>
    </div>
  );

};
export default App;

