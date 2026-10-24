import { Directory } from "@/components/Directory";
import { posts } from "@/lib/data";

export const metadata = { title: "Community" };

export default function Page() {
  return <Directory eyebrow="Community" title="Discussions and shared knowledge" desc="Ask questions, share tutorials and learn from other members." items={posts} cta="New post" />;
}
