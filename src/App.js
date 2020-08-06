import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import TableContextProvider from "./components/TableContext";

function App() {
  return (
    <Router>
      <div className="App">
        <TableContextProvider>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/cuisines" component={Home} />
        </TableContextProvider>
      </div>
    </Router>
  );
}

export default App;
