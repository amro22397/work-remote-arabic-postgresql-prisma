"use client";

import { Item } from "@radix-ui/react-radio-group";
import { toast } from "sonner";
import SearchJobsBar from "./SearchJobsPage";
import Filters from "@/components/SearchJobsPage/Filters";
import SearchJobs from "../../../components/SearchJobsPage/SearchJobs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { JobData } from "@/types/jobData";

const SearchJobs2 = ({ jobesFetched }: {
    jobesFetched: JobData[];
}) => {

    const searchParams = useSearchParams() as any;

  const urlLocation = searchParams?.get("location");

  console.log(urlLocation);

  const SearchJobsPage = useTranslations("SearchJobsPage");

  const [showFilters, setShowFilters] = useState(false);

  const [jobTitle, setjobTitle] = useState("");
  const [location, setLocation] = useState("");

  const [isWorkRemotely, setIsWorkRemotely] = useState(false);
  const [datePosted, setDatePosted] = useState("any-time");

  const [allCountriesCheck, setAllCountriesCheck] = useState(false);

  const [jobs, setJobs] = useState([]);

  // const fetchJobs = async () => {
    
  //   try {

  //     const res = await axios.get(
  //       `/api/get-jobs?jobTitle=${jobTitle}&location=${urlLocation}&isWorkRemotely=${isWorkRemotely}&datePosted=${datePosted}&allCountriesCheck=${allCountriesCheck}`
  //     );
  
  //     setJobs(res.data.data);
  //     console.log(jobs);

  //   } catch (error: any) {
      
  //     console.log("Client Error: ", error)
  //   }
  // };

  // useEffect(() => {
  //   fetchJobs();
  // }, [urlLocation]);


  return (
    <div className="max-lg:w-150 mx-auto max-lg:relative
    max-w-5xl">
      <SearchJobsBar
        jobTitle={jobTitle}
        setjobTitle={setjobTitle}
        location={location}
        setLocation={setLocation}
        allCountriesCheck={allCountriesCheck}
        setAllCountriesCheck={setAllCountriesCheck}
        // fetchJobs={fetchJobs}
      />

      <div className="flex justify-start">
        <Button
        className="bg-blue-500 text-white mb-4 mx-1
        cursor-pointer hover:bg-blue-600 active:scale-95
        lg:hidden block"
        onClick={() => setShowFilters(!showFilters)}
        >
          {SearchJobsPage("Filters")}
        </Button>
      </div>

      <div className="flex flex-row justify-center items-start gap-5">
        <Filters
          jobTitleSearch={jobTitle}
          setjobTitle={setjobTitle}
          locationSearch={location}
          setLocation={setLocation}
          allCountriesCheck={allCountriesCheck}
          setAllCountriesCheck={setAllCountriesCheck}
          isWorkRemotely={isWorkRemotely}
          setIsWorkRemotely={setIsWorkRemotely}
          datePosted={datePosted}
          setDatePosted={setDatePosted}
        //   fetchJobs={fetchJobs}
        />

        <SearchJobs jobs={jobesFetched} />
      </div>

      {showFilters && (
        <Filters
        jobTitleSearch={jobTitle}
        setjobTitle={setjobTitle}
        locationSearch={location}
        setLocation={setLocation}
        allCountriesCheck={allCountriesCheck}
        setAllCountriesCheck={setAllCountriesCheck}
        isWorkRemotely={isWorkRemotely}
        setIsWorkRemotely={setIsWorkRemotely}
        datePosted={datePosted}
        setDatePosted={setDatePosted}
        // fetchJobs={fetchJobs}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      )}

    </div>
  )
}

export default SearchJobs2