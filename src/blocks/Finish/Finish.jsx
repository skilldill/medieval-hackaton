import styles from "./Finish.module.css";

export const Finish = () => {
    return (
        <section className={styles.finish}>
            <h2 className={styles.title}>
                <span className={styles.firstLetter}>У</span>спевай зарегистрироваться!
            </h2>
            <div className={styles.content}>
                <div className={`${styles.knight} ${styles.knightLeft}`}></div>

                <a href="#" className={styles.linkButton}>
                    Запись в гребцы
                </a>

                <div className={styles.knight}></div>
            </div>
        </section>
    )
}