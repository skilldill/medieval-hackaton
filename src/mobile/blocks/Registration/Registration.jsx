import styles from './Registration.module.css';

export const Registration = () => {
    return (
        <section className={styles.registration}>
            <div className={styles.wallpaper}></div>

            <h1 className={styles.title}>
                <span className={styles.firstLetter}>Р</span>егистрация команды
            </h1>
            <p>
                Собери команду или сделай все сам!
                Команда может быть размером до пяти гребцов включительно.
                Количество команд от 10 до 12.
            </p>
        </section>
    )
}