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

export interface FocusSpell {
  id: number;
  name: string;
  level: number;
  action: string;
  tags: Array<string>;
  type: string;
  description: React.JSX.Element;
}
