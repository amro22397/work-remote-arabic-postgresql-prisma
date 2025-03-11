import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import { useTranslations } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import EmailIsNotVerified from "@/components/EmailIsNotVerified";
import { getUser } from "@/actions/getUser";

const page = async () => {
  const homePage = await getTranslations("HomePage");

  const user = await getUser();
 const jUser = JSON.parse(JSON.stringify(user) || '{}')
 const locale = await getLocale();

 console.log(jUser)

 
  // if (!jUser?.user?.email) {
  //   redirect(`/${locale}/register`);
  // }

  return (
    <>
      <EmailIsNotVerified session={jUser} />

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
          className="flex flex-row justify-center items-center max-w-5xl mx-auto
      gap-3"
        >
          <div className="w-full relative">
            <Input
              type="text"
              placeholder={homePage("SearchPlacholder")}
              className="text-[22.5px] py-[21px] rounded-sm"
              style={{ fontFamily: "Cairo" }}
            />

            <IoSearch
              className="absolute left-3 top-[11.3725px] text-gray-500/75 dark:text-white/60"
              size={22}
            />
          </div>

          <div className="w-full relative">
            <Input
              type="text"
              placeholder={homePage("SearchLocationPlaceholder")}
              className="text-[22.5px] py-[21px] rounded-sm"
              style={{ fontFamily: "Cairo" }}
            />

            <CiLocationOn
              className="absolute left-3 top-[11.3725px] text-gray-600/90 dark:text-white/90"
              size={23}
            />
          </div>

          <Button
            className="bg-blue-500 text-white py-[21.3625px] rounded-sm
        text-[22.5px] font-normal mx-1 cursor-pointer
        hover:bg-blue-600 active:scale-95"
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
    </>
  );
};

export default page;
