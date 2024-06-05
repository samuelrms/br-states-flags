# @country-flags

Uma solução simples para um problema cotidiano, essa biblioteca possui um retorno com todos os estados brasileiros, contendo seus nomes, siglas e suas bandeiras em SVG.

A simple solution for an everyday problem, this library provides a return with all Brazilian states, including their names, abbreviations, and SVG flags.

## Índice / Table of Contents

- [country-flags](#country-flags)
  - [Índice / Table of Contents](#índice--table-of-contents)
  - [Instalação / Installation](#instalação--installation)
  - [Uso / Usage](#uso--usage)
  - [Estrutura dos Dados / Data Structure](#estrutura-dos-dados--data-structure)
    - [Estados com Bandeiras / States with Flags](#estados-com-bandeiras--states-with-flags)
    - [Estados sem Bandeiras / States without Flags](#estados-sem-bandeiras--states-without-flags)
    - [Somente Bandeiras / Only Flags](#somente-bandeiras--only-flags)
  - [Contribuição / Contributing](#contribuição--contributing)
  - [Licença / License](#licença--license)
    - [Passos Adicionais](#passos-adicionais)

## Instalação / Installation

Você pode instalar a biblioteca usando npm:

You can install the library using npm:


## Uso / Usage

Aqui está um exemplo de como usar a biblioteca:

Here is an example of how to use the library:

```bash
import { flagStates, onlyFlags, statesWithoutFlags } from '@country-flags';

// Obter estados com bandeiras
const estadosComBandeiras = flagStates();
console.log(estadosComBandeiras);

// Obter estados sem bandeiras
const estadosSemBandeiras = statesWithoutFlags();
console.log(estadosSemBandeiras);

// Obter somente bandeiras
const somenteBandeiras = onlyFlags();
console.log(somenteBandeiras);
```

## Estrutura dos Dados / Data Structure

### Estados com Bandeiras / States with Flags

Cada estado é representado por um objeto com a seguinte estrutura:

Each state is represented by an object with the following structure:

```bash
type State = {
  id: string; // Sigla do estado / State abbreviation
  name: string; // Nome do estado / State name
  flag?: string; // Bandeira do estado em formato SVG / State flag in SVG format
}
```

Exemplo de retorno:

Example of returned data:

```bash
[
  {
    "id": "AC",
    "name": "Acre",
    "flag": "<svg>...</svg>"
  },
  {
    "id": "AL",
    "name": "Alagoas",
    "flag": "<svg>...</svg>"
  },
  // Outros estados...
]
```

### Estados sem Bandeiras / States without Flags

Cada estado é representado por um objeto com a seguinte estrutura:

Each state is represented by an object with the following structure:

```bash
type State = {
  id: string; // Sigla do estado / State abbreviation
  name: string; // Nome do estado / State name
}
```

Exemplo de retorno:

Example of returned data:

```bash
[
  {
    "id": "AC",
    "name": "Acre"
  },
  {
    "id": "AL",
    "name": "Alagoas"
  },
  // Outros estados...
]
```

### Somente Bandeiras / Only Flags

Cada bandeira é representada por um objeto com a seguinte estrutura:

Each flag is represented by an object with the following structure:

```bash
type Flag = {
  id: string; // Sigla do estado / State abbreviation
  flag: string; // Bandeira do estado em formato SVG / State flag in SVG format
}
```

Exemplo de retorno:

Example of returned data:

```bash
[
  {
    "id": "AC",
    "flag": "<svg>...</svg>"
  },
  {
    "id": "AL",
    "flag": "<svg>...</svg>"
  },
  // Outras bandeiras...
]
```

## Contribuição / Contributing

Se você deseja contribuir com este projeto, por favor siga estas etapas:

If you wish to contribute to this project, please follow these steps:

1. Faça um fork do repositório / Fork the repository
2. Crie uma branch para suas modificações / Create a branch for your changes
3. Faça commit de suas alterações / Commit your changes
4. Envie um pull request / Submit a pull request

## Licença / License

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

This project is licensed under the MIT License. See the LICENSE file for details.

### Passos Adicionais

1. **Colocar as Bandeiras**: Adicione todas as bandeiras SVG dos estados brasileiros no diretório `flags`.
2. **Compilar o Projeto**: Certifique-se de compilar seu código TypeScript para JavaScript antes de publicar no NPM:

```bash
npm run build
```
