import { CV_PATH } from "./const";

export function downloadCV() {
  const link = document.createElement("a");
  link.href = CV_PATH;
  link.download = "CV_Nguyen_Trung_Tinh.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
