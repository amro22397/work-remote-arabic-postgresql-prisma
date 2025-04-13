"use client";

import Image from "next/image";
import React from "react";

import { MdFavoriteBorder } from "react-icons/md";
import { Button } from "../ui/button";
import { useLocale, useTranslations } from "next-intl";
import { JobData } from "@/types/jobData";

import { formatDistanceToNow } from "date-fns";

import { ar, enGB } from "date-fns/locale";

const SingleJob = ({
  job,
  stringTruncation,
  key,
  jobs,
  index
}: {
  job: JobData;
  stringTruncation: (str: string, strLenght: number) => string;
  key: string;
  jobs: JobData[];
  index: number;
}) => {
  const SearchJobsPage = useTranslations("SearchJobsPage");
  const locale = useLocale();

  return (
    <div
      className="flex flex-col justify-center items-center gap-[4.5px] w-full"
      key={key}
    >
      <div className="flex flex-row justify-between items-center w-full px-2">
        <h3 className="text-xl font-semibold">{job.jobTitle}</h3>

        <MdFavoriteBorder size={25} className="cursor-pointer" />
      </div>

      <div className="flex flex-row justify-start items-center gap-5 w-full">
        {job.contactPhoto && (
          <Image
            src={job.contactPhoto || "/"}
            alt={job.jobTitle}
            width={100}
            height={100}
            className="w-10 h-10"
          />
        )}

        {/* <div className="flex flex-col justify-center">
          <span className="">Company Name</span>
          <span>Riyadh - Jeddah</span>
        </div> */}

        <div className="bg-blue-500 px-[13.5px] pt-[2.5px] pb-[5.25px] my-[3px] rounded-full text-white">
          <span className="text-sm font-semibold">{job.jobType}</span>
        </div>
      </div>

      <div className="w-full mt-[2px]">
        {stringTruncation(job.description, 80)}
      </div>

      <div className="flex flex-row items-center gap-1 px-2 w-full">
        <span
          className="font-semibold text-orange-700
          text-lg"
        >
          {job.jobSalary}
        </span>

        <span
          className="font-semibold text-orange-700
          text-lg"
        >
          {job.currency}
        </span>

        <span
          className="font-semibold text-green-800
          text-[15.25px] px-1 mt-1"
        >
          {job.jobSalaryPer}
        </span>

        <div className=""></div>
      </div>

      <div className="flex flex-row justify-between items-center w-full mt-[2px]">
        <span className="text-sm font-semibold text-gray-700/90">
          {formatDistanceToNow(new Date(job.createdAt), {
            addSuffix: true,
            locale: locale === "ar" ? ar : enGB,
          })}
        </span>

        {job.wantEasyApply ? (
          <Button
            className="bg-green-500 text-white cursor-pointer
            active:scale-95 text-[14.75px]"
          >
            {SearchJobsPage("EasyApply")}
          </Button>
        ) : (
          <Button
            className="bg-purple-600 text-white cursor-pointer
            active:scale-95 text-[16px]"
          >
            {SearchJobsPage("ApplyOnEmployetSite")}
          </Button>
        )}
      </div>

      {index !== jobs.length - 1 && (
        <div className="border-b border-gray-400/50 w-full px-1 mt-4"></div>
      )}
    </div>
  );
};

export default SingleJob;
