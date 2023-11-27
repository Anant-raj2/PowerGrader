import { Login } from "./components/screens/login";
import { SignUp } from "./components/screens/signup";
import { StudentDashboard } from "./components/screens/StudentDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <StudentDashboard />
    </div>
  );
}

export default App;