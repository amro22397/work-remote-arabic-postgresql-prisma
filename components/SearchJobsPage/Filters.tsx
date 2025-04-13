"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { JobData } from "@/types/jobData";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IoIosCloseCircle } from "react-icons/io";


const Filters = ({
  jobTitleSearch,
  setjobTitle,
  locationSearch,
  setLocation,
  allCountriesCheck,
  setAllCountriesCheck,
  isWorkRemotely,
  setIsWorkRemotely,
  datePosted,
  setDatePosted,
  fetchJobs,
  showFilters,
  setShowFilters
}: {
  jobTitleSearch: string;
  setjobTitle: (value: string) => void;
  locationSearch: string;
  setLocation: (value: string) => void;
  allCountriesCheck: boolean;
  setAllCountriesCheck: (value: boolean) => void;
  isWorkRemotely: boolean;
  setIsWorkRemotely: (value: boolean) => void;
  datePosted: string;
  setDatePosted: (value: string) => void;
  fetchJobs?: any;
  showFilters?: boolean;
  setShowFilters?: any;
}) => {
  const SearchJobsPage = useTranslations("SearchJobsPage");
  const locale = useLocale();

  const [jobs, setJobs] = useState([]);

  const [jobDurationFilter, setJobDurationFilter] = useState(SearchJobsPage("All"));
  const [jobTypeFilter, setJobTypeFilter] = useState(SearchJobsPage("All"));

  const searchParams = useSearchParams() as any;
  const router = useRouter();

  const jobTitle = searchParams?.get("jobTitle");

  const location = searchParams?.get("location");

  console.log(allCountriesCheck);


  const handleJobTypeSelectChange = (e: any) => {

    if (e === SearchJobsPage("All")) {
      setJobTypeFilter(SearchJobsPage("All"))
    }

    if (e === SearchJobsPage("On-site")) {
      setJobTypeFilter(SearchJobsPage("On-site"))
    }

    if (e === SearchJobsPage("Hybrid")) {
      setJobTypeFilter(SearchJobsPage("Hybrid"))
    }

    if (e === SearchJobsPage("Remote")) {
      setJobTypeFilter(SearchJobsPage("Remote"))
    }

  }


  const handleJobDurationSelectChange = (e: any) => {

    console.log(e)
    console.log(SearchJobsPage("All"))
    
    if (e === SearchJobsPage("All")) {
      setJobDurationFilter(SearchJobsPage("All"))
    }

    if (e === SearchJobsPage("FullTime")) {
      setJobDurationFilter(SearchJobsPage("FullTime"))
    }

    if (e === SearchJobsPage("PartTime")) {
      setJobDurationFilter(SearchJobsPage("PartTime"))
    }

    if (e === SearchJobsPage("Freelance")) {
      setJobDurationFilter(SearchJobsPage("Freelance"))
    }

    if (e === SearchJobsPage("Internship")) {
      setJobDurationFilter(SearchJobsPage("Internship"))
    }

    console.log(jobTypeFilter)
  }



  useEffect(() => {
    console.log(jobTypeFilter)

    const url = new URLSearchParams(searchParams.toString());
    url.set("jobType", jobTypeFilter);
    router.push(`?${url.toString()}`, { scroll: false });
  }, [jobTypeFilter]);


  useEffect(() => {
    console.log(jobDurationFilter)

    const url = new URLSearchParams(searchParams.toString());
    url.set("jobDuration", jobDurationFilter);
    router.push(`?${url.toString()}`, { scroll: false });
  }, [jobDurationFilter]);



  useEffect(() => {
    if (allCountriesCheck === true) {
      router.push(`/${locale}/search-jobs?jobTitle=${jobTitle}&location=`
        , { scroll: false }
      );
      // fetchJobs();
    } else {
      router.push(
        `/${locale}/search-jobs?jobTitle=${jobTitle}&location=${locationSearch}`
        , { scroll: false }
      );
      // fetchJobs();
    }
  }, [allCountriesCheck]);

  return (
    <div
      className={`bg-white px-4 pt-4 pb-5 rounded-md border border-gray-400/50 w-72
    flex-col items-center justify-center  
    ${showFilters ? "lg:hidden absolute top-84 right-[25%] opacity-95 z-50 pt-5" : "lg:flex hidden gap-5"}`}
    >
      {showFilters && (
        <IoIosCloseCircle
        size={22}
        className="absolute top-3 left-3 text-gray-800 cursor-pointer
        hover:text-gray-800/95 active:scale-95"
        onClick={() => setShowFilters(false)}
        />

      )}
      <h3
        className={`font-semibold text-gray-800 text-xl
      border-b border-gray-700/50 pb-2 w-full px-1
      ${showFilters && "mb-5"}`}
      >
        {SearchJobsPage("Filters")}
      </h3>

      <div
        className="flex flex-col justify-center items-start gap-2 w-full
      px-[10.5px]"
      >
        {/* <div className="flex items-center space-x-2">
          <Checkbox id="remotely" />
          <Label htmlFor="remotely">{SearchJobsPage("Work Remotely")}</Label>
        </div> */}

        <Select
        dir="rtl"
        onValueChange={handleJobTypeSelectChange}
        >
          <SelectTrigger className="w-full h-0 py-4 rounded-none border border-black/45"
          dir="rtl"
          >
            <SelectValue placeholder={SearchJobsPage("JobType")} />
          </SelectTrigger>
          <SelectContent
          className="bg-white"
          >
            <SelectItem value={SearchJobsPage("All")}>
            {SearchJobsPage("All")}
            </SelectItem>

            <SelectItem value={SearchJobsPage("Remote")}>
            {SearchJobsPage("Remote")}
            </SelectItem>

            <SelectItem value={SearchJobsPage("Hybrid")}>
            {SearchJobsPage("Hybrid")}
            </SelectItem>

            <SelectItem value={SearchJobsPage("On-site")}>
            {SearchJobsPage("On-site")}
            </SelectItem>
          </SelectContent>
        </Select>





        <Select
        dir="rtl"
        onValueChange={handleJobDurationSelectChange}
        >
          <SelectTrigger className="w-full h-0 py-4 rounded-none border border-black/45"
          dir="rtl"
          >
            <SelectValue placeholder={SearchJobsPage("JobDuration")} />
          </SelectTrigger>
          <SelectContent
          className="bg-white"
          >
            <SelectItem value={SearchJobsPage("All")}>
            {SearchJobsPage("All")}
            </SelectItem>

            <SelectItem value={SearchJobsPage("FullTime")}
            >
            {SearchJobsPage("FullTime")}
            </SelectItem>

            <SelectItem value={SearchJobsPage("PartTime")}>
            {SearchJobsPage("PartTime")}
            </SelectItem>

            <SelectItem value={SearchJobsPage("Freelance")}>
            {SearchJobsPage("Freelance")}
            </SelectItem>

            <SelectItem value={SearchJobsPage("Internship")}>
            {SearchJobsPage("Internship")}
            </SelectItem>
          </SelectContent>
        </Select>

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
            <Checkbox
              id="all-countries"
              defaultChecked={allCountriesCheck}
              onCheckedChange={() => {
                setAllCountriesCheck(!allCountriesCheck);
              }}
            />
            <Label htmlFor="all-countries">
              {SearchJobsPage("AllCountry")}
            </Label>
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
