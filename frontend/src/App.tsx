import { Login } from "./components/screens/login";
import { SignUp } from "./components/screens/signup";
import { StudentDashboard } from "./components/screens/StudentDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuthenticatedUser from "./hooks/useAuthenticatedUser";
import { PageNotFound } from "./components/screens/pageNotFound";

function App() {
  const {user} = useAuthenticatedUser();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!user && <><Route path="/login" element={<Login />} /> <Route path="/" element={<SignUp />} /></>}
          
          {user && <Route path="/dashboard" element={<StudentDashboard />} /> }
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;