import Link from "next/link";

export default function CustomLink({ href, children }: { href: string; children: string }) {
  // const path = window.location.pathname;

  return (
    <li>
      <Link className="next-link" href={href}>
        {children}
      </Link>
    </li>
  );
}
