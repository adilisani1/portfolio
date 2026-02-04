import { FaGithub, FaBehance, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import arrow_light from "./arrow-icon-light.png";
import arrow_dark from "./arrow-icon-dark.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import profile_img from "./profile-image.png";
import about_profile_img from "./profile-img.jpg";
import hand_icon from "./hand-icon.png";
import shape_img from "./shape-one.png";

// skills icons
import react_icon from "./react.svg";
import adobe_xd from "./xd.png";
import header_bg_color_two from "./bg-three.png";
import web_development_icon from "./web-design.png";
import js_icon from "./js.png";
import psd_icon from "./psd.png";
import word_press_two from "./wp.svg";
import next_js from "./nextjs.png";
import next_js_white from "./nextjs-white.png";
import tailwind from "./tail.png";
import figma from "./figma.png";
import wp from "./skill-3.png";
import bootsrap from "./bootstrap.png";
import node_js from "./node-js-icon.png";
import javascript_icon from "./javascript.png";
import ecommerce_image from "./ecommerce-image.jpg";
import ad_logo from "./ad-logo.png";
export const assets = {
  ad_logo,
  arrow_light,
  header_bg_color,
  arrow_dark,
  moon_icon,
  profile_img,
  about_profile_img,
  hand_icon,

  react_icon,
  adobe_xd,
  web_development_icon,
  shape_img,
  header_bg_color_two,
  next_js,
  figma,
  word_press_two,
  tailwind,
  wp,
  bootsrap,
  js_icon,
  psd_icon,
  next_js_white,
  node_js,
  javascript_icon,
  // portfolio images
  ecommerce_image,
};

export const toolsIcon = [
  { icon: assets.react_icon, name: "React", color: "bg-blue-600/20" },
  { icon: assets.next_js, name: "Next.js", color: "bg-gray-800/20" },
  { icon: assets.wp, name: "WordPress", color: "bg-blue-700/20" },
  { icon: assets.js_icon, name: "Javascript", color: "bg-yellow-500/20" },
  { icon: assets.tailwind, name: "Tailwind ", color: "bg-teal-500/20" },
  { icon: assets.figma, name: "Figma", color: "bg-purple-500/20" },
  { icon: assets.bootsrap, name: "Bootstrap", color: "bg-indigo-600/20" },
  { icon: assets.psd_icon, name: "PSD", color: "bg-blue-22/20" },
];

export const servicesData = [
  {
    title: "UX-UI Design",
    icon: assets.web_development_icon,
    desc: "With expertise in React JS, Next JS, Redux, Node JS, Express, and MongoDB, I offer complete web development solutions tailored to your needs. Whether you're looking for a dynamic front-end or a robust back-end, I can build seamless, scalable applications that meet your specific requirements.",
    link: "",
  },
  {
    title: "Web Development",
    icon: assets.web_development_icon,
    desc: "With expertise in React JS, Next JS, Redux, Node JS, Express, and MongoDB, I offer complete web development solutions tailored to your needs. Whether you're looking for a dynamic front-end or a robust back-end, I can build seamless, scalable applications that meet your specific requirements.",
    link: "",
  },
  {
    title: "CMS Development",
    icon: assets.web_development_icon,
    desc: "With expertise in React JS, Next JS, Redux, Node JS, Express, and MongoDB, I offer complete web development solutions tailored to your needs. Whether you're looking for a dynamic front-end or a robust back-end, I can build seamless, scalable applications that meet your specific requirements.",
    link: "",
  },
  {
    title: "Logo Design",
    icon: assets.web_development_icon,
    desc: "With expertise in React JS, Next JS, Redux, Node JS, Express, and MongoDB, I offer complete web development solutions tailored to your needs. Whether you're looking for a dynamic front-end or a robust back-end, I can build seamless, scalable applications that meet your specific requirements.",
    link: "",
  },
];

export const portfolioData = [
  {
    id: 1,
    title: "Ecommerce",
    tag: "website",
    category: "Website",
    link: "https://ecommerce-frontend-git-master-adilisani1s-projects.vercel.app/",
    imgSrc: assets.ecommerce_image,
    width: 650,
    height: 800,
    alt: "Ecommerce Project",
  },
  {
    id: 2,
    title: "Weather App",
    tag: "Website",
    category: "Website",
    link: "https://weather-application-ochre.vercel.app/",
    imgSrc: "/work-3.png",
    width: 650,
    height: 800,
    alt: "Weather Project",
  },
  {
    id: 3,
    title: "Food App",
    tag: "Website",
    category: "Website",
    link: "https://food-front-end-beta.vercel.app/",
    imgSrc: "/work-3.png",
    width: 650,
    height: 800,
    alt: "Food App Project",
  },
  {
    id: 4,
    title: "Uniswap Replica",
    tag: "replica",
    category: "Replica",
    link: "https://uniswap-dublicate.vercel.app/",
    imgSrc: "/work-3.png",
    width: 650,
    height: 800,
    alt: "More App Project",
  },

  {
    id: 5,
    title: "Unfontanero",
    tag: "Website",
    category: "Website",
    link: "https://www.unfontanero.com/",
    imgSrc: "/work-3.png",
    width: 650,
    height: 800,
    alt: "Unfontanero Project",
  },

  // {
  //   id: 6,
  //   title: "Flashy Booth",
  //   tag: "website",
  //   category: "website",
  //   link: "https://flashybooth.com.au/",
  //   imgSrc: "/assets/portfolio/projects/flash-booth.jpg",
  //   width: 650,
  //   height: 800,
  //   alt: "Flashy Booth",
  // },

  // {
  //   id: 7,
  //   title: "Creative Logo",
  //   tag: "logo",
  //   category: "logo",
  //   link: "https://www.behance.net/gallery/109887133/Logo-Design",
  //   imgSrc: "/assets/portfolio/logo/portfolio-1.jpg",
  //   width: 650,
  //   height: 800,
  //   alt: "Creative Logo",
  // },
  // {
  //   id: 8,
  //   title: "Bird Logo",
  //   tag: "logo",
  //   category: "logo",
  //   link: "https://www.behance.net/gallery/108220975/Logo-design",
  //   imgSrc: "/assets/portfolio/logo/portfolio-2.jpg",
  //   width: 650,
  //   height: 800,
  //   alt: "Bird Logo",
  // },
  // {
  //   id: 9,
  //   title: "Rocky Speed",
  //   tag: "logo",
  //   category: "logo",
  //   link: "https://www.behance.net/gallery/116170431/Logo",
  //   imgSrc: "/assets/portfolio/logo/portfolio-3.jpg",
  //   width: 650,
  //   height: 800,
  //   alt: "Rocky Speed Logo",
  // },

  // {
  //   id: 10,
  //   title: "Factor Linens",
  //   tag: "website",
  //   category: "website",
  //   link: "https://factorlinens.com/",
  //   imgSrc: "/assets/portfolio/projects/factorlenin.jpg",
  //   width: 650,
  //   height: 800,
  //   alt: "factor linens",
  // },
];

export const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/adilisani1",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aadil-isani/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Behance",
    url: "https://www.behance.net/adiisani",
    icon: <FaBehance />,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+923213427371",
    icon: <FaWhatsapp />,
  },
];
