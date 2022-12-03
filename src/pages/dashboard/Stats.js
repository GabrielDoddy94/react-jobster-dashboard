import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";

import { ChartsContainer, StatsContainer } from "../../components";
import Loading from "../../components/Loading";

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    store => store.allJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, [dispatch]);

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
