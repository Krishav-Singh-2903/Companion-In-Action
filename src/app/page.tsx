import { HomeHero } from "@/components/public/home-hero";
import { HomeSections } from "@/components/public/home-sections";
import { PublicLayout } from "@/components/public/public-layout";

export default function Home() {
  return (
    <PublicLayout>
      <HomeHero />
      <HomeSections />
    </PublicLayout>
  );
}
