import { FormEvent, useState } from 'react'
import styles from './header.module.css'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { FiBook } from 'react-icons/fi'

const Header = () => {
    const [title, setTitle] = useState('')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault

        setTitle('')
    }

    return (
        <header className={styles.header}>


            <FiBook size={30} color={'#5e60ce'}/>
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
    )
}

export default Header