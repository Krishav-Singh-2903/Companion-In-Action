import { publicSiteContent } from "@/config/public-site";
import { ListingPage } from "./listing-page";

export function ProjectsPage() {
  const { projectsPage } = publicSiteContent;

  return (
    <ListingPage
      hero={projectsPage.hero}
      emptyState={projectsPage.emptyState}
      items={projectsPage.placeholders}
      variant="project"
      basePath="/projects"
    />
  );
}
