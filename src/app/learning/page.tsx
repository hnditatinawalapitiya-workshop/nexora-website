import { Directory } from "@/components/Directory";
import { resources } from "@/lib/data";

export const metadata = { title: "Learning Hub" };

export default function Page() {
  return <Directory eyebrow="Learning hub" title="Roadmaps, tutorials and resources" desc="A curated library to take you from beginner to advanced." items={resources} />;
}
