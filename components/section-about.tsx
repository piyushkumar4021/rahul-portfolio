import Button from "./button";
import Container from "./container";
import SectionTitle from "./section-title";

export default function SectionAbout() {
  return (
    <div className="bg-[#faf7f0]">
      <Container>
        <section className="flex items-center justify-center gap-10" id="about">
          <img
            src="https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png"
            alt="Rahul portrait"
            className="max-w-[300px] rounded"
          />
          <div className="max-w-2xl">
            <p className="uppercase tracking-[1px] text-sm text-[#5a483f] mb-[10px]">
              About Me
            </p>
            <SectionTitle className="text-left">
              Meet the Designers
            </SectionTitle>
            <p className="mb-4 ">
              <em>Where Indian heritage meets contemporary luxury.</em>
            </p>
            <p className="mb-4">
              I’m <strong>Rahul</strong> —the founder of
              <strong>Nivása Luxe</strong>, a studio where design meets story.
            </p>
            <p className="mb-3">
              With a background in tech and a passion for soulful interiors, I
              blend traditional Indian aesthetics with modern functionality to
              create timeless living spaces. I don’t just decorate, I craft
              emotions into environments.
            </p>

            <Button>View my projects</Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
