# Alejandro Campos Carceller — CV

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Minimalist, print-friendly web CV hosted at [acampos.dev](https://acampos.dev).

In addition to the web and print layout, the CV is also prerendered as 80-column ANSI text for terminals and Markdown for AI agents.

## Formats

```bash
curl https://acampos.dev                                # 80-column terminal text
curl -H "Accept: text/markdown" https://acampos.dev     # markdown
curl https://acampos.dev/index.md                       # markdown, for any client
curl https://acampos.dev/llms.txt                       # markdown with format notes for LLMs
curl https://acampos.dev/index.txt                      # plain/ANSI terminal text
```

## Development

**Requirements:** Node.js 22.15+ and `pnpm`.

```bash
git clone https://github.com/acamposcar/cv.git
cd cv
pnpm install
pnpm dev
```

All resume content lives in [`src/data/resume-data.ts`](src/data/resume-data.ts) and [`src/data/avatar.jpg`](src/data/avatar.jpg).

### Scripts

```bash
pnpm dev          # start development server (http://localhost:3000)
pnpm build        # build static production output
pnpm start        # start production server
pnpm check        # run Biome lint and format checks
pnpm check:fix    # auto-fix Biome lint and format issues
pnpm verify       # validate prerendered HTML, text, markdown, and metadata
```

## Credits & License

Built on top of the [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv) minimalist CV template. Licensed under the [MIT License](LICENSE).
