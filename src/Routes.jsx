import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Help from "./molecules/Help";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import EmailVerify from "./component/email/EmailVerify";
import PhoneNumberVerification from './pages/PhoneNumberVerification';
import AddNewProductPage1 from './AddNewProduct/pageOne/AddNewProductPage1';

import Home from "/src/molecules/Home";

// Routes Component Containing Routes For All Base Pages.
function Routes() {
  return (
    <Switch>
      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />
      <Route
      path="/email-verification"
      element={<EmailVerify />}
      />
      <Route
        path="/phone-verification"
        element={<PhoneNumberVerification/>}
      />
      <Route
        path="/messages"
        element={<h1 className="text-3xl font-bold text-red-600">Messages</h1>}
      />
      <Route
        path="/wishlist"
        element={<h1 className="text-3xl font-bold text-red-600">Wishlist</h1>}
      />
      <Route path="/support" element={<Help />} />

      <Route
        path="/notifications"
        element={
          <h1 className="text-3xl font-bold text-red-600">Notifications</h1>
        }
      />
      <Route
        path="/profile"
        element={<h1 className="text-3xl font-bold text-red-600">Profile</h1>}
      />
       <Route
        path="/verification"
        element={<PhoneNumberVerification/>}
      />
      <Route
        path="/"
        element={
          <div className="flex flex-col gap-[30px]">
          {/* Add the link to your page here */}
           <Home />
            <Link to="/support">Help and Support</Link>
            <Link to="/products">Add new product</Link>
            <Link to="/verification">Phone number verification</Link>

          </div>
        }
      />  
      <Route
      path="/products"
      element={<AddNewProductPage1/>}
      />
    </Switch>
  );
}

export default Routes;
