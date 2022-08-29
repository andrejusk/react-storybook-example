# react-storybook-example

Kick off your React project with a boilerplate 🚀

- React 18
- TypeScript
- Component library
- Storybook documentation
- Jest unit tests
- Example application
  - Webpack dev server, hot reloading
  - Build, static server for production

Boilerplate generated using:

```bash
npx storybook init
```

## Installation

```bash
# if required, run:
#
#  $ npm i -g pnpm
#

pnpm i
```

## Use

### Storybook

```bash
pnpm storybook
```

Visit http://localhost:6006/

```bash
pnpm storybook:build
```

See `./storybook-static/` for output

### Unit tests

```bash
pnpm test
```

### Example application

```bash
pnpm dev
```

Visit http://localhost:8080/

### Build

```bash
pnpm build
```

### Serve

```bash
pnpm start
```

Visit http://localhost:8080/
