import Container from "./container";
import SectionTitle from "./section-title";

export default function SectionTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Stephen Brekke",
      title: "Legacy Integration Producer",
      quote:
        "If you want real marketing that works and effective implementation – mobile app's got you covered.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Stephen Brekke",
      title: "Legacy Integration Producer",
      quote:
        "If you want real marketing that works and effective implementation – mobile app's got you covered.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Stephen Brekke",
      title: "Legacy Integration Producer",
      quote:
        "If you want real marketing that works and effective implementation – mobile app's got you covered.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <div className="bg-[#faf7f0]">
      <Container>
        <section id="testimonials">
          <SectionTitle>Testimonials</SectionTitle>

          <div className="flex justify-center gap-4">
            {testimonials.map(({ id, name, image, quote, title }) => (
              <section
                className="relative bg-white max-w-[500px] my-8 mx-auto p-6 rounded-2xl shadow-lg"
                key={id}
              >
                <img
                  className="w-12 h-12 rounded-full object-cover absolute -top-6 left-5 border-[3px] border-white"
                  src={image}
                  alt={`${name}'s Photo`}
                />
                <p className="italic mt-8">{quote}</p>
                <div className="mt-4 font-semibold text-lg">{name}</div>
                <div className="opacity-70 text-sm">{title}</div>
              </section>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
