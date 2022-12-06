import { useSelector, useDispatch } from "react-redux";

import Wrapper from "../assets/wrappers/SearchContainer";
import { FormRow, FormRowSelect } from ".";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector(store => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector(store => store.job);

  const handleSearch = e => {};

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>

        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
