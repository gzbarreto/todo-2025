import Button from "../components/button"
import PlusIcon from "../assets/icons/Plus-Regular.svg?react"
import TaskItem from "./task-item"
import useTasks from "../hooks/use-tasks"
import useTask from "../hooks/use-task"
import type { Task } from "../models/task"

export default function TasksList() {
  const { tasks, isLoadingTasks } = useTasks()
  const { prepareTask } = useTask()

  function handleNewTask() {
    prepareTask()
  }

  return (
    <>
      <section>
        {/* desabilita o botao caso alguma task esteja sendo criada, para nao permitir criar mais de uma por vez */}
        <Button
          className="w-full"
          icon={PlusIcon}
          onClick={handleNewTask}
          disabled={tasks.some((task) => task.state === "creating") || isLoadingTasks}
        >
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        {isLoadingTasks && (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        )}
      </section>
    </>
  )
}
