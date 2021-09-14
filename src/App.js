import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Customer from "./pages/customer";
import Company from "./pages/company";
function App() {
  const members = [
    {
      id: "1",
      name: "Pedro",
      type: "pf",
    },
    {
      id: "2",
      name: "André",
      type: "pf",
    },
    {
      id: "3",
      name: "Cantina da esquina",
      type: "pj",
    },
    {
      id: "4",
      name: "Lanches Ogro",
      type: "pj",
    },
    {
      id: "5",
      name: "Antunes",
      type: "pj",
    },
  ];

  return (
    <div className="App">
      <Home members={members} />
      <header className="App-header">
        <Switch>
          <Route exact path="/customer/:id">
            <Customer members={members} />
          </Route>
          <Route exact path="/company/:id">
            <Company members={members} />
          </Route>
          <Route patch="/">
            <div>Home</div>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
