import { type TaskFilterProps } from "../../types";
import { type TaskStatus } from "../../types";
import { useState } from "react";
/*
// types/index.ts
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => void;
}
  */

export default function TaskFilter(props: TaskFilterProps) {
  const [currentStatuses, setCurrentStatuses] = useState<TaskStatus[]>([
    "pending",
    "in-progress",
    "completed",
  ]);

  const [currentPriorities, setCurrentPriorities] = useState([
    "low",
    "medium",
    "high",
  ]);

  const [currentStatus, setCurrentStatus] = useState<TaskStatus>("pending");
  const [currentPriority, setCurrentPriority] = useState<string>("");

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
      <div>
        <select
          className="rounded-lg border border-gray-300 px-3 py-2 bg-white text-black"
          onChange={(e) => {
            handleStatusChange(e);
          }}
        >
          <option value=""> All Statuses</option>
          {currentStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="rounded-lg border border-gray-300 px-3 py-2 bg-white text-black"
          onChange={(e) => {
            handlePriorityChange(e);
          }}
        >
          <option value=""> All Priorities</option>
          {currentPriorities.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
