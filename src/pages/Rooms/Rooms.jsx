import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

const Rooms = () => {
    const [rooms,setRooms] = useState([]);
    const getRoomsData = () => {
      axios.get("http://localhost:5000/room/getrooms")
      .then(res => {
        console.log(res.data);
        setRooms(res.data.rooms)
      }).catch(err => {
        console.log(err)
      })
    }
    useEffect( () => {
        getRoomsData()
    },[])
      // const [user,setUser] = use
    return (
      <>
      <h1 style={{textAlign:"center"}}>Rooms List</h1>
     <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Sr. No</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">MAx People</th>
        <th scope="col">Descriptions</th>
        <th scope="col">Room Number</th>
        {/* <th scope="col">IsFeatured</th> */}
      </tr>
    </thead>
    <tbody>
      {
       rooms.map( (room,index) => {
        const {title,price,maxPeople,desc,roomNumbers} = room
        return (
          <>
           <tr key={room._id}>
        <th scope="row">{index+1}</th>
        <td>{title}</td>
        <td>{price}</td>
        <td>{maxPeople}</td>
        <td>{desc}</td>
        <td>{roomNumbers}</td>
        {/* <td>{isFeatured}</td> */}
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

export default Rooms