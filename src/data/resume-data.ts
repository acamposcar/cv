import type { ResumeData } from "@/lib/types";
import avatar from "./avatar.jpg";

export const RESUME_DATA: ResumeData = {
  name: "Alejandro Campos Carceller",
  location: "Valencia, Spain · CET (Open to Remote)",
  locationLink: "https://www.google.com/maps/place/Valencia",
  about:
    "Software Engineer · Internal Tools, Build Automation & Industrial Software",
  summary:
    "Software engineer with an industrial engineering background and 10 years building mission-critical software and internal platforms for rail and automotive teams. Experienced leading small engineering groups on site across Europe and owning internal tooling end to end—from static analysis platforms used daily by 20 engineers to headless release pipelines and booking apps supporting 50 users.",
  avatar,
  siteUrl: "https://acampos.dev",
  contact: {
    email: "acamposcar@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/acamposcar",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/acamposcar/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Universitat Politècnica de València (UPV)",
      degree:
        "MSc in Industrial Engineering (Automatic Control & Robotics) · 8.4/10",
      start: "2014",
      end: "2016",
    },
    {
      school: "Universitat Politècnica de València (UPV)",
      degree:
        "BSc in Industrial Engineering · 8.0/10 · Co-author in Diabetes Technology & Therapeutics",
      start: "2010",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Stadler Rail",
      link: "https://www.stadlerrail.com",
      badges: [
        "On-site",
        "Rail",
        "Internal Tools",
        "Python",
        "TypeScript",
        "C#",
        "IEC 61131-3",
      ],
      title: "Software Build & Integration Engineer",
      start: "Jun 2025",
      end: null,
      description:
        "Own build/release automation and the internal developer tools suite supporting vehicle control unit (VCU/TCMS) software integration, validation, and release across LRV, FLIRT, and locomotive platforms.",
      highlights: [
        "Built automated compilation, PCZ packaging, PLC deployment, and boot-error verification pipelines via PowerShell where no CI existed",
        "Developed headless release automation wrapping vendor build libraries to replace manual GUI packaging, backed by xUnit and E2E test suites",
        "Built an OPC UA client/driver in Python integrated with NI TestStand and DOORS pipelines for automated PLC software verification",
        "Integrate and maintain VCU/TCMS software across Selectron CAP1131, SVN, IBM DOORS, and SoftPro/Oracle",
      ],
    },
    {
      company: "Stadler Rail",
      link: "https://www.stadlerrail.com",
      badges: ["On-site (CH / IT)", "Homologation", "Dewesoft DAQ", "Rail"],
      title: "Test & Validation Engineer",
      start: "Nov 2022",
      end: "Jun 2025",
      description:
        "Led on-site commissioning and regulatory homologation testing for new rolling stock (Tramlink Bern trams in Switzerland and Naples Circumvesuviana EMUs in Italy).",
      highlights: [
        "Executed country-specific rail homologation tests (braking and Wheel Slide Protection / WSP), owning sensor instrumentation, Dewesoft data acquisition, and post-test data processing",
        "Defined validation plans, coordinated suppliers, validated vehicle software, and resolved electrical and mechanical issues with engineering teams",
      ],
    },
    {
      company: "Interiorify.ai",
      badges: [
        "Side Project",
        "SaaS",
        "Next.js",
        "FastAPI",
        "Supabase",
        "Generative AI",
      ],
      title: "Founder & Solo Developer",
      start: "Oct 2022",
      end: "Oct 2024",
      description:
        "Designed, launched, and operated end to end an AI interior-design and virtual staging SaaS powered by Stable Diffusion/SDXL (Next.js, Supabase, Stripe subscriptions, Python FastAPI inference backend, Cloudinary). Reached paying customers and ran in production for two years.",
    },
    {
      company: "SIAM S.L.",
      badges: [
        "Automotive",
        "Tech Lead",
        "Allen-Bradley",
        "PLC & HMI",
        "DE / UK / SK / ES",
      ],
      title: "Software Programmer → Lead Software Programmer & Commissioning",
      start: "Apr 2016",
      end: "Sep 2022",
      description:
        "Delivered PLC/HMI automation software, managed industrial Ethernet networks, and on-site commissioning for automotive production lines across Europe.",
      highlights: [
        "Lead (2020–2022): Led a team of 3–4 PLC software engineers delivering automation software and commissioning for the Ford Battery Plant in Almussafes (Valencia)",
        "Programmed Allen-Bradley RSLogix 5000 PLCs and HMIs and built internal automation utilities for body shop lines at Ford Saarlouis (Focus 2018, on-site software coordinator), Ford Cologne (Fiesta 2017), JLR Nitra (Defender/Discovery 2019), and JLR Liverpool (Discovery Sport 2019)",
      ],
    },
  ],
  skills: [
    "Python",
    "TypeScript",
    "SQL",
    "React/Next.js",
    "Node.js (Fastify)",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "Linux",
    "IEC 61131-3",
    "C# (.NET/WPF)",
    "Kotlin",
    "PowerShell",
    "Electron",
    "PySide6",
    "Vitest/xUnit",
    "OPC UA",
    "NI TestStand",
    "IBM DOORS",
    "Claude API",
  ],
  projects: [
    {
      title: "Rail Parser (Stadler)",
      techStack: [
        "Python 3.13",
        "PySide6",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Drizzle",
        "WebSockets",
        "DOORS DXL",
      ],
      description:
        "Static analysis and code-quality platform for CAP1131 PLC projects with 83 custom rules, interactive code viewer, DOORS parameter cross-checking, SoftPro/SVN integration, and code generation. Used daily by ~20 engineers.",
    },
    {
      title: "SFS Monitor (Stadler)",
      techStack: [
        "Electron",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "PostgreSQL",
        "Vitest",
      ],
      description:
        "Collaborative requirements change-tracking desktop app with diffs, review queues, RBAC, audit logs, and managed network updates (~10 daily users).",
    },
    {
      title: "Bookinger (Stadler)",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Sentry"],
      description:
        "Asset and test-equipment booking web app for the validation department featuring scheduling, check-in/out tracking, and usage forecasting (~50 users).",
    },
    {
      title: "Brasa",
      techStack: [
        "Kotlin",
        "Jetpack Compose",
        "Media3",
        "FFmpeg",
        "FastAPI",
        "PostgreSQL",
      ],
      description:
        "Self-hosted native Android & Android TV media streaming app with FFmpeg transcoding, Media3 playback, a FastAPI + PostgreSQL backend, and a web admin panel.",
    },
    {
      title: "Garmin Coach",
      techStack: ["Claude API", "Python", "TypeScript"],
      description:
        "Personal AI training and health coach built on top of real Garmin telemetry with a chat interface, metrics dashboard, and persistent memory.",
    },
    {
      title: "ha-avamet",
      techStack: ["Open Source", "Python", "Home Assistant", "HACS"],
      description:
        "Open-source Home Assistant integration for AVAMET weather stations, distributed and installable via HACS.",
      link: "https://github.com/acamposcar/ha-avamet",
    },
  ],
};

export const SECTION_TITLES = {
  summary: "About",
  work: "Work Experience",
  education: "Education",
  skills: "Skills",
  projects: "Selected Projects",
} satisfies Partial<Record<keyof ResumeData, string>>;
