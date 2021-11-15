
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { ActionKind } from "../../interfaces/ActionKind"
import { ToDoInterface } from "../../interfaces/ToDoInterface"
import "./to_do.scss"
interface Props {
    todo:ToDoInterface;
    handleDoneToDo:any;
}

const ToDo = (props: Props) => {
    const {dispatch} = useContext(AppContext)   
    const deleteToDo = ():void =>{
        dispatch({type:ActionKind.DELETE_TODO, payload:{ id:props.todo.id }})
    }
    return (
        <tr>
            <td>    
                <input onChange={()=>props.handleDoneToDo(props.todo.id)} type="checkbox" checked={props.todo.done}/>
            </td>
            <td>    
                {props.todo.name}
            </td>
            <td>    
                <button onClick={deleteToDo} className="button"> Eliminar </button>
              
            </td>
           
        </tr>
    )
}

export default ToDo
