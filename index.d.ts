declare module "br-states-flags-and-countries" {
  export type State = {
    id: string;
    name: string;
    flag?: string;
  };

  export type AllCountriesWorld = {
    id: number;
    name: string;
    initials: string;
    acronym: string;
    code: string;
  };

  export type CountriesAndStates = {
    countriesWorld: AllCountriesWorld[];
    flagStates: State[];
    onlyFlags: { id: string; flag: string }[];
    statesWithoutFlags: Omit<State, "flag">[];
  };

  export function countriesAndStates(): CountriesAndStates;
}
