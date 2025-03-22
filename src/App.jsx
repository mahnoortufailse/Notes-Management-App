import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import SignUp from "./Pages/signup";
import { ToastContainer } from "react-toastify";
import Notes from "./pages/Notes";
import ProtectedRoute from "./Protected_Routes/ProtectedRoute";
import NotFound from "./pages/NotFound";


const AppRoutes = () => {
  return (
    <>
    <ToastContainer />
    <Router>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/notes" element={
          <ProtectedRoute>
             <Notes/>
          </ProtectedRoute>
         } />
         <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    </>
    
  );
};

export default AppRoutes;
