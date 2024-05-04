const switchType = "gateron";
const switchConfig = require(`../../common/config/switches/${switchType}`);

const baseKeyWidth = 18.1;
const keyPadding = .9;
const columns = 6;
const rows = 3;

module.exports = {
	baseKeyWidth,
	keyPadding,
	columns,
	rows,
	switchConfig
};
