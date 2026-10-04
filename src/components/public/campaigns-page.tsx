import { publicSiteContent } from "@/config/public-site";
import { ListingPage } from "./listing-page";

export function CampaignsPage() {
  const { campaignsPage } = publicSiteContent;

  return (
    <ListingPage
      hero={campaignsPage.hero}
      emptyState={campaignsPage.emptyState}
      items={campaignsPage.placeholders}
    />
  );
}
