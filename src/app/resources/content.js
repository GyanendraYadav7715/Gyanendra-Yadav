import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Gyanendra",
  lastName: "Yadav",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer",
  avatar: "/images/avatar.jpeg",
  email: "codeaura108@gmail.com",
  location: "Asia/Kolkata",// Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/GyanendraYadav7715",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gyanendra-yadav-059725253/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Gyan09335978",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }} />, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Highly accomplished Full Stack Developer with a strong focus on delivering results. Proven expertise in the end-to-end design, development, and deployment of scalable web applications. Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) and TypeScript, with additional skills in building robust microservices using Java and Spring Boot. Possesses a solid background in problem-solving and algorithms, consistently providing high-quality solutions for intricate business challenges.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Startupway24",
        timeframe: "2023 - Present",
        role: " Mid-Senior Web Developer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/startup.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },

    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Indira Gandhi National Open University",
        description: <>Studied Bachelor of Computer Applications(BCA).</>,
      },

    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3,
            Tailwind CSS, Material-UI, Redux, React Query, Zustand.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/html.jpg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/css.jpg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/js.jpg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/tailwind.jpeg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/react.jpeg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          
        ],
      },
      {
        title: "Backend",
        description: (
          <>Node.js (Express.js, TypeScript, REST APIs, Middleware, JWT Authentication)</>
        ),
        images: [
          {
            src: "/images/projects/project-01/nodejs.jpg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/ts.jpeg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
        ],
      },
      {
        title: "Java",
        description: (
          <>Spring Boot, Microservices, REST APIs, Hibernate</>
        ),
        images: [
          {
            src: "/images/projects/project-01/spring.jpg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
        ],
      },
      {
        title: "Databases",
        description: (
          <>MongoDB, PostgreSQL, MySQL, SQL</>
        ),
        images: [
          {
            src: "/images/projects/project-01/mongo.jpeg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/mysql.webp",
            alt: "Project image",
            width: 3,
            height: 3,
          },
        ],
      },
      {
        title: "DevOps & Tools",
        description: (
          <>Git, GitHub, CI/CD, Vercel, Docker (Basic), AWS (EC2, S3 - Basic)</>
        ),
        images: [
          {
            src: "/images/projects/project-01/git.jpeg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/github.webp",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/aws.jpg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/docker.webp",
            alt: "Project image",
            width: 3,
            height: 3,
          },
        ],
      },
      {
        title: "Core Concepts",
        description: (
          <>Data Structures & Algorithms, Object-Oriented Programming (OOP),
            Microservice Architecture, Monolithic Architecture, System Design</>
        ),
        images: [
          {
            src: "/images/projects/project-01/dsa.webp",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/network.jpg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
        ],
      },
    ],
  },

};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
