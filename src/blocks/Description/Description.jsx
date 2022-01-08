import styles from "./Description.module.css";
import GirlMirrowPNG from "../../assets/women-mirrow.png";
import BoyGirlPNG from "../../assets/boy-girl-play.png";

export const Description = () => {
    return (
        <section className={styles.description}>
            <h1 className={styles.title}>
                <span className={styles.firstLetter}>Т</span>ема хакатона
            </h1>

            <p className >
                Приложение для средневековья? ДА! Придумай приложение, 
                игру или чудо-устройство, которое решит одну из проблем средневкового современника!
            </p>

            <div>
                <div className={styles.row}>
                    <img src={GirlMirrowPNG} alt="девушка с зеркалом" />
                    <div>
                        <p>- Мне бы причесаться норм :(</p>
                    </div>
                </div>

                <div className={styles.row}>
                    <img src={BoyGirlPNG} alt="девушка с зеркалом" />
                    <div>
                        <p>- А нам бы сюжет поразнообразнее</p>
                        <p>- Да норм, не отвлекайся</p>
                    </div>
                </div>
            </div>
        </section>
    )
}