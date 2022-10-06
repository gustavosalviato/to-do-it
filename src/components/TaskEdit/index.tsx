
import styles from './taskedit.module.css'
const TaskEdit = () => {    
    return (
        <footer className={styles.taskEdit}>
            <form className={styles.editForm}>
                <input
                    type="text"
                    placeholder='Change current task'
                />

                <button>Confirm</button>
            </form>
        </footer>
    )
}

export default TaskEdit