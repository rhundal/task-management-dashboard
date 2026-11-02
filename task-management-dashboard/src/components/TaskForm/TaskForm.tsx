import { useState } from "react";

import { type Task } from "../../types";
import { type TaskStatus } from "../../types";
import { type FormDataProps } from "../../types";

export default function TaskForm(props: FormDataProps) {
  const [currentStatus, setCurrentStatus] = useState<TaskStatus>("");
  const [currentPriority, setCurrentPriority] = useState<
    "" | "low" | "medium" | "high"
  >("");
  const [currentDescription, setCurrentDescription] = useState<string>("");
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  // function handleSubmit() { }

  function changeStatusFunction(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value as any;
    setCurrentStatus(newStatus);
    // props.onStatusChange(props.task.id, newStatus);
  }

  function changePriorityFunction(e: React.ChangeEvent<HTMLSelectElement>) {
    const newPriority = e.target.value as any;
    setCurrentPriority(newPriority);
    // props.onStatusChange(props.task.id, newStatus);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newId = (props.tasksLength + 1).toString();
    let newTask: Task = {
      id: newId,
      title: currentTitle,
      description: currentDescription,
      status: currentStatus,
      priority: currentPriority,
      dueDate: dueDate,
    };

    props.onTaskChange(newTask);
  }

  return (
    <>
      {/*implement a form here which allows both addition and deletion of tasks */}
      <form onSubmit={handleSubmit}>
        <div className="bg-surface-card p-3 rounded-xl mt-5 w-[75%] mx-auto min-w-0">
          <div className="flex flex-row flex-wrap justify-between items-center gap-3 min-w-0">
            <div className="flex flex-row flex-wrap justify-start items-center gap-3 min-w-0">
              <div>
                <label htmlFor="title">Enter Task Title: </label>
                <input
                  className="ml-5 border-2 border-txt-muted rounded-xl"
                  type="text"
                  name="title"
                  id="title"
                  onChange={(e) => setCurrentTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description">Enter Task Description</label>
                <input
                  className="ml-5 border-2 border-txt-muted rounded-xl"
                  type="text"
                  name="description"
                  id="desc"
                  onChange={(e) => setCurrentDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-end items-center gap-4">
            <h2> Status: </h2>
            <div>
              <select
                id="status"
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
          </div>
          <div className=" mt-5 flex flex-row flex-wrap justify-end items-center gap-4">
            <h2> Priority: </h2>

            <div>
              <select
                id="priority"
                value={currentPriority}
                onChange={changePriorityFunction}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-black ${
                  currentPriority === "low"
                    ? "bg-pink-100 text-yellow-700"
                    : currentPriority === "medium"
                      ? "bg-green-200 text-blue-400"
                      : currentPriority === "high"
                        ? "bg-red-300 text-pink-400"
                        : "bg-white text-black"
                }`}
              >
                <option value="">Select a Priority</option>
                <option className="bg-green-200 text-gold-100" value="low">
                  low
                </option>
                <option className="bg-pink-200 text-blue-400" value="medium">
                  medium
                </option>
                <option className="bg-red-300 text-black-300" value="high">
                  high
                </option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <h2> Due: </h2>
            <div>
              <input
                onChange={(e) => setDueDate(e.target.value)}
                type="date"
                id="date"
                name="date"
              />
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              type="submit"
              id="subBtn"
              className="text-surface-card bg-txt-primary py-1 px-7 rounded-xl shadow-xl"
            >
              Submit Task
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

/*
Create a controlled form for adding/editing tasks
Implement form validation
Handle form submission
Show validation feedback
*/
