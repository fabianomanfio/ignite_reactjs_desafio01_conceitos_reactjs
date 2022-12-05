import styles from './EmptyTasks.module.css';

import clipboard from '../assets/Clipboard.svg'

export function EmptyTasks() {

  return (
    <div className={styles.container}>
      <hr />
      <body>
        <img src={clipboard} alt="ícone de tarefas não cadastradas" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </body>
    </div>
  )
}