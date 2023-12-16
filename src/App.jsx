import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserData from './components/UserData.jsx'
import Counter from './components/Counter.jsx'
import BasicExample from './components/BasicExample.jsx'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
        <Routes  >
        <Route path="/" element={<UserData/>} />
        <Route path='/counter' element={<BasicExample/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
