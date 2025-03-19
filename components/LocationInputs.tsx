'use client'

import React, { useState } from 'react'

import Select from "react-select";
import { Country, State, City } from "country-state-city";
import { JobData } from '@/types/jobData';
import { useLocale, useTranslations } from 'next-intl';


const LocationInputs = ({ 
    // selectedCountry,
    // setSelectedCountry,
    // selectedState, 
    // setSelectedState,
    // selectedCity,
    // setSelectedCity,
    formData,
    setFormData
    }: {
    //     selectedCountry: any,
    // setSelectedCountry: (value: any) => void,
    // selectedState: any, 
    // setSelectedState: (value: any) => void,
    // selectedCity: any,
    // setSelectedCity: (value: any) => void,
    formData: JobData,
    setFormData: (value: JobData) => void
    }) => {

        const addJobPage = useTranslations("AddJobPage");
          const locale = useLocale()

          const [selectedCountry, setSelectedCountry] = useState<any>(null);
            const [selectedState, setSelectedState] = useState<any>(null);
            const [selectedCity, setSelectedCity] = useState<any>(null);

  return (
    <div className="flex flex-row gap-2 w-full">
          {/* Country Dropdown */}
          <Select
            options={Country.getAllCountries().map((c) => ({
              value: c.isoCode,
              label: c.name,
            }))}
            onChange={(val: any) => {
              setSelectedCountry(val);
              setFormData({
                ...formData,
                country: val.label,
              });
            }}
            placeholder={addJobPage("Select Country")}
            className="w-full"
            required
          />

          {/* State Dropdown */}
          <Select
            options={
              selectedCountry
                ? State.getStatesOfCountry(selectedCountry.value).map(
                    (s: any) => ({
                      value: s.isoCode,
                      label: s.name,
                    })
                  )
                : []
            }
            onChange={(val: any) => {
              setSelectedState(val);
              setFormData({
                ...formData,
                state: val.label,
              });
            }}
            placeholder={addJobPage("Select State")}
            className="w-full"
            required
          />

          {/* City Dropdown */}
          <Select
            options={
              selectedState
                ? City.getCitiesOfState(
                    selectedCountry.value,
                    selectedState.value
                  ).map((c) => ({
                    value: c.name,
                    label: c.name,
                  }))
                : []
            }
            onChange={(val: any) => {
              setSelectedCity(val);
              setFormData({
                ...formData,
                city: val.label,
              });
            }}
            placeholder={addJobPage("Select City")}
            className="w-full"
            required
          />
        </div>
  )
}

export default LocationInputs
