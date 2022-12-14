import { useFuse } from "fuse-react-hook";
import { useState } from "react";

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

export default App;
