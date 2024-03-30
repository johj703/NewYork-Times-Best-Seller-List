import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link herf="/">Home</Link>
        </li>
        <li>
          <Link herf="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
