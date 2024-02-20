
import './App.css'
import Lottery from './Lottery'
import {sum} from "./helper"




function App() {
    let winningCondition=(ticket)=>{
        return ticket[0]===0;
    }
   
 return(
  <>
<Lottery  n={3} winningCondition={winningCondition}/>
  </>
 )
}

export default App;
