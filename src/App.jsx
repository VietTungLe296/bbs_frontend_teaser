import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Post from "./pages/Post"
import Home from "./pages/Home"

const App = () => (
  <div className='container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post/:id' element={<Post />} />
    </Routes>
  </div>
)

export default App
