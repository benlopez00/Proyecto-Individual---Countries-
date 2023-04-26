import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= "/" component = {Home}/>
        <Route path= "/home" component = {Home}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;