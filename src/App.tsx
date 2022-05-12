import { useState, useEffect } from "react";

import "./App.css";
import List from "./components/List";

export type People = {
  id: string;
  author: string;
  url: string;
  download_url: string;
  width: number;
  height: number;
};
function App() {
  const [people, setPeople] = useState<People[]>([]);
  // const [people, setPeople] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://picsum.photos/v2/list?limit=12")
        .then((response) => response.json())
        .then((data) => setPeople(data));
      // console.log(people);
      // setPeople(data);
    };
    getData();

    // setPeople;
  }, []);

  console.log(people);
  return (
    <div className="App">
      <h1>Photos of my gallery </h1>
      <List people={people} />
    </div>
  );
}

export default App;
