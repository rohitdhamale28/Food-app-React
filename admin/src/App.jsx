import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add.jsx'
import Orders from './pages/Orders/Orders.jsx'
import List from './pages/List/List.jsx'


const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path='/add'>{<Add/>}</Route>
          <Route path='/list'>{<List/>}</Route>
          <Route path='/orders'>{<Orders/>}</Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
