import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ComoDoar from "./pages/ComoDoar";
import Erro from "./pages/Erro";
import Footer from "./components/Footer";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comodoar" component={ComoDoar} />
        <Route exact path="*" component={Erro} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;