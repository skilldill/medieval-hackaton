import styles from "./Main.module.css";

export const Main = () => {
    return (
        <section className={styles.main}>
            <div className={`${styles.part} ${styles.descriptionBlock}`}>
                <h1 className={styles.title}>
                    Средневековый хакатон
                </h1>
                <p className={styles.description}>
                    Полезай в галеру на пару дней и покажи свой скилл предкам
                </p>
                <a href="#" className={styles.linkButton}>
                    Запись в гребцы
                </a>
            </div>
            <div className={`${styles.part} ${styles.wallpaper}`}>
            </div>
        </section>
    )
}