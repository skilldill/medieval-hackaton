import { useState } from "react";
import styles from "./Landing.module.css";

import {
    Main,
    Description,
    Cases,
    RoadMap,
    Prices
} from "../blocks";
import { Registartion } from "../blocks/Registration";

export const Landing = () => {
    return (
        <div className={styles.landing}>
            <Main />
            <Description />
            <Registartion />
            <Cases />
            <RoadMap />
            <Prices />
        </div>
    )
}