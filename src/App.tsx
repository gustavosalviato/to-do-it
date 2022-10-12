import { useEffect, useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { ITask } from "./Types/ITask"
import api from "./services/api"

const LOCAL_STORAGE_KEY = 'task:savedTasks'

function App() {
  const [tasks, setTask] = useState<ITask[]>([])

  useEffect(() => {
    getTodos()
    loadSavedTask()
  }, [])

  const getTodos = async () => {
    const response = await api.get('/todos')

    setTask(response.data)

  }



  const setAndSaveTask = (newTasks: ITask[]) => {
    setTask(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  const loadSavedTask = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved){
      setTask(JSON.parse(saved))
    }
  }

  const addTask = (taskTitle: string) => {
    if (!taskTitle) return

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
