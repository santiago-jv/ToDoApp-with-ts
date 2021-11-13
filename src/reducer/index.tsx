import { ActionInterface } from "../interfaces/ActionInterface";
import { ActionKind } from "../interfaces/ActionKind";
import { StateInterface } from "../interfaces/StateInterface";
import { saveData, updateData } from "./actions";


export default function reducer(state:StateInterface,action:ActionInterface) : StateInterface {
    const { type, payload } = action;
    console.log("entraa")
    switch (type){
        case ActionKind.SAVE_TODO:
            return saveData(state, payload)
        case ActionKind.UPDATE_TODO:
            return updateData(state,payload)
        default:
            return state;
    }
}