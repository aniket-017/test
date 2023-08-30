import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MultiStepForm from "./component/MultiStepForm.js";
import Header from "./component/layout/Header.js";
import Register from "./component/Register.js";
import Main from "./component/body/Main.js";
import Table from "./component/body/Table.js";
import Card from "./component/Card.js";
import VenueCard from "./component/VenueCard.js";
import Nav from "./component/body/Nav.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./component/body/PrivateRoute.js";
import ResetPassword from "./component/body/ResetPassword.js";
import UpdateVenueForm from "./component/UpdateVenueForm.js"
import store from "./store.js"
import { loadUser } from "./actions/userActions.js";

function App() {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // useEffect(() => {
  //   // Check if token exists in localStorage
  //   const token = localStorage.getItem("token");
   
  //   if (token) {
  //     // Dispatch the loadUser action to fetch user data
  //     dispatch(loadUser());
  //   }
  // }, [dispatch]);
  return (
    <div>
      <Router>
        {/* <Nav /> */}
        <Routes>
          {/* <Route path="/" element={isAuthenticated ? <Card/>: <Register />}/> */}
          {/* <Route path="/" element={<Register />} /> */}
          <Route path="/" element={<Register />} />
          <Route
            path="/card"
            element={
              <PrivateRoute>
                <Card />
              </PrivateRoute>
            }
          />
          <Route
            path="/main"
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          />
          <Route
            path="/update/:id"
            element={
              <PrivateRoute>
               <UpdateVenueForm />
              </PrivateRoute>
            }
          />

              <Route path="/password/reset/:token" element={<ResetPassword />} />
          {/* <Route path="/main" element={<Main />} /> */}

          {/* <Route path="/update/:id" element={<UpdateVenueForm />} /> */}
          {/* <Route path="/update/:id" element={<UpdateVenueForm selectedVenue={location.state.selectedVenue} />} /> */}
        {/* <Route path="/" element={<Card/>} /> */}
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{
  /* <MultiStepForm /> */
}
{
  /* <Main /> */
}
{
  /* <Table/> */
}
{
  /* <Nav /> */
}
{
  /* // <Register /> */
}

{
  /* <Card /> */
}
{
  /* <VenueCard /> */
}
