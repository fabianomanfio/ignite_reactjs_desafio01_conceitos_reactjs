export interface taskProps {
  id: string
  description: string
  checked: boolean
}

interface handleFunctionProps {
  handleCheckedTask: (id: string) => void
  handleDeleteTask: (id: string) => void
}

export interface TasksProps extends handleFunctionProps {
  tasks: taskProps[]
}

export interface TaskItemProps extends handleFunctionProps {
  task: taskProps
}

