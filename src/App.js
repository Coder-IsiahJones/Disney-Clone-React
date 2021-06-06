import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Detail from "./components/Detail"
import Login from "./components/Login"
import Header from "./components/Header"
import Home from "./components/Home"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          {/* Home */}
          <Route path='/' exact>
            <Home />
          </Route>

          {/* Login */}
          <Route exact path='/login'>
            <Login />
          </Route>

          {/* Detail */}
          <Route path='/detail/:id'>
            <Detail />
          </Route>

          {/* Home */}
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
