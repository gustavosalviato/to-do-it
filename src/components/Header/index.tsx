import { FormEvent, useState } from 'react'
import styles from './header.module.css'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { FiBook } from 'react-icons/fi'
import api from '../../services/api'
import { Alert } from '@mui/material'

type Props = {
    onAddTask: (taskTitle: string) => void
}
const Header = ({ onAddTask }: Props) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [success, setSuccess] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')


    const addTodo = async (title: string) => {
        if (!title) {
            setError(true)
            setErrorMsg('You must enter a value!')
            return
        }


        setError(false)
        setErrorMsg('')
        try {
            await api.post('/todos', {
                title,
                isCompleted: false,
            })
            setSuccess(true)
            setSuccessMsg('Successfully Added')


        } catch (err) {
            setSuccess(false)
            setError(true)
            setErrorMsg('Verify if server application is running!')
        }


    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        onAddTask(title)
        addTodo(title)
        setTitle('')
    }

    return (
        <>
            {error ? (<Alert severity='error'>{errorMsg}</Alert>) : null}
            {success ? (<Alert severity='success'>{successMsg}</Alert>) : null}


            <header className={styles.header}>
                <FiBook size={30} color={'#5e60ce'} />
                <h1 className={styles.title}><span>To Do</span> It!</h1>


                <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                    <input
                        type="text"
                        placeholder='Add a new task'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <button>
                        Create
                        <IoIosAddCircleOutline size={20} />
                    </button>
                </form>
            </header>
        </>
    )
}

export default Header