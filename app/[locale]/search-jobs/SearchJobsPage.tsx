'use client'

import { Container } from "@/components/Container";
import React, { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { IoSearch } from "react-icons/io5";

import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";

const SearchJobsBar = ({ jobTitle, setjobTitle , location, setLocation, 
  allCountriesCheck, 
  setAllCountriesCheck,
  fetchJobs
 }: {
  jobTitle: string, 
  setjobTitle: (value: string) => void,
  location: string, 
  setLocation: (value: string) => void,
  allCountriesCheck: boolean,
  setAllCountriesCheck: (value: boolean) => void,
  fetchJobs?: any,
}) => {

    const homePage = useTranslations("HomePage");
  const locale = useLocale();

  const router = useRouter();

  const searchParams = useSearchParams() as any;

  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  useEffect(() => {

    const title = searchParams?.get("jobTitle")
    const searchLocation = searchParams?.get("location")

    setjobTitle(title);
    setLocation(searchLocation);


  }, []);

  console.log(location)

  console.log(Country.getAllCountries().find((c) => c.name === location)?.name)


  return (
    <Container>
      <div
        className="flex lg:flex-row flex-col justify-center items-center lg:max-w-5xl max-w-sm mx-auto
      gap-3"
      >
        <div className="w-full relative">
          <Input
            type="text"
            placeholder={homePage("SearchPlacholder")}
            className="text-[22.5px] py-[22.75px] rounded-sm
            border border-gray-400/50"
            style={{ fontFamily: "Cairo" }}
            value={jobTitle || ""}
            onChange={(e) => setjobTitle(e.target.value)}
          />

          <IoSearch
            className="absolute left-3 top-[12.8725px] text-gray-500/75 dark:text-white/60"
            size={22}
          />
        </div>

        <div className="w-full relative">
          {/* <Input
            type="text"
            placeholder={homePage("SearchLocationPlaceholder")}
            className="text-[22.5px] py-[21px] rounded-sm"
            style={{ fontFamily: "Cairo" }}
            onChange={(e) => setLocation(e.target.value)}
          /> */}

          <Select
            options={Country.getAllCountries().map((c) => ({
              value: c.isoCode,
              label: c.name,
            }))}
            defaultValue={Country.getAllCountries().find((c) => c.name === location)?.name}
            onChange={(val: any) => {
              setSelectedCountry(val);
              setLocation(val.label);
            }}
            placeholder={homePage("SearchLocationPlaceholder")}
            // style={{ fontFamily: "Cairo" }}
            className="w-full text-[22.5px] py-[21px] rounded-sm"
            required
          />

          {/* <CiLocationOn
            className="absolute left-3 top-[11.3725px] text-gray-600/90 dark:text-white/90"
            size={23}
          /> */}
        </div>

        <Button
          className="bg-blue-500 text-white py-[21.3625px] rounded-sm
        text-[22.5px] font-normal mx-1 cursor-pointer
        hover:bg-blue-600 active:scale-95 max-lg:w-[175px]"
          onClick={() => {
            if (allCountriesCheck === true) {
              router.push(
                `/${locale}/search-jobs?jobTitle=${jobTitle}&location=`
              )
              // fetchJobs();

            } else {
              router.push(
                `/${locale}/search-jobs?jobTitle=${jobTitle}&location=${location}`
              )
              // fetchJobs();
            }
          }
         }
        >
          {homePage("SearchButton")}
        </Button>
      </div>
    </Container>
  )
}

export default SearchJobsBar
