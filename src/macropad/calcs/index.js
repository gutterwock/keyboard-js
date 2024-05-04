const {
	baseKeyWidth,
	keyPadding,
	columns,
	rows,
	switchConfig: {
		plateThickness,
		slotWidth
	}
} = require("../config");

const cellWidth = baseKeyWidth + keyPadding;

// TODO: add insert margin and port
const plate = {
	dimensions: [
		columns * cellWidth,
		rows * cellWidth,
		plateThickness
	],
	position: [0, 0, 0]
};

const slotColOffset = (columns - 1) * cellWidth / 2;
const slotRowOffset = (rows - 1) * cellWidth / 2;
const switchSlots = Array.from(
	{ length: rows },
	(_, row) => Array.from(
		{ length: columns },
		(_, col) => {
			return {
				dimensions: [slotWidth, slotWidth, plateThickness + 1],
				position: [
					col * cellWidth - slotColOffset,
					row * cellWidth - slotRowOffset,
					0
				]
			}
		}
	)
).flat();

module.exports = {
	plate,
	switchSlots
};
