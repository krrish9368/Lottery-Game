import TicketNum from "./TicketNum";
import "./Ticket.css"
function Ticket({num}){
    return(
        <div className="Ticket">
             {num.map((item,idx)=>(
                <TicketNum num={item} key={idx}/>
             ))}
        </div>
    )
}
export default Ticket;
 