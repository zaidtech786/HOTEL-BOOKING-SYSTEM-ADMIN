import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContext } from "./context/AuthContext";
import { userColumns, hotelColumns, roomColumns } from "./datatablesource";
import Datatable from './components/datatable/Datatable';
import User from "./pages/User/User"
import Hotel from "./pages/Hotel/Hotel.jsx"
import Rooms from "./pages/Rooms/Rooms";
import Dashboard from "./pages/Dashboard/Dashboard";
import Edit from "./pages/Edit/Edit";
import Addrooms from "./pages/AddRooms/Addrooms";
import BookedRooms from "./pages/BookedRooms/BookedRooms";
// import New from "./pages/new/New";



function App() {
  const { darkMode } = useContext(DarkModeContext);

  // const ProtectedRoute = ({ children }) => {
  //   const { user } = useContext(AuthContext)

  //   if (!user) {
  //     return <Navigate to="/login" />
  //   }

  //   return children;
  // }

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/hotel" element={<Hotel/>}/>
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/add" element={<New/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/addrooms" element={<Addrooms/>}/>
          <Route path="/bookedroom" element={<BookedRooms/>}/>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
