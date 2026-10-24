import { Directory } from "@/components/Directory";
import { groups } from "@/lib/data";

export const metadata = { title: "Groups" };

export default function Page() {
  return <Directory eyebrow="Groups" title="Learning circles and interest groups" desc="Find people who care about the same technology as you." items={groups} />;
}
