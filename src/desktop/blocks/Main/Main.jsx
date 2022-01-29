import styles from "./Main.module.css";

export const Main = () => {
    return (
        <section className={styles.main}>
            <div className={`${styles.part} ${styles.descriptionBlock}`}>
                <h1 className={styles.title}>
                    <span className={styles.firstLetter}>С</span>редневековый хакатон
                </h1>
                <p className={styles.description}>
                    Полезай в галеру на пару дней и покажи свой скилл предкам
                </p>
                <a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://forms.gle/FyACP4ZrukaqYzvJ9" 
                    className={styles.linkButton}
                >
                    Запись в гребцы
                </a>
            </div>
            <div className={`${styles.part} ${styles.wallpaper}`}>
            </div>
        </section>
    )
}