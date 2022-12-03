import React from "react";
import Typewriter from "typewriter-effect";
import styles from "../styles/Home.module.css";

export default function TypewriterC() {
    return (
        <div className={styles.typewriter}>
            <div className={styles.typewriter1}>Modern web solutions for</div>
            <div className={styles.typewriter2}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(1000)
                            .typeString("restaurants")
                            .pauseFor(1500)
                            .deleteAll()
                            .typeString("gyms")
                            .pauseFor(1500)
                            .deleteAll()
                            .typeString("aerospace companies")
                            .pauseFor(1500)
                            .deleteAll()
                            .typeString("your business")
                            .start();
                    }}
                />
            </div>
        </div>
    );
}
