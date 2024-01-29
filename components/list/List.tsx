"use client";
import React from "react";

import { Projects } from "./List.props";

function List() {
  return (
    <div className="w-[30%] flex flex-col justify-center">
      {Projects.map(({ name, path }, i) => (
        <div key={i} className="flex flex-col w-full">
          <div
            onClick={() =>
              window.open("https://adaptative-precision.vercel.app/")
            }
            className="flex flex-row border-b-2 hover:text-slate-500 hover:cursor-pointer border-purple-600 mb-10 justify-between w-[100%]"
          >
            <h1 className="text-2xl font-semibold">{`00${i + 1}`}</h1>
            <h1 className="text-2xl font-semibold">{name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
