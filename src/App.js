import  "./Component/Nav.css"
import  "./index.css";
import "font-awesome/css/font-awesome.min.css"
import { Nav } from './Component/Nav';
import { Team } from "./Component/team/Team";
import { Profile } from "./Component/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Admin from "./Component/Admin/Admin";
import AddDevs from "./Component/add a new devs/Add devs";
function App() {
  return (
       <>
       <BrowserRouter>
       <Nav></Nav>
       <Routes>
         <Route path="/" element={<Team></Team>}></Route>
         <Route path="/profile" element={<Profile></Profile>}></Route>
         <Route path="/Admin" element={<Admin></Admin>}></Route>
         <Route path="/AddDevs" element={<AddDevs></AddDevs>}></Route>

       </Routes>
       </BrowserRouter>





       </>

  );
}

export default App;
