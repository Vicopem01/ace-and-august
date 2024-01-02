import Link from "next/link";
import Logo from "@/public/img/brand/logo.png";
import Image from "next/image";
import Arrow from "@/public/img/icons/arrow-right.svg";

const Header = () => {
  return (
    <header className="text-blue font-semibold flex justify-between items-center px-s3 py-s5">
      <Link href="/">
        <Image src={Logo} alt="" width={100} height={300} />
      </Link>

      <div>
        <Link href="/">About Us</Link>
        <Link href="/" className="mx-s3">
          Blog
        </Link>
        <Link href="/">Career</Link>
      </div>

      <div className="hidden md:block">
        <Link href="/">Media</Link>
        <Link href="/" className="mx-s3">
          Stories
        </Link>
        <Link href="/">Contact</Link>
      </div>

      <button className="rounded-full bg-green hover:bg-blue">
        <Image src={Arrow} alt="" width={40} height={40} />
      </button>
    </header>
  );
};

export default Header;
