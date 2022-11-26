import { Dispatch } from "react";
import { IState as IProps } from "../../App";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const addPost = (post: IProps["post"]) => {
    return (dispath: Dispatch<Action>) => {
        dispath({
            type: ActionType.ADD_POST,
            payload: post
        })
    }
}
export const DeletePost = (post: IProps["post"]) => {
    return (dispath: Dispatch<Action>) => {
        dispath({
            type: ActionType.ADD_POST,
            payload: post
        })
    }
}