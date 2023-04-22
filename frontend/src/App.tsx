import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="start_page">
        <div className="start">
          <div className="header">
            <div className="navbar">
              <h2>Ninja Hunter</h2>
              <div className="nav-menu">
                <div className="nav-item">Jobs</div>
                <div className="nav-item">Companies</div>
                <div className="nav-item">Salaries</div>
                <div className="nav-item">Careers</div>
              </div>
              <div className="nav-right">
                <div className="log-btn">Login</div>
                <div className="log-btn">Reg</div>
                <div className="log-btn-search">Post Jobs</div>
              </div>
            </div>
          </div>
          <div className="start-center">
            <div className="center-left">
              <div className="center-h">Find your dream job</div>
              <div className="search-center">Search</div>
            </div>
            <div className="center-right">
              <div className="center-img">
                <img
                  src="https://brookwoods.com/wp-content/uploads/hiring-hr.png"
                  alt="search"
                  width={'720px'}
                  height={'337px'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
