import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, useState } from 'react';
import { Header } from './components/Header';
import { EmptyTasks } from './components/EmptyTasks';

import './global.css';

import styles from './App.module.css';
import plus from './assets/Plus.svg'

import { Tasks } from './components/Tasks';
import { taskProps } from './interfaces'

function App() {
  const [tasks, setTasks] = useState<taskProps[]>([]);
  const [newTask, setNewTask] = useState('')
  const [countTasks, setCountTasks] = useState(0)
  const [tasksDone, setTasksDone] = useState(0)

  const isNewTaskEmpty = newTask.length == 0


  function handleCreateTask() {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        description: newTask,
        checked: false
      }
    ])

    setCountTasks(task => {
      return task + 1
    })

    setNewTask('')
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleDeleteTask(id: string) {
    const taskDelete = tasks.filter(task => task.id !== id)
    
    setTasks([...taskDelete])

    setCountTasks(task => {
      return task -1
    })

    taskDone(taskDelete)

  }

  function handleCheckedTask(id: string) {
    const taskChecked = tasks.map(task => {
      if (task.id === id) {
        task.checked = !task.checked
      }
      return task
    })

    setTasks([...taskChecked])

    taskDone(taskChecked)
  }

  function taskDone(tasks: taskProps[]) {
    const result = tasks.filter(task => task.checked === true)
    setTasksDone(result.length)
  } 


  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <Header />
      
      {/* // ADD NEW TASK  */}
      <div className={styles.newTask}>
        <input
          type="text"
          value={newTask}
          onChange={handleNewTask}
          placeholder="Adicione uma nova tarefa"
        />
        <button
          onClick={handleCreateTask}
          disabled={isNewTaskEmpty}
        >
          Criar
          <img src={plus} alt="" />
          </button>
      </div>

      {/* TASKs */}
      <main className={styles.container}>
        {/* COUNTERS */}
        <div className={styles.countTasks}>
          <div className={styles.createTasks}>
            <strong>Tarefas criadas</strong>
            <span>{countTasks}</span>
          </div>
          <div className={styles.doneTasks}>
            <strong>Concluídas</strong>
            {countTasks == 0 ? (
              <span>{countTasks}</span>
            ) : (
              <span>{tasksDone} de {countTasks}</span>
            )}
          </div>
        </div>

        {/* LIST TASKS */}
        {tasks.length != 0 ? (
          <Tasks
            tasks={tasks}
            handleCheckedTask={handleCheckedTask}
            handleDeleteTask={handleDeleteTask}
          />
        ) : (
          <EmptyTasks />
        )}
      </main>
    </div>
  )
}

export default App
