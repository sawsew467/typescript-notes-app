import { IState as IProps } from "../../App";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const inittialState = {
  postList: [],
};

const reducer = (state = inittialState, action: Action)=> {
  switch (action.type) {
    case ActionType.ADD_POST:
      return {
        ...state,
        postList: [...state.postList, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
