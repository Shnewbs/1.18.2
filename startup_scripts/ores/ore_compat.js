// priority: 0

onEvent('block.registry', event => {   

	function capfirst(string) {
		return string[0].toUpperCase() + string.slice(1);
	  }

	const  materials = ['andesite', 'basalt', 'chalk', 'chert', 'claystone', 'conglomerate', 'dacite', 'diorite', 'gabbro', 'gneiss', 'granite', 'limestone', 'marble', 'phyllite', 'quartzite', 'rhyolite', 'schist', 'shale', 'slate']
		   materials.forEach(material => {

			let displayMaterial = capfirst(`${material}`)

		event.create(`${material}_almandine_ore_tfc`).displayName(`${displayMaterial} Almandine Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0xED0000).defaultCutout()
		event.create(`${material}_aluminium_ore_tfc`).displayName(`${displayMaterial} Aluminium Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0x69A4C4).defaultCutout() 
		event.create(`${material}_amber_ore_tfc`).displayName(`${displayMaterial} Amber Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x966900).defaultCutout()
		event.create(`${material}_amethyst_ore_tfc`).displayName(`${displayMaterial} Amethyst Ore`).material("stone").model(`kubejs:block/material_sets/amethyst/${material}`).color(0, 0x7B5DAF).defaultCutout()
		event.create(`${material}_andradite_ore_tfc`).displayName(`${displayMaterial} Andradite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0x6A5500).defaultCutout() 
		event.create(`${material}_apatite_ore_tfc`).displayName(`${displayMaterial} Apatite Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0xBABAED).defaultCutout() 
		event.create(`${material}_banded_iron_ore_tfc`).displayName(`${displayMaterial} Banded Iron Ore`).material("stone").model(`kubejs:block/material_sets/iron/${material}`).color(0, 0x845252).defaultCutout() 
		event.create(`${material}_barite_ore_tfc`).displayName(`${displayMaterial} Barite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0xBCC0C0).defaultCutout() 
		event.create(`${material}_bastnasite_ore_tfc`).displayName(`${displayMaterial} Bastnasite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0x683917).defaultCutout() 
		event.create(`${material}_bauxite_ore_tfc`).displayName(`${displayMaterial} Bauxite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0xAC5600).defaultCutout() 
		event.create(`${material}_bentonite_ore_tfc`).displayName(`${displayMaterial} Bentonite Ore`).material("stone").model(`kubejs:block/material_sets/sulfur/${material}`).color(0, 0x9C8985).defaultCutout() 
		event.create(`${material}_beryllium_ore_tfc`).displayName(`${displayMaterial} Beryllium Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x5BA45B).defaultCutout() 
		event.create(`${material}_bismuth_ore_tfc`).displayName(`${displayMaterial} Bismuth Ore`).material("stone").model(`kubejs:block/material_sets/copper/${material}`).color(0, 0x4F7E7E).defaultCutout() 
		event.create(`${material}_blue_sapphire_ore_tfc`).displayName(`${displayMaterial} Sapphire Ore`).material("stone").model(`kubejs:block/material_sets/ruby_sapphire/${material}`).color(0, 0x5D5DBA).defaultCutout() 
        event.create(`${material}_blue_topaz_ore_tfc`).displayName(`${displayMaterial} Blue Topaz Ore`).material("stone").model(`kubejs:block/material_sets/topaz/${material}`).color(0, 0x3B4869).defaultCutout()
		event.create(`${material}_brown_limonite_ore_tfc`).displayName(`${displayMaterial} Brown Limonite Ore`).material("stone").model(`kubejs:block/material_sets/iron/${material}`).color(0, 0xAE5700).defaultCutout() 
		event.create(`${material}_calcite_ore_tfc`).displayName(`${displayMaterial} Calcite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0xCDBCB4).defaultCutout() 
		event.create(`${material}_cassiterite_ore_tfc`).displayName(`${displayMaterial} Cassiterite Ore`).material("stone").model(`kubejs:block/material_sets/tin/${material}`).color(0, 0xBFBFBF).defaultCutout() 
		event.create(`${material}_certus_quartz_ore_tfc`).displayName(`${displayMaterial} Certus Quartz Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x797999).defaultCutout()
		event.create(`${material}_chalcopyrite_ore_tfc`).displayName(`${displayMaterial} Chalcopyrite Ore`).material("stone").model(`kubejs:block/material_sets/copper/${material}`).color(0, 0x836221).defaultCutout() 
		event.create(`${material}_cinnabar_ore_tfc`).displayName(`${displayMaterial} Cinnabar Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x8C0000).defaultCutout()
		event.create(`${material}_coal_ore_tfc`).displayName(`${displayMaterial} Coal Ore`).material("stone").model(`kubejs:block/material_sets/lignite/${material}`).color(0, 0x414141).defaultCutout() 
		event.create(`${material}_cobalt_ore_tfc`).displayName(`${displayMaterial} Cobalt Ore`).material("stone").model(`kubejs:block/material_sets/cobalt/${material}`).color(0, 0x313199).defaultCutout() 
		event.create(`${material}_cobaltite_ore_tfc`).displayName(`${displayMaterial} Cobaltite Ore`).material("stone").model(`kubejs:block/material_sets/cobalt/${material}`).color(0, 0x4545D8).defaultCutout() 
		event.create(`${material}_cooperite_ore_tfc`).displayName(`${displayMaterial} Cooperite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0xDEDEAE).defaultCutout() 
		event.create(`${material}_copper_ore_tfc`).displayName(`${displayMaterial} Copper Ore`).material("stone").model(`kubejs:block/material_sets/copper/${material}`).color(0, 0x8F3800).defaultCutout() 
		event.create(`${material}_diamond_ore_tfc`).displayName(`${displayMaterial} Diamond Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x80F5F5).defaultCutout() 
		event.create(`${material}_emerald_ore_tfc`).displayName(`${displayMaterial} Emerald Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x4AED4A).defaultCutout() 
		event.create(`${material}_galena_ore_tfc`).displayName(`${displayMaterial} Galena Ore`).material("stone").model(`kubejs:block/material_sets/lead/${material}`).color(0, 0x573457).defaultCutout() 
		event.create(`${material}_garnierite_ore_tfc`).displayName(`${displayMaterial} Garnierite Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0x2DB640).defaultCutout() 
		event.create(`${material}_glauconite_ore_tfc`).displayName(`${displayMaterial} Glauconite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0x678F30).defaultCutout() 
        event.create(`${material}_gold_ore_tfc`).displayName(`${displayMaterial} Gold Ore`).material("stone").model(`kubejs:block/material_sets/gold/${material}`).color(0, 0xD1BC41).defaultCutout()
        event.create(`${material}_graphite_ore_tfc`).displayName(`${displayMaterial} Graphite Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0x676767).defaultCutout() 
		event.create(`${material}_green_sapphire_ore_tfc`).displayName(`${displayMaterial} Green Sapphire Ore`).material("stone").model(`kubejs:block/material_sets/ruby_sapphire/${material}`).color(0, 0x5DBA79).defaultCutout() 
		event.create(`${material}_grossular_ore_tfc`).displayName(`${displayMaterial} Grossular Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0xBA5D00).defaultCutout() 
		event.create(`${material}_jade_ore_tfc`).displayName(`${displayMaterial} Jade Ore`).material("stone").model(`kubejs:block/material_sets/ruby_sapphire/${material}`).color(0, 0x5DBA79).defaultCutout() 
		event.create(`${material}_ilmenite_ore_tfc`).displayName(`${displayMaterial} Ilmenite Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0x3C2F2B).defaultCutout() 
        event.create(`${material}_iridium_ore_tfc`).displayName(`${displayMaterial} Iridium Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0xA3A3A6).defaultCutout() 
        event.create(`${material}_iron_ore_tfc`).displayName(`${displayMaterial} Iron Ore`).material("stone").model(`kubejs:block/material_sets/iron/${material}`).color(0, 0xB4B4B4).defaultCutout() 
		event.create(`${material}_lapis_ore_tfc`).displayName(`${displayMaterial} Lapis Ore`).material("stone").model(`kubejs:block/material_sets/lapis/${material}`).color(0, 0x3838B0).defaultCutout() 
		event.create(`${material}_lazurite_ore_tfc`).displayName(`${displayMaterial} Lazurite Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x4957C0).defaultCutout()
		event.create(`${material}_lead_ore_tfc`).displayName(`${displayMaterial} Lead Ore`).material("stone").model(`kubejs:block/material_sets/lead/${material}`).color(0, 0x4F384F).defaultCutout() 
		event.create(`${material}_lepidolite_ore_tfc`).displayName(`${displayMaterial} Lepidolite Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0xB02567).defaultCutout() 
        event.create(`${material}_lignite_coal_ore_tfc`).displayName(`${displayMaterial} Lignite Coal Ore`).material("stone").model(`kubejs:block/material_sets/lignite/${material}`).color(0, 0x5D4141).defaultCutout() 
        event.create(`${material}_lithium_ore_tfc`).displayName(`${displayMaterial} Lithium Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0xA1AABB).defaultCutout() 
		event.create(`${material}_magnesite_ore_tfc`).displayName(`${displayMaterial} Magnesite Ore`).material("stone").model(`kubejs:block/material_sets/magnetite/${material}`).color(0, 0xACAC88).defaultCutout() 
		event.create(`${material}_magnetite_ore_tfc`).displayName(`${displayMaterial} Magnetite Ore`).material("stone").model(`kubejs:block/material_sets/magnetite/${material}`).color(0, 0x191919).defaultCutout() 
		event.create(`${material}_malachite_ore_tfc`).displayName(`${displayMaterial} Malachite Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x678F30).defaultCutout()
		event.create(`${material}_manganese_ore_tfc`).displayName(`${displayMaterial} Manganese Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0xA2A2AA).defaultCutout() 
		event.create(`${material}_molybdenite_ore_tfc`).displayName(`${displayMaterial} Molybdenite Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x191919).defaultCutout() 
		event.create(`${material}_molybdenum_ore_tfc`).displayName(`${displayMaterial} Molybdenum Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x65657C).defaultCutout() 
		event.create(`${material}_monazite_ore_tfc`).displayName(`${displayMaterial} Monazite Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x314531).defaultCutout() 
		event.create(`${material}_naquadah_ore_tfc`).displayName(`${displayMaterial} Naquadah Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x2B2B2B).defaultCutout() 
		event.create(`${material}_neodymium_ore_tfc`).displayName(`${displayMaterial} Neodymium Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x383838).defaultCutout() 
		event.create(`${material}_nickel_ore_tfc`).displayName(`${displayMaterial} Nickel Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0xA4A4CD).defaultCutout() 
		event.create(`${material}_oil_shale_ore_tfc`).displayName(`${displayMaterial} Oil Shale Ore`).material("stone").model(`kubejs:block/material_sets/lignite/${material}`).color(0, 0x080808).defaultCutout() 
		event.create(`${material}_oilsands_ore_tfc`).displayName(`${displayMaterial} Oilsands Ore`).material("stone").model(`kubejs:block/material_sets/lignite/${material}`).color(0, 0x080808).defaultCutout() 
		event.create(`${material}_olivine_ore_tfc`).displayName(`${displayMaterial} Olivine Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x8CED8C).defaultCutout()
		event.create(`${material}_opal_ore_tfc`).displayName(`${displayMaterial} Opal Ore`).material("stone").model(`kubejs:block/material_sets/opal/${material}`).defaultCutout()
		event.create(`${material}_osmium_ore_tfc`).displayName(`${displayMaterial} Osmium Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0x2525BD).defaultCutout() 
        event.create(`${material}_palladium_ore_tfc`).displayName(`${displayMaterial} Palladium Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0x4B4B4B).defaultCutout() 
		event.create(`${material}_pentlandite_ore_tfc`).displayName(`${displayMaterial} Pentlandite Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0x7C7104).defaultCutout() 
        event.create(`${material}_phosphate_ore_tfc`).displayName(`${displayMaterial} Phosphate Ore`).material("stone").model(`kubejs:block/material_sets/sulfur/${material}`).color(0, 0xD7D700).defaultCutout() 
        event.create(`${material}_phosphorus_ore_tfc`).displayName(`${displayMaterial} Phosphorus Ore`).material("stone").model(`kubejs:block/material_sets/sulfur/${material}`).color(0, 0xD7D700).defaultCutout() 
		event.create(`${material}_pitchblende_ore_tfc`).displayName(`${displayMaterial} Pitchblende Ore`).material("stone").model(`kubejs:block/material_sets/sulfur/${material}`).color(0, 0xC1CB00).defaultCutout() 
		event.create(`${material}_platinum_ore_tfc`).displayName(`${displayMaterial} Platinum Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0xE8E8B6).defaultCutout() 
		event.create(`${material}_powellite_ore_tfc`).displayName(`${displayMaterial} Powellite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0xDEDE00).defaultCutout() 
		event.create(`${material}_pyrite_ore_tfc`).displayName(`${displayMaterial} Pyrite Ore`).material("stone").model(`kubejs:block/material_sets/iron/${material}`).color(0, 0x735C1F).defaultCutout() 
		event.create(`${material}_pyrolusite_ore_tfc`).displayName(`${displayMaterial} Pyrolusite Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x7B7B8B).defaultCutout() 
		event.create(`${material}_pyrope_ore_tfc`).displayName(`${displayMaterial} Pyrope Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x4E2141).defaultCutout() 
		event.create(`${material}_quartz_ore_tfc`).displayName(`${displayMaterial} Quartz Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0xA3B3A3).defaultCutout()
        event.create(`${material}_quartzite_ore_tfc`).displayName(`${displayMaterial} Quartzite Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0xA3B3A3).defaultCutout()
		event.create(`${material}_red_garnet_ore_tfc`).displayName(`${displayMaterial} Red Garnet Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x602626).defaultCutout() 
		event.create(`${material}_redstone_ore_tfc`).displayName(`${displayMaterial} Redstone Ore`).material("stone").model(`kubejs:block/material_sets/electric_powder/${material}`).color(0, 0x500000).defaultCutout() 
		event.create(`${material}_rock_salt_ore_tfc`).displayName(`${displayMaterial} Rock Salt Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0xBF9F9F).defaultCutout()
		event.create(`${material}_ruby_ore_tfc`).displayName(`${displayMaterial} Ruby Ore`).material("stone").model(`kubejs:block/material_sets/ruby_sapphire/${material}`).color(0, 0x5B2424).defaultCutout() 
        event.create(`${material}_rutile_ore_tfc`).displayName(`${displayMaterial} Rutile Ore`).material("stone").model(`kubejs:block/material_sets/ruby_sapphire/${material}`).color(0, 0xC40C55).defaultCutout() 
	    event.create(`${material}_salt_ore_tfc`).displayName(`${displayMaterial} Salt Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0xCCCCCC).defaultCutout()
		event.create(`${material}_saltpeter_ore_tfc`).displayName(`${displayMaterial} Saltpeter Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0xB7B7B7).defaultCutout() 
		event.create(`${material}_scheelite_ore_tfc`).displayName(`${displayMaterial} Scheelite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0xAE7A11).defaultCutout() 
		event.create(`${material}_silver_ore_tfc`).displayName(`${displayMaterial} Silver Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0xA7A7C2).defaultCutout() 
		event.create(`${material}_soapstone_ore_tfc`).displayName(`${displayMaterial} Soapstone Ore`).material("stone").model(`kubejs:block/material_sets/salt/${material}`).color(0, 0x4E774E).defaultCutout() 
		event.create(`${material}_sodalite_ore_tfc`).displayName(`${displayMaterial} Sodalite Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x1010CC).defaultCutout()
		event.create(`${material}_spessartine_ore_tfc`).displayName(`${displayMaterial} Spessartine Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x7A3030).defaultCutout() 
		event.create(`${material}_sphalerite_ore_tfc`).displayName(`${displayMaterial} Sphalerite Ore`).material("stone").model(`kubejs:block/material_sets/zinc/${material}`).color(0, 0xD1D1D1).defaultCutout() 
		event.create(`${material}_spodumene_ore_tfc`).displayName(`${displayMaterial} Spodumene Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0xB19E9E).defaultCutout() 
		event.create(`${material}_stibnite_ore_tfc`).displayName(`${displayMaterial} Stibnite Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x3B3B3B).defaultCutout() 
		event.create(`${material}_sulfur_ore_tfc`).displayName(`${displayMaterial} Sulfur Ore`).material("stone").model(`kubejs:block/material_sets/sulfur/${material}`).color(0, 0xA4A400).defaultCutout() 
		event.create(`${material}_talc_ore_tfc`).displayName(`${displayMaterial} Talc Ore`).material("stone").model(`kubejs:block/material_sets/salt/${material}`).color(0, 0x428442).defaultCutout() 
		event.create(`${material}_tantalite_ore_tfc`).displayName(`${displayMaterial} Tantalite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0x7E4623).defaultCutout() 
        event.create(`${material}_tanzanite_ore_tfc`).displayName(`${displayMaterial} Tanzanite Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x270079).defaultCutout() 
        event.create(`${material}_tetrahedrite_ore_tfc`).displayName(`${displayMaterial} Tetrahedrite Ore`).material("stone").model(`kubejs:block/material_sets/copper/${material}`).color(0, 0xBA1E00).defaultCutout() 
		event.create(`${material}_thorium_ore_tfc`).displayName(`${displayMaterial} Thorium Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x001900).defaultCutout() 
		event.create(`${material}_tin_ore_tfc`).displayName(`${displayMaterial} Tin Ore`).material("stone").model(`kubejs:block/material_sets/tin/${material}`).color(0, 0xBFBFBF).defaultCutout() 
	    event.create(`${material}_titanium_ore_tfc`).displayName(`${displayMaterial} Titanium Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0xA376B2).defaultCutout() 
        event.create(`${material}_topaz_ore_tfc`).displayName(`${displayMaterial} Topaz Ore`).material("stone").model(`kubejs:block/material_sets/topaz/${material}`).color(0, 0x7A3D00).defaultCutout() 
		event.create(`${material}_tungstate_ore_tfc`).displayName(`${displayMaterial} Tungstate Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x2E2A1D).defaultCutout() 
		event.create(`${material}_uraninite_ore_tfc`).displayName(`${displayMaterial} Uraninite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0x191919).defaultCutout() 
       	event.create(`${material}_uranium_ore_tfc`).displayName(`${displayMaterial} Uranium Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0x191919).defaultCutout() 
        event.create(`${material}_uvarovite_ore_tfc`).displayName(`${displayMaterial} Uvarovite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0x2EDE2E).defaultCutout() 
        event.create(`${material}_vanadium_magnetite_ore_tfc`).displayName(`${displayMaterial} Vanadium Magnetite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0x1E1E34).defaultCutout() 
        event.create(`${material}_wulfenite_ore_tfc`).displayName(`${displayMaterial} Wulfenite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0xC46200).defaultCutout()
		event.create(`${material}_yellow_garnet_ore_tfc`).displayName(`${displayMaterial} Yellow Garnet Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x838334).defaultCutout() 
		event.create(`${material}_yellow_limonite_ore_tfc`).displayName(`${displayMaterial} Yellow Limonite Ore`).material("stone").model(`kubejs:block/material_sets/iron/${material}`).color(0, 0x818100).defaultCutout() 
        
	})
})
	

