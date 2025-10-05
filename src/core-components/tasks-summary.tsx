import Badge from "../components/badge"
import Text from "../components/text"
import useTasks from "../hooks/use-tasks"

export default function TasksSummary() {
  const { concludedTasksCount, createdTasksCount, isLoadingTasks } = useTasks()
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tarefas criadas
        </Text>
        <Badge loading={isLoadingTasks} variant="secondary">
          {createdTasksCount}
        </Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Concluídas
        </Text>
        <Badge loading={isLoadingTasks}>
          {concludedTasksCount} de {createdTasksCount}
        </Badge>
      </div>
    </>
  )
}
