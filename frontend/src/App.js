import { Route, Switch } from "react-router-dom";

//pages
import FrontPage from "./pages/FrontPage";
import About from "./pages/About";
import Archive from "./pages/Archive";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import FourOhFour from "./pages/FourOhFour";
import { useParams } from "react-router-dom";

//nav, footer, and other components
import NavBar from "./components/Common/NavBar";
import LeftNav from "./components/Common/LeftNav";
import Footer from "./components/Common/Footer";

//helper function to scroll to top of page on route change
import ScrollToTop from "./helpers/ScrollToTop";

//add links to navigate between pages

const App = () => {
  //pass current site to navbar

  return (
    <div>
      <div className="flex">
      <LeftNav />

        <div className="w-2/6 justify-center">
        <NavBar/>
        <ScrollToTop>
        <Switch>
              <Route path="/" exact component={FrontPage} />
              <Route path="/about"  component={About} />
              <Route path="/archive" component={Archive} />
              <Route path="/login"  component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/:username" exaxt component={Profile} />
              <Route component={FourOhFour} />
            </Switch>
            </ScrollToTop>
            <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;

