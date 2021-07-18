interface CSV {
	header: string[];
	values: number[][];
}

export function parseCSV(input: string): CSV | undefined {
	// Each row should have the same number of values
	// Each value should be a number (except for the first row)
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
	const header = tokens[0];
	const valueTokens = tokens.slice(1);
	const values = valueTokens.map((rowTokens) =>
		rowTokens.map((token) => parseFloat(token)),
	);
	const areValuesValid = values.every((row) =>
		row.every((value) => !isNaN(value)),
	);
	if (!areValuesValid) {
		return;
	}
	return {
		header,
		values,
	};
}
