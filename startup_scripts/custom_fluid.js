// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('fluid.registry', event => {
	event.create("andesite_alloy").thickTexture(0x669999).bucketColor(0x669999).displayName("Molten Andesite Alloy")
	event.create("andesite_stone").thickTexture(0x666666).bucketColor(0x666666).displayName("Molten Andesite Stone")
	event.create("purified_water").thinTexture(0x6699cc).bucketColor(0x6699cc).displayName("Purified Water")
	event.create("active_redstone").thinTexture(0xcc0000).bucketColor(0xcc0000).displayName("Molten Active Redstone")
})