import CardFaq from "./Card"
import languages from "../data/languages"

function Main () {
    return(
        <div className="button-container">
            <CardFaq languages={languages} />
        </div>
    )
    
}

export default Main