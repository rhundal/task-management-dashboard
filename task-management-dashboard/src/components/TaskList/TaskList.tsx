import { type TaskListProps } from "../../types";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskItem from "./TaskItem";
import { type Task } from "../../types";
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
  // function onFilterChangeFunc(incomingFilters: any) {
  //   setCurrentFilters(incomingFilters);
  // }

  let pendingTasksArray: Task[] = [];
  let inProgressTasksArray: Task[] = [];
  let completedTasksArray: Task[] = [];

  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
  const [inProgressTasks, setInProgressTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

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

  // Categorize visible tasks
  visibleTasks.forEach((task) => {
    if (task.status === "pending") {
      pendingTasksArray.push(task);
      // setPendingTasks(pendingTasksArray);
    } else if (task.status === "in-progress") {
      inProgressTasksArray.push(task);
      // setInProgressTasks(inProgressTasks);
    } else if (task.status === "completed") {
      completedTasksArray.push(task);
      // setCompletedTasks(completedTasksArray);
    }
  });

  return (
    <>
      <div className="border-2 border-border-custom rounded-xl flex-1">
        <h1> Pending </h1>
        <div className="flex flex-col gap-4">
          {pendingTasksArray.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onStatusChange={onStatusChange}
              onDelete={onDeleteFunc}
            />
          ))}
        </div>
      </div>
      <div className="border-2 border-border-custom rounded-xl flex-1">
        <h1> In Progress </h1>
        <div className="flex flex-col gap-4">
          {inProgressTasksArray.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onStatusChange={onStatusChange}
              onDelete={onDeleteFunc}
            />
          ))}
        </div>
      </div>
      <div className="border-2 border-border-custom rounded-xl flex-1">
        <h1> Completed </h1>
        <div className="flex flex-col gap-4">
          {completedTasksArray.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onStatusChange={onStatusChange}
              onDelete={onDeleteFunc}
            />
          ))}
        </div>
      </div>
    </>
  );
}
