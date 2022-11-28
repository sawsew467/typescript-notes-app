import { IState as IProps } from "../../App";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const inittialPostList: IProps["postList"] = [];

const reducer = (state = inittialPostList, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_POST:
      return [...state, action.payload];
    case ActionType.DELETE_POST:
      return state.filter((post, index) => index !== action.payload);
    case ActionType.STAR_POST:
      return state.map((post, id) => {
        if (id === action.payload) {
          return post.isStared === false
            ? {
                ...post,
                isStared: true,
              }
            : {
                ...post,
                isStared: false,
              };
        } else {
          return post;
        }
      });
    default:
      return state;
  }
};

export default reducer;
