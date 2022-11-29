import React from "react";

export const Task = (props) => {
  return (
    <div className="mt-2">
      <h5>
        {props.task.taskName}{" "}
        <i
          onClick={() => {
            props.setShow(props.show ? false : true);
            props.setShowId(props.task.id);
          }}
          style={{ color: "darkviolet" }}
          class="bi bi-pencil"></i>
        <i
          onClick={() => props.handleDelete(props.task.id)}
          style={{ color: "red" }}
          class="bi bi-trash"></i>
        <i
          onClick={() => props.handleComplete(props.task.id)}
          class="bi bi-check-circle"></i>
        {props.task.complete ? (
          <i style={{ color: "green" }} class="bi bi-journal-check"></i>
        ) : (
          ""
        )}
        {props.task.id === props.showid && props.show && (
          <div>
            <input type="text" onChange={props.handleUpdateChange} />
            <button
              onClick={() => {
                props.handleUpdate(props.task.id);
              }}>
              Update
            </button>
          </div>
        )}
      </h5>
    </div>
  );
};
