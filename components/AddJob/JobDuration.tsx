import React from 'react'

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLocale, useTranslations } from 'next-intl';
import { form } from '@nextui-org/react';
import { JobData } from '@/types/jobData';
import { Input } from '../ui/input';

const JobDuration = ({ setFormData, formData }: {
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

          console.log(formData)


  return (
    <div className="flex flex-col items-start w-full">
            <h3 className="mb-4 text-lg font-medium">
              {addJobPage("JobDuration")}
            </h3>

            <RadioGroup
              defaultValue="full-time"
              dir={locale === "ar" ? "rtl" : "ltr"}
              onValueChange={(e) => handleRadioChange(e, "jobDuration")}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="full-time" id="full-time" />
                <Label htmlFor="full-time" className="font-medium">
                  {addJobPage("FullTime")}
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="part-time" id="part-time" />
                <Label htmlFor="part-time" className="font-medium">
                  {addJobPage("PartTime")}
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="freelance" id="freelance" />
                <Label
                  htmlFor="freelance"
                  className="flex flex-col justify-center gap-[6.5px]"
                >
                  {addJobPage("Freelance")}
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="internship" id="internship" />
                <Label
                  htmlFor="internship"
                  className="flex flex-col justify-center gap-[6.5px]"
                >
                  {addJobPage("Internship")}
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="another" id="another" />
                <Label
                  htmlFor="another"
                  className="flex flex-col justify-center gap-[6.5px]"
                >
                  <span className="">
                  {addJobPage("Another")}: 
                  </span>

                  <Input 
                  type='text'
                  />
                </Label>
              </div>

            </RadioGroup>
          </div>
  )
}

export default JobDuration
