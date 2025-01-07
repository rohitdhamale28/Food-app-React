import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios"
import { toast, useToast } from "react-toastify";


const Add = () => {

  const url ="http://localhost:4000"
  const [image,setImage] = useState(false); 
  const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad",
     
  });
const onChangeHandler = (event)=>{
  const name = event.target.name;
  const value = event.target.value;
  setData(data =>({...data,[name]:value}))
};


const onSubmitHandler = async () => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('name', data.name);
  formData.append("description", data.description)
    formData.append("price",Number(data.price)) 
    formData.append("category",data.category) 
      formData.append("image",image) ;

    for (let pair of formData.entries()) {
          console.log(pair[0], pair[1]);
        }
  try {
    const response = await axios.post('http://localhost:4000/api/food/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // This ensures the correct headers are sent
      },
    });
    console.log('Response:', response.data);
    setData({
      name:"",
      description:"",
      price:"",
      category:"Salad",  
    })
    setImage(false)
    // toast.success(response.message)
      toast.success("FOOD ADDED!");
  } catch (error) {
    console.error('Error:', error);
  }
  
};

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler} >
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="upload" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" name="image" id="image" />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name}  type="text" name="name" placeholder="type here" />
        </div>
        <div className="add-product-des flex-col">
          <p>Product Description</p>
          <textarea
          onChange={onChangeHandler} value={data.description}
            name="description"
            rows="6"
            placeholder="Write Content Here"
          ></textarea>
        </div>
        <div className="add-category flex-col">
          <p>Product Category</p>
          <select  onChange={onChangeHandler}  name="category">
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>
        <div className="add-product-price flex-col">
          <p>Product Price</p>
          <input  onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="type here" />
        </div>
        <button type="submit" className="add-btn ">ADD</button>
      </form>
    </div>
  );
};

export default Add;
