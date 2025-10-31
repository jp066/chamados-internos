import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { RiMenuUnfold3Line, RiMenuUnfold4Line  } from "react-icons/ri";
import { useState } from "react";

export default function SidebarComponent({
  activeSection,
  handleSectionClick,
  dark,
  darkModeHandler,
  setDark,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const sidebarItems = [
    { href: "#intro-section", label: "Introdução", id: "intro-section" },
    {
      href: "#formulario-section",
      label: "Formulario, Planilha e Google Apps Script",
      id: "formulario-section",
    },
    { href: "#firebase-section", label: "Firebase", id: "firebase-section" },
    {
      href: "#cloudinary-section",
      label: "Cloudinary",
      id: "cloudinary-section",
    },
    {
      href: "#relatorios-section",
      label: "Relatorios com MUI x Chart.js",
      id: "relatorios-section",
    },
  ];
  return (
    <>
      <div
        className={`${
          isOpen ? "w-64 flex-shrink-0" : "w-8 flex-shrink-0"
        } transition-all duration-300 ease-in-out`}
      >
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`fixed ml-[20px] mt-8 text-xl text-yellow-400 hover:text-yellow-300 transition-all delay-150 duration-300 ease-in-out border border-yellow-400 hover:border-yellow-300 rounded-full p-1 ${
            isOpen ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {isOpen ? <RiMenuUnfold4Line /> : <RiMenuUnfold3Line />}
        </button>
        <Sidebar
          className={`hidden md:flex fixed left-0 top-12 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarItems className="dark:bg-[#181818] bg-[#e9692c] dark:border-[#333] border-[#eee] border-r h-[calc(100vh-64px)] overflow-y-auto">
            <SidebarItemGroup className="p-2">
              <span className="flex justify-end">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className={`m-2 text-xl text-yellow-400 hover:text-yellow-300 transition-all delay-150 duration-300 ease-in-out border border-yellow-400 hover:border-yellow-300 rounded-full p-1`}
                >
                  <RiMenuUnfold4Line /> {/* Toggle Sidebar */}
                </button>
              </span>
              {sidebarItems.map((item) => (
                <SidebarItem
                  className="smooth hover:bg-brightbee-100 m-2 dark:hover:bg-brightbeeDark-10 transition-all delay-150 duration-300 ease-in-out"
                  href={item.href}
                  active={activeSection === item.id}
                  onClick={() => handleSectionClick(item.id)}
                >
                  {item.label}
                </SidebarItem>
              ))}
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
}
