import React from "react";

export const featsButtons = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "1st Level",
    value: 1,
  },
  {
    name: "5th Level",
    value: 5,
  },
  {
    name: "9th Level",
    value: 9,
  },
  {
    name: "13th Level",
    value: 13,
  },
  {
    name: "17th Level",
    value: 17,
  },
];

export interface AncestryFeat {
  id: number;
  name: string;
  action: string;
  tags?: Array<string>;
  level: number;
  feat: string;
  description: React.JSX.Element | string;
}
