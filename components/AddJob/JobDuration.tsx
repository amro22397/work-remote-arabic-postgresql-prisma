import React from 'react'

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLocale, useTranslations } from 'next-intl';
import { form } from '@nextui-org/react';
import { JobData } from '@/types/jobData';
import { Input } from '../ui/input';

const JobDuration = ({ setFormData, formData, handleChange }: {
  setFormData: (e: any) => void,
  formData: JobData,
  handleChange: (e: any) => void
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
              defaultValue={addJobPage("FullTime")}
              dir={locale === "ar" ? "rtl" : "ltr"}
              onValueChange={(e) => handleRadioChange(e, "jobDuration")}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={addJobPage("FullTime")} id="full-time" />
                <Label htmlFor="full-time" className="font-medium">
                  {addJobPage("FullTime")}
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value={addJobPage("PartTime")} id="part-time" />
                <Label htmlFor="part-time" className="font-medium">
                  {addJobPage("PartTime")}
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value={addJobPage("Freelance")} id="freelance" />
                <Label
                  htmlFor="freelance"
                  className="flex flex-col justify-center gap-[6.5px]"
                >
                  {addJobPage("Freelance")}
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value={addJobPage("Internship")} id="internship" />
                <Label
                  htmlFor="internship"
                  className="flex flex-col justify-center gap-[6.5px]"
                >
                  {addJobPage("Internship")}
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value={addJobPage("Another")} id="another" />
                <Label
                  htmlFor="another"
                  className="flex flex-row justify-center items-center gap-[10.25px]"
                >
                  <span className="">
                  {addJobPage("Another")}: 
                  </span>

                  <input 
                  type='text'
                  id="theOtherJobDuration"
                  className='w-24 border border-gray-500/85 rounded-sm py-[7.5px] text-[14px]
                  px-2'
                  onChange={handleChange}
                  required={formData.jobDuration === "another"}
                  />
                </Label>
              </div>

            </RadioGroup>
          </div>
  )
}

export default JobDuration
