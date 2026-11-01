import { type TaskListProps } from "../../types";
// import TaskFilter from "../TaskFilter/TaskFilter";
import TaskItem from "./TaskItem";
import { type Task } from "../../types";
// import { useState } from "react";

export default function TaskList(props: TaskListProps) {
  let tasksArrayReceived = props.tasks;
  console.log("from TaskList Component");
  console.log(tasksArrayReceived);
  let onStatusChange = props.onStatusChange;
  let onDeleteFunc = props.onDelete;

  let currentFilters = {
    status: "",
    priority: "",
    searchString: "",
  };
  // function onFilterChangeFunc(incomingFilters: any) {
  //   setCurrentFilters(incomingFilters);
  // }

  let pendingTasksArray: Task[] = [];
  let inProgressTasksArray: Task[] = [];
  let completedTasksArray: Task[] = [];

  const visibleTasks = tasksArrayReceived.filter((task) => {
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
    } else if (task.status === "in-progress") {
      inProgressTasksArray.push(task);
    } else if (task.status === "completed") {
      completedTasksArray.push(task);
    }
  });

  return (
    <>
      <div className="border-2 border-border-custom rounded-xl w-[30%] place-items-center">
        <h1 className="bg-status-pending text-center"> Pending </h1>
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
      <div className="border-2 border-border-custom rounded-xl w-[30%] place-items-center">
        <h1 className="text-center"> In Progress </h1>
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
      <div className="border-2 border-border-custom rounded-xl w-[30%] place-items-center">
        <h1 className="text-center"> Completed </h1>
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

/*
Implement task addition - this component will have a task addition button which will call or open the task form component
Implement task deletion - this component will have a task deletion button which will call or open the task form component
Implement task sorting - this component will have a task sorting button which will call or open the sorting  utility funcitons




*/
