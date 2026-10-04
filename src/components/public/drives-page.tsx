import { publicSiteContent } from "@/config/public-site";
import { ListingPage } from "./listing-page";

export function DrivesPage() {
  const { drivesPage } = publicSiteContent;

  return (
    <ListingPage
      hero={drivesPage.hero}
      emptyState={drivesPage.emptyState}
      items={drivesPage.placeholders}
    />
  );
}
