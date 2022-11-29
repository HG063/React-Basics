import React from "react";

const JobData = (props) => {
  return (
    <div>
      <h5>
        Salary: {props.salary}, Position: {props.position}, Company:{" "}
        {props.company}
      </h5>
    </div>
  );
};

export default JobData;
