import { ProjectDetailPage } from "@/components/public/project-detail-page";

type ProjectDetailRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailRoute({ params }: ProjectDetailRouteProps) {
  const { slug } = await params;

  return <ProjectDetailPage slug={slug} />;
}
