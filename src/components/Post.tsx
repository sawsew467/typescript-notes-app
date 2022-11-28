import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { IState as IProps } from "~/App";
import { actionCreators } from "../redux/index";

interface Iprop {
  info: IProps["post"];
  id: number;
}

function Post({ info, id }: Iprop) {
  const dispath = useDispatch();
  const { deletePost, starPost } = bindActionCreators(actionCreators, dispath);
  const deleteHandle = (index: number): void => {
    deletePost(index);
  };
  const starHandle = (index: number) => {
    starPost(index);
  };
  return (
    <>
      <div
        className={
          info.isStared === false
            ? "w-[16rem] bg-white drop-shadow-xl pt-4 pb-0 rounded-lg flex flex-col gap-4 "
            : "w-[16rem] bg-yellow-200 drop-shadow-xl pt-4 pb-0 rounded-lg flex flex-col gap-4 "
        }
      >
        <div className="px-4">
          <h3 className="text-xl font-semibold">{info.title}</h3>
          <p className="text-md">{info.content}</p>
        </div>
        <div className="flex flex-row w-full">
          <button
            className="w-1/2 bg-red-500 hover:bg-red-400 transition-all rounded-bl-lg py-2"
            onClick={() => deleteHandle(id)}
          >
            <i className="fa-solid fa-trash text-white"></i>
          </button>
          <button
            className="w-1/2 bg-yellow-500 hover:bg-yellow-400 transition-all rounded-br-lg py-2"
            onClick={() => starHandle(id)}
          >
            <i className="fa-solid fa-star text-white"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Post;
