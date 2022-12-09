# Fuse React Hook

### A simple and strongly typed hook for using [Fuse.js](https://fusejs.io/) in React

## Installation

Npm:

```
npm install fuse-react-hook
```

Yarn:

```
yarn add fuse-react-hook
```

Pnpm:

```
pnpm add fuse-react-hook
```

## Options

```typescript
 useFuse({data: T[], options: fuseOptions, searchText: string}) : { fuse: Fuse, search: (opts?: fuseOptions) => filteredDataList }
```

| Parameter  | Type   | Required | Note                                      |
| ---------- | ------ | -------- | ----------------------------------------- |
| data       | array  | ✅       | search data to filter                     |
| searchText | string | ✅       | search term to filter data                |
| options    | object | ❌       | options for [fuse.js](https://fusejs.io/) |

## Usage

```jsx
import { useFuse } from "fuse-react-hook";
```
