import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMui, SiPostgresql, SiTypescript, SiVite } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Experiencias() {
  return (
    <div>
      <div className="flex justify-center items-center my-10 gap-5">
        <div className="flex justify-center items-center flex-col w-32 h-32 bg-gray-400 dark:bg-gray-600 rounded-2xl">
          <FaReact className="h-16 w-16" />
          <p className="text-2xl text-black dark:text-white">React</p>
        </div>
        <div className="flex justify-center items-center flex-col w-32 h-32 bg-gray-400 dark:bg-gray-600 rounded-2xl">
          <FaHtml5 className="h-16 w-16" />
          <p className="text-2xl text-black dark:text-white">HTML</p>
        </div>
        <div className="flex justify-center items-center flex-col w-32 h-32 bg-gray-400 dark:bg-gray-600 rounded-2xl">
          <FaCss3Alt className="h-16 w-16" />
          <p className="text-2xl text-black dark:text-white">CSS</p>
        </div>
        <div className="flex justify-center items-center flex-col w-32 h-32 bg-gray-400 dark:bg-gray-600 rounded-2xl">
          <FaJava className="h-16 w-16" />
          <p className="text-2xl text-black dark:text-white">Java</p>
        </div>
        <div className="flex justify-center items-center flex-col w-32 h-32 bg-gray-400 dark:bg-gray-600 rounded-2xl">
          <IoLogoJavascript className="h-16 w-16" />
          <p className="text-2xl text-black dark:text-white">Javascript</p>
        </div>
        <div className="flex justify-center items-center flex-col w-32 h-32 bg-gray-400 dark:bg-gray-600 rounded-2xl">
          <SiTypescript className="h-16 w-16" />
          <p className="text-2xl text-black dark:text-white">Typescript</p>
        </div>
      </div>
      <div className="flex justify-center items-center my-10 gap-5">
        <div className="flex justify-center items-center flex-col w-32 h-32 bg-gray-400 dark:bg-gray-600 rounded-2xl">
          <SiVite className="h-16 w-16" />
          <p className="text-2xl text-black dark:text-white">Vite</p>
        </div>
        <div className="flex justify-center items-center flex-col w-32 h-32 bg-gray-400 dark:bg-gray-600 rounded-2xl">
          <TbBrandNextjs className="h-16 w-16" />
          <p className="text-2xl text-black dark:text-white">Next.js</p>
        </div>
        <div className="flex justify-center items-center flex-col w-32 h-32 bg-gray-400 dark:bg-gray-600 rounded-2xl">
          <SiPostgresql className="h-16 w-16" />
          <p className="text-2xl text-black dark:text-white">PostgreSql</p>
        </div>
        <div className="flex justify-center items-center flex-col w-32 h-32 bg-gray-400 dark:bg-gray-600 rounded-2xl">
          <FaPython className="h-16 w-16" />
          <p className="text-2xl text-black dark:text-white">Python</p>
        </div>
        <div className="flex justify-center items-center flex-col w-32 h-32 bg-gray-400 dark:bg-gray-600 rounded-2xl">
          <FaBootstrap className="h-16 w-16" />
          <p className="text-2xl text-black dark:text-white">Bootstrap</p>
        </div>
        <div className="flex justify-center items-center flex-col w-32 h-32 bg-gray-400 dark:bg-gray-600 rounded-2xl">
          <SiMui className="h-16 w-16" />
          <p className="text-2xl text-black dark:text-white">Material Ui</p>
        </div>
      </div>
    </div>
  );
}
