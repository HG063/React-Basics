import React from "react";
import JobData from "../Components/JobData";

export const Job = () => {
  return (
    <div>
      <h2 className="mt-3">Job</h2>
      <JobData salary={10000} position="HR" company="Meta" />
      <JobData salary={90000} position="Senior SDE" company="Amazon" />
      <JobData salary={20000} position="Junior SDE" company="Google" />
    </div>
  );
};
