"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const navbarPage = useTranslations("NavbarPage");
  return (
    <Link href="/">
    <span
      className="text-[30.25px] font-medium
          bg-blue-500 active:bg-blue-700
          transition-all duration-100
           px-[22px] pt-[1.5px] pb-[7.5px] rounded-md text-white "
    >
      {navbarPage("Work Remotely")}
    </span>
    </Link>
  );
};

export default Logo;
