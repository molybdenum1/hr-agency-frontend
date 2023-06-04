import Filters from '../../components/Filters/Filters';
import JobPost from '../../components/JobPost/JobPost';
import './Jobs.css'
import { useState }from 'react'

function Jobs() {
     const [isFiltersOpen, setIsFiltersOpen] = useState(true)
    return ( 
        <div className="jobs-page">
            <div className="jobs-filters">
                <h2 onClick={() => setIsFiltersOpen(!isFiltersOpen)}>Filters  {isFiltersOpen? '+' : '-'}</h2>
                {isFiltersOpen?
                    <Filters />
                :
                    <div onClick={() => setIsFiltersOpen(true)}>Open filters</div>
                }
            </div>
            <div className="jobs-board">
                <div className="jobs-board-header">
                    <h2>Recommended jobs</h2>
                    <div>299</div>
                    <div className="jobs-board-header-sort">
                        <label htmlFor="">Sort By: </label>
                        <span> <b>Last update</b></span>
                    </div>
                </div>
                <div className="jobs-board-elements">
                    <JobPost />
                </div>
            </div>
        </div>
     );
}

export default Jobs;