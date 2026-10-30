import { useState } from "react";

import { type Task } from "./types";
import { type TaskStatus } from "./types";
import { type TaskListProps } from "./types";

import TaskList from "./components/TaskList/TaskList";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  /*
   tasks: Task[];
   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
   onDelete: (taskId: string) => void;
   */

  let tasksArray: Task[] = [
    {
      id: "1",
      title: "Task 1",
      description: "This is task 1",
      status: "pending",
      priority: "low",
      dueDate: "12/31/2023",
    },
    {
      id: "2",
      title: "Task 2",
      description: "This is task 2",
      status: "in-progress",
      priority: "medium",
      dueDate: "1/1/2024",
    },
    {
      id: "3",
      title: "Task 3",
      description: "This is task 3",
      status: "completed",
      priority: "high",
      dueDate: "1/2/2024",
    },
    {
      id: "4",
      title: "Task 4",
      description: "This is task 4",
      status: "pending",
      priority: "high",
      dueDate: "12/31/2023",
    },
    {
      id: "5",
      title: "Task 5",
      description: "This is task 5",
      status: "in-progress",
      priority: "low",
      dueDate: "1/1/2024",
    },
    {
      id: "6",
      title: "Task 6",
      description: "This is task 6",
      status: "in-progress",
      priority: "high",
      dueDate: "1/2/2024",
    },
    {
      id: "7",
      title: "Task 7",
      description: "This is task 7",
      status: "completed",
      priority: "low",
      dueDate: "12/31/2023",
    },
    {
      id: "8",
      title: "Task 8",
      description: "This is task 8",
      status: "pending",
      priority: "medium",
      dueDate: "12/31/2023",
    },
    {
      id: "9",
      title: "Task 9",
      description: "This is task 9",
      status: "completed",
      priority: "medium",
      dueDate: "12/31/2023",
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(tasksArray);

  function onStatusChangeFunction(taskId: string, newStatus: TaskStatus) {
    // setTasks(tasksArray);
    let selectedTask = tasks.find((task) => task.id === taskId);
    if (!selectedTask) return;

    setTasks(
      tasks.map((task) =>
        task === selectedTask ? { ...task, status: newStatus } : task,
      ),
    );
  }

  function onDeleteFunction(taskId: string) {
    let arrayAfterDeletion = tasks.filter((task) => task.id !== taskId);
    setTasks(arrayAfterDeletion);
  }

  return (
    // <TaskList
    //   tasks={tasks}
    //   // this function gets the status of selected task from TaskList Component
    //   onStatusChange={onStatusChangeFunction}
    //   // this function gets the id of selected task to be deleted from TaskList Component
    //   onDelete={onDeleteFunction}
    // />
    <Dashboard />
  );
}

export default App;
