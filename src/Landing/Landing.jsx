import { useState } from "react";
import styles from "./Landing.module.css";

import {
    Main,
    Description,
    Cases,
    RoadMap,
    Prices
} from "../desktop";
import { Registartion } from "../desktop/Registration";
import { Finish } from "../desktop/Finish";

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