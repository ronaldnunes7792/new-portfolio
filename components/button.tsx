import { ButtonProps } from "@/lib/types";
import React from "react";

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${className} group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65`}
    >
      {children}
    </button>
  );
}
