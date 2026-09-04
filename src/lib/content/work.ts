import { CONTACT_EMAIL } from "@/lib/brand";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  url: string;
  image: string;
  imageAlt: string;
  summary: string;
  metaDescription: string;
  keywords: string[];
  challenge: string;
  approach: string;
  result: string;
  inquireEmail?: string;
  selected?: boolean;
};

export const projects: Project[] = [
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
    selected: true,
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
    selected: true,
  },
  {
    slug: "james-serritslev",
    title: "Personal Portfolio",
    location: "Portfolio",
    category: "Custom site to show your work",
    url: "https://www.jamesserritslev.com",
    image: "/work/james-serritslev.png",
    imageAlt:
      "Homepage of a personal portfolio site with an interactive fan of project cards",
    summary:
      "A custom portfolio you can send to potential clients, recruiters, or anyone you want to show your work to. The style is not limited. This is one look, not the only look.",
    metaDescription:
      "Case study: a custom personal portfolio for clients, recruiters, and anyone you want to show your work to. The style is not limited, and it is not only for resumes.",
    keywords: [
      "personal portfolio website",
      "custom portfolio site",
      "show your work online",
      "portfolio for clients",
    ],
    challenge:
      "A PDF or a social profile is easy to skip. Potential clients, recruiters, and anyone else you want to impress need a simple place to see the work. Artists, students, and people with previous projects all run into the same problem: there is no clean link that puts the work on display.",
    approach:
      "This is one example of a personal portfolio, not a template you have to copy. The style of these sites is not limited. After a short intro, this one shows an interactive visual of the work so someone can actually see what you have made. Yours can look completely different and still be personal, fast, and easy to share as a single link.",
    result:
      "These sites are not only for resumes. They are for potential clients, hiring managers, or anyone you want to show your work to without hunting through files. People can click through real projects instead of skimming a list, which makes it easier to remember you and say yes.",
    selected: true,
  },
  {
    slug: "bandscope",
    title: "BandScope",
    location: "Custom web application",
    category: "Music networking web app",
    url: "https://www.bandscope.net",
    image: "/work/bandscope.png",
    imageAlt:
      "BandScope connect page showing musician and band profiles, search, and account actions",
    summary:
      "A music networking web app with a full backend: accounts, user data, events, and notifications so people can find others to jam with. This was a passion project, and it sits outside the published pricing tiers.",
    metaDescription:
      "Case study: BandScope, a full music networking web app with accounts, events, and notifications. A passion project that shows what a larger custom build can be. Contact James directly for work at this scale.",
    keywords: [
      "custom web application",
      "music networking app",
      "full stack web app",
      "custom backend website",
    ],
    challenge:
      "Finding people to play with is messy. Musicians need a place to create an account, show what they play, track events, and get notified when something relevant happens. A brochure site cannot do that.",
    approach:
      "BandScope is a full application, not a marketing page. It holds user data, tracks events, sends notifications, and lets people sign up and find others to jam with. It took many hours as a passion project, and it is the kind of build that shows what a custom web app can do.",
    result: `This is not on the published tier list. If I were quoting something like this for a client, it would be a custom engagement from the start. If you want a big custom web app, contact me directly at ${CONTACT_EMAIL}.`,
    inquireEmail: CONTACT_EMAIL,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const selectedProjects = projects.filter((project) => project.selected);
