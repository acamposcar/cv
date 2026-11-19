import type { ResumeData } from "@/lib/types";
import avatar from "./avatar.jpg";

export const RESUME_DATA: ResumeData = {
  name: "Alejandro Campos Carceller",
  location: "Valencia, Spain · CET (Open to Remote)",
  locationLink: "https://www.google.com/maps/place/Valencia",
  about:
    "Software Engineer building train control software, internal platforms, and automation.",
  summary:
    "Software engineer with 10 years of experience building mission-critical control software across rail and automotive, including leading engineering teams on-site across Europe. Today I develop and integrate Vehicle Control Unit (VCU/TCMS) software that controls real trains. Alongside my core work, I use modern AI-assisted and agentic coding workflows to ship internal developer platforms and automation, led by a daily engineering workbench used by ~20 engineers to keep train code, requirements, documentation, and issue tickets in sync.",
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
        "BSc in Industrial Engineering · 8.0/10 · Published co-author in Diabetes Technology & Therapeutics",
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
        "IEC 61131-3",
        "Python",
        "TypeScript",
        "Internal Tools",
        "C#",
      ],
      title: "Software Build & Integration Engineer",
      start: "Jun 2025",
      end: null,
      description:
        "Develop, integrate, and release Vehicle Control Unit (VCU/TCMS) control software for trams, regional trains, and locomotives, while proactively building internal developer platforms and verification automation.",
      highlights: [
        "Develop and integrate real-time VCU/TCMS train control software in IEC 61131-3, managing requirements, versioning, and releases across SVN, IBM DOORS, and Oracle",
        "Initiated and architected an all-in-one PLC engineering workbench (Python, PySide6, Fastify, PostgreSQL, DOORS DXL) used daily by ~20 engineers to keep IBM DOORS specs, internal documentation, train anomaly tickets, and PLC code in sync, catching previously undetected defects with 83 static analysis rules and code generation",
        "Built a Python OPC UA driver integrated with NI TestStand and DOORS for automated PLC verification, plus an Electron/React desktop app for collaborative requirements change tracking (~10 daily users)",
        "Developed C#/.NET headless release automation wrapping vendor build libraries to replace manual GUI packaging, backed by xUnit and E2E tests",
      ],
    },
    {
      company: "Stadler Rail",
      link: "https://www.stadlerrail.com",
      badges: [
        "On-site (CH / IT)",
        "Homologation",
        "Dewesoft DAQ",
        "Rail",
        "Next.js",
        "Internal Tools",
      ],
      title: "Test & Validation Engineer",
      start: "Nov 2022",
      end: "Jun 2025",
      description:
        "Led on-site commissioning and regulatory homologation testing for new rolling stock (Tramlink Bern trams in Switzerland and Naples Circumvesuviana EMUs in Italy).",
      highlights: [
        "Executed country-specific rail homologation tests (braking and Wheel Slide Protection / WSP), owning sensor instrumentation, Dewesoft data acquisition, and post-test data processing",
        "Defined validation plans, coordinated suppliers, validated vehicle software, and resolved software, electrical, and mechanical issues with engineering teams",
        "Initiated and built a full-stack test-equipment booking web app (Next.js, TypeScript, PostgreSQL) for the validation department, actively used by ~50 people today",
      ],
    },
    {
      company: "Interiorify.ai",
      badges: [
        "Bootstrapped",
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
        "Designed, launched, and operated an AI interior-design and virtual staging SaaS end to end, powered by Stable Diffusion/SDXL (Next.js, Supabase, Stripe subscriptions, Python FastAPI inference backend, Cloudinary). Reached paying customers and ran in production for two years.",
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
        "Delivered PLC/HMI automation software, managed industrial Ethernet networks, and led on-site commissioning for automotive production lines across Europe.",
      highlights: [
        "Tech Lead (2020–2022): Managed a team of 3–4 engineers delivering PLC/HMI control systems and plant commissioning for the Ford Battery Plant in Almussafes (Valencia)",
        "Programmed Allen-Bradley RSLogix 5000 PLCs and HMIs and built internal automation utilities for body shop lines at Ford (Saarlouis, on-site software coordinator; Cologne) and Jaguar Land Rover (Nitra, Liverpool)",
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
    "Electron",
    "PySide6",
    "C# (.NET/WPF)",
    "Kotlin",
    "Vitest/xUnit",
    "OPC UA",
    "NI TestStand",
    "IBM DOORS",
    "Claude API",
  ],
  projects: [
    {
      title: "PLC Engineering Workbench",
      techStack: [
        "Internal Tool",
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
        "Daily developer workbench for IEC 61131-3 train control teams that bridges IBM DOORS software design, internal documentation databases, and live PLC code to verify spec-to-code consistency and documentation accuracy. Combines 83 custom static analysis rules catching previously missed defects, an interactive code viewer, code generation, and integrated train anomaly ticket tracking (~20 daily engineers, built on my own initiative).",
    },
    {
      title: "Requirements Change-Tracking App",
      techStack: [
        "Internal Tool",
        "Electron",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "PostgreSQL",
        "Vitest",
      ],
      description:
        "Collaborative desktop app for tracking engineering specification changes with visual diffs, review queues, RBAC, audit logs, and managed network updates (~10 daily users).",
    },
    {
      title: "Test-Equipment Booking App",
      techStack: [
        "Internal Tool",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Drizzle",
        "Sentry",
      ],
      description:
        "Web application for the validation department to schedule test rigs and instrumentation, track check-in/out status, and forecast equipment demand (~50 users).",
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
