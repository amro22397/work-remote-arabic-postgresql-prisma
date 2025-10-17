import { getUser } from "@/actions/getUser";
import ForgetForm from "@/components/ForgetForm";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {

    

  const session = await getUser();
  const jUser = JSON.parse(JSON.stringify(session) || '{}')


  console.log(jUser);


    if (jUser?.user?.email) {
      redirect('/');
    }
        

  return (
    <div className="flex min-h-[80vh] w-full items-center justify-center p-6 md:p-10">
      {/* ^^^ do not overwrite this line */}
          <div className="w-full max-w-sm">
          <ForgetForm />
          </div>
        </div>
  )
}

export default page
