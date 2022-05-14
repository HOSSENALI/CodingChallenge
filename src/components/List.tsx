import React from "react";
import { People } from "./PhotoList";


const List = ({ people }: { people: People[] }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href={person.download_url}>
              <img src={person.download_url} alt="Image of author" />
            </a>
            <div className="desc">
              <b>Author : {person.author}</b>
            </div>
          </div>
        </div>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};
export default List;
