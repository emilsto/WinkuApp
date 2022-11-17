import { Route,} from "react-router-dom";

import FrontPage from "./pages/FrontPage";
import About from "./pages/About";
import Archive from "./pages/Archive";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";

import NavBar from "./components/Common/NavBar";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Common/Footer";


//add links to navigate between pages

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center">
        <div className="content-wrappe w-6/12">
          <Router>
            <Routes>
              <Route path="/" element={<FrontPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<h1 className="flex flex-col justify-center m-5 font-bold text-4xl text-center">404</h1>} />
            </Routes>
            <Footer></Footer>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
