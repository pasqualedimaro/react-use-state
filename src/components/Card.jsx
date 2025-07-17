import { useState } from "react";
import languages from "../data/languages"

function Cardfaq() {   
    return(
        languages.map((language)=> (
            <button>
                {language.title}
            </button>
        ))
    )
}