import { Route, Switch, useLocation } from "react-router-dom";

//pages
import FrontPage from "./pages/FrontPage";
import About from "./pages/About";
import Archive from "./pages/Archive";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Thread from "./pages/Thread";

//nav, footer, and other components
import NavBar from "./components/Common/NavBar";
import LeftNav from "./components/Common/LeftNav";
import Footer from "./components/Common/Footer";
import BottomNav from "./components/Common/BottomNav";

//helper function to scroll to top of page on route change
import ScrollToTop from "./helpers/ScrollToTop";

//helper function to check if token exists in local storage
import CheckAuth from "./helpers/CheckAuth";

const App = () => {
  //check if token exists in local storage
  CheckAuth();
  const location = useLocation();

  return (
    <div>
      <div className="md:flex inline">
        <LeftNav />
        <div className="md:w-1/2 md:max-w-xl w-fit">
          <ScrollToTop>
            {/* Pass the current page URL to the NavBar component as a prop */}
            <NavBar currentUrl={location.pathname} />
            <Switch>
              <Route path="/" exact component={FrontPage} />
              <Route path="/about" component={About} />
              <Route path="/archive" component={Archive} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/signup" component={Signup} />
              <Route path="/:username/:postId" component={Thread} />
              <Route path="/:username" component={Profile} />
            </Switch>
          </ScrollToTop>
          <Footer></Footer>
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default App;
