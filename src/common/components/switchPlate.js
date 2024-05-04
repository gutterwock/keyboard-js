const scad = require("scad-js");
const Solid = require("../../scadjs-utils/src/solid");
const Cube = require("../../scadjs-utils/src/primitives/cube");

class SwitchPlate extends Solid {
	constructor({
		plate: {
			dimensions,
			position
		},
		switchSlots,
		transformations = [],
	}) {
		super({
			materialize: () => {
				const base = (new Cube({
					dimensions,
					transformations: [["translate", position]]
				})).materialize();

				const slots = switchSlots.map(({ dimensions, position }) => {
					const slot = new Cube({
						dimensions,
						transformations: [["translate", position]]
					});
					slot.render();
					return slot.result;
				}).flat();

				return scad.difference(
				// return scad.union(
					base,
					...slots
					
				);
			},
			transformations
		});

	};
};




module.exports = SwitchPlate;
