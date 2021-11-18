import React from "react";
import Work from "./work";

const Works = ({ workPerson, deleteWork, changeWork, changeClick }) => {
  return (
    <div>
      {workPerson.map((work) => (
        <Work
          key={work.id}
          fullName={work.fullName}
          deleted={() => deleteWork(work.id)}
          change={(event) => changeWork(work.id, event)}
        />
      ))}
    </div>
  );
};

export default Works;
