
import { FormEvent, useState } from 'react'
import { ITask } from '../../Types/ITask'
import styles from './taskedit.module.css'

type Props = {
    newTasks: ITask[],
    onEdit: (taskId: string, taskTitle: string) => void
}
const TaskEdit = ({ newTasks, onEdit }: Props) => {
    const [newTitle, setNewTitle] = useState('')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        newTasks.map((task, index) => {
            if (task.id === newTasks[index].id) {
                onEdit(task.id, newTitle)
            }

            console.log(task)
        })

    }

    return (
        <footer className={styles.taskEdit}>
            <form className={styles.editForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Change current task'
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />

                <button>Confirm</button>
            </form>
        </footer>
    )
}

export default TaskEdit