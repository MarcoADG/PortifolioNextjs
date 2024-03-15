import {
  IconeEmail,
  IconeGitHub,
  IconeLinkedIn,
  IconeWhatsApp,
} from "../icons";

export default function Welcome() {
  return (
    <div className="flex flex-col lg:flex-row min-w-96 lg:min-w-fit items-center my-10 mx-60 px-10 justify-between rounded-3xl bg-gray-200 dark:bg-gray-900">
      <div>
        <h1 className="text-6xl my-5 text-black dark:text-white">
          Seja Bem vindo!
        </h1>
        <h2 className="text-black dark:text-white text-2xl">
          {`Eu sou Marco Aurelio.`}
          <br />
          {`Desenvolvedor Fullstack`}
        </h2>
        <button className="bg-blue-500 dark:bg-blue-300 hover:bg-blue-700 dark:hover:bg-blue-400 text-white dark:text-black font-bold py-2 px-4 border border-blue-700 dark:border-blue-400 rounded my-5">
          <a href="/Curriculo2024.pdf" download>
            Download CV
          </a>
        </button>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-5">
        <div className="flex flex-col">
          <a
            href={"https://github.com/MarcoADG"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <div className="flex justify-center items-center gap-3 ">
              <div>{IconeGitHub(10)}</div>
              <div className="text-blue-500">: https://github.com/MarcoADG</div>
            </div>
          </a>
          <a
            href={"https://www.linkedin.com/in/marcoaureliodg/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <div className="flex justify-center items-center gap-3 ">
              <div>{IconeLinkedIn(10)}</div>
              <div className="text-blue-500">
                : www.linkedin.com/in/marcoaureliodg
              </div>
            </div>
          </a>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center gap-3 ">
              <div>{IconeEmail(10)}</div>
              <div>: marcoaureliodgomes@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center gap-3 ">
              <div>{IconeWhatsApp(10)}</div>
              <div>{`(24) 98118-6786`}</div>
            </div>
          </div>
        </div>
        <img src="/profile-pic.png" className="h-72 my-7 mx-auto" alt="Foto" />
      </div>
    </div>
  );
}
