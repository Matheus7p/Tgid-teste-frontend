import { JSX } from "react";
import { Icon } from "../ui/icon/icon.ui";

const _HEADER_LINKS = [
  { title: "About" },
  { title: "Relógios" },
  { title: "Contato" },
];


const renderHeaderLeft = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-12 font-semibold">
      {_HEADER_LINKS.map((item, index) => (
        <p
          key={index}
          className="text-sm lg:text-xl duration-150 underline-animation hover:scale-105 hover:cursor-pointer text-center"
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

const renderHeaderRight = (): JSX.Element => {
  return (
    <div className="flex flex-row gap-6 lg:gap-12">
        <Icon type="search" className="hover:scale-115 hover:cursor-pointer duration-300"/>
        <Icon type="bag" className="hover:scale-115 hover:cursor-pointer duration-300"/>
    </div>
  );
};

export function Header() {
  return (
    <>
      <nav className="w-full flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4 px-6 lg:px-52 py-8 text-white">
        <div className="flex-1">
          {renderHeaderLeft()}
        </div>
        <h3 className="flex-1 text-center text-2xl lg:text-6xl font-semibold hidden lg:block">Relógios</h3>
        <div className="flex-1 flex justify-end">
          {renderHeaderRight()}
        </div>
      </nav>
    </>
  );
}
