### Project Objective

> Build a Task Management Dashboard.
> This project tests understanding of React components, state management, TypeScript integration, form handling, and
> component composition.

### Project Planning

- [x] Components Planning
- [ ] State Management Strategy
- [x] TypeScript Interfaces
- [ ] Handle Form Validation
- [x] State Updates
- [x] Component Communication

<details>
  <summary>Component Planning</summary>

1. TaskList Component
2. TaskForm Component
3. TaskFilter Component
4. Dashboard Component

</details>

<details>
  <summary>Required Component Props</summary>

- [x] TaskItemProps
- [x] TaskListProps
- [ ] TaskFormProps
- [x] TaskFilterProps
- [x] DashboardProps

</details>

#### Type Definitions

- [x] Task data structure
- [x] Component props
- [x] TypeScript Interfaces
- [ ] Form data
- [x] Filter options
- [x] TaskStatus

#### Application Features

- [x] displays a list of tasks - each task shows task title, description, priority, due date
- [x] filter tasks by status [Pending, In Progress, Completed]
- [x] show different visual states based on task properties
- [x] a delete Button to delete the task
- [x] a button that adds a new task to the task list (This will require adding some type of form for the user to input the task details) - ![TaskList](https://img.shields.io/badge/TaskList-Component-F01272?style=for-the-badge)
- [x] a button that sorts the tasks by due date - ![TaskList](https://img.shields.io/badge/TaskList-Component-F01272?style=for-the-badge)
- [x] a search bar to search for tasks - ![TaskList](https://img.shields.io/badge/TaskList-Component-F01272?style=for-the-badge)
- [ ] buttons to the TaskItem component that allow the user to move the task up and down the list
- [ ] a controlled form for adding/editing tasks - ![TaskForm](https://img.shields.io/badge/TaskForm-Component-168BFA?style=for-the-badge)
- [ ] implement form validation - ![TaskForm](https://img.shields.io/badge/TaskForm-Component-168BFA?style=for-the-badge)
- [ ] handle form submission - ![TaskForm](https://img.shields.io/badge/TaskForm-Component-168BFA?style=for-the-badge)
- [ ] show validation feedback - ![TaskForm](https://img.shields.io/badge/TaskForm-Component-168BFA?style=for-the-badge)
- [ ] implement filtering by status and priority - ![TaskFilter](https://img.shields.io/badge/TaskFilter-Component-00A878?style=for-the-badge)
- [x] add search functionality - ![TaskFilter](https://img.shields.io/badge/TaskFilter-Component-00A878?style=for-the-badge)
- [ ] show active filter indicators - ![TaskFilter](https://img.shields.io/badge/TaskFilter-Component-00A878?style=for-the-badge)
- [x] compose all components into a cohesive dashboard - ![Dashboard](https://img.shields.io/badge/Dashboard-Component-8533E8?style=for-the-badge)
- [ ] implement responsive layout - ![Dashboard](https://img.shields.io/badge/Dashboard-Component-8533E8?style=for-the-badge)
- [x] add task statistics - ![Dashboard](https://img.shields.io/badge/Dashboard-Component-8533E8?style=for-the-badge)
- [x] handle component communication - ![Dashboard](https://img.shields.io/badge/Dashboard-Component-8533E8?style=for-the-badge)
- [x] implement task filtering logic - ![Utilities](https://img.shields.io/badge/Utility-Functions-F39C12?style=for-the-badge)
- [ ] add sorting functions - ![Utilities](https://img.shields.io/badge/Utility-Functions-F39C12?style=for-the-badge)
- [ ] create validation helpers - ![Utilities](https://img.shields.io/badge/Utility-Functions-F39C12?style=for-the-badge)
- [ ] add date formatting utilities - ![Utilities](https://img.shields.io/badge/Utility-Functions-F39C12?style=for-the-badge)
- [ ] add localStorage integration - ![Persistence](https://img.shields.io/badge/Data-Persistence-00AFAF?style=for-the-badge)
- [ ] implement data export/import - ![Persistence](https://img.shields.io/badge/Data-Persistence-00AFAF?style=for-the-badge)
- [x] implement task reordering - ![Enhanced UI](https://img.shields.io/badge/Enhanced-UI-D946C1?style=for-the-badge)
  - [ ] integrating a drag and drop library could be a fun challenge for this feature
- [ ] add support for both light and dark mode - ![Enhanced UI](https://img.shields.io/badge/Enhanced-UI-D946C1?style=for-the-badge)
  - [ ] add a toggle switch to the UI for changing the theme
  - [x] pass the theme state down to the components that need it
- [ ] add animations and/or transitions for state changes - ![Enhanced UI](https://img.shields.io/badge/Enhanced-UI-D946C1?style=for-the-badge)

#### Application Workflow

#### Reflection

> How you implemented React and TypeScript features - I made sure to implement components based on their given types and interfaces.
> The challenges you encountered and how you overcame them - I ran into challenges when changing the layout of my lab 9.3 to reflect > dashboard while moving components around. I decided to add another filter to interface `TaskFilterProps` in order to incorporate > search functionality into the TaskFilter component.
>
> Your approach to component composition and state management - I wasnt able to complete all the tasks but for the ones I did, I made small reusable components which I put together or nest as needed to create the entire dashboard.

#### Implementation Steps In Order

> Start with implmenting Dashboard Component
>
> - Declared css variables in App.css for the project
> - Design UI in Dashboard Component
> - Ensure basic functionalities from lab 9.3 are working
> - Add Search functionality to search tasks by title or description in left sidebar

#### What is pending

> Features Pending (Working on them..)
>
> - Add Task
> - Move Tasks up and down by arrow
> - Drag and Drop Tasks between lanes
> - Fix and properly show all visual states for tasks
> - Add localstorage integration
> - Implement data export/import
> - Support for light and dark mode
> - Add Animations or transitions

#### How To Run My Project

- cd task-management-dashboard
- npm install
- npx @tailwindcss/cli -i ./src/App.css -o ./src/output.css --watch
- npm run dev
