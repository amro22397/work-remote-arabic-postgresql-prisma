import { getLocale, getTranslations } from "next-intl/server";

import { getUser } from "@/actions/getUser";
import { redirect } from "next/navigation";
import HomePage from "./HomePage";

const page = async () => {
  const homePage = await getTranslations("HomePage");

  const user = await getUser();
 const jUser = JSON.parse(JSON.stringify(user) || '{}')
 const locale = await getLocale();

 console.log(jUser)

 
  // if (!jUser?.user?.email) {
  //   redirect(`/${locale}/register`);
  // }

  return (
    <HomePage user={jUser} />
  );
};

export default page;
