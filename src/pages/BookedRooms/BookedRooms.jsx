import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import moment from "moment"

const BookedRooms = () => {
    const [rooms,setRooms] = useState([]);
    const getRoomsData = () => {
      axios.get("http://localhost:5000/booked/getallbookedrooms")
      .then(res => {
        console.log(res.data);
        setRooms(res.data.rooms)
      }).catch(err => {
        console.log(err)
      })
    }
    useEffect( () => {
        getRoomsData()
    },[]);

    const checkOutUser = (roomId,bookingId) => {
        console.log(roomId)
        axios.put(`http://localhost:5000/booked/checkout/${roomId}`)
        .then(res => {
            console.log("Room res:",res.data)
        }).catch(err => {
            console.log(err)
        })

        axios.delete(`http://localhost:5000/booked/removeroom/${bookingId}`)
        .then(res => {
            console.log("Booking res :",res.data)
        }).catch(error => {
            console.log(error)
        })
    }
    
  return (
    <>
    <h1 style={{textAlign:"center"}}>Booking List</h1>
   <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">userName</th>
      <th scope="col">Price</th>
      <th scope="col">Hotel Name</th>
      <th scope="col">Room Numbers</th>
      <th scope="col">checkIn</th>
      <th scope="col">CheckOut</th>
      <th scope="col">Operation</th>
      {/* <th scope="col">Room Number</th> */}
      {/* <th scope="col">IsFeatured</th> */}
    </tr>
  </thead>
  <tbody>
    {
     rooms.map( (room,index) => {
    //   const {title,price,maxPeople,desc,roomNumbers} = room
      return (
        <>
         <tr key={room._id}>
      <th scope="row">{index+1}</th>
      <td>{room.user?.userName}</td>
      <td>{room?.price}</td>
      <td>{room.hotel?.name}</td>
     <td>{room.room.roomNumbers  }</td>
     <td>{moment(room.checkIn).utc().format('DD-MM-YYYY')}</td>
     <td>{moment(room.checkOut).utc().format('DD-MM-YYYY')}</td>
     <td>

     <button onClick={() => checkOutUser(room.room._id,room._id)}>CheckOut User</button>
     </td>

      
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

export default BookedRooms