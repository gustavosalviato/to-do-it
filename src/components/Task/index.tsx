import styles from './task.module.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { MdRadioButtonUnchecked } from 'react-icons/md'


const Task = () => {
    const [isCompleted, setIsCompleted] = useState(true)
    return (
        <section className={styles.task}>
            <button className={styles.checkContainer}>
                {isCompleted ? <AiOutlineCheckCircle size={25} color='var(--purple-dark)' /> : <MdRadioButtonUnchecked color='var(--blue)' size={25} />}
            </button>

            <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, officia! </p>


            <div className={styles.containerButton}>
                <button className={styles.buttonItem}>
                    <AiFillEdit size={20} />
                </button>

                <button className={styles.buttonItem}>
                    <BsFillTrashFill size={20} />
                </button>
            </div>

        </section>
    )
}

export default Task
