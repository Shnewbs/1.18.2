onEvent('recipes', event => {
    var TFCStoneTypes = ["andesite","basalt","chalk","chert","claystone","conglomerate","dacite","diorite","dolomite","gabbro","gneiss","granite","limestone","marble","phyllite","quartzite","rhyolite","schist","shale","slate"]

    var QuickMetalChange = ["aluminium"]
    
    TFCStoneTypes.forEach(stonetype => {
        QuickMetalChange.forEach(material => {


//====================================================================================================================================================================\\
//                                                                  Create Mod - Crushing                                                                             \\
//====================================================================================================================================================================\\
                            //========================================CHUNK CRUSHING========================================\\

event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_andesite_${material}`}],"processingTime":2400,"results":[{"count": 1,"item": `antimatter_shared:dust_tiny_quartzite`},{"item": `tfc:rock/loose/andesite`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_basalt_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_basalt`},{"item": `tfc:rock/loose/basalt`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_chalk_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_calcite`},{"item": `tfc:rock/loose/chalk`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_chert_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_silicon_dioxide`},{"item": `tfc:rock/loose/chert`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_claystone_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_clay`},{"item": `tfc:rock/loose/claystone`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_conglomerate_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_quartz`},{"item": `tfc:rock/loose/conglomerate`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_dacite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_obsidian`},{"item": `tfc:rock/loose/dacite`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_diorite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_silicon_dioxide`},{"item": `tfc:rock/loose/diorite`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_dolomite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_calcium`},{"item": `tfc:rock/loose/dolomite`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_gabbro_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_potassium_feldspar`},{"item": `tfc:rock/loose/gabbro`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_gneiss_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_granite`},{"item": `tfc:rock/loose/gneiss`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_granite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_sodium`},{"item": `tfc:rock/loose/granite`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_limestone_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_magnesium`},{"item": `tfc:rock/loose/limestone`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_marble_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_calcite`},{"item": `tfc:rock/loose/marble`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_phyllite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_granite`},{"item": `tfc:rock/loose/phyllite`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_quartzite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_quartzite`},{"item": `tfc:rock/loose/quartzite`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_rhyolite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_silicon_dioxide`},{"item": `tfc:rock/loose/rhyolite`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_schist_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_certus_quartz`},{"item": `tfc:rock/loose/schist`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_shale_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_clay`},{"item": `tfc:rock/loose/shale`},{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_venus_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `antimatter_shared:dust_tiny_galena`},/*{"item": `tfc:rock/loose/shale`},*/{"count": 2,"item": `antimatter_shared:raw_ore_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})

//====================================================================================================================================================================\\
//                                                                  Create Mod - Milling                                                                              \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            //======================================RECIPE REMOVAL END======================================\\

event.custom({"type": "create:milling","ingredients": [{"item": `antimatter_shared:crushed_${material}`}],"processingTime": 4800,"results": [{"count": 1,"item": `antimatter_shared:dust_impure_${material}`}]}).id(`crushed.to.impure.${material}.milled`)

event.custom({"type": "create:milling","ingredients": [{"item": `antimatter_shared:crushed_purified_${material}`}],"processingTime": 4800,"results": [{"count": 1,"item": `antimatter_shared:dust_pure_${material}`}]}).id(`crushed.to.pure.${material}.milled`)

//====================================================================================================================================================================\\
//                                                                  Create Mod - Washing                                                                              \\
//====================================================================================================================================================================\\
                                    //========================================RECIPE REMOVAL========================================\\
                                    //======================================RECIPE REMOVAL END======================================\\
        
event.custom({"type": "create:splashing","ingredients": [{ "item": `antimatter_shared:crushed_${material}` }],"results": [{ "item": `antimatter_shared:crushed_purified_${material}`}]}).id(`crushed.${material}.washing`)	
event.custom({"type": "create:splashing","ingredients": [{ "item": `antimatter_shared:dust_impure_${material}` }],"results": [{ "item": `antimatter_shared:dust_pure_${material}`}]}).id(`impure.${material}.washing`)	
        

//====================================================================================================================================================================\\
//                                                               Gregtech - Crafting Table                                                                            \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            event.remove({id: `antimatter:${material}_grind_rock`})
                            event.remove({id: `antimatter:${material}_grind_rock_2`})
                            event.remove({id: `antimatter:${material}_grind_ingot`})
                            event.remove({id: `antimatter:${material}_dust_small`})
                            event.remove({id: `antimatter:${material}_dust_tiny`})
                            event.remove({id: `antimatter:${material}_trichloride_dust_tiny`})
                            event.remove({id: `antimatter:${material}_trichloride_dust_small`})
                            event.remove({id: `antimatter:di${material}_trioxide_dust_tiny`})
                            event.remove({id: `antimatter:di${material}_trioxide_dust_small`})

                            //======================================RECIPE REMOVAL END======================================\\

//====================================================================================================================================================================\\
//                                                             Create Mod - Mechanical Crafter                                                                        \\
//====================================================================================================================================================================\\
event.custom({"type": "create:mechanical_crafting","pattern": ["xxx","xxx","xxx"],"key": {"x": {"item": `antimatter_shared:dust_tiny_${material}`}},"result": {"item": `antimatter_shared:dust_${material}`},"acceptMirrored": true}).id(`tiny.dust.to.${material}.dust`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xx","xx"],"key": {"x": {"item": `antimatter_shared:dust_small_${material}`}},"result": {"item": `antimatter_shared:dust_${material}`},"acceptMirrored": true}).id(`small.dust.to.${material}.dust`)

event.custom({"type": "create:mechanical_crafting","pattern": ["xxx","xxx","xxx"],"key": {"x": {"item": `antimatter_shared:dust_tiny_di${material}_trioxide`}},"result": {"item": `antimatter_shared:dust_di${material}_trioxide`},"acceptMirrored": true}).id(`tiny.dust.to.${material}.trioxide.dust`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xx","xx"],"key": {"x": {"item": `antimatter_shared:dust_small_di${material}_trioxide`}},"result": {"item": `antimatter_shared:dust_di${material}_trioxide`},"acceptMirrored": true}).id(`small.dust.to.${material}.trioxide.dust`)

event.custom({"type": "create:mechanical_crafting","pattern": ["xx","xx"],"key": {"x": {"item": `antimatter_shared:dust_small_${material}_trichloride`}},"result": {"item": `antimatter_shared:dust_${material}_trichloride`},"acceptMirrored": true}).id(`small.dust.to.${material}.trichloride.dust`)



//====================================================================================================================================================================\\
//                                                                 Terrafirmacraft - Quern                                                                            \\
//====================================================================================================================================================================\\

if (Platform.isLoaded('tfc')) {
    event.custom({"type": "tfc:quern","ingredient":{"item": `antimatter_shared:dust_pure_${material}`,"count": 1},"result":{"item": `antimatter_shared:dust_${material}`,"count": 1}})
    event.custom({"type": "tfc:quern","ingredient":{"item": `antimatter_shared:rock_${material}`,"count": 1},"result":{"item": `antimatter_shared:dust_small_${material}`,"count": 1}})
    event.custom({"type": "tfc:quern","ingredient":{"item": `antimatter_shared:ingot_${material}`,"count": 1},"result":{"item": `antimatter_shared:dust_${material}`,"count": 1}})
    event.custom({"type": "tfc:quern","ingredient":{"item": `antimatter_shared:crushed_${material}`,"count": 1},"result":{"item": `antimatter_shared:dust_impure_${material}`,"count": 1}})
    event.custom({"type": "tfc:quern","ingredient":{"item": `antimatter_shared:crushed_purified_${material}`,"count": 1},"result":{"item": `antimatter_shared:dust_pure_${material}`,"count": 1}})

}



//====================================================================================================================================================================\\
//                                                                  Terrafirmacraft - Heat                                                                            \\
//====================================================================================================================================================================\\
onEvent('server.datapack.first', event => {
    event.addTFCHeat(`antimatter_shared:raw_ore_${material}`, 1.65, 660).id(`tfc.heat.${material}`)

})
//====================================================================================================================================================================\\
//                                                                Terrafirmacraft - Heating                                                                           \\
//====================================================================================================================================================================\\
event.recipes.tfc.heating(Fluid.of(`antimatter_shared:liquid_${material}`, 16), `antimatter_shared:dust_tiny_${material}`, 660).id(`tfc.heating.${material}`).id(`tfc.heat.${material}.tiny.dust`)
event.recipes.tfc.heating(Fluid.of(`antimatter_shared:liquid_${material}`, 16), `antimatter_shared:nugget_${material}`, 660).id(`tfc.heating.${material}`).id(`tfc.heat.${material}.nugget`)
event.recipes.tfc.heating(Fluid.of(`antimatter_shared:liquid_${material}`, 32), `antimatter_shared:dust_small_${material}`, 660).id(`tfc.heating.${material}`).id(`tfc.heat.${material}.small.dust`)
event.recipes.tfc.heating(Fluid.of(`antimatter_shared:liquid_${material}`, 64), `antimatter_shared:raw_ore_${material}`, 660).id(`tfc.heating.${material}`).id(`tfc.heat.${material}.raw`)
event.recipes.tfc.heating(Fluid.of(`antimatter_shared:liquid_${material}`, 84), `antimatter_shared:crushed_${material}`, 660).id(`tfc.heating.${material}`).id(`tfc.heat.${material}.crushed`)
event.recipes.tfc.heating(Fluid.of(`antimatter_shared:liquid_${material}`, 104), `antimatter_shared:dust_impure_${material}`, 660).id(`tfc.heating.${material}`).id(`tfc.heat.${material}.impure`)
event.recipes.tfc.heating(Fluid.of(`antimatter_shared:liquid_${material}`, 124), `antimatter_shared:crushed_purified_${material}`, 660).id(`tfc.heating.${material}`).id(`tfc.heat.${material}.crushed.pure`)
event.recipes.tfc.heating(Fluid.of(`antimatter_shared:liquid_${material}`, 132), `antimatter_shared:dust_pure_${material}`, 660).id(`tfc.heating.${material}`).id(`tfc.heat.${material}.pure`)
event.recipes.tfc.heating(Fluid.of(`antimatter_shared:liquid_${material}`, 144), `antimatter_shared:dust_${material}`, 660).id(`tfc.heating.${material}`).id(`tfc.heat.${material}.dust`)

//====================================================================================================================================================================\\
//                                                               Terrafirmacraft - Alloying                                                                           \\
//====================================================================================================================================================================\\


//====================================================================================================================================================================\\
//                                                               Terrafirmacraft - Casting                                                                            \\
//====================================================================================================================================================================\\
// 100mB of sterling silver in a saw head mold produces an oak log; the mold has a 50% chance of breaking
event.recipes.tfc.casting(`antimatter_shared:ingot_${material}`, 'tfc:ceramic/ingot_mold', FluidStackIngredient.of(`#forge:${material}`, 144), 1.0).id(`tfc.casting.${material}`)




//====================================================================================================================================================================\\
        
        }) 
    })       
})

