'use client'

import { Item } from "@radix-ui/react-radio-group";
import { toast } from "sonner";
import SearchJobsBar from "./SearchJobsPage";
import Filters from "@/components/SearchJobsPage/Filters";
import SearchJobs from "@/components/SearchJobsPage/SearchJobs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const page = () => {

  const searchParams = useSearchParams() as any;

  const urlLocation = searchParams?.get("location")

  console.log(urlLocation)

    const [jobTitle, setjobTitle] = useState("");
  const [location, setLocation] = useState("");

  const [isWorkRemotely, setIsWorkRemotely] = useState(false);
  const [datePosted, setDatePosted] = useState("any-time");

  const [allCountriesCheck, setAllCountriesCheck] = useState(false);

  const [jobs, setJobs] = useState([]);


  const fetchJobs = async () => {
    
    const res = await axios.get(`/api/get-jobs?jobTitle=${jobTitle}&location=${urlLocation}&isWorkRemotely=${isWorkRemotely}&datePosted=${datePosted}&allCountriesCheck=${allCountriesCheck}`)


    setJobs(res.data.data);
    console.log(jobs)
  }

  useEffect(() => {
    
    fetchJobs();
  }, [urlLocation]);

  return (
    <>
    {urlLocation}
    <SearchJobsBar jobTitle={jobTitle} setjobTitle={setjobTitle}
    location={location} setLocation={setLocation}
    allCountriesCheck={allCountriesCheck} setAllCountriesCheck={setAllCountriesCheck}
    fetchJobs={fetchJobs} />

    <div className="flex flex-row justify-center items-start gap-5">

        <Filters jobTitleSearch={jobTitle} setjobTitle={setjobTitle}
    locationSearch={location} setLocation={setLocation}
    allCountriesCheck={allCountriesCheck} setAllCountriesCheck={setAllCountriesCheck}
    isWorkRemotely={isWorkRemotely} setIsWorkRemotely={setIsWorkRemotely}
    datePosted={datePosted} setDatePosted={setDatePosted}
    fetchJobs={fetchJobs} />

        <SearchJobs jobs={jobs} />
    </div>
    </>    
  );
};

export default page;
