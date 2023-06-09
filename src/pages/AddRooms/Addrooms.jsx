import "../new/new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Addrooms = () => {
  const [info, setInfo] = useState({});
  const [hotels,setHotels] = useState([]);


  const [roomInfo, setRoomInfo] = useState({
    title: "",
    maxPeople:"",
    hotelName:"",
    desc:"",
    roomNumbers:""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.name + " : " + "" + e.target.value);
    setRoomInfo({ ...roomInfo, [e.target.name]: e.target.value });
};

   
const getHotelData = () => {
  axios.get("http://localhost:5000/hotel/gethotels")
  .then(res => {
    console.log(res.data);
    setHotels(res.data.hotels)
  }).catch(err => {
    console.log(err)
  })
}
useEffect( () => {
    getHotelData()
},[])


const handleClick = async (e) => {
    e.preventDefault()
      console.log(roomInfo)
    try {                                      
      const {title,maxPeople,desc,roomNumbers} = roomInfo 
      axios
        .post(`http://localhost:5000/room/addrooms/${roomInfo.hotelName}`, {
          title,
          maxPeople,
          desc,
          roomNumbers
        })
        .then((res) => {
          console.log("REs:", res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info);
  return (
    <div className="new">
      {/* <Sidebar /> */}
      <div className="newContainer">
        {/* <Navbar /> */}
        <div className="top">
          <h1>title</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Title</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="title"
                  placeholder="Enter Title"
                />
              </div>
              <div className="formInput">
                <label>max People</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="maxPeople"
                  placeholder="max People"
                />
              </div>
              
          
              <div className="formInput">
                <label>Description</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="desc"
                  placeholder="Enter Description"
                />
              </div>
              <div className="formInput">
                <label>Room number</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="roomNumbers"
                  placeholder="Enter RoomNumbers"
                />
              </div>

              <div className="formInput">
                <lable> Select Hotel</lable>
                <select  onChange={handleChange} name="hotelName">
                    {hotels.map(hotel => {
                        return(
                            <>
                           
                        <option value={hotel._id} >{hotel.name} </option>
                            </>
                        )

                    })}
                </select>
              </div>

             <div style={{}}>
              <button onClick={handleClick}> Submit</button>
             </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addrooms;


