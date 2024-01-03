import Organisations from "./organisations"
import Banner from "./banner";
import SkillsList from "./skillsList";

const App = () => {
    return(
        <>
            <Banner headerText = "Utkarsh Nandy Portfolio" />
            <Organisations/>
            <SkillsList />
            
        </>
    ) 
     
}

export default App;