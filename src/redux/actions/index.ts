import { ActionType } from './../action-types/index';
import { IState as IProps } from "../../App";
// import{ActionType}

interface AddPostAction {
    type: ActionType.ADD_POST,
    payload: IProps["post"];
}
interface DeletePostAction {
    type: ActionType.DELETE_POST,
    payload: IProps["post"];
}

export type Action = AddPostAction | DeletePostAction