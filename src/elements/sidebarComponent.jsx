import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
const sidebarItems = [
  { href: "#intro-section", label: "Introdução", id: "intro-section" },
  {
    href: "#formulario-section",
    label: "Formulario, Planilha e Google Apps Script",
    id: "formulario-section",
  },
  { href: "#firebase-section", label: "Firebase", id: "firebase-section" },
  { href: "#react-section", label: "Aplicação React", id: "react-section" },
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

export default function SidebarComponent({
  activeSection,
  handleSectionClick,
  dark,
  darkModeHandler,
  setDark,
}) {
  return (
    <>
      <div className=" w-64 flex-shrink-0">
        <Sidebar className="hidden md:flex fixed left-0 top-12 h-full w-64 z-40">
          <SidebarItems
            style={{
              background: dark ? "#181818" : "#e9692c",
              height: "calc(100vh - 64px)", // Altura total da viewport menos a altura do cabeçalho
              overflowY: "auto",
            }}
          >
            <SidebarItemGroup className="p-2">
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