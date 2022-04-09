import React, { useState } from "react";

interface todo {
  desc: string;
  status: "0" | "1";
}

type Props = {
  add: (todo: todo) => void;
};

const Input: React.FunctionComponent<Props> = ({ add }) => {
  const [input, setInput] = useState("");

  const handClick = () => {
    if (!input) return;
    add({ status: "0", desc: input });
    setInput("");
  };

  return (
    <div className="text-center mt-3">
      <input
        type="input"
        autoFocus
        value={input}
        placeholder="What needs to be done?"
        className=" bg-gray-200 border-2 focus:outline-dashed focus:outline-green-300 mx-auto w-1/3 h-9 shadow-sm rounded-lg focus:shadow-2xl"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handClick}
        className="text-white bg-green-400 w-20 shadow-md hover:shadow-lg rounded-xl mx-5">
        Add
      </button>
    </div>
  );
};

export default Input;
