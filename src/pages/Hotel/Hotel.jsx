
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Hotel = () => {
    const [hotels,setHotels] = useState([]);
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
      // const [user,setUser] = use
    return (
      <>
      <h1 style={{textAlign:"center"}}>Hotels List</h1>
     <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Sr. No</th>
        <th scope="col">Name</th>
        <th scope="col">Type</th>
        <th scope="col">City</th>
        <th scope="col">Address</th>
        <th scope="col">Title</th>
        <th scope="col">IsFeatured</th>
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
        <td>{isFeatured}</td>
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