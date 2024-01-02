import Link from "next/link";
import Logo from "@/public/img/brand/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image src={Logo} alt="" width={30} height={30} />
      </Link>

      helloooo
    </header>
  );
};

export default Header;
