import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Rooms = () => {
    const [rooms,setRooms] = useState([]);
    const navigate = useNavigate()
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
    
    const deleteRoom = (id) => {
      axios.delete(`http://localhost:5000/room/removerooms/${id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      });
      const filterData = rooms.filter(room => {
        return room._id!==id
      });
      setRooms(filterData)
    }

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
        <th scope="col">Operations</th>
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
        <td>
        <div style={{display:"flex"}}>
        <button style={{marginRight:"10px",padding:"0.3rem 1rem",outline:"none",borderRadius:"5px",border:"none",backgroundColor:"#16a085",fontWeight:"600"}} onClick={()=>navigate(`/editroom/${room._id}`)}>Edit</button>
        <button style={{padding:"0.3rem 1rem",outline:"none",borderRadius:"5px",border:"none",backgroundColor:"#c0392b",fontWeight:"600"}} onClick={() => deleteRoom(room._id)}>Delete</button>
       </div>
        </td>
      </tr>
          </>
        )
       })
      }
     {/* <div style={{display:"flex"}}>
          <button style={{marginRight:"10px",padding:"0.3rem 1rem",outline:"none",borderRadius:"5px",border:"none",backgroundColor:"#16a085",fontWeight:"600"}}  onClick={() => navigate(`/edit/${hotel._id}`)}>Edit</button>
          <button style={{padding:"0.3rem 1rem",outline:"none",borderRadius:"5px",border:"none",backgroundColor:"#c0392b",fontWeight:"600"}}  onClick={() => deleteHotel(hotel._id)}>Delete</button>
          </div> */}
    </tbody>
  </table>
  </>
    )
}

export default Rooms