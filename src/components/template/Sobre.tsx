export default function Sobre() {
  return (
    <div className="flex, justify-center items-center text-center text-black dark:text-white">
      <h1 className="text-3xl mb-8">Sobre mim</h1>
      <h2 className="flex justify-start items-start text-start mx-60">
        {
          "Olá! Sou um desenvolvedor FullStack, formado em TIC/Software pelo Serratec, e estou empenhado em aprimorar minhas habilidades em programação, banco de dados, desenvolvimento web e mobile, entre outras áreas. Atualmente, meu foco está em Java, JavaScript, React, Bootstrap, SQL, API Rest e Next.js."
        }
        <br />
        <br />
        {
          "Minha jornada acadêmica começou com um diploma de Bacharel em Engenharia Mecânica pela Universidade Católica de Petrópolis (UCP). No entanto, minha paixão pela computação e programação me levou a fazer uma transição de carreira para a área de tecnologia."
        }
        <br />
        <br />
        {
          "Meu objetivo é trilhar o caminho de um desenvolvedor FullStack altamente competente. Estou ansioso para contribuir para uma empresa inovadora onde posso fazer a diferença e continuar aprimorando minhas habilidades como desenvolvedor Fullstack. Se você está em busca de um membro dedicado e entusiasmado para sua equipe, adoraria ouvir de você!"
        }
      </h2>
    </div>
  );
}
