import { ActionKind } from "./ActionKind";

export type  ActionInterface = | {
    type?: ActionKind;
    payload?: any;
}