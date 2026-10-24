import { Directory } from "@/components/Directory";
import { events } from "@/lib/data";

export const metadata = { title: "Events" };

export default function Page() {
  return <Directory eyebrow="Events" title="Learn together in real life" desc="Workshops, talks and meetups, online and in person." items={events} />;
}
