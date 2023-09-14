# Next UI Contributing Guide

Hello!, I am very excited that you are interested in contributing with Next UI. However, before submitting your contribution, be sure to take a moment and read the following guidelines.

- [Extraction request guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Breaking Changes](#breaking-changes)
- [Becoming a maintainer](#becoming-a-maintainer)

### Tooling

- [PNPM](https://pnpm.io/) to manage packages and dependencies
- [Tsup](https://tsup.egoist.sh/) to bundle packages
- [Storybook](https://storybook.js.org/) for rapid UI component development and
  testing
- [Testing Library](https://testing-library.com/) for testing components and
  hooks
- [Changeset](https://github.com/atlassian/changesets) for changes
  documentation, changelog generation, and release management.

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Pull Request Guidelines

[TODO]

### Steps to PR

[TODO]

## Development Setup

After cloning the repository, execute the following commands in the root folder:

1. Install dependencies

```bash
pnpm i --hoist

#or

pnpm install --hoist
```

We use [Turbo Repo](https://turborepo.org/) for the project management.

2. If you will be working on the components source code, you can use the following command to start the storybook dev server:

```bash
## Start the storybook of core components
pnpm dev

```

3. Create a branch for your feature or fix:

```bash
# Move into a new branch for your feature
git checkout -b feat/thing
```

```bash
# Move into a new branch for your fix
git checkout -b fix/something
```

4. If your code passes all the tests, then push your feature/fix branch:

All commits that fix bugs or add features need a test.
You can run the nest command for component specific tests.

5. Be sure the package builds.

```
# Build current code
pnpm build # or npm run build
```

> Note: ensure your version of Node is 18 or higher to run scripts

6. Send your pull request:

- Send your pull request to the `master` branch
- Your pull request will be reviewed by the maintainers and the maintainers will decide if it is accepted or not
- Once the pull request is accepted, the maintainers will merge it to the `master` branch

## Breaking changes

Breaking changes should be accompanied with deprecations of removed functionality. The deprecated APIs themselves should not be removed until the minor release after that.

## Becoming a maintainer

[TODO]
