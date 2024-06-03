import Link from "next/link";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export function Footer() {
  return (
    <footer className="bg-brown-500 py-10 sm:py-14">
      <div className="container">
        <div className="flex flex-col items-center">
          <Link href="/">
            <img
              src="/logo-white.svg"
              alt="logo"
              className="w-[100px] lg:w-[205px]"
            />
          </Link>
          <ul className="mb-5 mt-4 flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="font-voyage text-lg text-white md:text-2xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="font-voyage text-lg text-white md:text-2xl"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-voyage text-lg text-white md:text-2xl"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="font-voyage text-lg text-white md:text-2xl"
              >
                Portfolio
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="mailto:palmcapture@gmail.com"
                className="font-monts text-base text-white"
              >
                <AiOutlineMail size={24} />
              </a>
            </li>
            <li>
              <a
                href="tel:+1305 399 7537"
                target="_blank"
                className="font-monts text-base text-white"
              >
                <AiOutlinePhone size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/palmcapture/"
                target="_blank"
                className="font-monts text-base text-white"
              >
                <AiFillInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
