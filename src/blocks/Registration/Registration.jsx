import styles from "./Registration.module.css";

export const Registartion = () => {
    return (
        <div className={styles.registration}>
            <div className={styles.picture}></div>
            <div className={styles.contentBlock}>
                <h1 className={styles.title}>Регистрация команды</h1>
                <p>
                    Собери команду или сделай все сам!
                    Команда может быть размером до пяти гребцов включительно.
                    Количество команд от 10 до 12.
                </p>
            </div>
        </div>
    )
}