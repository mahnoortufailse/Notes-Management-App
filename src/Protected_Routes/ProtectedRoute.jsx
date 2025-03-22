import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")); // Check if user is logged in

  if (!user) {
    return <Navigate to="/" replace />; // Redirect to login if no user is found
  }
  return children; // Render the protected page if user is authenticated
};

export default ProtectedRoute;
