import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { ITask } from "./Types/ITask"

function App() {
  const [tasks, setTask] = useState<ITask[]>(
    [
      {
        id: crypto.randomUUID(),
        title: 'Estudar NODEJS',
        isCompleted: true,

      },

    ])

  const setAndSaveTask = (newTasks: ITask[]) => {
    setTask(newTasks)
  }

  const addTask = (taskTitle: string) => {
    setAndSaveTask([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ])
  }

  const deleteTask = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setAndSaveTask(newTasks)
  }

  const ToggleCompletedTask = (taskId: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }

      return task
    })

    setAndSaveTask(newTasks)
  }

  const editTaskTitle = (taskId: string, taskTitle: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: taskTitle,
        }
      }
      return task
    })

    setAndSaveTask(newTasks)

  }

  return (
    <>
      <Header onAddTask={addTask} />

      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={ToggleCompletedTask}
        onEdit={editTaskTitle}
      />
    </>
  )
}

export default App
