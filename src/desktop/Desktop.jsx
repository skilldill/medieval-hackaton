import styles from "./Desktop.module.css";

import {
    Main,
    Description,
    Cases,
    RoadMap,
    Prices,
    Registartion,
    Finish
} from "./blocks";

export const Desktop = () => {
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