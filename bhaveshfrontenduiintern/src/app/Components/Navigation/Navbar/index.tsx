import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Button from "./button";
// import {gasp} from "gasp";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-slate-50 sticky top-0">
        <div className="container mx-auto px-10 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-10 text-black">
              <li>
                <Link href="/emotions">
                  <p>Emotions</p>
                </Link>
              </li>
              <li>
                <Link href="/manifesto">
                  <p>Manifesto</p>
                </Link>
              </li>
              <li>
                <Link href="/test">
                  <p>Self-awareness test</p>
                </Link>
              </li>
              <li>
                <Link href="/workWithUs">
                  <p>Work With Us </p>
                </Link>
              </li>
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;