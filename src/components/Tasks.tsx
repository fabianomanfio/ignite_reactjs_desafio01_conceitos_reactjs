import { TasksProps } from '../interfaces';

import styles from './Tasks.module.css';
import { TaskItem } from './TaskItem';

export function Tasks({ tasks, handleCheckedTask, handleDeleteTask }: TasksProps) {
  return (
   <div className={styles.container}>
    <ul>
      {tasks.map(task => {
        return (
          <TaskItem 
            key={task.id}
            task={task}
            handleCheckedTask={handleCheckedTask}
            handleDeleteTask={handleDeleteTask}
          />
        )
      })}
    </ul>
   </div>
  )
}