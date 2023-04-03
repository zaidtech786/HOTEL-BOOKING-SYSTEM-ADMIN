import "../new/new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Addrooms = () => {
  const [file, setFile] = useState();
  const [info, setInfo] = useState({});
  const [files, setFiles] = useState([]);
  const [hotels,setHotels] = useState([]);
  const [hotelName,setHotelName] = useState("");


  const [roomInfo, setRoomInfo] = useState({
    title: "",
    maxPeople:"",
    price: "",
    hotelName:"",
    desc:"",
    roomNumbers:[""]
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
    // console.log(file)
    // console.log("HotelInfo :", hotelInfo);
    // e.preventDefault();

    // try {
    //   const imgList = await Promise.all(
    //     Object.values(file).map(async (f) => {
    //       const data = new FormData();
    //       data.append("file", f);
    //       data.append("upload_preset", "Zaid-Bolte-Chote");
    //       data.append("cloud_name", "zaidsiddiqui");
    //       const res = await fetch(
    //         "https://api.cloudinary.com/v1_1/zaidsiddiqui/image/upload",
    //         {
    //           method: "post",
    //           body: data,
    //         }
    //       );
    //       const datas = await res.json();
    //       const { url } = datas;
    //       return url;
    //       //  setFiles(datas.url)
    //     })
    //   );
    //   // console.log("files",imgList)
    //   //  Posting Data to database
    //   axios
    //     .post("http://localhost:5000/hotel/addhotel", {
    //       ...hotelInfo,
    //       photos: imgList,
    //     })
    //     .then((res) => {
    //       console.log("REs:", res.data);
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
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
              {/* <div className="formInput">
                <label>Hotel Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="hotelName"
                
                  placeholder="Enter Hotel Name"
                />
              </div> */}
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
                <label>Price</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="price"
                  placeholder="Enter Price"
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


