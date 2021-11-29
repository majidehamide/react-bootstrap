import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from './Nav';


import RouterApp from './RouterApp'


function App() {
  return (

    <BrowserRouter>
      < Container >
        <Navbar />
        <RouterApp></RouterApp>
      </Container>
    </BrowserRouter >
  );
}

export default App;
