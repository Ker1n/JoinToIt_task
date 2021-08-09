import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LeftBar } from "./components/LeftBar/LeftBar";
import { Header } from "./components/Header/Header";
import { Calendar } from "./pages/Calendar/Calendar";

function App() {
  return (
    <div className="app">
      <Router>
        <LeftBar />
        <div className="content">
          <Header />
          <main className="body">
            <div className="title">
              <h2>Calendar</h2>
            </div>
            <Switch>
              <Route path="/calendar" component={Calendar}></Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
