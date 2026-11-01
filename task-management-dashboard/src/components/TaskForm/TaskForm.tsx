import { useState } from "react";

export default function TaskForm() {
  const [currentStatus, setCurrentStatus] = useState();

  const [currentPriority, setCurrentPriority] = useState();

  function handleSubmit() {}
  function changeStatusFunction() {}
  function changePriorityFunction() {}
  function handleSubmitTask() {}

  return (
    <>
      {/*implement a form here which allows both addition and deletion of tasks */}
      <form onSubmit={handleSubmit}>
        <div className="bg-surface-card p-3 rounded-xl mt-5 w-[75%] mx-auto min-w-0">
          <div className="flex flex-row flex-wrap justify-between items-center gap-3 min-w-0">
            <div className="flex flex-row flex-wrap justify-start items-center gap-3 min-w-0">
              <div>
                <label htmlFor="title">Enter Task Title</label>
                <input type="text" name="title" id="" />
              </div>
              <div>
                <label htmlFor="description">Enter Task Description</label>
                <input type="text" name="description" id="" />
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-end items-center gap-4">
            <h2> Status: </h2>
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
          </div>
          <div className=" mt-5 flex flex-row flex-wrap justify-end items-center gap-4">
            <h2> Priority: </h2>

            <div>
              <select
                value={currentStatus}
                onChange={changePriorityFunction}
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-black ${
                  currentPriority === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : currentPriority === "in-progress"
                      ? "bg-white text-blue-400"
                      : currentPriority === "completed"
                        ? "bg-white text-green-400"
                        : "bg-white text-black"
                }`}
              >
                <option value="">Select a Priority</option>
                <option className="bg-yellow-100 text-gold-100" value="low">
                  low
                </option>
                <option className="bg-white text-blue-400" value="medium">
                  medium
                </option>
                <option className="bg-green-300 text-black" value="high">
                  high
                </option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <h2> Due: </h2>
            <div>
              <input type="date" id="date" name="date" />
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              onClick={handleSubmitTask}
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
