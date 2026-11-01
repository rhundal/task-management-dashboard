import { type TaskFilterProps } from "../../types";
import { type TaskStatus } from "../../types";
import { useState } from "react";

export default function TaskFilter(props: TaskFilterProps) {
  const initialStatuses = ["pending", "in-progress", "completed"];
  const initialPriorities = ["low", "medium", "high"];

  const [currentStatus, setCurrentStatus] = useState<TaskStatus>("");
  const [currentPriority, setCurrentPriority] = useState<string>("");

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    const userInput = e.target.value;

    props.onFilterChange({
      status: currentStatus,
      priority: currentPriority as any,
      searchString: userInput, // Convert empty string ("All Statuses") to undefined
    });
  }
  function clearFilters() {
    setCurrentStatus("");
    setCurrentPriority("");
    props.onFilterChange({
      status: "",
      priority: "",
      searchString: "", // Convert empty string ("All Statuses") to undefined
    });
  }

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value as TaskStatus;
    setCurrentStatus(newStatus);

    // Send the fresh status value combined with the existing priority state
    props.onFilterChange({
      status: newStatus || undefined, // Convert empty string ("All Statuses") to undefined
      priority: currentPriority as any,
    });
  }

  // Handler for the Priority dropdown menu change
  function handlePriorityChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newPriority = e.target.value;
    setCurrentPriority(newPriority);

    // Send the existing status state combined with the fresh priority value
    props.onFilterChange({
      status: currentStatus,
      priority: (newPriority || undefined) as any, // Cast to match parent's expected union
    });
  }
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <select
          value={currentStatus}
          className="rounded-lg border border-gray-300 px-3 py-2 bg-white text-black"
          onChange={(e) => {
            handleStatusChange(e);
          }}
        >
          <option value=""> All Statuses</option>
          {initialStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <div>
          <select
            className="rounded-lg border border-gray-300 px-3 py-2 bg-white text-black"
            onChange={(e) => {
              handlePriorityChange(e);
            }}
            value={currentPriority}
          >
            <option value=""> All Priorities</option>
            {initialPriorities.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button
          onClick={clearFilters}
          className="text-surface-card bg-txt-primary py-2 px-7 rounded-xl shadow-xl"
        >
          Clear Filters
        </button>
      </div>
      <div className="flex flex-row">
        <div className="mt-5">
          <input
            type="text"
            onChange={handleSearchInput}
            placeholder="Search by task ..."
            className="bg-sidebar-active h-10 rounded-xl shadown-xl"
          />
        </div>
      </div>
    </>
  );
}
