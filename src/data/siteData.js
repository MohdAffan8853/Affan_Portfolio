import {
  FiAward,
  FiBriefcase,
  FiHome,
  FiMail,
  FiPhone,
  FiTrendingUp,
} from "react-icons/fi";
import {
  FaDatabase,
  FaFileExcel,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import {
  SiCss,
  SiDjango,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiScikitlearn,
} from "react-icons/si";
import heroOne from "../../layout/images/home/home.png";
import workOne from "../../layout/images/work/img-1.png";
import workTwo from "../../layout/images/work/img-2.png";
import workThree from "../../layout/images/work/img-3.png";
import workFour from "../../layout/images/work/img-4.png";
import { GrGithub } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { BsBarChartLineFill, BsFileExcel } from "react-icons/bs";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "aboutme", label: "About Us" },
  { id: "projects", label: "Projects" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: GrGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohd-raiyan-b96868348/", icon: FaLinkedinIn },
  { label: "X", href: "https://x.com/MohdR68251", icon: FaXTwitter },
  { label: "Instagram", href: "https://www.instagram.com/raiyan_k47/", icon: FaInstagram },
  { label: "Email", href: "mohdraiyan68@gmail.com", icon: MdEmail },
];

export const heroContent = {
  accent: "text-amber-500",
  button: "bg-amber-400/15 text-amber-600 ring-amber-400/40",
  image: heroOne,
  titles: ["Data Analyst", "Data Scientist"],
};

export const aboutTabs = {
  skills: {
    label: "Skills",
    icon: FiTrendingUp,
    items: [
      { label: "HTML", value: 95, icon: SiHtml5, iconClassName: "text-[#e34f26]" },
      { label: "CSS", value: 95, icon: SiCss, iconClassName: "text-[#1572b6]" },
      { label: "Python", value: 95, icon: SiPython, iconClassName: "text-[#3776ab]" },
      { label: "JavaScript", value: 85, icon: SiJavascript, iconClassName: "text-[#f7df1e]" },
      { label: "Git & GitHub", value: 90, icon: SiGithub, iconClassName: "text-[var(--text)] dark:text-white" },
      { label: "SQL", value: 85, icon: FaDatabase, iconClassName: "text-[#cc2927]" },
      { label: "Statistics", value: 90, icon: BsBarChartLineFill, iconClassName: "text-[#4f46e5]" },
      { label: "Power BI", value: 90, icon: BsBarChartLineFill, iconClassName: "text-[#f2c811]" },
      { label: "Excel", value: 95, icon: BsFileExcel, iconClassName: "text-[#217346]" },
      { label: "Machine Learning", value: 85, icon: SiScikitlearn, iconClassName: "text-[#f7931e]" },
    ],
  },
  experience: {
    label: "Experience",
    icon: FiBriefcase,
    items: [
      {
        title: "Intership at Head Field Solution",
        meta: "Nov-2025 to May-2026 (6 months Experience)",
        description:
          "There are lots of data to Collected, cleaned, and analyzed datasets using Python (Pandas, NumPy),SQL and biult intractive dashboard in PowerBI.",
      },
      {
        title: "ExpertSource",
        meta: "May-2025 to Oct-2026 (6 months Experience)",
        description:
          "Handled customer queries through email and live chat and assisted with orders, deliveries, payments, cancellations, and refunds.",
      },
      {
        title: "ICCS",
        meta: "jan-2025 to Mar-2026 (3 months Experience)",
        description:
          "Handled customer queries through calls and live chat and assisted with DC update, loan, Credit card, payments, open demat account, and others.",
      },
    ],
  },
  education: {
    label: "Education",
    icon: FiAward,
    items: [
      {
        title: "Bsc Information Technology",
        meta: "2022-2025 (3 year)",
        description: "I did my Bsc in IT from Lovely Professional Mumbai University,Maharashtra, India. I have completed my graduation in 2025 with 8.02 CGPA.",
      },
      {
        title: "Intermediate",
        meta: "2020-2022",
        description: "I did my Intermediate in Science from MDIC Ghazipur, UP, India. I have completed my Intermediate in 2022 with 70% marks.",
      },
      {
        title: "High School",
        meta: "2018-2020",
        description: "I did my High School from MDIC Ghazipur, UP, India. I have completed my High School in 2020 with 73% marks.",
      },
    ],
  },
};

export const aboutProfileCard = {
  title: "About Me",
  description:
    "I'm a passionate Data analysts and Data scientist with a strong knowledge of Python, SQL, Excel, PowerBI, Statistics and machine learning . I focus on building interactive and responsive Dashboard to Business problem . I love working with the data.",
  details: [
    { label: "Name", value: "Mohd Affan" },
    { label: "Email", value: "affankhan885313@gmail.com" },
    { label: "Location", value: "India" },
    { label: "Experience", value: "1+ Year" },
  ],
  cvLabel: "Download CV",
  cvHref: "/Affankhan_DA.pdf",
};

export const projects = [
  {
    title: "Customer Shopping Analysis",
    image: workOne,
    githubUrl: "https://github.com/MohdAffan8853/Customer_Shopping_Analysis",
    liveUrl: "#",
  },
  {
    title: "Zepto Dataset Analysis",
    image: workTwo,
    githubUrl: "https://github.com/MohdAffan8853/Zepto_Dataset_Analysis",
    liveUrl: "#",
  },
];

export const workItems = [
  { image: workOne, title: "Web Design", category: "E-Commerce" },
  { image: workTwo, title: "NFT Web Design", category: "NFT Marketplace" },
];

export const contactDetails = [
  {
    icon: FiHome,
    label: "Address",
    lines: ["c-136 Jasola Vihar Shaheen Bagh, New Delhi, India"],
  },
  {
    icon: FiPhone,
    label: "Phone",
    lines: ["(+91) 9140618237"],
  },
  {
    icon: FiMail,
    label: "Support",
    lines: ["affankhan885313@gmail.com"],
  },
];

export const contactFormConfig = {
  recipientEmail: "affankhan885313@gmail.com",
  endpoint: "https://formsubmit.co/ajax/affankhan885313@gmail.com",
};
