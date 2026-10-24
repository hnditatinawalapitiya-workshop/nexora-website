import Image from "next/image";
import logo from "@/assests/NEXORA Logo.png";

// Transparent 2:1 logo from src/assests. `width` drives the size; height follows the aspect ratio.
export function Logo({ width = 120, className = "", priority = false }: { width?: number; className?: string; priority?: boolean }) {
  return (
    <Image
      src={logo}
      alt="NEXORA"
      width={width}
      height={Math.round(width / 2)}
      priority={priority}
      className={className}
    />
  );
}
