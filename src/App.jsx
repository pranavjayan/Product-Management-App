import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import AddProd from './components/AddProd'
import Main from './components/Main'

const App = () => {
  return (
    <div>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={ <Main child={<Home />} />} ></Route>
        <Route path='/addprods' element={<Main child={<AddProd />}/>}></Route>
      </Routes>
    </div>
  )
}

export default App