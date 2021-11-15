import { useContext, useState } from "react"
import './form.scss'
import { FormDataInterface } from "../../interfaces/FormDataInterface"
import { AppContext } from "../../context/AppContext"
import { ActionKind } from "../../interfaces/ActionKind"

const Form = () => {
    const context = useContext(AppContext)
    const [error, setError] = useState<string|null>(null)
    const [formData, setFormData] = useState<FormDataInterface|undefined>({done:false})
    const handleChangeInputs = (event:any):void => {
        setError(null)
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData({
            ...formData,
            [event.target.name]:value
        })
    }    
    const isEmptyData = () => {

        return  formData?.name === "" || !formData?.name;
    }
    const sendData = (event:any):void => {
        event.preventDefault();
        if(!isEmptyData()){
            context.dispatch({
                type: ActionKind.SAVE_TODO,
                payload:{
                    toDo:{
                        ...formData,
                        id:context.state.toDoList.length + 1
                    }
                } 
            })
        }
        else{
            setError("Asigna un nombre a la tarea")
        }
        
        
    }

    return (
        <div className="form-container">
            <form onSubmit={sendData}>
                <div><h1 className="form-title">Añade una tarea</h1></div>

                <div className="form-group">
                    <label htmlFor="name">Tarea</label>
                    <input onChange={handleChangeInputs} id="name" type="text" name="name" className="form-control"/>
                </div>
                <div className="form-group done-control">
                    <label htmlFor="done">Está completada?</label>
                    <input onChange={handleChangeInputs} id="done" type="checkbox" name="done" className="form-control"/>
                </div>
                {error && <div className="error-message"><p>{error}</p></div>}

                <button className="button form-btn">Añadir</button>

            </form>
        </div>
    )
}

export default Form
