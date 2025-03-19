"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { JobData } from "@/types/jobData";
import { useRouter, useSearchParams } from "next/navigation";

const Filters = ({ jobTitleSearch, 
  setjobTitle , 
  locationSearch, 
  setLocation, 
  allCountriesCheck, 
  setAllCountriesCheck,
  isWorkRemotely,
  setIsWorkRemotely,
  datePosted,
  setDatePosted,
  fetchJobs,
 }: {
  jobTitleSearch: string, 
  setjobTitle: (value: string) => void,
  locationSearch: string, 
  setLocation: (value: string) => void,
  allCountriesCheck: boolean,
  setAllCountriesCheck: (value: boolean) => void,
  isWorkRemotely: boolean,
  setIsWorkRemotely: (value: boolean) => void,
  datePosted: string,
  setDatePosted: (value: string) => void,
  fetchJobs: () => void,
}) => {
  const SearchJobsPage = useTranslations("SearchJobsPage");
  const locale = useLocale();

  const [jobs, setJobs] = useState([]);
  
  

  const searchParams = useSearchParams() as any;
    const router = useRouter();
  
    const jobTitle = searchParams?.get("jobTitle");
  
    const location = searchParams?.get("location");

  console.log(allCountriesCheck)

  useEffect(() => {
    
    if (allCountriesCheck === true) {
      router.push(
        `/${locale}/search-jobs?jobTitle=${jobTitle}&location=`
      );
      fetchJobs();
    } else {
      router.push(
        `/${locale}/search-jobs?jobTitle=${jobTitle}&location=${locationSearch}`
      );
      fetchJobs();

    }

  }, [allCountriesCheck]);

  return (
    <div
      className="bg-white px-4 pt-4 pb-5 rounded-md border border-gray-400/50 w-72
    flex flex-col items-center justify-center gap-5"
    >
      <h3
        className="font-semibold text-gray-800 text-xl
      border-b border-gray-700/50 pb-2 w-full px-1"
      >
        {SearchJobsPage("Filters")}
      </h3>

      <div
        className="flex flex-col justify-center items-start gap-2 w-full
      px-[10.5px]"
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="remotely" />
          <Label htmlFor="remotely">{SearchJobsPage("Work Remotely")}</Label>
        </div>

        <div className="w-full my-2 flex flex-col justify-center items-start gap-2">
          <h3
            className="pt-[3px] pb-[6.5px] my-3 border-t border-b w-full
      border-gray-900/50 px-2 text-[17.75px]"
          >
            {SearchJobsPage("DatePosted")}
          </h3>

          <div className="flex flex-col justify-center items-start gap-[13.25px] w-full">
            <div className="flex items-center space-x-2">
              <Checkbox id="any-time" />
              <Label htmlFor="any-time">{SearchJobsPage("AllDays")}</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="one-week" />
              <Label htmlFor="one-week">{SearchJobsPage("OneWeek")}</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="two-weeks" />
              <Label htmlFor="two-weeks">{SearchJobsPage("TwoWeeks")}</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="one-month" />
              <Label htmlFor="one-month">{SearchJobsPage("OneMonth")}</Label>
            </div>
          </div>
        </div>

        <div className="w-full my-2 flex flex-col justify-center items-start gap-2">
          <h3
            className="pt-[3px] pb-[6.5px] my-3 border-t border-b w-full
      border-gray-900/50 px-2 text-[17.75px]"
          >
            {SearchJobsPage("Countries")}
          </h3>
        </div>

        <div className="flex flex-col justify-center items-start gap-[13.25px] w-full">
          <div className="flex items-center space-x-2">
            <Checkbox id="all-countries"
            defaultChecked={allCountriesCheck}
            onCheckedChange={() => {
              setAllCountriesCheck(!allCountriesCheck)
            }
            }
             />
            <Label htmlFor="all-countries">{SearchJobsPage("AllCountry")}</Label>
          </div>

          {jobs.map((job: JobData, index: number) => (
            <div className="hidden items-center space-x-2">
              <Checkbox id="job-country" />
              <Label htmlFor="job-country">{job.country}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
