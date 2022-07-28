import "./App.css";
import NavBar from "./Component/Home/NavBar";
import HomePage from "./Component/Home/HomePage";
import PlayingMusic from "./Component/PlayingMusic";
import SlideShow from "./Component/SlideShow";
import Search from "./Component/Search";
import Favor from "./Component/Favor/Favor";
import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <HomePage />
        <PlayingMusic />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
          <li>
            <Link to="/Favorite">Favorite</Link>
          </li>
        </ul>
        <Route exact path="/" component={SlideShow} />
        <Route path="/Search" component={Search} />
        <Route path="/Favorite" component={Favor} />
      </div>
    </BrowserRouter>
  );
}

export default App;
