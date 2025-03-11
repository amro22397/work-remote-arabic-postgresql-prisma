'use client'

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const LogIn = () => {

    const locale = useLocale();
    const navbarPage = useTranslations("NavbarPage");

  return (
    <div className="hidden mr-3 lg:flex nav__item">
    <Link
      href={`/${locale}/login`}
      className="px-6 py-2 text-white bg-green-500
              hover:bg-green-600 active:scale-95 rounded-md md:ml-5
              text-xl"
    >
      {navbarPage("Log In")}
    </Link>
    </div>
  );
};

export default LogIn;
