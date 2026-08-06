export interface RegistryEntry {
  certificateNumber: number;
  name: string;
  city: string;
  state: string;
  dateAttained: string;
}

/**
 * Illustrative sample of the EPC Registry — the live registry runs into the
 * hundreds of entries; this is a representative slice for the prototype,
 * not a full data migration. #1 reflects the earliest verified entry found
 * during the site audit.
 */
export const registryEntries: RegistryEntry[] = [
  { certificateNumber: 1, name: "Patrick Ayres", city: "Minneapolis", state: "MN", dateAttained: "2000-10-12" },
  { certificateNumber: 118, name: "Renee Castillo", city: "Austin", state: "TX", dateAttained: "2009-03-22" },
  { certificateNumber: 204, name: "Marcus Webb", city: "Columbus", state: "OH", dateAttained: "2013-06-14" },
  { certificateNumber: 267, name: "Aisha Thompson", city: "Atlanta", state: "GA", dateAttained: "2016-09-02" },
  { certificateNumber: 315, name: "Daniel Kim", city: "Seattle", state: "WA", dateAttained: "2018-11-30" },
  { certificateNumber: 372, name: "Laura Mitchell", city: "Denver", state: "CO", dateAttained: "2020-05-19" },
  { certificateNumber: 409, name: "Omar Haddad", city: "Phoenix", state: "AZ", dateAttained: "2022-02-08" },
  { certificateNumber: 461, name: "Julia Meged", city: "Boston", state: "MA", dateAttained: "2024-02-27" },
];
