import { type TaskListProps } from "../../types";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskItem from "./TaskItem";

import { useState } from "react";

export default function TaskList(props: TaskListProps) {
  let tasksArrayReceived = props.tasks;
  console.log("from TaskList Component");
  console.log(tasksArrayReceived);
  let onStatusChange = props.onStatusChange;
  let onDeleteFunc = props.onDelete;

  const [currentFilters, setCurrentFilters] = useState({
    status: "",
    priority: "",
  });
  function onFilterChangeFunc(incomingFilters: any) {
    setCurrentFilters(incomingFilters);
  }

  const visibleTasks = tasksArrayReceived.filter((task) => {
    console.log("current filters from TaskList: ", currentFilters);

    if (currentFilters.status && task.status !== currentFilters.status) {
      return false;
    }

    if (currentFilters.priority && task.priority !== currentFilters.priority) {
      return false;
    }

    return true;
  });

  return (
    <>
      <div className="bg-slate-200 flex justify-center items-center p-6 min-h-screen">
        <div className="p-5 justify-start w-[50%] border-2 border-red-200 bg-white rounded-xl shadow-sm">
          <div className="flex flex-row gap-10 border-b pb-3 mb-5 font-semibold text-gray-700">
            <h1>Status</h1>
            <div>Priority</div>
          </div>

          <div className="mt-5 flex flex-row gap-10 items-center">
            {/* display TaskFilter here */}
            <TaskFilter onFilterChange={onFilterChangeFunc} />
          </div>

          <div className="mt-10 flex flex-col gap-5">
            <ul className="space-y-4">
              {visibleTasks.map((task) => (
                <li key={task.id}>
                  <TaskItem
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDeleteFunc}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
