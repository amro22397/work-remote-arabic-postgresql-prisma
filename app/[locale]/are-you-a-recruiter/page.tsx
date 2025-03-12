'use client'

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {

    const areYouRecruiterPage = useTranslations("AreYouRecruiterPage")

    const router = useRouter();
    const locale = useLocale();

  return (
    <Container className="flex flex-col items-center justify-center">
      <SectionTitle
        preTitle="Nextly Benefits"
        isPreTitle={false}
        title={areYouRecruiterPage("title")}
      >
        {areYouRecruiterPage("Description")}
      </SectionTitle>

      <Link
      href={`/${locale}/are-you-a-recruiter/add-job`}
      className="bg-green-500 hover:bg-green-600 active:bg-green-700
       text-white text-2xl py-2 px-5 cursor-pointer rounded-sm"
      //  onClick={() => router.push(`/${locale}/are-you-a-recruiter/add-job`)}
      >
        أضف عمل
      </Link>
    </Container>
  );
};

export default page;
