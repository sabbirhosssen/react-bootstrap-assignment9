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
          <Route path="/home">
            <Carousele></Carousele>
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contract></Contract>
          </Route>

        </Switch>
        <Footers></Footers>

      </BrowserRouter>

    </div>
  );
}

export default App;
