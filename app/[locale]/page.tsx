import { getLocale } from "next-intl/server";

import { getUser } from "@/actions/getUser";
import { redirect } from "next/navigation";
import HomePage from "./HomePage";
import EmailIsNotVerified from "@/components/EmailIsNotVerified";
import prisma from "@/lib/prisma";

const page = async () => {
  // const homePage = await getTranslations("HomePage");

  const user = await getUser();
 const jUser = JSON.parse(JSON.stringify(user) || '{}')
 const locale = await getLocale();

 console.log(`Email is ${jUser?.user?.email}`)

 
 if (locale === 'en') {

  redirect(`/ar`)
 }

 
  if (!jUser?.user?.email) {
    redirect(`/${locale}/register`);
  }

  const sessionUser = await prisma?.user?.findUnique({
    where: { email: jUser?.user?.email }
  })

  return (
    <>
    <EmailIsNotVerified session={sessionUser} />
    <HomePage user={jUser} />
    </>
  );
};

export default page;
