import { useEffect, useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Card";
function App() {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [fulltime, setFulltime] = useState(false);

  /**
   * Fetch an object with Github jobs stored on it in object notation.
   */
  const fetchJobs = async () => {
    console.log(description, location, fulltime);
    const results = await fetch(
      `https://cors.bridged.cc/https://jobs.github.com/positions.json?description=${description.replace(
        /[ \t]+/g,
        "+"
      )}&location=${location.replace(/[ \t]+/g, "+")}&full_time=${fulltime}`
    );
    const data = await results.json();
    setModal(true);
    setJobs(data);
    setModal(false);
  };

  useEffect(() => {
    fetchJobs({});
  }, []);

  return (
    <div className="App">
      <Header
        values={{ setDescription, setLocation, setFulltime }}
        onClick={(ev) => fetchJobs()}
      />
      <Cards jobs={jobs} />
    </div>
  );
}

export default App;
