import { ActionInterface } from "./ActionInterface";
import { StateInterface } from "./StateInterface";

export interface ContextValuesInterface {
    state: StateInterface;
    dispatch:(action: ActionInterface) => void;

}