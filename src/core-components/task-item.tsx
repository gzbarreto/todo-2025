import ButtonIcon from "../components/button-icon"
import Card from "../components/card"
import InputCheckbox from "../components/input-checkbox"
import Text from "../components/text"
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react"
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import XIcon from "../assets/icons/X-Regular.svg?react"
import CheckIcon from "../assets/icons/Check-Regular.svg?react"
import React, { useState } from "react"
import InputText from "../components/input-text-"
import type { Task } from "../models/task"
import { cx } from "class-variance-authority"
import useTask from "../hooks/use-task"

interface TaskItemProps {
  task: Task
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task.state === "creating")
  const [taskTitle, setTaskTitle] = useState(task.title || "")
  const { updateTask, updateTaskSatus, deleteTask } = useTask()

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditTask() {
    if (task.state === "creating") deleteTask(task.id)
    setIsEditing(false)
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "")
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    updateTask(task.id, { title: taskTitle })
    setIsEditing(false)
  }

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked
    updateTaskSatus(task.id, checked)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <Card size="md">
      {isEditing ? (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon type="submit" icon={CheckIcon} />
          </div>
        </form>
      ) : (
        <div className="flex items-center gap-4">
          <InputCheckbox
            onChange={handleChangeTaskStatus}
            checked={task?.concluded}
          />
          <Text className={cx("flex-1", { "line-through": task?.concluded })}>
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" onClick={handleDeleteTask}/>
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      )}
    </Card>
  )
}
