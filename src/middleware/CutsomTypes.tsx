import React from "react";

export interface ClassFeat {
  id: number;
  name: string;
  action: string;
  tags: Array<string>;
  level: number;
  feat: string;
  description: React.JSX.Element;
}
