import { StateInterface } from "./interfaces/StateInterface"
const list:StateInterface = JSON.parse(localStorage.getItem('toDoList') as string) 
const initialState:StateInterface = {
    toDoList:list.toDoList?list.toDoList:[]
}
export  {
    initialState
}