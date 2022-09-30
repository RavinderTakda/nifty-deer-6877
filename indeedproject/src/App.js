// <<<<<<< HEAD

// import './App.css';
// import Salary from './SalaryGuide/Salary';

// function App() {
//   return (
//     <div className="App">
//            <Salary/>
// =======

import "./App.css";
import { HomePage } from "./Component/FindJob/HomePage";
import { Searchbox } from "./Component/FindJob/Searchbox";
import { Allroutes } from "./Component/Pages/Allroutes";

import { MainCom } from "./Component/Pages/MainCom";

function App() {
  return (
    <div>
     
        {/* <MainCom /> */}
        
      {/* <Searchbox/> */}

      <Allroutes/>
    </div>
  );
}

export default App;
