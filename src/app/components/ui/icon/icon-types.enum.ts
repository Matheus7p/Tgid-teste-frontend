export const UiIconTypes = [
  "bag",
  "search",
] as const;
export type TUiIconTypes = (typeof UiIconTypes)[number];