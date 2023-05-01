// priority: 0
var TFCStoneTypes = [`andesite`,`basalt`,`chalk`,`chert`,`claystone`,`conglomerate`,`dacite`,`diorite`,`dolomite`,`gabbro`,`gneiss`,`granite`,`limestone`,`marble`,`phyllite`,`quartzite`,`rhyolite`,`schist`,`shale`,`slate`,`venus`,`mars`,`moon`,`mercury`,`endstone`,`netherrack`]



 var molds = [`anvil`,`axe`,`ball`,`block`,`bolt`,`bottle`,`casing`,`cell`,`credit`,`cylinder`,`file`,`foil`,`frame.box`,`gear.small`,`gear`,`hammer`,`hoe`,`ingot`,`name`,`nugget`,`pickaxe`,`pipe.huge`,`pipe.large`,`pipe.normal`,`pipe.small`,`pipe.tiny`,`plate.double`,`plate`,`ring`,`rod_long`,`rod`,`rotor`,`saw`,`shovel`,`sword`,`wire`,`empty`,]
		function capfirst(string) {
		return string[0].toUpperCase() + string.slice(1);
	  }
      molds.forEach(mold => {
        let displayMaterial = capfirst(`${mold}`)

onEvent(`item.registry`, event => {
    event.create(`shape.clay.mold.${mold}`).displayName(`Fired Clay Casting ${displayMaterial}`).texture(`kubejs:item/molds/shape.clay.mold.${mold}`).color(0, 0x514137)})
        
    })