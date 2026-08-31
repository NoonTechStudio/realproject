import { Amenities } from "@/components/amenities";
import { ConstructionProgress } from "@/components/progress";
import { Enquire } from "@/components/enquire";
import { Faq } from "@/components/faq";
import { Floating } from "@/components/floating";
import { FloorPlans } from "@/components/floor-plans";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { Location } from "@/components/location";
import { Overview } from "@/components/overview";
import { PaymentPlan } from "@/components/payment-plan";
import { Residences } from "@/components/residences";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Specifications } from "@/components/specifications";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        <Overview />
        <Highlights />
        <Residences />
        <Amenities />
        <Gallery />
        <FloorPlans />
        <Specifications />
        <ConstructionProgress />
        <Location />
        <PaymentPlan />
        <Faq />
        <Enquire />
      </main>
      <SiteFooter />
      <Floating />
    </>
  );
}
