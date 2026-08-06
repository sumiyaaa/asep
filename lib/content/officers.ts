export interface Officer {
  name: string;
  title: string;
}

/**
 * Only officers independently confirmed during the site audit are named here.
 * The live site lists additional Board of Directors seats without titles we
 * could verify — represented below as open seats rather than invented names.
 */
export const officers: Officer[] = [
  { name: "Shane Paulson", title: "Chief Executive Officer" },
  { name: "Patrick Ayres", title: "Executive Vice President" },
];

export const boardSeatCount = 5;

export const foundingYear = 1997;
