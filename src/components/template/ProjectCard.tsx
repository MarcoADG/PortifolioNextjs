import { useEffect, useState } from "react";
import { IconeGitHub } from "../icons";

export default function ProjectCard() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Backend Comunidades",
      language: "Java",
      descricao:
        "Projeto para aprimoramento de conhecimento em Java RestfulAPI",
      html_url: "https://github.com/MarcoADG/ComuniBack",
      link: "https://github.com/MarcoADG/ComuniBack",
      imagem: "/swagger.png",
    },
    {
      id: 2,
      name: "Frontend Comunidades",
      language: "Reactjs",
      descricao:
        "Projeto para aprimoramento de conhecimento em React, html, css e javascript",
      html_url: "https://github.com/MarcoADG/ComuniFront",
      link: "https://github.com/MarcoADG/ComuniFront",
      imagem:
        "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
    },
    {
      id: 3,
      name: "Trabalho Backend Neki",
      language: "Java",
      descricao:
        "API Restful de projeto pedido pela empresa Neki, para verificação de skills, utilizando Jwtoken e criptografia de senha",
      html_url: "https://github.com/MarcoADG/NeBack",
      link: "https://github.com/MarcoADG/NeBack",
      imagem: "/swagger.png",
    },
    {
      id: 4,
      name: "Trabalho React Native Neki",
      language: "React Native",
      descricao:
        "Projeto em React Native pedido pela empresa Neki, para verificação de skills, utilizando API",
      html_url: "https://github.com/MarcoADG/NeNative",
      link: "https://github.com/MarcoADG/NeNative",
      imagem:
        "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
    },
    {
      id: 5,
      name: "Trabalho React Neki",
      language: "Reactjs",
      descricao:
        "Projeto em React pedido pela empresa Neki, para verificação de skills, utilizando API",
      html_url: "https://github.com/MarcoADG/NeReact",
      link: "https://github.com/MarcoADG/NeReact",
      imagem:
        "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
    },
    {
      id: 6,
      name: "Pagina Quiz pokemon",
      language: "Nextjs",
      descricao: "Projeto quiz criado durante curso de Next.js da Udemy",
      html_url: "https://github.com/MarcoADG/quiz",
      link: "https://quiz-pquu.vercel.app/",
      imagem: "/Quiz.PNG",
    },
  ]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="flex flex-col justify-center">
          <div className="group h-80 w-80 md:w-72 md:h-72 2xl:h-96 2xl:w-96  [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={item.imagem}
                />
              </div>
              <div className="absolute pb-3 inset-0 h-full rounded-xl bg-black/80 px-auto text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-end">
                  <h1 className="text-3xl">{item.name}</h1>
                  <div className="my-4 text-center">
                    <h2 className="text-xl">Linguagem Principal:</h2>
                    {item.language}
                  </div>
                  <div className="my-4 text-center">
                    <h2 className="text-xl">Descrição:</h2>
                    <div className="text-start">{item.descricao}</div>
                  </div>
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex justify-center gap-3">
                      {IconeGitHub(6)}
                    </div>
                  </a>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-center gap-3 text-blue-400 underline mt-3">
                      Link do projeto
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
