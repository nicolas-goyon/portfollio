import React, { useEffect } from "react";
import LinkArrow from "../LinkArrow/LinkArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "../Badge/Badge";
import "./Card.css";

function checkOverflow(descRef, cardRef, description) {
    let desc = descRef.current;
    const fontSizeRem = 1.5; // 1rem
    const fontSizePx = parseFloat(getComputedStyle(document.documentElement).fontSize) * fontSizeRem;
    const avgCharWidth = fontSizePx * 0.5; // assuming average character width is half the font size
    const maxDescHeight = 75; // 75px
    const nbLines = Math.floor(maxDescHeight / fontSizePx);
    const descWidth = desc.getBoundingClientRect().width;
    const area = descWidth * nbLines;
    const maxLength = Math.floor(area / avgCharWidth);
    const textLength = description.length;
    if (textLength > maxLength) {
        desc.textContent = description.slice(0, maxLength) + '...';
    }
}

export default function Card({ link, date, title, description, tags, img, icon }) {
    let descRef = React.createRef();
    let cardRef = React.createRef();
    let arrowRef = React.createRef();
    useEffect(() => {
        if (!description) return;
        let card = cardRef.current;
        let desc = descRef.current;
        checkOverflow(descRef, cardRef, description);

        // when card hover, show all description
        card.addEventListener('mouseenter', () => {
            desc.textContent = description;
            // remove max-height to desc
            desc.style.maxHeight = 'none';
            if ( link !== "#")
                arrowRef.current.classList.add('active');
        });
        card.addEventListener('mouseleave', () => {
            desc.style.maxHeight = '75px';
            checkOverflow(descRef, cardRef, description);
            if ( link !== "#")
                arrowRef.current.classList.remove('active');
        });

    }, [descRef, cardRef]);

    
    return (
        <li data-href={link} ref={cardRef} className="card">
            {
                icon && <div className="thumbnail">
                    <FontAwesomeIcon icon={icon} size="2x" />
                </div>
            }
            {img && <img src={img} alt={title} />}
            {date && <span className="date">{date}</span>}
            <div className="contenu">
                <span className="titre info">{title}
                    {link != "#" && <LinkArrow svgRef={arrowRef} />}
                </span>
                {description &&
                    <p className="description" ref={descRef}>
                        {description}
                    </p>
                }
                <div className="tags">
                    {tags && tags.map((tag, index) => {
                        if (tag === 'En cours de développement' || tag === 'Work in progress') {
                            return <Badge key={index} color="warning" name={tag} />
                        } else return (
                            <Badge key={index} name={tag} color="info" />
                        )
                    })
                    }
                </div>
            </div>
        </li>
    )
}