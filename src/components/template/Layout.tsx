import useAppData from "@/data/hook/useAppData";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar"; // Import MobileNavbar
import Conteudo from "./Conteudo";

interface LayoutProps {
  children?: any;
  pesquisa?: boolean;
}

export default function Layout(props: LayoutProps) {
  const { tema } = useAppData();
  return (
    <div className={`${tema}`}>
      <div className="lg:hidden">
        <MobileNavbar pesquisa={props.pesquisa} />
      </div>
      <div className="hidden lg:block">
        <Navbar pesquisa={props.pesquisa} />
      </div>
      <Conteudo>{props.children}</Conteudo>
    </div>
  );
}
