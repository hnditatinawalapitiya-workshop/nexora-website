import { Directory } from "@/components/Directory";
import { projects } from "@/lib/data";

export const metadata = { title: "Projects" };

export default function Page() {
  return <Directory eyebrow="Projects" title="Build real solutions together" desc="Browse member projects, join one, or submit your own idea." items={projects} cta="Submit a project" />;
}
