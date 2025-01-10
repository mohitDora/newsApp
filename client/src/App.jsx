import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// import Main from "./pages/main";
import Navbar from "./components/shared/Navbar";
import Landing from "./pages/Landing";
import Query from "./pages/Query";
import Genre from "./pages/Genre";
import { Login } from "./pages/Login";
import Footer from "./components/shared/Footer";
import { Signup } from "./pages/Signup";

function Layout() {
  const location = useLocation();

  const hideNavbarFooterPaths = ["/signup", "/genre","/login"];

  const showNavbarFooter = !hideNavbarFooterPaths.includes(location.pathname);

  return (
    <>
      {showNavbarFooter && <Navbar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/query" element={<Query />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      {showNavbarFooter && (
        <div className="p-4">
          <Footer />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>

    // <Main></Main>
  );
}

export default App;
