import { Navigation } from "@/components/navigation";
export default function Home() {
  return (
    <>
      <Navigation links={[{ label: "About", href: "#about" }]} />
    </>
  );
}
