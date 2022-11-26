import React, { useRef, useState } from "react";
import { IState as IProps } from ".././App";

interface IProp {
  postList: IProps["postList"];
  setPostList: React.Dispatch<React.SetStateAction<IProps["postList"]>>;
}

function Poser({ setPostList, postList }: IProp) {
  const ref = useRef(null);
  const [post, setPost] = useState<IProps["post"]>({
    title: "",
    content: "",
    isStared: false,
  });
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      title: e.target.value,
    });
  };
  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({
      ...post,
      content: e.target.value,
    });
  };
  const handleSubmit = () => {
    // const newPostList:any = postList.push(post);
    setPostList([post, ...postList]);
    setPost({
      title: "",
      content: "",
      isStared: false,
    });
    // ref.current.focus();
  };
  return (
    <>
      <div className="w-[40rem] bg-white drop-shadow-xl p-4 rounded-lg flex flex-col items-center my-12 gap-4">
        <h3 className="text-2xl font-semibold text-blue-500 ">Ghi chú</h3>
        <input
          className="text-lg px-4 py-2 border-2 border-blue-500 rounded-lg w-4/5"
          placeholder="Enter title..."
          onChange={(e) => handleTitle(e)}
          value={post.title}
          ref={ref}
        ></input>
        <textarea
          className="text-lg px-4 py-2 border-2 border-blue-500 rounded-lg w-4/5"
          placeholder="Enter content..."
          onChange={(e) => handleContent(e)}
          value={post.content}
        ></textarea>
        <button
          className="px-12 py-2 bg-blue-500 rounded-lg text-lg text-white"
          onClick={handleSubmit}
        >
          Tạo
        </button>
      </div>
    </>
  );
}

export default Poser;
