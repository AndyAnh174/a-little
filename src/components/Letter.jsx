"use client";
import React, { Fragment, useState } from "react";

const Letter = () => {
  const fx = (x) => {
    return (-1 / 2500) * x * x + (1 / 25) * x;
  };
  let emojis = ["🥰", "👧", "🌹", "🌼", "😊", "😊", "📷"];

  return (
    <div
      className={`w-full overflow-hidden h-screen relative flex items-center justify-center `}
    >
      <Fragment>
        <span className="p-2 text-yellow-800 py-6 rounded-2xl z-[100] absolute text-2xl xl:text-9xl shadow-2xl font-extrabold bg-white ">
         Allway Be <span className="underline decoration-yellow-500">Ha</span>ppy !
        </span>
        {
          <div className="flex flex-wrap items-center  justify-center gap-4 ">
            {[...new Array(100)].map((_, i) => (
              <span
                key={`emoji-${i}`}
                className={` border-gray-200 flex items-center justify-center text-2xl md:text-6xl w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-xl shadow-2xl transition-all ease-in-out duration-500 `}
                style={{
                  opacity: i % 2 == 0 ? 0 : fx(i),
                  transform:
                    i % 3 == 0
                      ? "scale(0.9)"
                      : i % 5 == 0
                      ? "scale(1.1)"
                      : "scale(1)",
                }}
              >
                <span className="">{emojis[i % emojis.length]}</span>
              </span>
            ))}
          </div>
        }
      </Fragment>
    </div>
  );
};

export default Letter;
