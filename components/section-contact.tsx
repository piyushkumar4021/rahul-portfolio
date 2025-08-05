import Button from "./button";
import Container from "./container";
import SectionTitle from "./section-title";

export default function SectionContact() {
  const inputStyles = "p-3 border border-[#ccc] rounded";

  return (
    <Container>
      <section className="flex flex-col items-center" id="contact">
        <SectionTitle>Contact Us</SectionTitle>

        <form className="flex flex-col gap-4 w-[500px]">
          <input className={inputStyles} type="text" placeholder="Your Name" />
          <input
            className={inputStyles}
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className={inputStyles}
            placeholder="Your Message"
            rows={5}
          />

          <Button>Send message</Button>
        </form>
      </section>
    </Container>
  );
}
