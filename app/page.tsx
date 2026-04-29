"use client";
import { getTodos } from "@/api/todos";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home() {
  const data = useSelector((data) => console.log(data));
  
  useEffect(() => {
    useDispatch(getTodos());
  }, []);


  return (
    <main>
      <div className="mmax-w-75 mx-auto px-3.75">
        <div className="flex flex-row flex-wrap -mx-3.75">
          <div className="w-1/2 px-3.75">Column</div>
          <div className="w-1/2 px-3.75">Column</div>
        </div>
      </div>
    </main>
  );
}
