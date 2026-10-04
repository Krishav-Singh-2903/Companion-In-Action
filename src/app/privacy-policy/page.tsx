import { LegalPage } from "@/components/public/legal-page";
import { publicSiteContent } from "@/config/public-site";

export default function PrivacyPolicyRoute() {
  return <LegalPage content={publicSiteContent.privacyPolicyPage} />;
}
