// priority: 10
// ===== FLUIDS

onEvent('tags.items', event => {
	event.add('tfc:fired_molds', ['kubejs:shape.clay.mold.block'])
	event.add('tfc:molds', ['kubejs:shape.clay.mold.block'])

})