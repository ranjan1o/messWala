// import MessProfile from "./Components/MessProfile/MessProfile";
import { Signup } from "./Components/authentication/signup"
import { Login } from "./Components/authentication/loginform";
import { MessForm } from "./Components/messform/MessForm";
import { MealForm } from "./Components/messform/MealForm";
import LandingPage from "./Components/LandingPage/LandingPage";
// import MealsSection from "./Components/MessProfile/MealsSection";
// import OverView from './Components/MessProfile/OverView'
import MainDisplay from "./Components/MessDescription/MainDisplay"
import { Switch, Route } from "react-router-dom";
import MessInfo from "./Components/MessDescription/Messinfo";
import UserMessProfile from "./Components/userMessProfile/UserMessProfile";
import Navbar from "./Components/MessDescription/Navbar";
import MessProfile from "./Components/MessProfile/MessProfile"
import { WelcomeAdmin } from "./Components/messform/Welcomeadmin"
import Navbar2 from "./Components/MessDescription/Navbar2";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route  path="/messes">
          <div><MainDisplay/></div>
        </Route>
        <Route exact path="/admin">
          <div><Navbar/><WelcomeAdmin/></div>
        </Route>
        <Route exact path="/ranjan">
          <div>
          <Navbar/><UserMessProfile/></div>
        </Route>
        <Route exact path="/admin/create">
          <div><Navbar2/><MessProfile/></div>
        </Route>
      </Switch>
      {/* <MessProfile /> */}
      {/* <OverView /> */}
     
      {/* <Signup /> */}
    </div>
  );
}

export default App;
