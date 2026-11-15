import { PressGlobe } from "../ui/PressGlobe";

const mentions = [
  {
    id: "london",
    quote: "ARDOR cuts through the noise of fast fashion with silhouettes that actually hold their shape.",
    name: "Amelia Hart",
    role: "Fashion Editor",
    company: "The Drape",
    city: "London",
    country: "GB",
    lat: 51.51,
    lng: -0.13,
    image: "/press-1.jpg",
  },
  {
    id: "paris",
    quote: "A rare new label that treats construction as seriously as concept.",
    name: "Noé Lefebvre",
    role: "Senior Critic",
    company: "Maison Courant",
    city: "Paris",
    country: "FR",
    lat: 48.8566,
    lng: 2.3522,
    image: "/press-2.jpg",
  },
  {
    id: "milan",
    quote: "Every piece reads like it was made to be worn for a decade, not a season.",
    name: "Giulia Conti",
    role: "Fashion Director",
    company: "Rivista Nera",
    city: "Milan",
    country: "IT",
    lat: 45.4642,
    lng: 9.19,
    image: "/press-3.jpg",
  },
  {
    id: "new-york",
    quote: "ARDOR's debut collection is the most confident thing to come out of streetwear-adjacent fashion this year.",
    name: "Owen Pratt",
    role: "Contributing Writer",
    company: "Fieldnote",
    city: "New York",
    country: "US",
    lat: 40.7128,
    lng: -74.006,
    image: "/press-4.jpg",
  },
  {
    id: "tokyo",
    quote: "Minimal without being boring — the detailing rewards a closer look.",
    name: "Haruto Kondo",
    role: "Style Columnist",
    company: "Shibuya Standard",
    city: "Tokyo",
    country: "JP",
    lat: 35.6762,
    lng: 139.6503,
    image: "/press-5.jpg",
  },
  {
    id: "seoul",
    quote: "Structured, warm, and refreshingly unbothered by trend cycles.",
    name: "Hana Baek",
    role: "Senior Editor",
    company: "Studio Seoul",
    city: "Seoul",
    country: "KR",
    lat: 37.5665,
    lng: 126.978,
    image: "/press-6.jpg",
  },
  {
    id: "sydney",
    quote: "A brand that understands restraint is its own kind of luxury.",
    name: "Isla Fenwick",
    role: "Features Editor",
    company: "The Quarterly",
    city: "Sydney",
    country: "AU",
    lat: -33.8688,
    lng: 151.2093,
    image: "/press-7.jpg",
  },
  {
    id: "sao-paulo",
    quote: "ARDOR's first drop sold out before most people had heard the name.",
    name: "Lucas Teixeira",
    role: "Fashion Writer",
    company: "Vértice Mag",
    city: "São Paulo",
    country: "BR",
    lat: -23.5505,
    lng: -46.6333,
    image: "/press-8.png",
  },
];

export default function PressMentions() {
  return (
    <PressGlobe
      items={mentions}
      eyebrow="06 — In The Press"
      heading="Noticed before we introduced ourselves."
      caption="ARDOR hasn't run a single ad yet. This is what editors are saying anyway."
      autoplay
      interval={4000}
      autoRotate
      labels={{
        previous: "Previous mention",
        next: "Next mention",
        pin: "Show the mention from",
      }}
      action={
        <a
          href="#"
          className="inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent-hover"
        >
          Read Full Coverage
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h9.5M8.5 4l4 4-4 4" />
          </svg>
        </a>
      }
    />
  );
}