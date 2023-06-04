import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Jobs from "./pages/Jobs/Jobs";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companies" />
          <Route path="/salaries" />
          <Route path="/careers" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
