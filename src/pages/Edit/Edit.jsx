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
      setData(res.data.hotels)
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
        });
    } catch (err) {
      console.log(err);
    }
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
                value={data?.name}
                placeholder="Enter Hotel Name"
              />
            </div>
            <div className="formInput">
              <label>Type</label>
              <input
                onChange={handleChange}
                type="text"
                value={data?.type}
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
                value={data?.city}
                placeholder="City"
              />
            </div>
            <div className="formInput">
              <label>Address</label>
              <input
                onChange={handleChange}
                type="text"
                name="address"
                value={data?.address}
                placeholder="Enter Address"
              />
            </div>
            <div className="formInput">
              <label>Distance</label>
              <input
                onChange={handleChange}
                type="text"
                name="distance"
                value={data?.distance}
                placeholder="Enter Distance"
              />
            </div>
            <div className="formInput">
              <label>Title</label>
              <input
                onChange={handleChange}
                type="text"
                name="title"
                value={data?.title}
                placeholder="Enter Hotel Title"
              />
            </div>
            <div className="formInput">
              <label>Description</label>
              <input
                onChange={handleChange}
                type="text"
                name="desc"
                value={data?.desc}
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
                value={data?.price}
                placeholder="Enter Price"
              />
            </div>

            <button onClick={handleClick}>{data?._id? "Edit": "Submit"}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Edit