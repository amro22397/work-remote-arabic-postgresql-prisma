'use client'

import React from "react";
import { Container } from "@/components/Container";
import { useTranslations } from "next-intl";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  isPreTitle?: boolean;
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {

  const homePage = useTranslations("HomePage")

  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.preTitle && props.isPreTitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 leading-normal text-gray-500 text-[17.25px] dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}

