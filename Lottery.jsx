import { useState } from "react";
import "./Lottery.css"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

function Lottery({n,winningCondition}){
    

    let buyTicket=()=>{
        setTicket(genTicket(n))
    }
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=  winningCondition(ticket);
    return(
        <div className="lottery">
            <h1>Lottery Game!</h1>
           <Ticket num={ticket}/>
            <p>{ isWinning && "Congratulations you won"}</p>
            <button onClick={buyTicket}>BuyTicket</button>
        </div>
    )
}
export default Lottery;