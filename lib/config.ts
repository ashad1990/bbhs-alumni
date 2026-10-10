export const siteConfig = {
  name: "BBHSC Alumni",
  description:
    "Connecting generations of Blue Bird High School and College alumni in Sylhet, Bangladesh and around the world.",
  // TODO: replace with the production domain before deployment.
  url: "https://bbhsc-alumni.example",
  // TODO: replace with real Google Form URL. This is not a live registration form.
  registrationUrl: "https://forms.google.com/",
  // TODO: replace with the association's real email address.
  email: "alumni@example.com",
  // TODO: replace with the association's real Facebook group URL.
  facebookUrl: "https://www.facebook.com/groups/",
  schoolUrl: "http://www.bbhsc.edu.bd/",
  address: "Mirar Maidan, Sylhet, Bangladesh",
} as const;

export const navigation = [
  { href: "/about", label: "About" },
  { href: "/membership", label: "Membership" },
  { href: "/batches", label: "Batches" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/transparency", label: "Transparency" },
  { href: "/contact", label: "Contact" },
] as const;
