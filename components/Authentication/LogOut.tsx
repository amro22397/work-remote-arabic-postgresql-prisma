"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";

const LogOut = () => {
  const locale = useLocale();
  const navbarPage = useTranslations("NavbarPage");

  return (
    <div className="hidden mr-3 lg:flex nav__item">
      <Button
        className="px-6 py-2 text-white bg-red-500
              hover:bg-red-600 active:scale-95 rounded-md md:ml-5
              text-xl"
      >
        {navbarPage("Log Out")}
      </Button>
    </div>
  );
};

export default LogOut;
