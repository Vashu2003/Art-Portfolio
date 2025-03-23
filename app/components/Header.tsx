import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-base-200 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Name */}
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:text-primary">
            My Portfolio
          </Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-primary">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}