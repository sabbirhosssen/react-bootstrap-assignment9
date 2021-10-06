import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header';
import Carousele from './Components/Carousele/Carousele';
import Home from './Components/Home/Home';
import Footers from './Components/Footers/Footers';
import Services from './Components/Service/Services';
import About from './Components/About/About';
import Contract from './Components/Contract/Contract';
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';






function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Carousele></Carousele>
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Carousele></Carousele>
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contract></Contract>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>

          </Route>

        </Switch>
        <Footers></Footers>

      </BrowserRouter>

    </div>
  );
}

export default App;
