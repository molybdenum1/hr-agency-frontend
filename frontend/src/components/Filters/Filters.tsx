import "./Filters.css";

function Filters() {
  return (
    <div className="filters">
      Working schedule
      <div className="jobs-filters-list">
        <div className="jobs-filters-list-filter">
          <input type="checkbox" />
          <label>
            {" "}
            <b>Full time</b>
          </label>
        </div>
        <div className="jobs-filters-list-filter">
          <input type="checkbox" />
          <label>
            {" "}
            <b>Part time</b>
          </label>
        </div>
        <div className="jobs-filters-list-filter">
          <input type="checkbox" />
          <label>
            {" "}
            <b>Intership</b>
          </label>
        </div>
        <div className="jobs-filters-list-filter">
          <input type="checkbox" />
          <label>
            {" "}
            <b>Project work</b>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
