"use client";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import { useLocale, useTranslations } from "next-intl";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import EmailIsNotVerified from "@/components/EmailIsNotVerified";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Country, State, City } from "country-state-city";
import Select from "react-select";

const HomePage = ({ user }: { user: User | null | undefined }) => {
  const homePage = useTranslations("HomePage");
  const locale = useLocale();

  const router = useRouter();

  const [jobTitle, setjobTitle] = useState("");
  const [location, setLocation] = useState("");

  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const [countryFiltered, setCountryFiltered] = useState<any>("");

//   useEffect(() => {
//     console.log(Country.getAllCountries());
    

//     const countryFilter = Country.getAllCountries().filter((c: any) => {
//       console.log(c.name.includes(location.trim()));
//       if (c.name.includes(location.trim())) {
//         return c;
//       }
//       // return filtered;
//     });

//     console.log(countryFilter);

//     setCountryFiltered(countryFilter);

//     console.log(countryFiltered);
//   }, [location]);

  console.log(jobTitle, location);

  console.log(user);

  return (
    <Container>
      {/* <Hero /> */}

      <SectionTitle
        preTitle="Nextly Benefits"
        isPreTitle={false}
        title={homePage("title")}
      >
        {homePage("Description")}
      </SectionTitle>

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
            onChange={(val: any) => {
              setSelectedCountry(val);
              setLocation(val.label)
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
          onClick={() => router.push(`/${locale}/search-jobs?jobTitle=${jobTitle}&location=${location}`)}
          // dark:bg-white dark:text-black"
        >
          {homePage("SearchButton")}
        </Button>
      </div>

      {/* <Benefits data={benefitOne} />
    <Benefits imgPos="right" data={benefitTwo} /> */}

      {/* <SectionTitle
      preTitle="Watch a video"
      title="Learn how to fullfil your needs"
    >
      This section is to highlight a promo or demo video of your product.
      Analysts says a landing page with video has 3% more conversion rate. So,
      don&apos;t forget to add one. Just like this.
    </SectionTitle> */}

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
      preTitle="Testimonials"
      title="Here's what our customers said"
    >
      Testimonials is a great way to increase the brand trust and awareness.
      Use this section to highlight your popular customers.
    </SectionTitle> */}

      {/* <Testimonials /> */}

      {/* Frequently Asked Questions */}
      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
      Answer your customers possible questions here, it will increase the
      conversion rate as well as support or chat requests.
    </SectionTitle> */}

      {/* <Faq />
    <Cta /> */}
      <span className=""></span>
    </Container>
  );
};

export default HomePage;
