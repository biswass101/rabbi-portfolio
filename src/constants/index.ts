import {
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Headphones,
  Monitor,
  Users,
  Network,
  Settings,
  Eye,
  UserCheck,
  FileText,
  type LucideProps,
  Server,
  Wrench,
  Cloud,
  Shield,
  Code,
  Database,
  Tv,
  Palette,
  Award,
  Brain,
  MessageCircle,
  Zap,
} from "lucide-react";

export interface IContactItems {
  id: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  detail: string;
  href: string;
}

export const contactItems: IContactItems[] = [
  {
    id: "phone",
    icon: Phone,
    detail: "+880 17-66665517",
    href: "tel:+880 17-66665517",
  },
  {
    id: "email",
    icon: Mail,
    detail: "golamrabbicse4526@gmail.com",
    href: "mailto:golamrabbicse4526@gmail.com",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    detail: "linkedin.com/in/md-golam-rabbi-4b938a146",
    href: "https://linkedin.com/in/md-golam-rabbi-4b938a146",
  },
  {
    id: "location",
    icon: MapPin,
    detail: "Sayed Nagar, Jora Building, Vatara, Dhaka - 1212",
    href: "#",
  },
];

export interface ICompetencies {
  icon: string | React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
}

export const competencies: ICompetencies[] = [
  {
    icon: Headphones,
    title: "IT Support (Tier 1–3) & Troubleshooting",
    description: "Multi-tier technical support expertise",
  },
  {
    icon: Monitor,
    title: "Windows/Linux OS, Microsoft 365 & Exchange",
    description: "Cross-platform system administration",
  },
  {
    icon: Users,
    title: "Active Directory & Group Policy",
    description: "User and system policy management",
  },
  {
    icon: Network,
    title: "Network Support (LAN/WAN, DNS, DHCP, VPN)",
    description: "Comprehensive network infrastructure",
  },
  {
    icon: Settings,
    title: "ServiceNow & ITIL Incident Management",
    description: "Service management and best practices",
  },
  {
    icon: Eye,
    title: "SCCM, TeamViewer, AnyDesk, Nagios Monitoring",
    description: "System monitoring and remote support",
  },
  {
    icon: UserCheck,
    title: "User Onboarding/Offboarding & Asset Management",
    description: "Complete lifecycle management",
  },
  {
    icon: FileText,
    title: "Documentation & Knowledge Base Creation",
    description: "Process documentation and knowledge sharing",
  },
];

export interface ISkillCategories extends Omit<ICompetencies, "description"> {
  skills: string[] | React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >[];
  color: string;
}

export const skillCategories: ISkillCategories[] = [
  {
    icon: Server,
    title: "Platforms",
    skills: ["Windows Server", "Ubuntu/CentOS", "Microsoft 365"],
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["ServiceNow", "SCCM", "TeamViewer", "AnyDesk"],
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Network,
    title: "Networking",
    skills: ["Cisco Switches/Routers", "TCP/IP", "DNS", "DHCP", "VPN"],
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Cloud,
    title: "Cloud",
    skills: ["Azure AD", "SharePoint", "OneDrive"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["CrowdStrike", "Symantec", "BitLocker", "MFA"],
    color: "from-red-500 to-pink-600",
  },
  {
    icon: Code,
    title: "Scripting",
    skills: ["PowerShell (automation, reports)", "Bash (basic)"],
    color: "from-purple-500 to-indigo-600",
  },
];

export interface IExperiences {
  title: string;
  company: string;
  period: string;
  responsibilities: Array<string>;
}

export const experiences: IExperiences[] = [
  {
    title: "Sr. Technician – IT Support",
    company: "GAB Limited",
    period: "Mar 2024 – Present",
    responsibilities: [
      "Delivered L1–L2 technical support for users across hardware, software, and network.",
      "Managed AD user accounts, group policies, and system access.",
      "Monitored system health using Nagios; ensured minimal downtime.",
      "Coordinated with internal teams and vendors for issue resolution and procurement.",
      "Maintained IT documentation and provided end-user training.",
    ],
  },
  {
    title: "Supervisor – IT",
    company: "GAB Limited",
    period: "May 2019 – Feb 2024",
    responsibilities: [
      "Led infrastructure projects across manufacturing and office facilities.",
      "Oversaw telecom setup, IT installations, and preventive maintenance.",
      "Managed ticket resolution through the helpdesk system.",
      "Enforced IT policies and trained staff to maintain compliance and security.",
      "Maintained hardware/software inventory and implemented SOPs.",
    ],
  },
];

export interface IProjects {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  color: string;
}

export const projects: IProjects[] = [
  {
    icon: Database,
    title: "DcLink System",
    description: "Infrastructure & user support for production",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Ulula App Integration",
    description: "Secure complaint system with HR",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Tv,
    title: "Gildan TV",
    description: "Internal communication via digital signage",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Color Service & Orgatex",
    description: "Integration for automatic chemical dosing in dyeing",
    color: "from-orange-500 to-red-500",
  },
];
export interface IEducations {
  degree: string;
  institution: string;
  major: string;
  year: string;
}
export const educations = [
  {
    degree: "MBA",
    institution: "City University",
    major: "Human Resource Management",
    year: "2022",
  },
  {
    degree: "B.Sc. in CSE",
    institution: "City University",
    major: "Computer Science & Engineering",
    year: "2018",
  },
  {
    degree: "H.S.C",
    institution: "Govt. Debendra College",
    major: "Science",
    year: "2013",
  },
  {
    degree: "S.S.C",
    institution: "Alhaj Jafor Bepari High School",
    major: "Science",
    year: "2010",
  },
];

export interface ICertifications {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  provider: string;
  duration: string;
  color: string;
}

export const certifications: ICertifications[] = [
  {
    icon: Award,
    title: "Lean Six Sigma White Belt",
    provider: "Gildan",
    duration: "Jul 2024 – Sep 2024",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Server,
    title: "Windows Server 2022 Administration",
    provider: "Udemy",
    duration: "26 hrs",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Mail,
    title: "Office 365 & Exchange Online",
    provider: "Udemy",
    duration: "5.5 hrs",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Wrench,
    title: "IT Troubleshooting Skills",
    provider: "Udemy",
    duration: "1.5 hrs",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Network,
    title: "CCNA",
    provider: "CSL Training",
    duration: "72 hrs",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Code,
    title: "Web Design & Development (PHP)",
    provider: "BITM",
    duration: "Full Course",
    color: "from-cyan-500 to-blue-500",
  },
];

export interface ISoftSkills extends Omit<IProjects, "description" | "color"> {}
export const softSkills: ISoftSkills[] = [
  {
    icon: Brain,
    title: "Strong analytical and troubleshooting ability",
  },
  {
    icon: MessageCircle,
    title: "Effective communication and documentation",
  },
  {
    icon: Users,
    title: "Team collaboration and leadership",
  },
  {
    icon: Zap,
    title: "Adaptability in fast-paced environments",
  },
];

export interface ILanguages {
  language: string;
  writing: string;
  reading: string;
  speaking: string;
}

export const languages: ILanguages[] = [
  {
    language: "Bangla",
    writing: "Excellent",
    reading: "Excellent",
    speaking: "Excellent",
  },
  {
    language: "English",
    writing: "Excellent",
    reading: "Excellent",
    speaking: "Excellent",
  },
];

export const interests: string[] = [
  "Playing Cricket, Football & Badminton",
  "Drama & Literature",
  "Social Work & Travel",
];
