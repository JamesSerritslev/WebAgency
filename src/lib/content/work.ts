export const projects = [
  {
    slug: "analogue-room",
    title: "Analogue Room",
    location: "Solvang, California",
    category: "Vinyl lounge and wine bar",
    url: "https://www.analogueroom.com",
    image: "/work/analogue-room.png",
    imageAlt:
      "Homepage of Analogue Room, a vinyl lounge and wine bar in Solvang, California",
    summary:
      "A custom site for a vinyl lounge and wine bar. Within the first month of SEO work, dozens of customers were already finding Analogue Room through its online presence.",
    metaDescription:
      "Case study: custom website and SEO for Analogue Room in Solvang. Within the first month of SEO work, dozens of customers found the vinyl lounge through its online presence.",
    keywords: [
      "bar website design",
      "vinyl lounge website",
      "restaurant SEO",
      "custom bar website",
    ],
    challenge:
      "A new nightlife room needed more than a template with stock photos. Guests search for wine bars, vinyl, pizza, and things to do nearby. The site had to feel like the room, load fast on a phone, and make hours, location, and menus obvious.",
    approach:
      "The site was written as a custom build, not a WordPress theme. Page structure follows how people search: vinyl lounge, wine bar, pizza, and private events. Copy, schema, and internal links support those queries without stuffing keywords.",
    result:
      "Analogue Room launched with a homepage that states the offer in seconds and dedicated paths for drinks and food. Within the first month of SEO work, dozens of customers were already finding the room through its online presence.",
  },
  {
    slug: "standing-sun-wines",
    title: "Standing Sun Wines",
    location: "Buellton, California",
    category: "Winery, events, and custom crush",
    url: "https://www.standingsunwines.com",
    image: "/work/standing-sun-wines.png",
    imageAlt:
      "Homepage of Standing Sun Wines, a custom crush winery and event space in Buellton, California",
    summary:
      "A custom winery site covering custom crush, live music, private events, and a sister vinyl lounge, with SEO-friendly paths for each offer.",
    metaDescription:
      "Case study: custom website for Standing Sun Wines in Buellton. Winery, custom crush, live events, and private bookings on a fast, searchable site.",
    keywords: [
      "winery website design",
      "wine store website",
      "event venue website",
      "custom crush website",
    ],
    challenge:
      "Standing Sun is a working winery, a concert room, a private event venue, and a custom crush facility. A single brochure page would bury the offers that bring in different customers.",
    approach:
      "The information architecture splits those jobs into clear routes: the winery, live events, private events, and the sister property. Each page can rank for its own searches while still feeling like one brand.",
    result:
      "Visitors can find concerts, book private events, or learn about custom crush without hunting. The site stays light, visual, and ready for content and SEO work as the calendar fills.",
  },
] as const;

export type Project = (typeof projects)[number];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
