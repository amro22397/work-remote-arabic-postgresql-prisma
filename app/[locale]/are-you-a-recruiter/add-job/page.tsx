"use client";

import { Container } from "@/components/Container";
import { Input } from "@/components/ui/input";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import JobTypeRadio from "@/components/AddJob/JobTypeRadio";
import JobDuration from "@/components/AddJob/JobDuration";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea"

// import IntlTelInput from "react-intl-tel-input";
// import "react-intl-tel-input/build/css/intlTelInput.css";

// import CountrySelect from "react-world-flags";

// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// import { createEditor } from "slate";
// import { Slate, Editable, withReact } from "slate-react";

import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

import ImageUpload from "@/components/ImageUpload";
import { JobData } from "@/types/jobData";
import { Button } from "@/components/ui/button";
import SalaryInput from "@/components/SalaryInput";
import LocationInputs from "@/components/LocationInputs";

const page = () => {
  const addJobPage = useTranslations("AddJobPage");
  const locale = useLocale();

  const [jobTypeValue, setJobTypeValue] = useState("remote");
  const [salaryPer, setSalaryPer] = useState(addJobPage("hourly"));

  const [wantShowSalary, setWantShowSalary] = useState(true);
  const [wantShowContact, setWantShowContact] = useState(true);

  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedState, setSelectedState] = useState<any>(null);
  const [selectedCity, setSelectedCity] = useState<any>(null);

  const [jobImage, setJobImage] = useState("");

  const [value, setValue] = useState<any>("");
  const [phone, setPhone] = useState("");

  // const [editor] = useState(() => withReact(createEditor()));

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [formData, setFormData] = useState<JobData>({
    jobTitle: "",
    jobType: "",
    jobDuration: "",
    isThereSalary: wantShowSalary,
    jobSalary: "",
    jobSalaryPer: "",
    country: "",
    state: "",
    city: "",
    jobPhoto: "",
    isThereContact: wantShowContact,
    contactPhoto: "",
    contactName: "",
    contactEmail: "",
    contactNumber: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  console.log(selectedCountry, selectedState, selectedCity);

  console.log(jobTypeValue);

  return (
    <Container
      className="flex flex-col items-center justify-center
    max-w-[1350px] mx-auto"
    >
      <h1 className="text-4xl text-center mb-10">أضف عرض عمل</h1>

      <div className="flex flex-row justify-center items-start gap-16 w-full">
        <div className="flex flex-col justify-start items-start gap-8 w-full">
          <Input
            type="job-title"
            id="jobTitle"
            placeholder={addJobPage("p-JobTitle")}
            className="w-full py-[18px] text-lg border-gray-500/85 rounded-sm"
            onChange={handleChange}
            required
          />

          <div className="flex flex-row justify-start items-start w-full px-[10px]">
            <JobTypeRadio
              setJobTypeValue={setJobTypeValue}
              setFormData={setFormData}
              formData={formData}
            />

            <JobDuration setFormData={setFormData} formData={formData} />
          </div>

          <SalaryInput
            wantShowSalary={wantShowSalary}
            setWantShowSalary={setWantShowSalary}
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
            salaryPer={salaryPer}
            setSalaryPer={setSalaryPer}
          />

          <LocationInputs
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            setFormData={setFormData}
            formData={formData}
          />

          <Textarea
            id="description"
            placeholder={addJobPage("p-Description")}
            name="description"
            className="w-full text-lg border-gray-500/85 rounded-sm resize-none
            h-[125px]"
            onChange={handleChange}
            // defaultValue={editJobDoc ? editJobDoc.description : ""}
          />

          {/* <Slate
          editor={editor}
          value={[{ type: "paragraph", children: [{ text: "Type here..." }] }]}
        >
          <Editable />
        </Slate> */}

          {/* <Editor editorState={editorState} onChange={setEditorState} /> */}
        </div>

        <div className="flex flex-col justify-start items-center gap-2 w-full">
          <div className="my-1 flex flex-col gap-3 w-full">
            <div className="w-full flex flex-col gap-8">
              <div className="flex flex-col justify-start items-start gap-2 w-full">
                {addJobPage("JobImage")}

                <ImageUpload
                  JobIconImage={jobImage}
                  name="JobIcon"
                  formData={formData}
                  setFormData={setFormData}
                  id="jobPhoto"
                  setWantShowContact={setWantShowContact}
                />
              </div>

              <div
                className="flex flex-col justify-start items-start gap-2 w-full"
                dir="rtl"
              >
                <div className="flex items-center space-x-2 mb-1">
                  <Checkbox
                    id="wantShowContant"
                    defaultChecked={wantShowContact}
                    onCheckedChange={() => {
                      setWantShowContact(!wantShowContact);
                      setFormData({
                        ...formData,
                        isThereContact: !wantShowContact,
                      });
                    }}
                  />
                  <Label htmlFor="wantShowContant" className="text-[16px]">
                    {addJobPage("WantShowContact")}
                  </Label>
                </div>

                {addJobPage("ContactPerson")}

                <ImageUpload
                  JobIconImage={jobImage}
                  name="JobIcon"
                  formData={formData}
                  setFormData={setFormData}
                  id="contactPhoto"
                  wantShowContact={wantShowContact}
                />

                <div className="flex flex-row items-center gap-2 w-full">
                  <Input
                    type="contact-name"
                    id="contactName"
                    placeholder={addJobPage("ContactName")}
                    className="w-full py-[18px] text-lg border-gray-500/85 rounded-sm"
                    onChange={handleChange}
                  />

                  {/* <Input
                  type="contact-phone"
                  placeholder={addJobPage("ContactPhone")}
                  className="w-full py-[18px] text-lg border-gray-500/85 rounded-sm"
                /> */}

                  {/* <IntlTelInput
                  preferredCountries={["us", "gb", "in"]}
                  onPhoneNumberChange={(status, value) => console.log(value)}
                /> */}

                  {/* <PhoneInput
                  international
                  defaultCountry="US"
                  value={value}
                  onChange={setValue}
                  className="border border-gray-500/85 rounded-sm py-[4.75px] px-1"
                /> */}

                  <Input
                    type="contact-email"
                    id="contactEmail"
                    placeholder={addJobPage("ContactEmail")}
                    className="w-full py-[18px] text-lg border-gray-500/85 rounded-sm"
                    onChange={handleChange}
                  />
                </div>

                <div className="py-1" dir="ltr">
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e);
                      setFormData({
                        ...formData,
                        contactNumber: e,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        className="bg-green-500 hover:bg-green-600 active:scale-95
      text-white text-xl py-[21.5px] my-7 cursor-pointer"
      >
        {addJobPage("PostTheJob")}
      </Button>
    </Container>
  );
};

export default page;
