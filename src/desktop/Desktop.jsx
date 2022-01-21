import styles from "./Landing.module.css";

import {
    Main,
    Description,
    Cases,
    RoadMap,
    Prices,
    Registartion,
    Finish
} from "./";

export const Landing = () => {
    return (
        <div className={styles.landing}>
            <Main />
            <Description />
            <Registartion />
            <Cases />
            <RoadMap />
            <Prices />
            <Finish />
        </div>
    )
}