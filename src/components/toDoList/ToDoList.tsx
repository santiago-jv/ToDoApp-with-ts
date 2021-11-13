import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { ActionKind } from "../../interfaces/ActionKind"
import ToDo from "../ToDo/ToDo"
import "./to_do_list.scss"
interface Props {
    
}

const ToDoList = (props: Props) => {
    const  {state,dispatch} = useContext(AppContext)
    const handleDoneToDo = (id:Number):void => {
        let toDo = state.toDoList.find(todoItem => todoItem.id === id)
        if(toDo) {
            toDo.done = !toDo.done
            dispatch({type:ActionKind.UPDATE_TODO,payload:{toDo}})
        }
    }
    return (
        <div className="todo-list-container">
            {state.toDoList.length > 0  ? 
            
                <table>
                    <thead>
                        <tr>
                            <td>    
                                Completada
                            </td>
                            <td>
                                Nombre de la tarea
                            </td>
                            <td>
                                Detalles
                            </td>
                        </tr>
                    </thead>     
                    <tbody>
                        {state.toDoList.map(todo=><ToDo handleDoneToDo={handleDoneToDo} todo={todo} key={todo.id} />)}
                    </tbody>           
            </table>
            :
            <h2 className="info">Agrega tus tareas.</h2>
            }
        </div>
    )
}

export default ToDoList
