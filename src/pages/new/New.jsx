import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AuthContext";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState();
  const [info, setInfo] = useState({});
  const [files, setFiles] = useState([]);
  const {setIcon} = useContext(AppContext)

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
    // console.log(file)
    console.log("HotelInfo :", hotelInfo);
    e.preventDefault();

    try {
      const imgList = await Promise.all(
        Object.values(file).map(async (f) => {
          const data = new FormData();
          data.append("file", f);
          data.append("upload_preset", "Zaid-Bolte-Chote");
          data.append("cloud_name", "zaidsiddiqui");
          const res = await fetch(
            "https://api.cloudinary.com/v1_1/zaidsiddiqui/image/upload",
            {
              method: "post",
              body: data,
            }
          );
          const datas = await res.json();
          const { url } = datas;
          
          return url;
          //  setFiles(datas.url)
        })
      );
      // console.log("files",imgList)
      //  Posting Data to database
      axios
        .post("http://localhost:5000/hotel/addhotel", {
          ...hotelInfo,
          photos: imgList,
        })
        .then((res) => {
          console.log("REs:", res.data);
          setIcon("rooms")
        });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info);
  return (
    <div className="new">
      <div className="newContainer">
        <div className="bottom">
          <div className="left">
            {files.map((file) => {
              return (
                <>
                  <img
                    src={file}
                    alt=""
                  />
                </>
              );
            })}
          </div>
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
                
                  placeholder="Enter Hotel Name"
                />
              </div>
              <div className="formInput">
                <label>Type</label>
                <input
                  onChange={handleChange}
                  type="text"
                
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
                  
                  placeholder="City"
                />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="address"
                
                  placeholder="Enter Address"
                />
              </div>
              <div className="formInput">
                <label>Distance</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="distance"
                  
                  placeholder="Enter Distance"
                />
              </div>
              <div className="formInput">
                <label>Title</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="title"
                 
                  placeholder="Enter Hotel Title"
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
                 
                  placeholder="Enter Price"
                />
              </div>

              <button onClick={handleClick}> Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
