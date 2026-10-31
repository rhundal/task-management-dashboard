import { type TaskItemProps } from "../../types";
import { useState } from "react";
// Create a TaskItem component that displays individual task information.

export default function TaskItem(props: TaskItemProps) {
  const [currentStatus, setCurrentStatus] = useState(props.task.status);

  function changeStatusFunction(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value as any;
    setCurrentStatus(newStatus);
    props.onStatusChange(props.task.id, newStatus);
  }
  // e: React.MouseEvent<HTMLButtonElement>
  function handleDeleteFunction() {
    props.onDelete(props.task.id);
  }

  return (
    <div className="bg-surface-card p-3 rounded-xl mt-5 w-[75%] mx-auto min-w-0">
      <div className="flex flex-row flex-wrap justify-between items-center gap-3 min-w-0">
        <div className="flex flex-row flex-wrap justify-start items-center gap-3 min-w-0">
          <h1 className="text-txt-primary font-semibold text-lg break-words min-w-0">
            {" "}
            {props.task.title}
          </h1>
          <div className="flex flex-row flex-wrap justify-end items-center gap-4">
            <div>
              <select
                value={currentStatus}
                onChange={changeStatusFunction}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-black ${
                  currentStatus === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : currentStatus === "in-progress"
                      ? "bg-white text-blue-400"
                      : currentStatus === "completed"
                        ? "bg-white text-green-400"
                        : "bg-white text-black"
                }`}
              >
                <option value="">Select a status</option>
                <option className="bg-yellow-100 text-gold-100" value="pending">
                  pending
                </option>
                <option className="bg-white text-blue-400" value="in-progress">
                  in-progress
                </option>
                <option className="bg-green-300 text-black" value="completed">
                  completed
                </option>
              </select>
            </div>
            <div>
              <button onClick={handleDeleteFunction}> Delete Task</button>
            </div>
          </div>
        </div>
      </div>
      <p> {props.task.description}</p>
      <div>
        <h2> Priority: {props.task.priority}</h2>
        <h2> Due: {props.task.dueDate}</h2>
      </div>
    </div>
  );
}
