export interface FaqItem {
  category: string;
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    category: "Certification",
    q: "What does EPC certification require?",
    a: "Current ASEP membership, an approved academic transcript, and a passing score (70% or higher) on a 200-question, 4-hour online exam. The standard exam fee is $300; students in an ASEP-accredited program pay a discounted $50 for their first attempt.",
  },
  {
    category: "Certification",
    q: "What happens if I don't pass the EPC exam?",
    a: "You may retake the exam at the standard $300 fee. There are no refunds or additional discounts on retakes, regardless of membership or student status.",
  },
  {
    category: "Membership",
    q: "Which membership type is right for me?",
    a: "Professional and EPC Certified cover most practicing exercise physiologists; Student is for those currently enrolled in a program (capped at two years); Fellow is an annually-applied-for honor; International and Affiliate cover practitioners and allied professionals outside those categories.",
  },
  {
    category: "Membership",
    q: "How do I renew my membership?",
    a: "Log in to your member account and visit the renewal page. You'll see your current status and renewal date, and can renew directly from your dashboard.",
  },
  {
    category: "Journals",
    q: "Are the journals free to read?",
    a: "Yes — all four ASEP journals (JEP Online, JEM Online, PEP Online, and the Journal of Professional Exercise Physiology) are open access, free to read and cite.",
  },
  {
    category: "Journals",
    q: "How do I submit an article?",
    a: "Each journal has its own submission guidelines, available from that journal's page. Submissions are reviewed by the relevant editorial committee before publication.",
  },
  {
    category: "Accreditation",
    q: "How does academic program accreditation work?",
    a: "Institutions submit a candidate application and their accreditation manual materials for Board review, with a faculty member holding ASEP membership as part of the process, followed by an annual accreditation fee.",
  },
  {
    category: "Jobs",
    q: "How much does it cost to post a job?",
    a: "Job postings are free for roles open to EPC-certified professionals or faculty at ASEP-accredited programs. All other postings are $450 and stay live for three months.",
  },
  {
    category: "Donations",
    q: "Is ASEP a registered nonprofit?",
    a: "Yes — ASEP is a 501(c)(3)/509(a)(2) nonprofit organization, and donations are tax-deductible to the extent allowed by law.",
  },
];

export const faqCategories = Array.from(new Set(faqs.map((f) => f.category)));
