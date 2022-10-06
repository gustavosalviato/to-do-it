import styles from './task.module.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { ITask } from '../../Types/ITask'

type Props = {
    task: ITask,
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
}

const Task = ({ task, onDelete, onComplete }: Props) => {
    
    return (
        <section className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <AiOutlineCheckCircle size={25} color='var(--purple-dark)' /> : <MdRadioButtonUnchecked color='var(--blue)' size={25} />}
            </button>

            <p className={styles.title}>{task.title}</p>


            <div className={styles.containerButton}>
                <button className={styles.buttonItem}>
                    <AiFillEdit size={20} />
                </button>

                <button className={styles.buttonItem} onClick={() => onDelete(task.id)}>
                    <BsFillTrashFill size={20} />
                </button>
            </div>

        </section>
    )
}

export default Task
