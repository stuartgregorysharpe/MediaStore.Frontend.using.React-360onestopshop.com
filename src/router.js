import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginView, RegisterView } from  './Modules/Auth/Views/Index';
import { HomeView } from './Modules/Home/Views/Index';

const AdminPage = () => <div>Admin Page</div>;
const UserPage = () => <div>User Page</div>;

const isAuthenticatedAsAdmin = () => {
  return true; // Placeholder value, change it based on your authentication check
};

const isAuthenticatedAsUser = () => {
  return true; // Placeholder value, change it based on your authentication check
};

const adminMiddleware = (params) => {
  if (!isAuthenticatedAsAdmin()) {
    return <Navigate to="/login" replace />;
  }
  return null; // Continue rendering the component
};

const userMiddleware = (params) => {
  if (!isAuthenticatedAsUser()) {
    return <Navigate to="/login" replace />;
  }
  return null; // Continue rendering the component
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/signin" element={<LoginView />} />
      <Route path="/signup" element={<RegisterView />} />
      <Route path="/admin" element={<AdminPage />} canActivate={adminMiddleware}>
        <Route path="dashboard" element={<div>Admin Dashboard</div>} />
      </Route>
      <Route path="/user" element={<UserPage />} canActivate={userMiddleware}>
        <Route path="profile" element={<div>User Profile</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
