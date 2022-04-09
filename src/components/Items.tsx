import React from "react";

interface todo {
  desc: string;
  status: "0" | "1";
}

type Props = {
  todos: todo[];
  finish: (idx: number) => void;
  del: (idx: number) => void;
};

const Items: React.FunctionComponent<Props> = ({ todos, finish, del }) => {
  const lis = todos.map((item, index) => {
    return (
      <li
        key={index}
        className="border-2 transition-shadow grid grid-cols-8 px-1 rounded-md my-1 hover:shadow-2xl leading-10">
        <div className="col-start-1 col-span-7 ml-2">
          <input
            key={item.desc}
            onClick={() => finish(index)}
            type="checkbox"
            className="rounded mr-3"
          />
          {item.status === "0" ? (
            <span className="h-10 col-span-2">{item.desc}</span>
          ) : (
            <del className="h-10 col-span-2">{item.desc}</del>
          )}
        </div>
        {item.status === "1" && (
          <button
            onClick={() => del(index)}
            className="text-gray-600 hover:text-black justify-self-center shadow-sm">
            delete
          </button>
        )}
      </li>
    );
  });

  const size = todos.filter((e) => e.status === "0").length;

  if (todos.length > 0) {
    return (
      <div>
        <h1 className="text-center mt-3">
          {size > 0 && `You have ${size} things left to do.`}
        </h1>
        <ul className="mt-6 mx-auto w-3/6">{lis}</ul>;
      </div>
    );
  } else {
    return (
      <div className="mt-10 mx-auto w-3/6 text-lg text-gray-700 text-center">
        Hey! You have nothing todo ?
      </div>
    );
  }
};

export default Items;
