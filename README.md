# Starter Collections

Starters collection based on pnpm workspace.

**Note: This is a personal project, it is not community oriented, so the direction of the iteration will be entirely based on the authors' own opinions.**

## Packages

### React

- [Create-React-App](packages/cra-ts)
- [ESBuild-React-App](packages/esbuild-react-app)
- [Parcel-React-App](packages/parcel-react/)
- [Vite-React](packages/vite-react-starter)

### NodeJs Server

- [NestJs](packages/nest-starter/)
- [NestJs + GraphQL](packages/nest-graphql-starter/)
- [Mercurius](packages/mercurius-starter/)
- [Nest + Mercurius](packages/nest-mercurius-starter/)
- [MidwayJs](packages/midway-koa)
- [Strapi(with GraphQL)](packages/strapi-graphql-starter/)
- MidwayJs + GraphQL
- Apollo Server

### Lib

- [ESBuild Plugin Starter](packages/esbuild-plugin-starter/)
- [TypeScript Tool Type](packages/ts-tool-type-starter/)
- [Common Node Library](packages/node-lib-starter/)
- [Prisma Starter](packages/prisma-starter)
- [CLI App by CAC](packages/cac-cli-starter/)
- GitHub Action
- [Puppeteer](packages/puppeteer-starter)

### Framework

- [Astro](packages/astro-docs-starter)
- [Umi](packages/umi-starter/)
- StoryBook
- Lit

## Scripts

### Init

Command: `pnpm cli init`

As pnpm's postinstall hook cannot be interactive, we need to run:

```bash
pnpm cli init
```

manually to init workspace.

In fact, all we need to do is to choose some of these projects according to our actual needs.

```bash
? Choose starters you want to use for this time! …
✔ cra-ts
✔ esbuild-plugin-starter
✔ esbuild-react-app
✔ midway-koa
✔ nest-graphql-starter
✔ nest-starter
✔ parcel-react
✔ prisma-starter
...
```

Projects that are not selected will be removed from the workspace packages dir `/packages`
and a backup will be kept in `node_modules/.LinbuduLab`, you can run `pnpm cli reset` to recover these packages,
or use command `pnpm cli copy` to add removed packages back:

```bash
✔ Choose starters you want to copy into workspace · esbuild-plugin-starter, esbuild-react-app
✔ Rename package esbuild-plugin-starter · esbuild-plugin-boom
? Rename package esbuild-react-app › esbuild-react-todo
```

### Reset

Command: `pnpm cli reset`

This command recovers all the original packages,
and does not overwrite the already existing projects.

Useful when you want to start from scratch.

### Copy

Command: `pnpm cli copy`

This command can be useful when you want to have multiple projects based on the same initial template(starter),
for example you may want to develop several ESBuild plugins inside one workspace.

After you have selected the items you want to copy, you also need to rename them, which will be used to update `name` field in `package.json`.

```bash
✔ Choose starters you want to copy into workspace · esbuild-plugin-starter, esbuild-react-app
✔ Rename package esbuild-plugin-starter · esbuild-plugin-boom
? Rename package esbuild-react-app › esbuild-react-todo
```

### Create

Command: `pnpm cli create`

This command creates a simple TypeScript starter with minimal essential scripts for you.

### pnpm commands

Common commands:

```bash
pnpm i typescript@beta --filter '*' -D
pnpm add child1 --filter 'parent1' --workspace
pnpm run build --recursive --if-present --parallel --enable-pre-post-scripts --filter ''
pnpm exec jest --recursive --parallel --filter ''

pnpx create-react-app ./my-app
pnpm create react-app my-app

pnpm env use --global lts
pnpm env use --global 16

pnpm publish -r
pnpm publish --tag --access=public --git-checks --report-summary --filter
```

Release workflow:

```bash
pnpm add @changesets/cli -DW
pnpm changeset init
pnpm changeset
pnpm changeset version
pnpm install
git add . && git commit -m 'feat: bump!'
pnpm publish -r --access=public
git push
```

More filter syntax:

> See [Filtering](https://pnpm.io/filtering#--filter-package_name) for more details.

```bash
# exact matching
pnpm --filter '@scope/*'
pnpm --filter 'prefix-*'
pnpm --filter 'pre*'
pnpm --filter '*post'

# package and its deps
pnpm --filter pkg...
pnpm --filter "@scope/pkg-*..."

# package and its dependents
pnpm --filter ...pkg

# only package deps
pnpm --filter "foo^..."

# only package dependents
pnpm --filter "...^foo"

# use directory
pnpm --filter ./packages/pkg

# include packages under dir
pnpm --filter ...{./packages}
pnpm --filter {./packages}...
pnpm --filter ...{./packages}[origin/master]...

# since
pnpm --filter '...[origin/master]'

# exclude
pnpm --filter=!excluded-pkg

```

## License

This project follows [MIT License](LICENSE).
