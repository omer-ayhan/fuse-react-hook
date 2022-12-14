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

## Note ⚠️

data property names does not have to be any specific name as long as they are defined in the type of the hook

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

```tsx
import { useState } from "react";
import { useFuse } from "fuse-react-hook";

const data = [
	// data property name can be anything
	{
		id: 1,
		name: "Apple",
	},
	{
		id: 2,
		name: "Banana",
	},
	{
		id: 3,
		name: "Orange",
	},
	{
		id: 4,
		name: "Mango",
	},
	{
		id: 5,
		name: "Pineapple",
	},
];

type DATASTYPE = {
	// you have to define data property names in the type
	id: number;
	name: string;
};

const options = {
	shouldSort: true,
	useExtendedSearch: true,
	keys: ["name"],
};

export function App() {
	const [searchText, setSearchText] = useState("");
	const { search } = useFuse<DATASTYPE>({
		data,
		options,
		searchText,
	});

	const filteredData = search();

	return (
		<div>
			<input
				type="text"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<ul>
				{filteredData.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
}
```
