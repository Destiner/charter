export interface CSV {
	ids: string[];
	values: number[][];
	timestamps: number[];
}

export const SAMPLE = `Timestamp,Apples,Oranges,Grapes,Mangos
1626048000,10,23,13,8
1626134400,11,21,14,8
1626220800,14,22,15,9
1626307200,19,24,16,8
1626393600,24,25,17,7
1626480000,30,27,18,8
1626566400,38,30,19,8
`;

export function parse(input: string): CSV | undefined {
	// Each row should have the same number of values, at least 2
	// Each value should be a number (except for the first row)
	// The first row of the dataset is header
	// The first element of each row is a timestamp (except for the first row)
	if (!input) {
		return;
	}
	const rows = input.split('\n');
	const tokens = rows.filter((row) => !!row).map((row) => row.split(','));
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
