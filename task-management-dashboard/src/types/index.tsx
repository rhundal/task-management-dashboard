// types/index.ts
export type TaskStatus = "pending" | "in-progress" | "completed" | "";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  dueDate: string;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// types/index.ts
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// types/index.ts
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high" | "";
    searchString?: string;
  }) => void;
}

// New Interfaces introduced

// Task data structure - previously Task

// Component Props

// Form Data

// Filter Options
