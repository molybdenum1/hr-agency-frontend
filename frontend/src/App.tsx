import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faPeopleGroup, faMagnifyingGlass, faCommentDots, faUserClock } from "@fortawesome/free-solid-svg-icons";

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
                <button className="log-btn-search">Post a Job</button>
              </div>
            </div>
          </div>
          <div className="start-center">
            <div className="center-left">
              <div className="center-h">Find your dream job</div>
              <div className="search-center">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Find your dream job"
                />
                <button className="log-btn-search">Search</button>
              </div>
            </div>
            <div className="center-right">
              <div className="center-img">
                <img
                  src="https://brookwoods.com/wp-content/uploads/hiring-hr.png"
                  alt="search"
                  width={"864px"}
                  height={"404px"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-r">
          <div className="container1">
          <div className="box">
            <div className="container1-img">
              <img
                src="https://img.freepik.com/premium-vector/woman-working-with-computer_113065-11.jpg"
                alt="computer-girl"
                width={375}
                height={307}
              />
            </div>
            <div className="container1-text">
              <h3>Millions of jobs</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              eum
              <br />
              voluptate at minus obcaecati pariatur veritatis placeat blanditiis
              <br />
              sit. Quos, dolore! Molestias rerum laborum, deleniti reiciendis
              <br />
              quaerat soluta? Dolore, unde.
              <p />
              <button className="read-more">Read More</button>
            </div>
          </div>
          <div className="box">
            <div className="container1-text">
              <h3>Millions of jobs</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              eum
              <br />
              voluptate at minus obcaecati pariatur veritatis placeat blanditiis
              <br />
              sit. Quos, dolore! Molestias rerum laborum, deleniti reiciendis
              <br />
              quaerat soluta? Dolore, unde.
              <p />
              <button className="read-more">Read More</button>
            </div>
            <div className="container1-img">
              <img
                src="https://img.freepik.com/premium-vector/girl-with-laptop-table-men_641360-70.jpg?w=2000"
                alt="computer-girl"
                width={375}
                height={307}
              />
            </div>
          </div>

          </div>
        </div>
        <div className="container2">
          <div className="container2-icons">
            <div className="icons">
              <h3><FontAwesomeIcon icon={faPeopleGroup} size="lg"/> Best Creative Team</h3>
            </div>
            <div className="icons">
              <h3><FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/> Easy to find jobs</h3>
            </div>
            <div className="icons">
              <h3><FontAwesomeIcon icon={faCommentDots} size="lg"/> Easy to comunicate</h3>
            </div>
            <div className="icons">
              <h3><FontAwesomeIcon icon={faUserClock} size="lg"/> Fast recruitment</h3>
            </div>

          </div>
          <div className="container2-desc">
            <h3>Whe y0u choose recruitment among other sites?</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Veritatis
            vero non doloribus est ex vel. Laboriosam at ipsum quaerat<br/>
            molestias, laudantium quibusdam ad obcaecati sequi amet, doloribus<br/>
            porro voluptatibus? Nam!<p/>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
