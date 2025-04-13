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

import { Textarea } from "@/components/ui/textarea";

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
import axios from "axios";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

const AddJobForm = ({ email }: { email: string | null | undefined }) => {
  const addJobPage = useTranslations("AddJobPage");
  const locale = useLocale();

  const [jobTypeValue, setJobTypeValue] = useState(addJobPage("Remote"));
  const [jobDuration, setJobDuration] = useState(addJobPage("FullTime"));
  const [salaryPer, setSalaryPer] = useState(addJobPage("hourly"));

  const [wantShowSalary, setWantShowSalary] = useState(true);
  const [wantShowContact, setWantShowContact] = useState(false);
  const [wantEasyApply, setWantEasyApply] = useState(false);

  const [jobImage, setJobImage] = useState("");

  const [value, setValue] = useState<any>("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);

  // const [editor] = useState(() => withReact(createEditor()));

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [formData, setFormData] = useState<any>({
    jobTitle: "",
    jobType: jobTypeValue,
    jobDuration: jobDuration,
    isThereSalary: wantShowSalary,
    jobSalary: "",
    jobSalaryPer: salaryPer,
    country: "",
    state: "",
    city: "",
    jobPhoto: "",
    jobFormLink: "",
    wantEasyApply: wantEasyApply,
    isThereContact: wantShowContact,
    currency: "",
    contactPhoto: "",
    contactName: "",
    contactEmail: "",
    contactNumber: "",
    theOtherJobDuration: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post("/api/job-form", {
        ...formData,
        emailRef: email,
      });

      if (!res.data.success) {
        toast.error(res.data.message);
      }

      if (res.data.success) {
        toast.success(res.data.message);
      }

      setLoading(false);
    } catch (error: any) {
      console.log(error);
      toast.error("Client Error: " + error.message);

      setLoading(false);
    }
  };

  console.log(jobTypeValue);

  console.log({ ...formData });

  return (
    <Container
      className="flex flex-col items-center justify-center
    max-w-[1350px] mx-auto"
    >
      <h1 className="text-4xl text-center mb-10">أضف عرض عمل</h1>

      <div className="flex flex-row justify-center items-start gap-16 w-full">
        <div className="flex flex-col justify-start items-start gap-8 w-full">
          <Input
            type="text"
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

            <JobDuration
              setFormData={setFormData}
              formData={formData}
              handleChange={handleChange}
            />
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
            // selectedCountry={selectedCountry}
            // setSelectedCountry={setSelectedCountry}
            // selectedState={selectedState}
            // setSelectedState={setSelectedState}
            // selectedCity={selectedCity}
            // setSelectedCity={setSelectedCity}
            setFormData={setFormData}
            formData={formData}
          />

          <Textarea
            id="description"
            placeholder={addJobPage("p-Description")}
            name="description"
            className="w-[645px] text-lg border-gray-500/85 rounded-sm resize-none
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
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center space-x-2 mb-1">
                  <Checkbox
                    id="wantEasyApply"
                    defaultChecked={wantEasyApply}
                    onCheckedChange={() => {
                      setWantEasyApply(!wantEasyApply);
                      setFormData({
                        ...formData,
                        wantEasyApply: !wantEasyApply,
                      });
                    }}
                  />
                  <Label htmlFor="wantEasyApply" className="text-[16px]">
                    {addJobPage("wantEasyApply")}
                  </Label>
                </div>

                <Input
                  type="text"
                  id="jobFormLink"
                  placeholder={addJobPage("p-jobFormLink")}
                  className="w-full py-[18px] text-lg border-gray-500/85 rounded-sm"
                  onChange={handleChange}
                  disabled={wantEasyApply}
                />

                <Link href={!formData.jobFormLink || !wantEasyApply ? "#" : formData.jobFormLink} target="_blank"
                className={` ${wantEasyApply ? 'opacity-70 hover:cursor-default': 'hover:underline active:text-black/75'}`} >
                {addJobPage("TestTheJobFormLink")}
                </Link>
              </div>

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
                    type="text"
                    id="contactName"
                    placeholder={addJobPage("ContactName")}
                    className="w-full py-[18px] text-lg border-gray-500/85 rounded-sm"
                    disabled={!wantShowContact}
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
                    type="text"
                    id="contactEmail"
                    placeholder={addJobPage("ContactEmail")}
                    className="w-full py-[18px] text-lg border-gray-500/85 rounded-sm"
                    onChange={handleChange}
                    disabled={!wantShowContact}
                  />
                </div>

                <div
                  className={`py-1 ${!wantShowContact ? "opacity-70" : ""}`}
                  dir="ltr"
                >
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    disabled={!wantShowContact}
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
        onClick={handleSubmit}
      >
        {loading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          addJobPage("PostTheJob")
        )}
      </Button>
    </Container>
  );
};

export default AddJobForm;
