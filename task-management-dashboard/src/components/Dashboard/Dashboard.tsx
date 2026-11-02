import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import { useState } from "react";
import { type Task } from "../../types";
import { type TaskStatus } from "../../types";

import TaskFilter from "../TaskFilter/TaskFilter";

export default function Dashboard() {
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

  const [allTasks, setAllTasks] = useState<Task[]>(tasksArray);

  const [tasksLength, setTasksLength] = useState<number>(tasksArray.length);

  const [addTask, setAddTask] = useState(false);

  const [displayedTasks, setDisplayedTasks] = useState<Task[]>(tasksArray);

  function onStatusChangeFunction(taskId: string, newStatus: TaskStatus) {
    let selectedTask = allTasks.find((task) => task.id === taskId);
    if (!selectedTask) return;
    setDisplayedTasks(
      allTasks.map((task) =>
        task === selectedTask ? { ...task, status: newStatus } : task,
      ),
    );
  }

  function onDeleteFunction(taskId: string) {
    let arrayAfterDeletion = allTasks.filter((task) => task.id !== taskId);
    setTasksLength(arrayAfterDeletion.length);
    setAllTasks(arrayAfterDeletion);
    setDisplayedTasks(arrayAfterDeletion);
  }

  function getNewTask(inComingTask: Task) {
    const updatedTasks = [...allTasks, inComingTask];
    setTasksLength(updatedTasks.length);
    setAllTasks(updatedTasks);
    setDisplayedTasks(updatedTasks);
    setAddTask(false);
  }

  // addTask ? setAddTask(false) : setAddTask(true);

  function handleAddTask() {
    setAddTask((prev) => !prev);

    console.log("task from dashboard");
  }

  // This function attempts to update tasks displayed on dashboard based on filters selected
  function onFilterChangeFunc(incomingFilters: any) {
    const {
      status: selectedStatus,
      priority: selectedPriority,
      searchString: userInput,
    } = incomingFilters;

    let selectedTasks: Task[] = allTasks;
    // setTasks(selectedTasks);

    selectedTasks = allTasks.filter(
      (task) =>
        (!selectedStatus || task.status === selectedStatus) &&
        (!selectedPriority || task.priority === selectedPriority) &&
        (!userInput ||
          task.description.toLowerCase().includes(userInput.toLowerCase()) ||
          task.title.toLowerCase().includes(userInput.toLowerCase())),
    );

    setDisplayedTasks(selectedTasks);
  }

  return (
    <div className="bg-dashboard-bg w-full p-5 rounded-2xl">
      {" "}
      <div className="flex flex-col md:flex-row border-3 justify-between border-border-custom">
        <div className="flex justify-center md:justify-start ml-15 p-5">
          {" "}
          <h1 className="text-txt-primary text-3xl font-semibold">
            OceanTides
          </h1>
        </div>
        <div className="flex justify-end">
          <div className="p-5">
            {" "}
            <button
              onClick={handleAddTask}
              className="text-surface-card bg-txt-primary py-3 px-7 rounded-xl shadow-xl"
            >
              + Add Task
            </button>
          </div>
          <div className="flex justify-center md:justify-end mr-15 p-5">
            {" "}
            <button className="text-surface-card bg-txt-primary py-3 px-7 rounded-xl shadow-xl">
              Sort By Due Date
            </button>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col md:flex-row gap-5 w-full border-3 border-border-custom overflow-hidden">
        <div className="bg-sidebar-bg flex flex-col p-5 md:flex-[1]">
          <h1 className="text-txt-primary text-lg font-semibold">Status</h1>
          <TaskFilter onFilterChange={onFilterChangeFunc} />
        </div>
        <div className="relative flex-[5] w-full">
          {addTask && (
            <div className="absolute inset-0 z-50 bg-dashboard-bg/80 backdrop-blur-sm flex items-start justify-center">
              <TaskForm onTaskChange={getNewTask} tasksLength={tasksLength} />
            </div>
          )}
          <div className="bg-dashboard-bg flex md:flex-[5] gap-5 min-w-0 mx-auto justify-center">
            <TaskList
              tasks={displayedTasks}
              // this function gets the status of selected task from TaskList Component
              onStatusChange={onStatusChangeFunction}
              // this function gets the id of selected task to be deleted from TaskList Component
              onDelete={onDeleteFunction}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/*
- Move Task filtering logic to utility function
*/
