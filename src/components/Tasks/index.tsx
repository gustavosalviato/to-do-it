import { useState } from 'react'
import Task from '../Task'
import TaskEdit from '../TaskEdit'
import styles from './tasks.module.css'

const Tasks = () => {
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
                    <Task />
                </div>
            </section>
            {loadEditForm && (
                <TaskEdit />
            )}

        </>
    )
}

export default Tasks