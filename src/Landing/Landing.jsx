import { useState } from "react";

import {
    Main,
    Description,
    Cases,
    RoadMap
} from "../blocks";

export const Landing = () => {
    return (
        <>
            <Main />
            <Description />
            <Cases />
            <RoadMap />
        </>
    )
}