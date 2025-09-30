import Login from "../containers/login/login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../containers/Layout/layout";
import Projects from "../containers/projects/projects";
import SignUp from "../containers/signUp/signUp";
import Profile from "../containers/profile/profile";
import { SidebarProvider } from "../modules/ui/sidebar/contexts/sidebarContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
