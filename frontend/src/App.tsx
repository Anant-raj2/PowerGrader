import { useEffect } from "react";
import { Login } from "./components/screens/login";
import { SignUp } from "./components/screens/signup";
import { StudentDashboard } from "./components/screens/StudentDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as UserApi from "./networks/api/user_api";
import useAuthenticatedUser from "./hooks/useAuthenticatedUser";

function App() {
  const {user} = useAuthenticatedUser();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!user && <><Route path="/login" element={<Login />} /> <Route path="/" element={<SignUp />} /></>}
          
          {user && <Route path="/dashboard" element={<StudentDashboard />} /> }
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;