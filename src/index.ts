import { allCountriesWorld } from "./country";

type State = {
  id: string;
  name: string;
  flag?: string;
};

const estados: State[] = [
  { id: "AC", name: "Acre" },
  { id: "AL", name: "Alagoas" },
  { id: "AP", name: "Amapá" },
  { id: "AM", name: "Amazonas" },
  { id: "BA", name: "Bahia" },
  { id: "CE", name: "Ceará" },
  { id: "DF", name: "Distrito Federal" },
  { id: "ES", name: "Espirito Santo" },
  { id: "GO", name: "Goiás" },
  { id: "MA", name: "Maranhão" },
  { id: "MS", name: "Mato Grosso do Sul" },
  { id: "MT", name: "Mato Grosso" },
  { id: "MG", name: "Minas Gerais" },
  { id: "PA", name: "Pará" },
  { id: "PB", name: "Paraíba" },
  { id: "PR", name: "Paraná" },
  { id: "PE", name: "Pernambuco" },
  { id: "PI", name: "Piauí" },
  { id: "RJ", name: "Rio de Janeiro" },
  { id: "RN", name: "Rio Grande do Norte" },
  { id: "RS", name: "Rio Grande do Sul" },
  { id: "RO", name: "Rondônia" },
  { id: "RR", name: "Roraima" },
  { id: "SC", name: "Santa Catarina" },
  { id: "SP", name: "São Paulo" },
  { id: "SE", name: "Sergipe" },
  { id: "TO", name: "Tocantins" },
];

const importFlag = (id: string): string => {
  if (typeof window !== "undefined") {
    try {
      return require(`../flags/${id}.svg`).default;
    } catch (err) {
      console.error(`Erro ao importar a bandeira ${id}:`, err);
      return "";
    }
  } else {
    const fs = require("fs");
    const path = require("path");
    try {
      const flagPath = path.join(
        __dirname,
        "..",
        "public",
        "flags",
        `${id}.svg`
      );
      return fs.readFileSync(flagPath, "utf8");
    } catch (err) {
      console.error(`Erro ao ler a bandeira ${id}:`, err);
      return "";
    }
  }
};

const flagStates = (): State[] => {
  return estados.map((estado) => {
    const flag = importFlag(estado.id);
    return { ...estado, flag };
  });
};

const statesWithoutFlags = (): Omit<State, "flag">[] => {
  return estados.map((estado) => ({
    id: estado.id,
    name: estado.name,
  }));
};

const onlyFlags = (): { id: string; flag: string }[] => {
  return estados.map((estado) => {
    const flag = importFlag(estado.id);
    return { id: estado.id, flag };
  });
};

export const countriesAndStates = () => {
  return {
    countriesWorld: allCountriesWorld,
    flagStates: flagStates(),
    onlyFlags: onlyFlags(),
    statesWithoutFlags: statesWithoutFlags(),
  };
};
