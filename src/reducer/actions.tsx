import { StateInterface } from "../interfaces/StateInterface";

const saveData = (state: StateInterface,payload:any ):StateInterface => {
    const list ={...state,  toDoList:[...state.toDoList,payload.toDo ]};
    localStorage.setItem('toDoList',JSON.stringify(list)) 

    return list
}
const updateData = (state: StateInterface,payload:any ):StateInterface => {
    const newToDoList = state.toDoList.map(toDo => {
        if(toDo.id === payload.toDo.id) {
            toDo.done = payload.toDo.done
            
        }

        return toDo
    })
    const list ={...state,  toDoList:newToDoList}
    localStorage.setItem('toDoList',JSON.stringify(list)) 

    return list;
}

export{
    saveData,updateData
}