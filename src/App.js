import {Routes, Route} from 'react-router-dom';
import Listado from "./components/Listado";
import Login from "./components/Login";
import Header from './components/Header'
import Footer from './components/Footer';
import Detail from './components/Detail';


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact path="/" Component={Login}/>
        <Route path="/listado" Component={Listado}/>
        <Route path="/detail" Component={Detail}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
