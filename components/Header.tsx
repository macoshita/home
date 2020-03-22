import Link from "next/link";

const Header = (): JSX.Element => (
  <header>
    <h1>
      <Link href="/">
        <a>macoshita</a>
      </Link>
    </h1>
  </header>
);

export default Header;
