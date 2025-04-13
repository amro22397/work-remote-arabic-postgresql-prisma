"use client";

import axios from "axios";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";
import { JobData } from "@/types/jobData";


const SearchJobs = ({ jobs }: {
  jobs: JobData[],
}) => {
  const SearchJobsPage = useTranslations("SearchJobsPage");

  const searchParams = useSearchParams() as any;

  const jobTitle = searchParams?.get("jobTitle");

  const location = searchParams?.get("location");

  const stringTruncation = (str: string, strLenght: number) => {
    if (str?.length >= 40) {
      return str.substring(0, strLenght) + "...";
    }
    return str;
  };


  

  return (
    <div
      className="bg-white px-4 pt-4 pb-5 rounded-md border border-gray-400/50 w-160
    flex flex-col items-center justify-center gap-5"
    >
      <h3
        className="text-[25.5px] font-semibold flex flex-wrap gap-[6px] w-full
      px-1 pb-5"
      >
        <span className="">{SearchJobsPage("Jobs")}</span>

        <span className="">{jobTitle}</span>

        {location?.trim() !== "" && (
          <>
            <span className="">{SearchJobsPage("In")}</span>

            <span className="">{location}</span>
          </>
        )}
      </h3>

      <div className="flex flex-col justify-center items-center gap-4 w-full">

        {jobs.map((job, index) => (
          <SingleJob job={job} key={job._id} stringTruncation={stringTruncation}
          jobs={jobs} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SearchJobs;
