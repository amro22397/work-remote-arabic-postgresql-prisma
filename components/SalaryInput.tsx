"use client";

import React, { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";

import './SalaryInput.css'

// import CurrencyFlagsSelect from "react-currency-flags-select";

import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobData } from "@/types/jobData";
import { useLocale, useTranslations } from "next-intl";

const SalaryInput = ({
  wantShowSalary,
  setWantShowSalary,
  formData,
  setFormData,
  handleChange,
  salaryPer,
  setSalaryPer,
}: {
  wantShowSalary: boolean;
  setWantShowSalary: (value: boolean) => void;
  formData: JobData;
  setFormData: (e: any) => void;
  handleChange: (e: any) => void;
  salaryPer: string;
  setSalaryPer: (value: string) => void;
}) => {
  const addJobPage = useTranslations("AddJobPage");
  const locale = useLocale();

  const handleSelectChange = (e: any) => {
    if (e === "hourly") {
      setSalaryPer(addJobPage("hourly"));
    }

    if (e === "daily") {
      setSalaryPer(addJobPage("daily"));
    }

    if (e === "monthly") {
      setSalaryPer(addJobPage("monthly"));
    }

    if (e === "annually") {
      setSalaryPer(addJobPage("annually"));
    }

    setFormData({
      ...formData,
      jobSalaryPer: e,
    });
  };

  return (
    <div className="my-1 flex flex-col gap-3 w-full">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="isThereSalary"
          defaultChecked={wantShowSalary}
          onCheckedChange={() => {
            setWantShowSalary(!wantShowSalary);
            setFormData({
              ...formData,
              isThereSalary: !wantShowSalary,
            });
            // localStorage.setItem("isThereSalary", JSON.stringify(!wantShowSalary))
          }}
        />
        <Label htmlFor="isThereSalary" className="text-[16px]">
          {addJobPage("WantProvideSalary")}
        </Label>
      </div>

      <div className="relative">
        <Input
          type="number"
          id="jobSalary"
          placeholder={addJobPage("Salary")}
          className="w-full py-[18px] text-lg border-gray-500/85 rounded-sm"
          disabled={!wantShowSalary}
          onChange={handleChange}
        />

        <span
          className={`absolute top-[6px] left-3
                ${!wantShowSalary ? "text-gray-400/75" : "text-gray-700"}`}
        >
          {salaryPer}
        </span>
      </div>

      <div className="flex flex-row items-center gap-5 w-full">
        {/* <CurrencyFlagsSelect
      selected="USD"
      onSelect={(currency: string) => console.log(currency)}
    /> */}

        <Input
        type="text"
        id="currency"
        placeholder={addJobPage("p-SalaryCurrency")}
        className="w-[150px] py-[18px] text-lg border-gray-500/85 rounded-sm"
        disabled={!wantShowSalary}
        onChange={handleChange}

        />

        <ShadcnSelect
          dir="ltr"
          onValueChange={handleSelectChange}
          disabled={!wantShowSalary}
        >
          <SelectTrigger className="w-[200px] z-50" dir="ltr">
            <SelectValue placeholder={addJobPage("SelectPayFrequence")} />
          </SelectTrigger>
          <SelectContent className="z-50 bg-white">
            <SelectItem value={addJobPage("hourly")}>{addJobPage("hourly")}</SelectItem>

            <SelectItem value={addJobPage("daily")}>{addJobPage("daily")}</SelectItem>

            <SelectItem value={addJobPage("monthly")}>{addJobPage("monthly")}</SelectItem>

            <SelectItem value={addJobPage("annually")}>{addJobPage("annually")}</SelectItem>
          </SelectContent>
        </ShadcnSelect>
      </div>
    </div>
  );
};

export default SalaryInput;
