import React from "react";

export default function ServiceCard({
    image,
    title,
    description,
}: {
    image: string;
    title: string;
    description: string;
}) {
    return (
        <div className="serviceCard">
            <img src={`../assets/${image}`} alt="" />
            <p className="serviceTitle">{title}</p>
            <p className="serviceDescription">{description}</p>
        </div>
    );
}
