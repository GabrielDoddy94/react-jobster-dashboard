import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Wrapper from "../assets/wrappers/JobsContainer";
import Job from "../components/Job";
import Loading from "./Loading";

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector(store => store.allJobs);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loading />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map(job => {
          console.log(job);
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
