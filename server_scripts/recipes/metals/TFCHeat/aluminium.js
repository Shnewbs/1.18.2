settings.dataPackOutput = true

onEvent('server.datapack.first', event => {

    var QuickMetalChange = ["aluminium"]
    
        QuickMetalChange.forEach(material => {
//====================================================================================================================================================================\\
//                                                                  Terrafirmacraft - Heat                                                                            \\
//====================================================================================================================================================================\\

event.addTFCMetal(`antimatter_shared:liquid_${material}`, 1.65, 660, `#forge:ingots/${material}`, `#forge:plates/${material}`)

event.addTFCMetal(`antimatter_shared:flowing_liquid_${material}`, 1.65, 660, `#forge:ingots/${material}`, `#forge:plates/${material}`)





//====================================================================================================================================================================\\

    event.addTFCHeat(`antimatter_shared:liquid_${material}`, 1.65, 660)
    //===========================================================================================\\
        event.addTFCHeat(`antimatter_shared:raw_ore_${material}`, 1.65, 660)
        event.addTFCHeat(`antimatter_shared:block_${material}`, 1.65, 660)

    })    
})