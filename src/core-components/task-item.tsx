import ButtonIcon from "../components/button-icon"
import Card from "../components/card"
import InputCheckbox from "../components/input-checkbox"
import Text from "../components/text"
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react"
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import XIcon from "../assets/icons/X-Regular.svg?react"
import CheckIcon from "../assets/icons/Check-Regular.svg?react"
import { useState } from "react"
import InputText from "../components/input-text-"

export default function TaskItem() {
  const [isEditing, setIsEditing] = useState(false)

  function handleEditTask(){
    setIsEditing(true)
  }

  function handleExitEditTask(){
    setIsEditing(false)
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {isEditing ? (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon icon={XIcon} variant="secondary" onClick={handleExitEditTask}/>
            <ButtonIcon icon={CheckIcon} />
          </div>
        </>
      ) : (
        <>
          <InputCheckbox />
          <Text className="flex-1">🐶 Passear com a maya</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditTask}/>
          </div>
        </>
      )}
    </Card>
  )
}
