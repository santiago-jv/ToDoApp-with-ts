
import { ToDoInterface } from "../../interfaces/ToDoInterface"
import "./to_do.scss"
interface Props {
    todo:ToDoInterface;
    handleDoneToDo:any;
}

const ToDo = (props: Props) => {
   
    return (
        <tr>
            <td>    
                <input onChange={()=>props.handleDoneToDo(props.todo.id)} type="checkbox" checked={props.todo.done}/>
            </td>
            <td>    
                {props.todo.name}
            </td>
            <td>    
                <button className="button"> Ver detalles </button>
            </td>
           
        </tr>
    )
}

export default ToDo
