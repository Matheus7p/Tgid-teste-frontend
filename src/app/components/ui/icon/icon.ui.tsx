import React from "react";
import { uiIconTypeSizeMap } from "./icon-type-size.map";
import { uiIconTypeToSvgMap } from "./icon-type-svg.map";
import { TUiIconTypes } from "./icon-types.enum";


type IconProps = {
  type: TUiIconTypes;
  className?: string;
}

export type { TUiIconTypes };
export const Icon: React.FC<IconProps> = ({ type, className }) => {
  const size = uiIconTypeSizeMap.get(type);
  const width = size?.width || 16;
  const height = size?.height || 16;

  return (
    <img
      width={width}
      height={height}
      className={className}
      src={uiIconTypeToSvgMap.get(type)}
      alt={`icone ${type}`}
      role={type}
    />
  );
};