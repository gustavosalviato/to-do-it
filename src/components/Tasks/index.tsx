import { useState } from 'react'
import { ITask } from '../../Types/ITask'
import Task from '../Task'
import TaskEdit from '../TaskEdit'
import styles from './tasks.module.css'

type Props = {
    tasks: ITask[]
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
    onEdit: (taskId: string, taskTitle: string) => void
}

const Tasks = ({ tasks, onDelete, onComplete, onEdit }: Props) => {

    const createdTasks = tasks.length
    const completedTasks = tasks.filter((task) => task.isCompleted === true)
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>

                <div>
                    <p>Created Tasks</p>
                    <span>{createdTasks}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Completed Tasks</p>
                    <span>{completedTasks.length}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        key={task.id}
                        onDelete={onDelete}
                        onComplete={onComplete}
                        onEdit={onEdit}

                    />
                ))}

            </div>
        </section>
    )
}

export default Tasks