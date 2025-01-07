import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from "axios"
import { toast } from 'react-toastify';

const List = () => {

  const url= "http://localhost:4000";
  const [list, setList]= useState([]);

const fetchList = async () => {
  const response = await axios.get(`http://localhost:4000/api/food/list`);
 console.log(response.data);
  if(response.data.success){
    setList(response.data.data);
  }else{
    toast.error("ERROR")
  }
}

useEffect(()=> {
  fetchList();
})

  return (
    <div className='lsit add flex-col'>
      <p> All Foods List</p>
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
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p>X</p>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
