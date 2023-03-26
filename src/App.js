import {Routes, Route} from 'react-router-dom';
import Listado from "./components/Listado";
import Login from "./components/Login";
import Header from './components/Header'
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact path="/" Component={Login}/>
        <Route path="/listado" Component={Listado}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
