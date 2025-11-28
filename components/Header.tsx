import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            className="h-8 w-auto cursor-pointer"
            src="assets/icons/logo.svg"
            alt="Logo"
            width={140}
            height={140}
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <Dropdown />
      </div>
    </header>
  );
};

export default Header;
