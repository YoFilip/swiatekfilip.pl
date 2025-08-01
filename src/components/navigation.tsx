import { CodeXml, Sun, Languages } from "lucide-react";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

type NavigationProps = {
  links: NavLink[];
};

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav className="w-full xl:border-none border-b border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-3 items-center max-w-4xl mx-auto px-6 py-7 xl:py-10">
        <div>
          <Link href="/">
            <CodeXml className="w-5 h-5 text-gray-500" />
          </Link>
        </div>

        <div className="flex justify-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-gray-600 dark:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex justify-end items-center gap-5 xl:gap-10 text-gray-500">
          <Sun className="w-5 h-5" />
          <Languages className="w-5 h-5" />
        </div>
      </div>
    </nav>
  );
};
