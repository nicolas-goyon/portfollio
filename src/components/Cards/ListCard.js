import React, { useEffect } from "react";
import Card from "./Card";
import "./ListCard.css";

function mouseouverHandler(e) {
    let siblings = e.target.closest("ul").querySelectorAll("li");
    siblings.forEach((target2) => {
        target2.classList.add("disabled");
    })

    // if itself is li then e.target else e.target.closest("li")
    if (e.target.tagName != "LI") {
        e.target.closest("li").classList.remove("disabled");
        return;
    }

    e.target.classList.remove("disabled");
}

function mouseoutHandler(e) {
    let siblings = e.target.closest("ul").querySelectorAll("li");
    siblings.forEach((target2) => {
        target2.classList.remove("disabled");
    })
}

function clickHandler(e) {
    let url = e.target.getAttribute("data-href");
    if (url && url != "" && url != "#")
        window.open(url, '_blank');
}

export default function ListCard({ list }) {
    const firstLoad = React.useRef(false);

    useEffect(() => {
        if (firstLoad.current) return;

        // Listener sur chaque élement de la liste des projets
        var listCard = document.querySelectorAll('.listCard li');
        listCard.forEach((target) => {
            if (!target.hasAttribute("data-event-listeners-added")) {
                target.addEventListener("mouseover", mouseouverHandler);
                target.addEventListener("mouseout", mouseoutHandler);
                target.addEventListener("click", clickHandler);
                target.setAttribute("data-event-listeners-added", true);
            }
        });

        firstLoad.current = true;
    }, [])
    return (
        <ul className="listCard">
            {list.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </ul>
    )
}