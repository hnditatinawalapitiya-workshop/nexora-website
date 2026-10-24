import { Directory } from "@/components/Directory";
import { members } from "@/lib/data";

export const metadata = { title: "Members" };

export default function Page() {
  return <Directory eyebrow="Members" title="Meet the community" desc="Skills, portfolios and people to collaborate with." items={members} />;
}
