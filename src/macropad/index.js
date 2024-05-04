const { writeToFile } = require("../scadjs-utils/src/utils");
const {
	plate,
	switchSlots
} = require("./calcs");
const SwitchPlate = require("../common/components/switchPlate");

const switchPlate = new SwitchPlate({
	plate,
	switchSlots
});

switchPlate.render();

const solids = [switchPlate];

const outputFile = "./macropad.scad";

writeToFile({
  fileName: outputFile,
  fn: 15,
  solids
});
