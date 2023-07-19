import jwt_decode from "jwt-decode";
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginView, RegisterView } from './Modules/Auth/Views/Index';
import { HomeView } from './Modules/Home/Views/Index';
import { UsersView } from './Modules/Admin/UserManage/Views';
import { UserProfileView } from './Modules/ShareWidgets/Profile/Views';
import { ChoosePlanView } from "./Modules/choosePlan/Views";
import ForgotPasswordView from "./Modules/Auth/Views/Forgot";
import { CloudStorage } from "./Modules/Admin/CloudStorage/Views";
import HomePageDetailView from "./Modules/Admin/HomePageDetail/HomePageDetailView"
import SearchView from "./Modules/Search/SearchView"
import FilterView from './Modules/Filtering/FilteringView'

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  let permission = "";
  if (token) {
    const decodedToken = jwt_decode(token);
    permission = decodedToken.permission;
  }
  return permission === "admin" ? children : <Navigate to="/signin" replace />;
};

const AuthRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  let permission = "";
  if (token) {
    const decodedToken = jwt_decode(token);
    permission = decodedToken.permission;
  }
  return (permission === "customer" || permission === "admin") ? children : <Navigate to="/signin" replace />;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/signin" element={<LoginView />} />
      <Route path="/signup" element={<RegisterView />} />
      <Route path="/forgot-password" element={<ForgotPasswordView />} />
      <Route path="/profile" element={<AuthRoute><UserProfileView /></AuthRoute>} />
      <Route path="/choose-plan" element={<AuthRoute><ChoosePlanView /></AuthRoute>} />
      <Route path="/search" element={<AuthRoute><SearchView /></AuthRoute>} />
      <Route path="/advanced-filter" element={<AuthRoute><FilterView /></AuthRoute>} />


      {/* admin routers */}
      <Route path="/admin" element={<AdminRoute><UsersView /></AdminRoute>} />
      <Route path="/homepagedetailmanage" element={<AdminRoute><HomePageDetailView /></AdminRoute>} />
      <Route path="/cloud-storage" element={<AdminRoute><CloudStorage /></AdminRoute>} />
      
    </Routes>
  );
};

export default Router;
