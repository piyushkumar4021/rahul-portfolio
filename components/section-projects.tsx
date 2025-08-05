import Container from "./container";
import SectionTitle from "./section-title";

export default function SectionProjects() {
  const projects = [
    {
      id: 1,
      name: "Modern Living Room",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    },
    {
      id: 2,
      name: "Classic Indian Dining",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    },
    {
      id: 3,
      name: "Luxury Bedroom",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    },
  ];

  return (
    <div className="bg-[#faf7f0]">
      <Container>
        <section id="projects">
          <SectionTitle>Our Projects</SectionTitle>

          <div className="grid grid-cols-3 gap-7">
            {projects.map(({ id, name, image }) => (
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                key={id}
              >
                <img
                  src={image}
                  alt={`${name} Image`}
                  className="h-[200px] w-full object-cover"
                />
                <h3 className="p-4 text-lg font-medium">{name}</h3>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
