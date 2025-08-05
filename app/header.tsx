export default function Header() {
  const links = [
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Testimonials",
      href: "#testimonials",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10 py-4 px-8 flex justify-between items-center">
      <div>
        <strong>Namaah Interiors</strong>
      </div>

      <nav>
        {links.map(({ name, href }) => (
          <a className="ml-6 no-underline font-semibold" href={href} key={href}>
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
}
