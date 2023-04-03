import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import User from './../User/User';
import { useContext } from 'react';
import { AppContext } from "../../context/AuthContext";
import Hotel from "../Hotel/Hotel";
import Rooms from "../Rooms/Rooms";
import Dashboard from "../Dashboard/Dashboard";
import Addrooms from "../AddRooms/Addrooms";
import BookedRooms from "../BookedRooms/BookedRooms";
import New from "../new/New";

const Home = () => {
  const {icon} = useContext(AppContext)
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* <h1 style={{textAlign:"center"}}>User Lists</h1> */}
           {
            icon==="user"
            ?
            <User/>
            :
            icon==="hotel"
            ?
            <Hotel/>
            :
            icon==="rooms"
            ?
            <Rooms/>
            :
            icon==="addrooms"
            ?
            <Addrooms/>
            :
            icon==="bookedroom"
            ?
            <BookedRooms/>
            :
            icon ==="addhotel"
            ?
            <New/>
            :
           <Dashboard/>

           }
        </div>
      
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
