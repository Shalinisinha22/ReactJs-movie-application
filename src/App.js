import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Overview from "./Components/Overview";
import Form from "./Components/Form";
import Ticket from "./Components/Ticket";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route
            exact
            path="/"
            Component={() => (
              <>
                <Banner />
                <Movies />
              </>
            )}
          />

          <Route path="/overview" element={<Overview></Overview>} />
          <Route path="/buyTicket" element={<Form></Form>}></Route>
          <Route path="/ticket" element={<Ticket></Ticket>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
