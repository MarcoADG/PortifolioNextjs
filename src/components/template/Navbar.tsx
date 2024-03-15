import useAppData from "@/data/hook/useAppData";
import Link from "next/link";
import BotaoAlternarTema from "./BotaoAlternarTema";

interface NavBarProps {
  pesquisa?: boolean;
}

export default function Navbar(props: NavBarProps) {
  const { tema, alternarTema } = useAppData();
  return (
    <div
      className={`${tema} bg-gray-300 dark:bg-gray-800
                    shadow-2xl shadow-gray-400 dark:shadow-gray-600
                    `}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div
              className=" font-bold text-xl cursor-pointer
            text-black hover:text-gray-500
              dark:text-white dark:hover:text-gray-400
            "
            >
              Navbar
            </div>
          </Link>
          <ul className="flex items-center">
            <li className="ml-4">
              <Link href="/page1" passHref>
                <div
                  className="text-black hover:text-gray-500 cursor-pointer
                                dark:text-white dark:hover:text-gray-400"
                >
                  Link 1
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          {props.pesquisa ? (
            <form role="search" className="mr-4">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="px-3 py-2 rounded-md focus:outline-none focus:ring 
              focus:border-blue-300
              dark:focus:border-blue-300
              "
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 
              bg-blue-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-400
              dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:border-blue-300
              "
              >
                Search
              </button>
            </form>
          ) : (
            <></>
          )}
        </div>
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
      </nav>
    </div>
  );
}
