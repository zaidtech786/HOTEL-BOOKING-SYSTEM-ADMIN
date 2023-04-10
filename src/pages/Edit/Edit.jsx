import "../new/new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {
    const [file, setFile] = useState();
  const [info, setInfo] = useState({});
  const [files, setFiles] = useState([]);
  const [data,setData] = useState([])
  const {id} = useParams();

  // Getting single hotel data
  const singleHotelData = () => {
    axios.get(`http://localhost:5000/hotel/gethotel/${id}`)
    .then(res => {
      console.log("Single Hotel Data :",res.data.hotels)
      setHotelInfo(res.data.hotels)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    singleHotelData()
  },[])

  const [hotelInfo, setHotelInfo] = useState({
    name: "",
    type: "",
    city: "",
    address: "",
    distance: "",
    title: "",
    desc: "",
    price: "",
    isFeatured: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name + " : " + "" + e.target.value);
    setHotelInfo({ ...hotelInfo, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
  
      e.preventDefault()
      console.log(id)
      axios.put(`http://localhost:5000/hotel/updatehotel/${id}`,{
        ...hotelInfo
      })
      .then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
  };


  return (
    <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>title</h1>
      </div>
      <div className="bottom">
      
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                multiple
                onChange={(e) => setFile(e.target.files)}
                style={{ display: "none" }}
              />
            </div>

            <div className="formInput">
              <label>Hotel Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={hotelInfo?.name}
                placeholder="Enter Hotel Name"
              />
            </div>
            <div className="formInput">
              <label>Type</label>
              <input
                onChange={handleChange}
                type="text"
                value={hotelInfo?.type}
                name="type"
                placeholder="Enter type"
              />
            </div>
            <div className="formInput">
              <label>City</label>
              <input
                onChange={handleChange}
                type="text"
                name="city"
                value={hotelInfo?.city}
                placeholder="City"
              />
            </div>
            <div className="formInput">
              <label>Address</label>
              <input
                onChange={handleChange}
                type="text"
                name="address"
                value={hotelInfo?.address}
                placeholder="Enter Address"
              />
            </div>
            <div className="formInput"> 
              <label>Distance</label>
              <input
                onChange={handleChange}
                type="text"
                name="distance"
                value={hotelInfo?.distance}
                placeholder="Enter Distance"
              />
            </div>
            <div className="formInput">
              <label>Title</label>
              <input
                onChange={handleChange}
                type="text"
                name="title"
                value={hotelInfo?.title}
                placeholder="Enter Hotel Title"
              />
            </div>
            <div className="formInput">
              <label>Description</label>
              <input
                onChange={handleChange}
                type="text"
                name="desc"
                value={hotelInfo?.desc}
                placeholder="Enter Description"
              />
            </div>
            <div className="formInput">
              <label>IsFeatured</label>
              <select onChange={handleChange} name="isFeatured" >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="formInput">
              <label>Price</label>
              <input
                onChange={handleChange}
                type="Number"
                name="price"
                value={hotelInfo?.price}
                placeholder="Enter Price"
              />
            </div>

            <button onClick={handleClick}>Edit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Edit