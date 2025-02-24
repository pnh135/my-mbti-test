import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Test from "../pages/Test";
import TestResult from "../pages/TestResult";
import Layout from "./Layout";
import ProtectedRouter from "../components/ProtectedRouter";

const SharedRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<ProtectedRouter />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/results" element={<TestResult />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SharedRouter;
