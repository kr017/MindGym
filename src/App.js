import "./App.css";
import "./styles/output.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { PrivateRoutes } from "./PrivateRoutes";

import { Login, Signup, Dashboard, ScoreBoard, Quiz } from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Switch>
        <div className="bg-base h-screen overflow-hidden">
          <PrivateRoutes path="/" component={Dashboard} exact />{" "}
          <PrivateRoutes path="/quiz/:cat" component={Quiz} exact />
          <PrivateRoutes path="/score" component={ScoreBoard} exact />{" "}
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
