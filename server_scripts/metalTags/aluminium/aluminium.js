// priority: 10
// ===== FLUIDS
onEvent('tags.fluids', event => {
	event.add('tfc:aluminium', ['antimatter_shared:liquid_aluminium'])
	event.add('tfc:usable_in_ingot_mold', ['antimatter_shared:liquid_aluminium'])
	event.add('tfc:usable_in_tool_head_mold', ['antimatter_shared:liquid_aluminium'])
	event.add('forge:molten_aluminium', ['antimatter_shared:liquid_aluminium'])
})


onEvent('tags.items', event => {
	event.add('forge:ingots/aluminium', ['antimatter_shared:ingot_aluminium'])
	event.add('forge:saws/aluminium', ['kubejs:saw_head_aluminium'])
	event.add('tf:saws', ['kubejs:saw_head_aluminium'])
})