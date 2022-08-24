import React from "react";

export const Job = () => {
  return (
    <div>
      <h1>Job</h1>
      <Data salary={10000} position="HR" company="Meta" />
      <Data salary={90000} position="Senior SDE" company="Amazon" />
      <Data salary={20000} position="Junior SDE" company="Google" />
    </div>
  );
};

const Data = (props) => {
  return (
    <div>
      <h3>
        Salary: {props.salary}, Position: {props.position}, Company:{" "}
        {props.company}
      </h3>
    </div>
  );
};
