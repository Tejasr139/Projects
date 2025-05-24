
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SellerHome from "./SellerSide/SellerHome"

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<SellerHome/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App