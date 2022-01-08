import styles from "./RoadMap.module.css";
import PricingPNG from "../../assets/pricing.png";

export const RoadMap = () => {
    return (
        <section className={styles.roadmap}>
            <h2 className={styles.title}>
                <span className={styles.firstLetter}>Э</span>тапы
            </h2>

            <div className={styles.roadmapList}>
                <div className={styles.roadmapItem}>
                    <h4>Регистрация команды</h4>
                    <p>Торопись! Максимум может участвовать 12 команд</p>
                </div>

                <div className={styles.roadmapItem}>
                    <h4>Старт разработки</h4>
                    <p>Нужно быть готовым ко всему, так как в средние века сложно было угодить людям</p>
                </div>

                <div className={styles.roadmapItem}>
                    <h4>Гребем к победе</h4>
                    <p>Галера будет плыть... кхм-кхм прошу прощения, разработка будет длиться 24 часа</p>
                </div>

                <div className={styles.roadmapItem}>
                    <h4>Подведение итогов</h4>
                    <p>Награждение победителей</p>
                    <img src={PricingPNG} alt="лев и палочка" width={250} />
                </div>
            </div>
        </section>
    )
}