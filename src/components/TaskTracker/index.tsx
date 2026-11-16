import {useState, JSX} from 'react'
import './index.css'

const TaskTracker = (): JSX.Element => {
  const [pendingTasks, setPendingTasks] = useState<number>(0)
  const [completedTasks, setCompletedTasks] = useState<number>(0)

  const onAddTask = (): void => {
    setPendingTasks(prev => prev + 1)
  }

  const onCompleteTask = (): void => {
    if (pendingTasks > 0) {
      setPendingTasks(prev => prev - 1)
      setCompletedTasks(prev => prev + 1)
    }
  }

  return (
    <div className="container">
      <h1 className="heading">Task Tracker</h1>
      <div className="stats-container">
        <p className="stat">
          Pending: <span className="count">{pendingTasks}</span>
        </p>
        <p className="stat">
          Completed: <span className="count">{completedTasks}</span>
        </p>
      </div>
      <div>
        <button className="button" onClick={onAddTask}>
          Add Task
        </button>
        <button className="button" onClick={onCompleteTask}>
          Complete Task
        </button>
      </div>
    </div>
  )
}

export default TaskTracker
