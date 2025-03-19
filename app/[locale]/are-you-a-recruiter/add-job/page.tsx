import { getUser } from "@/actions/getUser";
import AddJobForm from "./AddJobForm";
import { getLocale } from "next-intl/server";


const page = async () => {

  const user = await getUser();
 const jUser = JSON.parse(JSON.stringify(user) || '{}')
 const locale = await getLocale();

 console.log(jUser)

  return (
    <AddJobForm email={jUser?.user?.email} />
  );
};

export default page;
