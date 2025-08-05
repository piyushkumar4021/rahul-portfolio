import Container from "./container";
import SectionTitle from "./section-title";

export default function SectionServices() {
  const services = [
    {
      id: 1,
      title: "Interior Design Consulting",
      description:
        "Expert guidance to bring your design vision to life with functional elegance.",
    },
    {
      id: 2,
      title: "Full Residential Design",
      description:
        "Complete end-to-end home design solutions tailored to your style and needs.",
    },
    {
      id: 3,
      title: "Space Planning & Styling",
      description:
        "Maximize your space with thoughtful layout, decor curation, and modern aesthetics.",
    },
  ];

  return (
    <Container>
      <section>
        <SectionTitle>Our Services</SectionTitle>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {services.map(({ id, title, description }) => (
            <div
              className="bg-white rounded-xl p-6 shadow-lg transition duration-200 ease-in-out hover:-translate-y-[5px] hover:shadow-xl"
              key={id}
            >
              <h3 className="text-xl mb-2.5 text-[#111]">{title}</h3>
              <p className="service-description">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
