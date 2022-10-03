import styles from './tasks.module.css'

const Tasks = () => {
    return (
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
                <div>;;;</div>
                <div>;;;</div>
                <div>;;;</div>
                <div>;;;</div>
                <div>;;;</div>
                <div>;;;</div>
            </div>
        </section>
    )
}

export default Tasks