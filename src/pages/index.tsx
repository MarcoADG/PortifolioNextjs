import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/template/Layout";
import ProjectCard from "@/components/template/ProjectCard";
import Welcome from "@/components/template/Welcome";
import Sobre from "@/components/template/Sobre";
import Experiencias from "@/components/template/Experiencias";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout pesquisa={false}>
      <div>
        <Welcome />
        <Sobre />
        <Experiencias />
      </div>
      <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-950">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-32 pt-20  mb-10">
          <ProjectCard />
        </div>
      </div>
    </Layout>
  );
}
