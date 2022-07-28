# PeakCms 1.0.0

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ pnpm i
$ pnpm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ pnpm run tsc
$ pnpm start
```

### Npm Scripts

- Use `pnpm run lint` to check code style
- Use `pnpm test` to run unit test
- se `pnpm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
