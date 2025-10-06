import useLocalStorage from "use-local-storage"
import { TASKS_KEY, type Task } from "../models/task"
import { delay } from "../helpers/utils"
import { useState } from "react"

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])
  const [isUpdatingTask, setIsUpdatingTask] = useState(false)
  const [isDeletingTask, setIsDeletingTask] = useState(false)

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        state: "creating",
        //gera um id aleatorio em string
        id: Math.random().toString(36).substring(2, 9),
        title: "",
      },
    ])
  }

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdatingTask(true)
    await delay(1000)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, state: "created", ...payload } : task
      )
    )
    setIsUpdatingTask(false)
  }

  function updateTaskSatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, concluded } : task))
    )
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true)
    await delay(1000)
    setTasks(tasks.filter((task) => task.id !== id))
    setIsDeletingTask(false)
  }

  return {
    prepareTask,
    updateTask,
    updateTaskSatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  }
}
