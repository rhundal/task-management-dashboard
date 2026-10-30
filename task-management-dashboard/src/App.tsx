import { useState } from "react";

import { type Task } from "./types";
import { type TaskStatus } from "./types";
import { type TaskListProps } from "./types";

import TaskList from "./components/TaskList/TaskList";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return <Dashboard />;
}

export default App;
