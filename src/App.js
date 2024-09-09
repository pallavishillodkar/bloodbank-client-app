import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from "./Layout/MyRoutes";

function App() {
  return (
    <div>
      <BrowserRouter><MyRoutes/></BrowserRouter>
    </div>
   
  );
}

export default App;
