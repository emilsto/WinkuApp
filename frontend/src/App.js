import { Route, Switch, useLocation } from "react-router-dom";

//pages
import FrontPage from "./pages/FrontPage";
import About from "./pages/About";
import Archive from "./pages/Archive";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import FourOhFour from "./pages/FourOhFour";

//nav, footer, and other components
import NavBar from "./components/Common/NavBar";
import LeftNav from "./components/Common/LeftNav";
import Footer from "./components/Common/Footer";

//helper function to scroll to top of page on route change
import ScrollToTop from "./helpers/ScrollToTop";

//helper function to check if token exists in local storage
import CheckAuth from "./helpers/CheckAuth";

const App = () => {
  CheckAuth();

  const location = useLocation();

  return (
    <div>
      <div className="flex j">
        <LeftNav />
        <div className="w-3/6 max-w-xl">
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
              <Route path="/:username" component={Profile} />
              <Route path="*" component={FourOhFour} />
            </Switch>
          </ScrollToTop>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;
