import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add.jsx'
import Orders from './pages/Orders/Orders.jsx'
import List from './pages/List/List.jsx'
import {Route,Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path="/add" element= {<Add/>} />
          <Route path="/list" element= {<List/>} />
          <Route path="/orders" element= {<Orders/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
