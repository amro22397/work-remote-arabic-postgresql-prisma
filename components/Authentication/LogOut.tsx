"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const LogOut = () => {
  const locale = useLocale();
  const navbarPage = useTranslations("NavbarPage");

  return (
    <div className="lg:mr-3 mr-0">
      <Button
        className="px-6 pt-[22px] pb-6 text-white bg-red-500
              hover:bg-red-600 active:scale-95 rounded-md md:ml-5
              text-xl cursor-pointer"
        onClick={() => signOut({ callbackUrl: `/${locale}/login` })}
      >
        {navbarPage("Log Out")}
      </Button>
    </div>
  );
};

export default LogOut;
