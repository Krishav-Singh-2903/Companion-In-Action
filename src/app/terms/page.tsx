import { LegalPage } from "@/components/public/legal-page";
import { publicSiteContent } from "@/config/public-site";

export default function TermsRoute() {
  return <LegalPage content={publicSiteContent.termsPage} />;
}
