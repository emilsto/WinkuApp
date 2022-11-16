import { Route,} from "react-router-dom";

import FrontPage from "./pages/FrontPage";
import About from "./pages/About";
import Archive from "./pages/Archive";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
            </Routes>
            <Footer></Footer>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
