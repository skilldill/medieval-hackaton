import styles from "./Prices.module.css";

export const Prices = () => {
    return (
        <section className={styles.prices}>
            <div className={styles.wallpapper}></div>

            <h2 className={styles.title}>
                <span className={styles.firstLetter}>П</span>ризы
            </h2>

            <p>Так как хакатон диванный, то и призы для большего получения удовольствия от сидения на диване!</p>
            <p>Первое место: Книги из серии “Страдающее средневековье” и настольная игра из той же серии.</p>
            <p>Второе место: Настолка “Страдающее средневековье”.</p>
        </section>
    )
}