export interface CSV {
	ids: string[];
	values: number[][];
	timestamps: number[];
}

export function parseCSV(input: string): CSV | undefined {
	// Each row should have the same number of values, at least 2
	// Each value should be a number (except for the first row)
	// The first row of the dataset is header
	// The first element of each row is a timestamp (except for the first row)
	if (!input) {
		return;
	}
	const rows = input.split('\n');
	const tokens = rows.map((row) => row.split(','));
	const columnCount = tokens.map((row) => row.length);
	const areColumnsBalanced = columnCount.every((n) => n === columnCount[0]);
	if (!areColumnsBalanced) {
		return;
	}
	const areAtLeastTwoColumns = columnCount[0] > 1;
	if (!areAtLeastTwoColumns) {
		return;
	}
	const ids = tokens[0].slice(1);
	const valueTokens = tokens.slice(1);
	const values = valueTokens.map((rowTokens) =>
		rowTokens.slice(1).map((token) => parseFloat(token)),
	);
	const timestamps = valueTokens.map((rowTokens) => parseInt(rowTokens[0]));
	const areValuesValid = values.every((row) =>
		row.every((value) => !isNaN(value)),
	);
	if (!areValuesValid) {
		return;
	}
	const areTimestampsValid = timestamps.every((timestamp) => !isNaN(timestamp));
	if (!areTimestampsValid) {
		return;
	}
	return {
		ids,
		values,
		timestamps,
	};
}
