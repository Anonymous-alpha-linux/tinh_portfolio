import { CV_PATH } from "./const";

export function downloadCV() {
  try {
    const langComp = document.querySelector(".page");
    const langData = langComp?.getAttribute("data-lang") || "en";

    // Define filename based on language
    const fileNames = {
      vi: "CV_Nguyen-Trung-Tinh_FullStack.pdf",
      en: "CV_Alan-Nguyen_Fullstack.pdf"
    };
    const fileName = fileNames[langData] || fileNames.en;

    // Use absolute path with import.meta.url for better mobile support
    const baseUrl = new URL(import.meta.url).origin;
    const cvUrl = new URL(CV_PATH, baseUrl).href;

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = fileName;
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");

    document.body.appendChild(link);
    link.click();

    // Cleanup after a short delay to ensure click is processed
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  } catch (error) {
    console.error("Download failed:", error);
    // Fallback: open in new tab for mobile users
    window.open(CV_PATH, "_blank");
  }
}
