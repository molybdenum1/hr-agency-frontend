import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <h2>Ninja Hunter</h2>
      <div className="nav-menu">
        <Link to='/jobs' className="nav-item">Jobs</Link>
        <Link to='/companies' className="nav-item">Companies</Link>
        <Link to='/salaries' className="nav-item">Salaries</Link>
        <Link to='/careers' className="nav-item">Careers</Link>
      </div>
      <div className="nav-right">
        <div className="log-btn">Login</div>
        <div className="log-btn">Reg</div>
        <button className="log-btn-search">Post a Job</button>
      </div>
    </div>
  );
}

export default Navbar;
