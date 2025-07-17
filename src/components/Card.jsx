import { useState } from "react";
import languages from "../data/languages"

function Cardfaq(card) {
    const [id, title, description] = languages;
    const [isOpen, setIsOpen] = usestate(false);
    
    return(
        languages.map((btn)=> (
            <div key={btn.id}>
                <h3>{btn.title}</h3>
                <p>{btn.description}</p>
            </div>
        ))
    )
}