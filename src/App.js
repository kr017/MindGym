import "./App.css";
import "./styles/output.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { PrivateRoutes } from "./PrivateRoutes";

import { Login, Signup, Dashboard } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="bg-base h-screen overflow-hidden">
          <PrivateRoutes path="/" component={Dashboard} exact />{" "}
          <PrivateRoutes path="/quiz/:cat" component={Dashboard} exact />
          <PrivateRoutes path="/score" component={Dashboard} exact />{" "}
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
