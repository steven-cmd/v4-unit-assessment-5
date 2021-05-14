import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Dash from "./Components/Dash/Dash";
import Form from "./Components/Form/Form";
import Post from "./Components/Post/Post";

export default (
  <Switch>
    <Route exact path="/" component={Auth}></Route>
    <Route path="/dash" component={Dash}></Route>
    <Route path="/post/:id" component={Form}></Route>
    <Route path="/form" component={Post}></Route>
  </Switch>
);
