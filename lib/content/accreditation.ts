export interface AccreditedProgram {
  institution: string;
  location: string;
  levels: string[];
}

export const accreditedPrograms: AccreditedProgram[] = [
  { institution: "Walsh University", location: "North Canton, OH", levels: ["Undergraduate", "Graduate"] },
];

export const accreditationSteps = [
  {
    title: "Faculty membership",
    text: "A faculty member from the applicant institution joins ASEP as a member, establishing the point of contact for the process.",
  },
  {
    title: "Candidate application",
    text: "The program submits a candidate application along with materials outlined in the ASEP Accreditation Manual.",
  },
  {
    title: "Board review",
    text: "The ASEP Board of Directors reviews the application against the Society's academic accreditation standards.",
  },
  {
    title: "Accreditation & annual renewal",
    text: "Approved programs are listed as ASEP-accredited and maintain status through an annual accreditation fee.",
  },
];
