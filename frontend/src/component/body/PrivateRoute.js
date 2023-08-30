// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = useSelector(state => state.user.isAuthenticated);


  
//   return isAuthenticated ? children : <Navigate to="/main" />;
// };

// export default PrivateRoute;



import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );

  // Check if the token exists in local storage
  const token = localStorage.getItem("token");

  console.log(token);
  return isAuthenticated || token ? (
    children
  ) : (
    <Navigate to="/card" />
  );
};

export default PrivateRoute;
