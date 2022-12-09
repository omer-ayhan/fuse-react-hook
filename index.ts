import React from "react";
import Fuse from "fuse.js";

interface Props<T> {
	data: T[];
	searchText: string;
	options?: Fuse.IFuseOptions<T>;
}

/**
 *
 * @param data the data array to search
 * @param options the options for the fuse search
 *
 *
 * @returns search function and fuse instance
 *
 * @see https://fusejs.io/
 */

export function useFuse<T>({ data, options, searchText }: Props<T>) {
	const defaultOpts = {
		shouldSort: true,
		useExtendedSearch: true,
	} as Fuse.IFuseOptions<typeof data[number]>;
	const fuse = React.useMemo(
		() => new Fuse(data, options || defaultOpts),
		[data, options, defaultOpts]
	);

	const search = React.useCallback(
		(opts?: Fuse.FuseSearchOptions) => {
			if (!searchText) return data;
			return fuse.search(searchText, opts).map((result) => result.item);
		},
		[searchText, fuse]
	);

	return {
		fuse,
		search,
	};
}
