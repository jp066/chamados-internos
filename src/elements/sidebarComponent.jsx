import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";

export default function SidebarComponent({ activeSection, handleSectionClick, dark, darkModeHandler, setDark }) {
  return (
    <>
      <div className=" w-64 flex-shrink-0">
        <Sidebar className="hidden md:flex fixed left-0 top-16 h-full w-64 z-40">
          <SidebarItems
            style={{
              background: dark ? "#181818" : "#e9692c",
              height: "calc(100vh - 64px)",
              overflowY: "auto",
              borderRight: dark ? "1px solid #333" : "1px solid #ddd",
            }}
          >
            <SidebarItemGroup className="p-2">
              <SidebarItem
                className="hover:bg-brightbee-100 m-2 dark:hover:bg-brightbeeDark-10 hover:scale-110 transition-all delay-150 duration-300 ease-in-out"
                href="#intro-section"
                active={activeSection === "intro-section"}
                onClick={() => handleSectionClick("intro-section")}
              >
                Introdução
              </SidebarItem>
              <SidebarItem
                className="hover:bg-brightbee-100 m-2 dark:hover:bg-brightbeeDark-10 hover:scale-110 transition-all delay-150 duration-300 ease-in-out"
                href="#formulario-section"
                labelColor="dark"
                active={activeSection === "formulario-section"}
                onClick={() => handleSectionClick("formulario-section")}
              >
                Formulario, Planilha e Google Apps Script
              </SidebarItem>
              <SidebarItem
                className="hover:bg-brightbee-100 m-2 dark:hover:bg-brightbeeDark-10 hover:scale-110 transition-all delay-150 duration-300 ease-in-out"
                href="#telegram-section"
                active={activeSection === "telegram-section"}
                onClick={() => handleSectionClick("telegram-section")}
              >
                TelegramBot
              </SidebarItem>
              <SidebarItem
                className="hover:bg-brightbee-100 m-2 dark:hover:bg-brightbeeDark-10 hover:scale-110 transition-all delay-150 duration-300 ease-in-out"
                href="#firebase-section"
                active={activeSection === "firebase-section"}
                onClick={() => handleSectionClick("firebase-section")}
              >
                Firebase
              </SidebarItem>
              <SidebarItem
                className="hover:bg-brightbee-100 m-2 dark:hover:bg-brightbeeDark-10 hover:scale-110 transition-all delay-150 duration-300 ease-in-out"
                href="#react-section"
                active={activeSection === "react-section"}
                onClick={() => handleSectionClick("react-section")}
              >
                Aplicação React
              </SidebarItem>
              <SidebarItem
                className="hover:bg-brightbee-100 m-2 dark:hover:bg-brightbeeDark-10 hover:scale-110 transition-all delay-150 duration-300 ease-in-out"
                href="#cloudinary-section"
                active={activeSection === "cloudinary-section"}
                onClick={() => handleSectionClick("cloudinary-section")}
              >
                Cloudinary
              </SidebarItem>
              <SidebarItem
                className="hover:bg-brightbee-100 m-2 dark:hover:bg-brightbeeDark-10 hover:scale-110 transition-all delay-150 duration-300 ease-in-out"
                href="#relatorios-section"
                active={activeSection === "relatorios-section"}
                onClick={() => handleSectionClick("relatorios-section")}
              >
                Relatorios com MUI x Chart.js
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
}
