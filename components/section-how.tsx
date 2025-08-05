import Container from "./container";
import SectionTitle from "./section-title";

export default function SectionHow() {
  const steps = [
    "Thorough Site Inspection",
    "Contemporary Design Planning",
    "Client Doubt Resolution",
    "3D Visualization & Rendering",
    "Project Initiation & Construction",
    "Regular Quality Inspections",
  ];

  return (
    <Container>
      <section>
        <SectionTitle>How I Work</SectionTitle>

        {steps.map((step, idx) => (
          <div
            className={`flex items-center justify-center my-10 relative ${
              idx % 2 === 0 ? "flex-row-reverse" : ""
            }`}
            key={idx}
          >
            <div className="w-2/5 bg-white p-5 rounded-lg shadow-md text-[1.1rem] text-[#333]">
              {idx + 1}. {step}
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0077ff] text-white font-bold text-[1.1rem] mx-10">
              {idx + 1}
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}
