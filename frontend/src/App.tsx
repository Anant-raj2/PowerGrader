import "./App.css";
import useAuthenticatedUser from "./hooks/useAuthenticatedUser";
import { StudentDashboard } from "./screens/index";
import { BrowserRouter} from "react-router-dom";
import { NotAuthNav } from "./screens/index";
function App() {
  const { user } = useAuthenticatedUser();

  return (
    <BrowserRouter>
      {user? <StudentDashboard/>:<NotAuthNav/>}
    </BrowserRouter>
  );
}

export default App;
