import React from "react";
import SinglePostCard from "./post/SinglePostCard";

export default function AllPostList() {
  return (
    <div>
      <h1 className="title bg-red-200/10 text-center font-bold tracking-[.61rem]">
        All Post List
      </h1>
      <SinglePostCard />
      <SinglePostCard />
      <SinglePostCard />
    </div>
  );
}
