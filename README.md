# [HinoGames Log](https://ahinojal.github.io/hinogames-log/)

## Versioning

The project version lives in `package.json` (single source of truth) and is bumped **automatically** every time something is pushed to `develop`. `master` never gets version commits: it only deploys.

### How it works

1. A push lands on `develop` (usually by merging a PR).
2. The **Bump version** workflow (`.github/workflows/version.yml`) reads the message of the head commit of that push and looks for a keyword.
3. It runs `npm version <type> --no-git-tag-version`, which updates `package.json` and `package-lock.json`.
4. The bot commits the change to `develop` (`chore: bump version to vX.Y.Z [skip ci]`), creates the tag `vX.Y.Z` on that commit and pushes both.
5. When `develop` is merged into `master` through a PR, the **Deploy Astro** workflow builds the site and publishes it to GitHub Pages. The site reads the version from `package.json`.

### Choosing the bump type

Add a keyword to the **PR title** when merging into `develop` (a merge commit includes the PR title, and so does a squash commit). If you merge locally, use `git merge -m "... #minor"`.

| Keyword          | Bump  | Example         |
| ---------------- | ----- | --------------- |
| _(none)_         | patch | 0.3.1 → 0.3.2   |
| `#minor`         | minor | 0.3.1 → 0.4.0   |
| `#major`         | major | 0.3.1 → 1.0.0   |

### Release checklist

1. `git pull` on `develop`, then create the feature branch from it.
2. Open a PR into `develop`. Put `#minor` or `#major` in the title if needed.
3. Merge it and **wait for the Bump version action to finish** (about a minute).
4. `git pull` on `develop` to get the bot's commit locally.
5. When ready to release, open a PR `develop` → `master` and merge it. The deploy runs automatically.

