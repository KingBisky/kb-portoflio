import { notFound } from "next/navigation";
import { ProjectPage } from "../../../components/site";
import projects from "../../../data/projects.json";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? `${project.title} | Kang Bin Wong` : "Project | Kang Bin Wong" };
}
export default async function Page({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <ProjectPage project={project}/>;
}
