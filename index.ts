import React from "react";
import Fuse from "fuse.js";

interface Props<T> {
	data: T[];
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

export function useFuse<T extends unknown>({ data, options }: Props<T>) {
	const defaultOpts = {
		shouldSort: true,
		useExtendedSearch: true,
	} as Fuse.IFuseOptions<typeof data[number]>;
	const fuse = React.useMemo(
		() => new Fuse(data, options || defaultOpts),
		[data, options, defaultOpts]
	);

	const search = React.useCallback(
		(query: string | Fuse.Expression, opts?: Fuse.FuseSearchOptions) => {
			if (!query) {
				return data;
			}
			return fuse.search(query, opts).map((result) => result.item);
		},
		[fuse]
	);

	return {
		fuse,
		search,
	};
}
