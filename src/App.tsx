import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />

      <div id='content_wrapper'>
        <Outlet />
      </div>
    </>
  )
}

export default App
