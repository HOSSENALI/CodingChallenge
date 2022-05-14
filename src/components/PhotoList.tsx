import React from 'react'
import { useState, useEffect } from "react";
import Layout from "../layouts/Layout";

import List from "./List";

export type People = {
  id: string;
  author: string;
  url: string;
  download_url: string;
  width: number;
  height: number;
};
function PhotoList() {
  const [people, setPeople] = useState<People[]>([]);
  useEffect(() => {
    const getData = () => {
      fetch("https://picsum.photos/v2/list?limit=12")
        .then((response) => response.json())
        .then((data) => setPeople(data));
    };
    getData();
  }, []);

  return (
    
      <Layout>
        <div className="App">
          <h1>Photos of my gallery </h1>
          <List people={people} />
        </div>
      </Layout>
    
  );
}

export default PhotoList;
