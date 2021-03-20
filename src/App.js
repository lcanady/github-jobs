import { useEffect, useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Card";
function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async ({
    description = "",
    location = "",
    fulltime = "",
  }) => {
    const results = await fetch(
      `https://cors.bridged.cc/https://jobs.github.com/positions.json?description=${description.replace(
        /[ \t]+/,
        "+"
      )}&location=${location.replace(/[ \t]+/, "+")}&full_time=${
        fulltime ? true : false
      }`
    );
    const data = await results.json();
    setJobs(data);
    console.log(data);
  };

  useEffect(() => {
    fetchJobs({});
  }, []);

  return (
    <div className="App">
      <Header />
      <Cards jobs={jobs} />
    </div>
  );
}

export default App;
