onEvent("lootjs", (event) => {
    var oredrops = ["almandine","aluminium","amethyst","andradite","banded_iron","barite","bastnasite","bauxite","bentonite","beryllium","bismuth","sapphire","blue_topaz","brown_limonite","calcite","cassiterite","chalcopyrite","cinnabar","coal","cobalt","cobaltite","cooperite","copper","diamond","emerald","galena","garnierite","glauconite","gold","graphite","green_sapphire","grossular","ilmenite","iridium","iron","lapis","lazurite","lead","lepidolite","lignite_coal","lithium","magnesite","magnetite","malachite","manganese","molybdenite","molybdenum","naquadah","neodymium","nickel","oil_shale","oilsands","olivine","opal","osmium","palladium","pentlandite","phosphate","phosphorus","pitchblende","platinum","pyrite","pyrolusite","pyrope","quart","quartzite","red_garnet","redstone","rock_salt","ruby","rutile","salt","saltpeter","scheelite","silver","soapstone","sodalite","spessartine","sphalerite","spodumene","stibnite","sulfur","talc","tantalite","tetrahedrite","thorium","tin","topaz","tungstate","uraninite","uranium","uvarovite","vanadium_magnetite","wulfenite","yellow_garnet","zinc"]
    var materials = ['andesite', 'basalt', 'chalk', 'chert', 'claystone', 'conglomerate', 'dacite', 'diorite', 'gabbro', 'gneiss', 'granite', 'limestone', 'marble', 'phyllite', 'quartzite', 'rhyolite', 'schist', 'shale', 'slate']
    materials.forEach(material => {
    oredrops.forEach(oredrop => {

        event.addBlockLootModifier(`kubejs:${material}_${oredrop}_ore_tfc`)
            .removeLoot('*')
            .pool(p => {
                 ItemFilter.PICKAXE
                p.not(n => n.matchMainHand(ItemFilter.hasEnchantment(/.*/)));
                p.addLoot(`kubejs:chunk_${material}_${oredrop}`);
                //p.randomChance(0.5);
                //p.addLoot('kubejs:andesite_chunk');
            });

        })
    })

})