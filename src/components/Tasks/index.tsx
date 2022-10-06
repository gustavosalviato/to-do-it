import { useState } from 'react'
import { ITask } from '../../Types/ITask'
import Task from '../Task'
import TaskEdit from '../TaskEdit'
import styles from './tasks.module.css'

type Props = {
    tasks: ITask[]
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
}

const Tasks = ({ tasks, onDelete, onComplete }: Props) => {
    const [loadEditForm, setLoadEditForm] = useState(true)

    return (
        <>
            <section className={styles.tasks}>
                <header className={styles.header}>

                    <div>
                        <p>Created Tasks</p>
                        <span>1</span>
                    </div>

                    <div>
                        <p className={styles.textPurple}>Completed Tasks</p>
                        <span>0</span>
                    </div>
                </header>

                <div className={styles.list}>
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            key={index}
                            onDelete={onDelete}
                            onComplete={onComplete}
                        />
                    ))}

                </div>
            </section>
            {loadEditForm && (
                <TaskEdit />
            )}

        </>
    )
}

export default Tasks