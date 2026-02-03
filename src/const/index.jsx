import {
  FaRegUser,
  FaRegListAlt,
  FaBrain,
  FaPhoneAlt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaHtml5
} from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";

export const KEY_THEME_MODE = "themeMode";

export const THEME_MODES = {
  LIGHT: "light",
  DARK: "dark"
};

export const DEFAULT_THEME = "dark";

export const TYPEWRITER_CONTENTS = [
  "Fullstack developer",
  "Adverstiser",
  "Freelancer"
];

export const TYPEWRITER_CONFIG = {
  typeSpeed: 60,
  deleteSpeed: 40,
  delay: 1500,
  loop: true
};

export const MENU_LIST = [
  { key: "about", icon: <FaRegUser /> },
  { key: "projects", icon: <FaRegListAlt /> },
  { key: "skills", icon: <FaBrain /> },
  { key: "contact", icon: <FaPhoneAlt /> }
];

export const SOCIAL_LINKS = [
  { key: "facebook", icon: <FaFacebook /> },
  { key: "github", icon: <FaGithub /> },
  { key: "linkedin", icon: <FaLinkedin /> }
];

export const KEY_ACTIVE_PAGE = "activePage";

export const ABOUT_INFORS = [
  {
    labelKey: "about.info.age.label",
    valueKey: "about.info.age.value"
  },
  {
    labelKey: "about.info.residence.label",
    valueKey: "about.info.residence.value"
  },
  {
    labelKey: "about.info.freelance.label",
    valueKey: "about.info.freelance.value"
  },
  {
    labelKey: "about.info.address.label",
    valueKey: "about.info.address.value"
  }
];

export const SERVICE_INFORS = [
  {
    icon: <FaHtml5 />,
    titleKey: "services.frontend.title",
    contentKey: "services.frontend.content"
  },
  {
    icon: <SiDotnet />,
    titleKey: "services.backend.title",
    contentKey: "services.backend.content"
  },
  {
    icon: <FaFlutter />,
    titleKey: "services.mobile.title",
    contentKey: "services.mobile.content"
  },
  {
    icon: <FaFacebook />,
    titleKey: "services.advertising.title",
    contentKey: "services.advertising.content"
  }
];

export const CONTACT_INFORS = [
  {
    titleKey: "contact.info.address.label",
    valueKey: "contact.info.address.value"
  },
  {
    titleKey: "contact.info.email.label",
    valueKey: "contact.info.email.value"
  },
  {
    titleKey: "contact.info.phone.label",
    valueKey: "contact.info.phone.value"
  },
  {
    titleKey: "contact.info.freelance.label",
    valueKey: "contact.info.freelance.value"
  }
];

export const KNOWLEDGE_LIST = [
  "skills.knowledge.items.0",
  "skills.knowledge.items.1",
  "skills.knowledge.items.2",
  "skills.knowledge.items.3"
];

export const CODING_SKILLS = [
  "skills.coding.items.0",
  "skills.coding.items.1",
  "skills.coding.items.2",
  "skills.coding.items.3"
];

export const KEY_ACTIVE_LANG = "lang";

export const AVATAR_LINK =
  "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/499414435_3912546185675385_2768604204478860126_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHZgh5t6b-wk8WAptkK5K_DA3klRt5Qk2wDeSVG3lCTbEyzvuFfdblYdNDaxw_gZ23RfpFhq_m4mBx7XTJdkYgc&_nc_ohc=e7XNGQokpWoQ7kNvwHlGN8e&_nc_oc=AdnCEKl4yAIHszhPLoUIAs0vNIUoyecaWvnp3GWhMVaRavijflVoJVuYtNnuU8tNI43VBfbcowOP4aI4vWr2zAfM&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&_nc_gid=IqP-nK-vnXG0AftAyZgU7A&oh=00_Aftr8OIbbljHqHJTEbEGavzuLQ1WsMqJtMHMashuWUkpPg&oe=69842191";
export const BANNER_LINK =
  "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/622806450_4151639008432767_3304443720097696203_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHkWeJcUdhgSjf8yHQ0W2TeLdFhhTe6xjot0WGFN7rGOppZ9LxPYwsGuNjKaU1lfffdnFc-e1NhJAkeIx_zZr_x&_nc_ohc=J2a1qhNZPJoQ7kNvwHxbEVU&_nc_oc=AdksMuSxsT2OwDhBZyZ67DJftKhFq70S6qSUYJzyBembWydgD5u-msuov7KVkJfU06k4-9MJe1H_ALvj0_YMvXbM&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=3-BzSKQaJkvOKjy4WMTKSA&oh=00_AftoMgboLlaH5_YnZ01hSg23oOKYzRtJxkEIWQL4eKZ14g&oe=698428D4";
export const CV_PATH = "../assets/CV_Nguyen_Trung_Tinh.pdf";
