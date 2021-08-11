import React from "react";
import Cards from "./Cards";
import Seriesdata from "./Seriesdata";
import Heading from "./Heading";

const App = () => {
  return (
    <>
      <Heading />
      <div className="card">
        {Seriesdata.map((val) => {
          return (
            <Cards
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
