import { useState } from "react";
import useAppData from "@/data/hook/useAppData";
import Link from "next/link";
import BotaoAlternarTema from "./BotaoAlternarTema";

interface MobileNavbarProps {
  pesquisa?: boolean;
}

export default function MobileNavbar(props: MobileNavbarProps) {
  const { tema, alternarTema } = useAppData();
  const [expanded, setExpanded] = useState(false);
  const temaValue = tema || "";
  const alternarTemaFunction = alternarTema || (() => {});

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${tema} bg-gray-300 dark:bg-gray-800 shadow-2xl shadow-gray-400 dark:shadow-gray-600 p-4`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" passHref>
          <div className="font-bold text-xl cursor-pointer text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400">
            Navbar
          </div>
        </Link>
      </div>
      <div
        className={`${
          expanded ? "block" : "hidden"
        } mt-4 flex flex-col items-start`}
      >
        <div>
          <Link href="/page1" passHref>
            <div className="text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400 cursor-pointer">
              Link 1
            </div>
          </Link>
        </div>
        {props.pesquisa ? (
          <form role="search" className="flex items-center flex-grow">
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
            />
            <button
              type="submit"
              className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`}
            >
              Search
            </button>
          </form>
        ) : (
          <></>
        )}
        <div className={`mt-2`}>
          <BotaoAlternarTema
            tema={temaValue}
            alternarTema={alternarTemaFunction}
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={toggleExpansion}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer text-black dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
