import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPlayer from "./players/AddPlayer";
import EditPlayer from "./players/EditPlayer";
import ViewPlayer from "./players/ViewPlayer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddPlayer />} />
          <Route exact path="/update/:id" element={<EditPlayer />} />
          <Route exact path="/player/:id" element={<ViewPlayer />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
