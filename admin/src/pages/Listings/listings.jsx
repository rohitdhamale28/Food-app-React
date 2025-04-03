import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from "axios"
import { toast } from 'react-toastify';

const List = () => {

  const url= "http://localhost:8000";
  const [list, setList]= useState([]);

const fetchList = async () => {
  const response = await axios.get(`http://localhost:8000/api/listing`);
//  console.log(response.data);
  if(response.data.success){
    setList(response.data.data);
  }else{
    toast.error("ERROR")
  }
}


const removeHotel = async (hotelId) => {
  console.log(hotelId );
  const response = await axios.post(`http://localhost:8000/api/listing/remove`, {id:hotelId});
  await fetchList();
  if(response.data.success){
    toast.success(response.data.message)
  }else{
    toast.error("ERROR");
  }

}

useEffect(()=> {
  fetchList();
})

  return (
    <div className='lsit add flex-col'>
      <p> All Restuarant List</p>
      <div className='list-table'>
        <div className="lt-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='lt-format'>
              <img  src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=> removeHotel(item._id)} className='cursor'>X</p>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
