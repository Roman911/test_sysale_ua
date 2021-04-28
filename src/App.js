import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Cart, Compare } from './modules'
import { Home, NavBar } from './Components'

function App() {
  return <Router>
    <div>
      <NavBar />
      <Switch >
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/cart' >
          <Cart />
        </Route>
        <Route path='/compare'>
          <Compare />
        </Route>
      </Switch>
    </div>
  </Router>
}

export default App;
