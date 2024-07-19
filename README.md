# Tenzu

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Starting](#starting)
- [Linting](#linting)
- [Testing](#testing)
- [Cypress](#cypress)
- [Dependencies](#dependencies)

## Introduction

Tenzu is a Next.js project with support for Jest testing, Cypress end-to-end testing, TypeScript, TailwindCSS, and more. This README provides instructions on how to set up and run the project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js v16 or later
- pnpm package manager

## Installation

1. Clone the repository:
```
    git clone https://github.com/pouriamolaee/tenzu.git
    cd tenzu
```
2. Install dependencies using pnpm:

```
    pnpm install
```

## Development

To start the development server, run:

```
    pnpm dev
```

## Building

To create an optimized production build, run:

```
    pnpm build
```

## Starting

To start the application in production mode after building, run:

```
    pnpm start
```

## Linting

To run ESLint to check for code quality issues, run:

```
    pnpm lint
```

## Testing

To run the Jest tests, use:

```
    pnpm test
```
To run Jest in watch mode, use:

```
    pnpm test:watch
```

## Cypress

To open the Cypress test runner, run:

```
    pnpm cypress:open
```

## Dependencies

### Core Dependencies

- [Next.js](https://nextjs.org) - The React Framework
- [React](https://reactjs.org) - A JavaScript library for building user interfaces
- [ReactDOM](https://reactjs.org/docs/react-dom.html) - Serves as the entry point to the DOM and server renderers for React
- [Zustand](https://github.com/pmndrs/zustand) - A small, fast and scalable bearbones state-management solution using simplified flux principles

### Developer Dependencies

- [TypeScript](https://www.typescriptlang.org) - A typed superset of JavaScript that compiles to plain JavaScript
- [Jest](https://jestjs.io) - A delightful JavaScript Testing Framework with a focus on simplicity
- [Testing Library](https://testing-library.com) - Simple and complete testing utilities that encourage good testing practices
- [Cypress](https://www.cypress.io) - Fast, easy and reliable testing for anything that runs in a browser
- [ESLint](https://eslint.org) - A pluggable linting utility for JavaScript and JSX
- [Prettier](https://prettier.io) - An opinionated code formatter
- [TailwindCSS](https://tailwindcss.com) - A utility-first CSS framework for rapid UI development

### Utilities

- [clsx](https://github.com/lukeed/clsx) - A tiny utility for constructing `className` strings conditionally
- [colorjs.io](https://colorjs.io) - A modern color library for JavaScript
- [Tabler Icons](https://tabler-icons.io) - A set of over 1,600 free MIT-licensed high-quality SVG icons for you to use in your web projects.
