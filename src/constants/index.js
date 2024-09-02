import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

// export const brainwaveServices = [
//   "Photo generating",
//   "Photo enhance",
//   "Seamless Integration",
// ];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Network Expansion",
    text: "Enhancing our infrastructure to increase coverage and bring high-speed internet to more areas in Delhi.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Advanced Technology Integration",
    text: "Implementing cutting-edge technologies to improve speed, reliability, and overall network performance.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Enhanced Customer Experience",
    text: "Upgrading our support systems and introducing new tools to provide faster, more efficient customer service.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Sustainable Practices",
    text: "Adopting eco-friendly practices and technologies to minimize our environmental impact while delivering exceptional service.",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Balanced Speed and Data for Streaming and Gaming",
    price: null,
    features: [
      "Speed: Up to 100 Mbps",
      "Data: Unlimited per month",
      "Installation: Free",
      "Support: 24/7 Customer Service",
      // "Contract: [No contract / 12-month contract]",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "High-Speed Internet for Power Users and Families",
    price: null,
    features: [
      "Speed: Up to 200 Mbps",
      "Data: Unlimited per month",
      "Installation: Free",
      "Support: 24/7 Customer Service",
      // "Contract: [No contract / 12-month contract]",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Reliable Connectivity for Growing Businesses",
    price: null,
    features: [
      "Speed: Up to 500 Mbps",
      "Data: Unlimited per month",
      "Installation: Free",
      "Support: 24/7 Customer Service",
      // "Contract: [No contract / 12-month contract]",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Reliable High-Speed Connectivity",
    text: "We provide consistent and ultra-fast internet speeds that keep your customers connected around the clock.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Seamless Network Integration",
    text: "Our advanced infrastructure integrates smoothly with local ISPs, ensuring hassle-free network management and minimal downtime.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Scalable Solutions",
    text: "Grow your business effortlessly with scalable internet packages that cater to your expanding customer base.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "24/7 Technical Support",
    text: "We offer round-the-clock technical assistance to ensure any issues are resolved promptly, keeping your network running smoothly.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Affordable Wholesale Plans",
    text: "Enjoy competitive pricing on our wholesale internet services, allowing you to offer attractive rates to your customers while maximizing profits.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Local Expertise and Partnerships",
    text: "We understand the Delhi market and work closely with local ISPs to deliver customized solutions that meet the unique needs of your region.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const footerlinks = [
  {
    id: "0",
    title: "Terms & Conditions",
    url: "/terms",
  },
  {
    id: "1",
    title: "Legal",
    url: "/legal",
  },
];
