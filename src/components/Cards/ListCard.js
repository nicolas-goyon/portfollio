import React, { useEffect } from "react";
import Card from "./Card";
import "./ListCard.css";

export default function ListCard({ list }) {
    useEffect(() => {

        // Listener sur chaque élement de la liste des projets
        var listCard = document.querySelectorAll('.listCard li');
        listCard.forEach((target) => {
            let siblings = target.closest("ul").querySelectorAll("li");
            target.addEventListener("mouseover", (e) => {
                siblings.forEach((target2) => {
                    target2.classList.add("disabled");
                })
                target.classList.remove("disabled");
            })
            target.addEventListener("mouseout", (e) => {
                siblings.forEach((target2) => {
                    target2.classList.remove("disabled");
                })
            })
            target.addEventListener("click", (e) => {
                let url = target.getAttribute("data-href");
                if (url && url != "" && url != "#")
                    window.open(url, '_blank');
            })
        })

    }, [])
    return (
        <ul className="listCard">
            {list.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </ul>
    )
}