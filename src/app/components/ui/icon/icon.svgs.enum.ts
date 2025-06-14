export const UiIconSvgs = [
  "/images/icons/bag.svg",
  "/images/icons/search.svg"
] as const;

export type TUiIconSvgs = (typeof UiIconSvgs)[number];