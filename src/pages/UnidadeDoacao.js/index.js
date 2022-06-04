
import { useLocation } from "react-router-dom"
const UnidadeDoacao = () => {
    const {state} = useLocation()
    
    return(
       <div>
         <h1>unidade de doação {state.unidade}</h1>
      
       </div> 
    )
}
export default UnidadeDoacao