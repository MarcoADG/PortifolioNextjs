import { createContext, useEffect, useState } from "react";

type Tema = "dark" | "";

interface AppContextProps {
  children?: any;
  tema?: string;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: AppContextProps) {
  const [tema, setTema] = useState("dark");

  function alternarTema() {
    const novoTema = tema === "" ? "dark" : "";
    setTema(tema === "" ? "dark" : "");
    localStorage.setItem("tema", novoTema);
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");
    setTema(temaSalvo || "dark");
  }, []);

  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
