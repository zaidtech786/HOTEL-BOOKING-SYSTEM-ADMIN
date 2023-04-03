
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import "./Hotel.css"
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AuthContext';

const Hotel = () => {
    const [hotels,setHotels] = useState([]);
    const {setIcon} = useContext(AppContext)
   
    const navigate = useNavigate()
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

    const deleteHotel = (id) => {
      axios.delete(`http://localhost:5000/hotel/removehote/${id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
    return (
      <>
      <div className='top'>
      <h1 style={{textAlign:"center"}}>Hotels List</h1>
      <button className='btn_add' onClick={()=>setIcon("addhotel")}>Add Hotel</button>
      </div>
     <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Sr. No</th>
        <th scope="col">Name</th>
        <th scope="col">Type</th>
        <th scope="col">City</th>
        <th scope="col">Address</th>
        <th scope="col">Title</th>
        <th scope="col">Operation</th>
      </tr>
    </thead>
    <tbody>
      {
       hotels.map( (hotel,index) => {
        const {name,type,address,city,title,isFeatured} = hotel
        return (
          <>
           <tr key={hotel._id}>
        <th scope="row">{index+1}</th>
        <td>{name}</td>
        <td>{type}</td>
        <td>{city}</td>
        <td>{address}</td>
        <td>{title}</td>
        <td>
          <button style={{marginRight:"10px"}} onClick={() => navigate(`/edit/${hotel._id}`)}>Edit</button>
          <button onClick={() => deleteHotel(hotel._id)}>Delete</button>
        </td>
      </tr>
          </>
        )
       })
      }
     
    </tbody>
  </table>
  </>
    )
}

export default Hotel