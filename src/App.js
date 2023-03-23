import {Routes, Route} from 'react-router-dom';
import Listado from "./components/Listado";
import Login from "./components/Login";

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" Component={Login}/>
    <Route path="/listado" Component={Listado}/>
    </Routes>
    </>
  );
}

export default App;
