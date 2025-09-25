export const scrollToSection = (sectionId) => {
  console.log("scrollToSection chamado com:", sectionId);
  if (!sectionId) {
    console.warn("scrollToSection: sectionId é inválido:", sectionId);
    return;
  }
  const sectionIdString = String(sectionId).trim(); // o trim remove espaços extras
  const element = document.getElementById(sectionIdString);
  console.log("Elemento encontrado:", element);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  }, console.log("scrollIntoView chamado para:", sectionIdString));
};
