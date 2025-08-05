import SectionAbout from "@/components/section-about";
import SectionContact from "@/components/section-contact";
import SectionHero from "@/components/section-hero";
import SectionHow from "@/components/section-how";
import SectionProjects from "@/components/section-projects";
import SectionServices from "@/components/section-services";
import SectionTestimonials from "@/components/section-testimonials";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <SectionHow />
      <SectionProjects />
      <SectionServices />
      <SectionTestimonials />
      <SectionContact />
    </>
  );
}
