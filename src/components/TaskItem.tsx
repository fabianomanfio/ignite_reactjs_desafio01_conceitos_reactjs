import { TaskItemProps } from '../interfaces';
import { Check, Trash } from 'phosphor-react';

import styles from './TaskItem.module.css';

export function TaskItem({ task, handleCheckedTask, handleDeleteTask }: TaskItemProps) {
  return (
    <li>
      <button
        className={task.checked ? styles.buttonChecked : styles.buttonUnchecked}
        onClick={() => handleCheckedTask(task.id)}
      >
        {task.checked && <Check size={14} />}
      </button>

      <p className={task.checked ? styles.taskChecked : ''}>{task.description}</p>

      <button
        className={styles.buttonTrash}
        title="Deletar Todo"
        onClick={() => handleDeleteTask(task.id)}
      >
        <Trash size={24} />
      </button>
    </li>
  )
}