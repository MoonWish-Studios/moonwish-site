"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterC() {
    return (
        <div className="typewriter">
            <div className="typewriter1">Modern web development for</div>
            <div className="typewriter2">
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
