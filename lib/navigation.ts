export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  description: string;
  links: NavLink[];
}

/**
 * Single source of truth for site navigation — the header mega-menu and the
 * footer's link columns both render from this list so they can never drift
 * apart the way they had on the legacy site (mismatched nav/footer, an
 * empty footer with no links at all).
 */
export const primaryNav: NavGroup[] = [
  {
    label: "About",
    href: "/about",
    description: "Our mission, history, and governance",
    links: [
      { label: "Our Mission", href: "/about", description: "Who we are and why ASEP exists" },
      { label: "Governance", href: "/about/governance", description: "Bylaws, code of ethics, standards of practice" },
      { label: "Officers & Board", href: "/about/officers", description: "Leadership and past presidents" },
      { label: "FASEP & Fellows", href: "/about/fasep", description: "Fellow status requirements" },
    ],
  },
  {
    label: "Membership",
    href: "/membership",
    description: "Six membership types for every career stage",
    links: [
      { label: "Membership Types", href: "/membership", description: "Professional, Student, Fellow, and more" },
      { label: "Become a Member", href: "/membership/join", description: "Start your application" },
      { label: "Renew Membership", href: "/membership/renew", description: "Keep your standing current" },
    ],
  },
  {
    label: "Certification",
    href: "/certification",
    description: "The EPC credential",
    links: [
      { label: "EPC Certification", href: "/certification", description: "Mission, goals, and eligibility" },
      { label: "Exam Process", href: "/certification/exam", description: "200 questions, 4 hours, online" },
      { label: "EPC Registry", href: "/certification/registry", description: "Verify a certified professional" },
    ],
  },
  {
    label: "Accreditation",
    href: "/accreditation",
    description: "Academic program standards",
    links: [
      { label: "Accreditation Process", href: "/accreditation", description: "How programs earn ASEP accreditation" },
      { label: "Accredited Programs", href: "/accreditation/programs", description: "Browse accredited institutions" },
    ],
  },
  {
    label: "Journals",
    href: "/journals",
    description: "Four peer-reviewed, open-access publications",
    links: [
      { label: "JEP Online", href: "/journals/jep-online", description: "Scopus-indexed, bi-monthly" },
      { label: "JEM Online", href: "/journals/jem-online", description: "Exercise medicine research" },
      { label: "PEP Online", href: "/journals/pep-online", description: "Professionalization of exercise physiology" },
      { label: "Journal of Professional Exercise Physiology", href: "/journals/jpep", description: "Professional practice research" },
    ],
  },
  {
    label: "Resources",
    href: "/jobs",
    description: "Careers, news, and events",
    links: [
      { label: "Job Board", href: "/jobs", description: "Open positions for exercise physiologists" },
      { label: "News", href: "/news", description: "Announcements and organizational updates" },
      { label: "Events", href: "/events", description: "Conferences and meetings" },
      { label: "FAQ", href: "/faq", description: "Common questions, answered" },
    ],
  },
];

export const utilityNav: NavLink[] = [
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/login" },
];

export const legalNav: NavLink[] = [
  { label: "Terms & Conditions", href: "/about/terms" },
  { label: "Privacy Policy", href: "/about/privacy" },
];
