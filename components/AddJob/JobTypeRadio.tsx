'use client'

import React from 'react'

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLocale, useTranslations } from 'next-intl';
import { JobData } from '@/types/jobData';



const JobTypeRadio = ({ setJobTypeValue, setFormData, formData }: {
    setJobTypeValue: (e: any) => void,
    setFormData: (e: any) => void,
    formData: JobData
}) => {

    const addJobPage = useTranslations("AddJobPage");
      const locale = useLocale();

      const handleRadioChange = (e: any, key: string) => {
        console.log(e)

        setFormData({
          ...formData,
          [key]: e
        })
      }

   

  return (
    <div className="flex flex-col items-start w-full">
            <h3 className="mb-4 text-lg font-medium">
              {addJobPage("JobType")}
            </h3>

            <RadioGroup
              defaultValue={addJobPage("Remote")}
              dir={locale === "ar" ? "rtl" : "ltr"}
              onValueChange={(e) => handleRadioChange(e, "jobType")}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={addJobPage("Remote")} id="remote" />
                <Label htmlFor="remote" className="font-medium">
                  {addJobPage("Remote")}
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value={addJobPage("On-site")} id="on-site" />
                <Label htmlFor="on-site" className="font-medium">
                  {addJobPage("On-site")}
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value={addJobPage("Hybrid")} id="hybrid" />
                <Label
                  htmlFor="hybrid"
                  className="flex flex-col justify-center gap-[6.5px]"
                >
                  <span className="font-medium">{addJobPage("Hybrid")}</span>
                  <span className="flex flex-col justify-center gap-[6.5px]">
                    <span className="">{addJobPage("Hybrid-Desc1")}</span>
                    <span className="">{addJobPage("Hybrid-Desc2")}</span>
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </div>
  )
}

export default JobTypeRadio
