import { Route, Switch } from "react-router-dom";

import FrontPage from "./pages/FrontPage";
import About from "./pages/About";
import Archive from "./pages/Archive";
import Login from "./pages/Login";

import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";

//add links to navigate between pages

const App = () => {
  return (

    <div>
<NavBar />


<div class="flex justify-center items-center">
    <div className="content-wrapper" class="w-6/12">
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
    </div>
    </div>
  );
};

export default App;
