import { Route, Routes } from "react-router-dom";
import React from 'react'
import { Login, SignUp, Onboarding } from "../screens/index";

export const NotAuthNav = () => {
  return (
    <div>
        <Routes>
            <Route path="*" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/onboard" element={<Onboarding/>} />
        </Routes>
    </div>
  )
}
