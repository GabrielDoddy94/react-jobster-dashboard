import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

import Wrapper from "../assets/wrappers/Job";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{company}</h5>
          <p>{position}</p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <h4>more content</h4>
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => console.log("edit job")}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => console.log("delete job")}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
