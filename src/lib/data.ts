// Sample content for the MVP front-end. Replaced by database queries (Prisma) in a later phase.

export type Item = {
  slug: string;
  title: string;
  meta: string;
  desc: string;
  tags: string[];
};

export const nav = [
  { href: "/community", label: "Community" },
  { href: "/learning", label: "Learning" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/groups", label: "Groups" },
  { href: "/about", label: "About" },
];

export const topics = [
  "Web Development",
  "Mobile Apps",
  "AI & Machine Learning",
  "Cybersecurity",
  "UI/UX Design",
  "Cloud & DevOps",
  "Data Science",
  "Open Source",
];

export const pillars = [
  { title: "Community", desc: "Ask questions, share tutorials and discuss ideas with students who get it.", href: "/community" },
  { title: "Learning", desc: "Roadmaps, guides and curated resources from beginner to advanced.", href: "/learning" },
  { title: "Projects", desc: "Publish your idea, find collaborators and ship something real.", href: "/projects" },
  { title: "Events", desc: "Workshops, talks and meetups, online and in person.", href: "/events" },
];

export const groups: Item[] = [
  { slug: "web", title: "Web Development", meta: "Frontend · Backend", desc: "From HTML basics to full-stack frameworks. Build and review each other's sites.", tags: ["React", "Next.js", "Node"] },
  { slug: "mobile", title: "Mobile Development", meta: "iOS · Android", desc: "Native and cross-platform app builders sharing tips and prototypes.", tags: ["Flutter", "Kotlin", "Swift"] },
  { slug: "ai", title: "AI & Machine Learning", meta: "Research · Practice", desc: "Study circles, paper reading and hands-on model building.", tags: ["Python", "PyTorch", "LLMs"] },
  { slug: "security", title: "Cybersecurity", meta: "Defense · CTF", desc: "Learn to defend systems, practise in CTFs and discuss responsible disclosure.", tags: ["CTF", "Networking", "AppSec"] },
  { slug: "design", title: "UI/UX Design", meta: "Product · Visual", desc: "Design critiques, Figma resources and accessibility practice.", tags: ["Figma", "Research", "A11y"] },
  { slug: "cloud", title: "Cloud & DevOps", meta: "Infra · CI/CD", desc: "Containers, pipelines and deploying projects reliably.", tags: ["Docker", "AWS", "CI/CD"] },
  { slug: "data", title: "Data Science", meta: "Analytics · ML", desc: "Datasets, notebooks and visualisation practice together.", tags: ["SQL", "Pandas", "Viz"] },
  { slug: "oss", title: "Open Source", meta: "Contribute", desc: "Make your first pull request with friendly mentors beside you.", tags: ["Git", "GitHub", "Mentoring"] },
];

export const posts: Item[] = [
  { slug: "first-rest-api", title: "How do I structure my first REST API?", meta: "Question · 12 replies", desc: "I'm building a student portal backend and not sure how to split routes, services and validation.", tags: ["Node", "API"] },
  { slug: "git-workflow", title: "A simple Git workflow for student teams", meta: "Tutorial · 48 likes", desc: "Branching, pull requests and review habits that keep a group project from falling apart.", tags: ["Git", "Teamwork"] },
  { slug: "sql-vs-nosql", title: "SQL vs NoSQL for a final-year project?", meta: "Discussion · 31 replies", desc: "Our project has users, events and registrations. Which database fits and why?", tags: ["Databases"] },
  { slug: "ctf-weekend", title: "Beginner CTF weekend: who's in?", meta: "Announcement · 22 joined", desc: "We're forming a team for the next beginner-friendly capture the flag.", tags: ["Security", "CTF"] },
];

export const resources: Item[] = [
  { slug: "web-roadmap", title: "Web Developer Roadmap", meta: "Learning path · 12 steps", desc: "HTML, CSS, JavaScript, React and backend fundamentals in a sensible order.", tags: ["Beginner", "Web"] },
  { slug: "python-start", title: "Python from Zero", meta: "Tutorial · 2h", desc: "Variables to small projects, with exercises after every section.", tags: ["Beginner", "Python"] },
  { slug: "sql-essentials", title: "SQL Essentials", meta: "Guide · 90 min", desc: "Queries, joins and indexes explained with a real events schema.", tags: ["Databases"] },
  { slug: "web-security", title: "Web Security Basics", meta: "Article · 25 min", desc: "XSS, CSRF, injection and authentication mistakes to avoid.", tags: ["Security"] },
  { slug: "docker-intro", title: "Docker for Beginners", meta: "Video · 40 min", desc: "Containers, images and compose, with a project you can run today.", tags: ["DevOps"] },
  { slug: "figma-101", title: "Figma in an Afternoon", meta: "Tutorial · 3h", desc: "Frames, components and auto layout to design your first app screen.", tags: ["Design"] },
];

export const projects: Item[] = [
  { slug: "campus-connect", title: "Campus Connect", meta: "Looking for 2 contributors", desc: "A timetable and notice-board app for university students.", tags: ["Next.js", "PostgreSQL"] },
  { slug: "study-buddy-ai", title: "Study Buddy AI", meta: "In progress · 60%", desc: "Turns lecture notes into flashcards and practice questions.", tags: ["Python", "LLM"] },
  { slug: "safe-scan", title: "SafeScan", meta: "Idea stage", desc: "A beginner-friendly web vulnerability checklist scanner.", tags: ["Security", "Go"] },
  { slug: "green-route", title: "GreenRoute", meta: "Looking for a designer", desc: "Route suggestions that favour public transport and walking.", tags: ["Flutter", "Maps"] },
];

export const events: Item[] = [
  { slug: "git-workshop", title: "Git & GitHub Workshop", meta: "Online · Saturday 10:00", desc: "Hands-on session: commits, branches, pull requests and resolving conflicts.", tags: ["Workshop", "Online"] },
  { slug: "ai-talk", title: "AI in the Real World", meta: "On campus · Next month", desc: "A practitioner talk followed by an open Q&A.", tags: ["Talk", "Offline"] },
  { slug: "hack-night", title: "NEXORA Hack Night", meta: "Hybrid · Quarterly", desc: "Team up, build a prototype in one evening and demo it.", tags: ["Hackathon", "Hybrid"] },
];

export const members: Item[] = [
  { slug: "nimali", title: "Nimali P.", meta: "Full-stack · Mentor", desc: "Loves teaching React and reviewing first pull requests.", tags: ["React", "Node"] },
  { slug: "kasun", title: "Kasun R.", meta: "Cybersecurity", desc: "CTF player and AppSec enthusiast.", tags: ["Security"] },
  { slug: "tharushi", title: "Tharushi D.", meta: "UI/UX Designer", desc: "Designs accessible, calm interfaces.", tags: ["Figma", "A11y"] },
  { slug: "sahan", title: "Sahan W.", meta: "ML Engineer", desc: "Building study tools with language models.", tags: ["Python", "ML"] },
];

export const features = [
  { title: "A community built for knowledge", desc: "Posts support Markdown and code blocks, with tags, threaded replies, bookmarks and unanswered filters so good questions never get lost.", points: ["Questions, tutorials and discussions", "Moderated and respectful", "Search, trending and newest"] },
  { title: "Learn in a clear order", desc: "Follow learning paths from beginner to advanced, save resources for later and track what you've started and finished.", points: ["Roadmaps and step-by-step guides", "Bookmarks and progress", "Members can contribute resources"] },
  { title: "Turn ideas into shipped projects", desc: "Submit your idea, list the roles you need, review collaboration requests and share milestones and your GitHub repository.", points: ["Open contributor roles", "Milestones and updates", "Showcase with GitHub and demo links"] },
  { title: "Learn together, in real life", desc: "Register for workshops and meetups. Seats are capped fairly, duplicates are blocked, and you get updates if anything changes.", points: ["Online and on-campus events", "Capacity-aware registration", "Reminders and announcements"] },
];

export const stats = [
  { v: "8", l: "Interest groups" },
  { v: "4", l: "Core pillars" },
  { v: "100%", l: "Student-driven" },
  { v: "Free", l: "To join" },
];

export const faqs = [
  { q: "Who can join NEXORA?", a: "Any IT student, beginner, developer or mentor who wants to learn and build with others. Create a free account and verify your email to get started." },
  { q: "Is NEXORA only for students?", a: "It's student-driven, but mentors and professionals who want to help the community are very welcome." },
  { q: "How do projects find collaborators?", a: "Publish your project with the roles you need. Interested members send a collaboration request and the project lead reviews it." },
  { q: "Are events free?", a: "Most community workshops are free. Each event page shows its capacity, deadline and location before you register." },
  { q: "How is content moderated?", a: "Members can report content. Moderators review reports and every important admin action is recorded in an audit log." },
  { q: "Is my data safe?", a: "Passwords are stored as hashes, sessions are server-side and we only collect what the platform needs. See our Privacy Policy for details." },
];

export const testimonials = [
  { name: "Early member", role: "Software Engineering student", quote: "Finally a place where my beginner questions get real answers instead of being ignored." },
  { name: "Study group lead", role: "Web Development circle", quote: "We found two teammates for our final-year project within a week." },
  { name: "Workshop speaker", role: "Mentor", quote: "The events are well organised and the audience actually builds things afterwards." },
];
