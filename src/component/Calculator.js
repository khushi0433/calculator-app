import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("theme1");

  function handleButtonClick(value) {
    if (value === "RESET") {
      setInput("");
    } else if (value === "DEL") {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      try {
        const result = eval(input.replace(/x/g, "*"));
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  }

  const themeConfig = {
    theme1: {
      bg: "bg-[#3a4764]",
      display: "bg-[#182034]",
      keypad: "bg-[#232c43]",
      btn: "bg-[#eae3dc] text-[#444b5a] shadow-[0_4px_0_#b4a597] hover:bg-white",
      delReset: "bg-[#647198] text-white shadow-[0_4px_0_#414e73] hover:bg-[#a2b3e1]",
      equal: "bg-[#d03f2f] text-white shadow-[0_4px_0_#93261a] hover:bg-[#f96b5b]"
    },
    theme2: {
      bg: "bg-[#e6e6e6]",
      display: "bg-white",
      keypad: "bg-[#d2cdcd]",
      btn: "bg-white text-[#36362c] shadow-[0_4px_0_#a79e91] hover:bg-[#f2f2f2]",
      delReset: "bg-[#378187] text-white shadow-[0_4px_0_#1b6066] hover:bg-[#62b5bc]",
      equal: "bg-[#c85402] text-white shadow-[0_4px_0_#873901] hover:bg-[#ff8a38]"
    },
    theme3: {
      bg: "bg-[#17062a]",
      display: "bg-[#1e0836]",
      keypad: "bg-[#1e0836]",
      btn: "bg-[#331c4d] text-[#f7de43] shadow-[0_4px_0_#881c9e] hover:bg-[#6c34ac]",
      delReset: "bg-[#56077c] text-white shadow-[0_4px_0_#bf15f4] hover:bg-[#8631b0]",
      equal: "bg-[#00e0d1] text-[#1b2428] shadow-[0_4px_0_#6cf9f2] hover:bg-[#94fff9]"
    }
  };

  const current = themeConfig[theme];

  return (
    <div className={`min-h-screen ${current.bg} flex flex-col items-center justify-center px-4`}>

      <div className="w-full max-w-sm p-6 rounded-xl">

        <div className="flex justify-between items-center mb-6">
          <span className="text-white text-2xl font-bold">calc</span>
          <div className="flex flex-col items-end">
            <span className="text-white text-xs uppercase tracking-wider">Theme</span>
            <div className="flex justify-between items-center gap-2 mt-1 text-xs text-white">
              <button onClick={() => setTheme("theme1")}>1</button>
              <button onClick={() => setTheme("theme2")}>2</button>
              <button onClick={() => setTheme("theme3")}>3</button>
            </div>
          </div>
        </div>

        <div className={`${current.display} rounded-lg p-4 mb-6 text-right`}>
          <div className="text-white text-3xl font-bold break-words">{input || "0"}</div>
        </div>

        <div className={`${current.keypad} rounded-lg p-5 grid grid-cols-4 gap-4`}>
          {["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x", "RESET", "="].map((key) => {
            let span = key === "RESET" || key === "=" ? "col-span-2" : "";
            let className =
              key === "RESET" || key === "DEL"
                ? `${current.delReset} font-bold py-3 rounded-lg text-sm ${span} active:translate-y-1 active:shadow-none transition-all`
                : key === "="
                ? `${current.equal} font-bold py-3 rounded-lg text-sm ${span} active:translate-y-1 active:shadow-none transition-all`
                : `${current.btn} font-bold py-3 rounded-lg text-xl active:translate-y-1 active:shadow-none transition-all`;

            return (
              <button
                key={key}
                className={className}
                onClick={() => handleButtonClick(key)}
              >
                {key}
              </button>
            );
          })}
        </div>
      </div>

        <a href="https://github.com/khushi0433" className="underline hover:text-blue-400">
          Khushi_baloch
        </a>
        .
      </div>
  );
}
