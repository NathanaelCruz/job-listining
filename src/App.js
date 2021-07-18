import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setJobListing } from "./actions/jobListingActions";
import Header from "./components/Header";
import ListJobs from "./components/ListJobs";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3001/jobs')
    .then(resp => resp.json())
    .then(data => dispatch(setJobListing(data)))
  })

  return (
    <>
      <Header />
      <ListJobs />
    </>
  );
}

export default App;
