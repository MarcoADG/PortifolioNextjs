interface ConteudoProps {
  children?: any;
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div
      className={`
      flex flex-col
      dark:text-gray-200
      bg-gray-100 dark:bg-gray-950
    `}
    >
      {props.children}
    </div>
  );
}
