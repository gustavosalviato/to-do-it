import styles from './task.module.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { ITask } from '../../Types/ITask'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FormEvent, useState } from 'react'
import api from '../../services/api'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '1px solid var(--gray-400)',
    boxShadow: 24,
    p: 4,
    borderRadius: '0.5rem',
    outline: 'none',
    background: 'var(--gray-400)'
};


type Props = {
    task: ITask,
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
    onEdit: (taskId: string, taskTitle: string) => void
}

const Task = ({ task, onDelete, onComplete, onEdit }: Props) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [title, setTitle] = useState('')

    const updateTodoTitle = async () => {
        await api.put('/todos', {
            id: task.id,
            title: title,
            isCompleted: task.isCompleted
        })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        onEdit(task.id, title)
        updateTodoTitle()
        handleClose()
    }

    const deleteTodo = async () => {
        await api.delete(`/todos/${task.id}`)
    }

    const toggleTodo = async (task: ITask) => {
        await api.put('/todos', {
            id: task.id,
            title: task.title,
            isCompleted: !task.isCompleted
        })
    }

    const handleDeleteTodo = () => {
        onDelete(task.id)
        deleteTodo()

    }

    const handleOnToggleTodo = (task: ITask) => {
        onComplete(task.id)
        toggleTodo(task)

    }
    return (
        <>
            <section className={styles.task}>
                <button className={styles.checkContainer} onClick={() => handleOnToggleTodo(task)}>
                    {task.isCompleted ? <AiOutlineCheckCircle size={25} color='var(--purple-dark)' /> : <MdRadioButtonUnchecked color='var(--blue)' size={25} />}
                </button>

                <p className={styles.title}>{task.title}</p>

                <div className={styles.containerButton}>
                    <button className={styles.buttonItem} onClick={() => handleOpen()}>
                        <AiFillEdit size={20} />
                    </button>

                    <button className={styles.buttonItem} onClick={handleDeleteTodo}>
                        <BsFillTrashFill size={20} />
                    </button>
                </div>
            </section>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3 className={styles.modalTitle}>
                        Change task title!
                    </h3>

                    <form className={styles.formModal} onSubmit={handleSubmit}>
                        <input className={styles.inputModal}
                            type="text"
                            placeholder='Edit task tile here'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <button
                            className={styles.buttonModal}
                        >
                            Confirm
                        </button>
                    </form>

                </Box>
            </Modal>
        </>
    )
}

export default Task
