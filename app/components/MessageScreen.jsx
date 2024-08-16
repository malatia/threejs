"use client";

import Link from "next/link";
import React from "react";

export default function MessageScreen() {
  return (
    <>
      <div className="p-5 mt-5  bg-gradient-to-br from-pink-200/20 to-pink-500/20 rounded-xl">
        <span className="pr-4 italic bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/70 text-3xl font-bold uppercase inline-block">
          Grammar Breakdown
        </span>

        <div className="mt-3">
          <div className="mt-3 flex flex-wrap gap-3 items-end">
            <div className="p-2 bg-black/30 rounded-md">
              <p className="text-white/90 text-4xl font-jp">Test 1</p>
              <p className="text-pink-300/90 text-2xl">Test 2</p>
              <p className="text-blue-400/90 text-2xl">Test 3</p>
            </div>

            <div className="p-2 bg-black/30 rounded-md">
              <p className="text-white/90 text-4xl font-jp">Test 1</p>
              <p className="text-pink-300/90 text-2xl">Test 2</p>
              <p className="text-blue-400/90 text-2xl">Test 3</p>
            </div>

            <div className="p-2 bg-black/30 rounded-md">
              <p className="text-white/90 text-4xl font-jp">Test 1</p>
              <p className="text-pink-300/90 text-2xl">Test 2</p>
              <p className="text-blue-400/90 text-2xl">Test 3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
