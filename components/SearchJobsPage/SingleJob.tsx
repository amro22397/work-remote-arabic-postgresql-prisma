"use client";

import Image from "next/image";
import React from "react";

import { MdFavoriteBorder } from "react-icons/md";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { JobData } from "@/types/jobData";

const SingleJob = ({
  job,
  stringTruncation,
  key
}: {
  job: JobData,
  stringTruncation: (str: string, strLenght: number) => string,
  key: string
}) => {
  const SearchJobsPage = useTranslations("SearchJobsPage");

  return (
    <div className="flex flex-col justify-center items-center gap-[4.5px] w-full"
    key={key}>
      <div className="flex flex-row justify-between items-center w-full px-2">
        <h3 className="text-xl font-semibold">
        {job.jobTitle}
        </h3>

        <MdFavoriteBorder size={25} className="cursor-pointer" />
      </div>

      <div className="flex flex-row justify-start items-center gap-5 w-full">
        <Image
          src={job.contactPhoto || "/"}
          alt={job.jobTitle}
          width={100}
          height={100}
          className="w-10 h-10"
        />

        {/* <div className="flex flex-col justify-center">
          <span className="">Company Name</span>
          <span>Riyadh - Jeddah</span>
        </div> */}

        <div className="">
          <span className="">{job.jobType}</span>
        </div>
      </div>

      <div className="w-full">
        {stringTruncation(job.description, 40)}
      </div>

      <div className="flex flex-row items-center gap-2 px-2 w-full">
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
          {job.jobSalary}
        </span>

        <span
          className="font-semibold text-orange-700
          text-lg"
        >
          {job.jobSalaryPer}
        </span>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <span>2 hours ago</span>

        <Button
          className="bg-green-500 text-white cursor-pointer
            active:scale-95"
        >
          {SearchJobsPage("EasyApply")}
        </Button>
      </div>
    </div>
  );
};

export default SingleJob;
