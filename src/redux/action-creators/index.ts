import { Dispatch } from "react";
import { IState as IProps } from "~/App";
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
export const deletePost = (pos: number) => {
    return (dispath: Dispatch<Action>) => {
        dispath({
            type: ActionType.DELETE_POST,
            payload: pos
        })
    }
}
export const starPost = (pos: number) => {
    return (dispath: Dispatch<Action>) => {
        dispath({
            type: ActionType.STAR_POST,
            payload: pos
        })
    }
}