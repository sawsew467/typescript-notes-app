import React, { useState } from "react";
import { useSelector } from "react-redux";
import Poser from "./components/Poser";
import Post from "./components/Post";
import { State } from "./redux";

export interface IState {
  post: {
    title: string;
    content: string;
    isStared: boolean;
  };
  postList: IState["post"][];
}

function App() {
  const postList: IState["postList"] = useSelector(
    (state: State) => state.posts
  );
  return (
    <>
      <div className="w-screen min-h-screen flex flex-col items-center bg-gradient-to-r from-green-400 to-blue-400">
        <Poser></Poser>
        <div className="flex flex-row flex-wrap w-[80rem] justify-center items-start gap-4">
          {postList.map((post, index) => (
            <Post key={index} info={post} id={index}></Post>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
