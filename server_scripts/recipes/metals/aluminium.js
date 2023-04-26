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

event.recipes.tfc.heating(Fluid.of(`kubejs:${material}_double_ingot`, 288), `antimatter_shared:dust_${material}`, 660).id(`tfc.heating.${material}`).id(`tfc.heat.${material}.double.ingot`)

//====================================================================================================================================================================\\
//                                                            Terrafirmacraft - Crafting Table                                                                        \\
//====================================================================================================================================================================\\
                            //======================================== TOOLS - SAW =========================================\\

event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"wood",t:-699946443}}'), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/wooden`}).id(`${material}.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"blaze",t:-609782198}}'), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/blaze`}).id(`${material}.blaze.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"bone",t:-700572084}}'), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/bone`}).id(`${material}.bone.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"silicone",t:-253292674}}'), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/silicone`}).id(`${material}.silicone.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"naquadah",t:1266652841}}').enchant('minecraft:efficiency', 2), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/naquadah`}).id(`${material}.naquadah.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"stone",t:-593830931}}'), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/stone`}).id(`${material}.stone.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"rubber",t:-1623776968}}'), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/rubber`}).id(`${material}.rubber.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"red_granite",t:216068380}}').enchant('minecraft:unbreaking', 1), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/red_granite`}).id(`${material}.red.granite.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"black_granite",t:-602441078}}').enchant('minecraft:unbreaking', 1), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/black_granite`}).id(`${material}.black.granite.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"epoxid",t:-2000165001}}'), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/epoxid`}).id(`${material}.epoxid.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"polyvinyl_chloride",t:-1932959579}}'), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/polyvinyl_chloride`}).id(`${material}.polyvinyl.chloride.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"duranium",t:1599174555}}').enchant('minecraft:silk_touch', 1), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/duranium`}).id(`${material}.duranium.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"polystyrene",t:478178206}}'), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/polystyrene`}).id(`${material}.polystyrene.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"polyethylene",t:-1832699324}}'), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/polyethylene`}).id(`${material}.polyethylene.saw.compat`)
event.shaped(Item.of('antimatter:saw', '{Damage:0,td:{m:"aluminium",sm:"obsidian",t:-351730205}}').enchant('minecraft:unbreaking', 2), [' S ',' N '], {S: `kubejs:saw_head_${material}`,N: `#forge:rods/obsidian`}).id(`${material}.obsidian.saw.compat`)

                            //======================================= TOOLS - HAMMER =======================================\\

//====================================================================================================================================================================\\
//                                                               Terrafirmacraft - Alloying                                                                           \\
//====================================================================================================================================================================\\


//====================================================================================================================================================================\\
//                                                               Terrafirmacraft - Casting                                                                            \\
//====================================================================================================================================================================\\
// 144mb of ${material} in a mold produces an ${material}; the mold has a 50% chance of breaking
event.recipes.tfc.casting(`antimatter_shared:ingot_${material}`, 'tfc:ceramic/ingot_mold', FluidStackIngredient.of(`#forge:${material}`, 144), 1.0).id(`tfc.casting.${material}`)

event.recipes.tfc.casting(`kubejs:saw_head_${material}`, 'tfc:ceramic/saw_blade_mold', FluidStackIngredient.of(`#forge:${material}`, 144), 0.5)

//====================================================================================================================================================================\\
//                                                               Terrafirmacraft - Welding                                                                            \\
//====================================================================================================================================================================\\

// weld together 2  ingots to get 1 double ingot
event.recipes.tfc.welding(`kubejs:${material}_double_ingot`, [`antimatter_shared:ingot_${material}`, `antimatter_shared:ingot_${material}`]).tier(2)


//====================================================================================================================================================================\\
//                                                                Terrafirmacraft - Anvil                                                                             \\
//====================================================================================================================================================================\\

// work a ingot into a plate 
event.recipes.tfc.anvil(ItemStackProvider.of(`antimatter_shared:plate_${material}`, {type:'tfc:add_heat', temperature:380}), `kubejs:${material}_double_ingot`, [`hit_last`,`hit_second_last`,`hit_third_last`]).applyBonus()


//====================================================================================================================================================================\\
        
        }) 
    })       
})

