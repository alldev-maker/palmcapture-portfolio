import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CalendlyEmbed from "./CalendlyEmbed";

const NavItem = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li
      className={`font-voyage text-2xl text-black sm:text-lg lg:text-2xl ${isActive ? "font-bold text-brown-500" : ""}`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export const Header = () => {
  const calendlyRef = useRef();
  const [isShown, setIsShown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendlyRef.current && !calendlyRef.current.contains(event.target)) {
        setIsShown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header>
      <nav className="container relative flex flex-col items-center justify-between py-2 sm:flex-row md:py-4">
        <ul className="hidden items-center justify-center gap-4 sm:flex lg:gap-6">
          <li className="flex items-center gap-2.5">
            <a className="w-5 shrink-0" href="#" target="_blank">
              <img src="/instagram.svg" alt="instagram" />
            </a>
            <a className="w-5 shrink-0" href="#" target="_blank">
              <img src="/youtube.svg" alt="youtube" />
            </a>
          </li>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/services">Services</NavItem>
        </ul>

        <div className="flex w-full justify-between sm:w-auto sm:justify-center">
          <Link href="/" className="sm:mx-3">
            <img
              src="/logo.svg"
              alt="logo"
              className="w-[100px] lg:w-[138px]"
            />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
            <img src="/burger.svg" alt="Menu" className="w-6" />
          </button>
        </div>

        <ul className="hidden items-center justify-center gap-4 sm:flex lg:gap-6">
          <NavItem href="/about">About</NavItem>
          <NavItem href="/portfolio">Portfolio</NavItem>
          <li className="shrink-0">
            <button
              onClick={() => setIsShown(true)}
              className="rounded-md bg-brown-500 p-2.5 text-center font-voyage text-lg font-bold text-white lg:text-2xl"
            >
              Book a session
            </button>
          </li>
        </ul>
        <ul
          className={`absolute top-full z-50 w-full flex-col items-center justify-center gap-4 bg-white px-4 py-6 sm:hidden ${isOpen ? "flex" : "hidden"}`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/portfolio">Portfolio</NavItem>
          <li>
            <button
              onClick={() => {
                setIsShown(true);
                setIsOpen(false);
              }}
              className="rounded-md bg-brown-500 p-2.5 text-center font-voyage text-lg font-bold text-white lg:text-2xl"
            >
              Book a session
            </button>
          </li>
        </ul>
      </nav>
      {isShown && (
        <div ref={calendlyRef}>
          <CalendlyEmbed onClose={() => setIsShown(false)} />
        </div>
      )}
    </header>
  );
};
