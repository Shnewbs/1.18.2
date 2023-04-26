// priority: 0

function capfirst(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

console.info('TFC Greggy Tools Working Flawlessly)')

onEvent('item.registry', event => {
    var QuickMetalChange = ["aluminium"]
    var toolBlade = [`sword`,`knife`,`buzzsaw`,`chainsaw`]
    var toolHeads = [/*`chisel`,*/`hammer`,`hoe`,`javelin`,`mace`,`pickaxe`,`propick`,`saw`,`scythe`,`shovel`,`branch_cutter`,`file`,`plunger`,`screwdriver`,/*`electric_screwdriver`,`electric_wrench`,*/`wire_cutter`]
    var toolWithout = [`chain`,`crowbar`,`butchery_knife`,`wrench`]

//====================================================================================================================================================================\\

QuickMetalChange.forEach(material => {
toolHeads.forEach(th => {
    let displaytool = capfirst(`${th}`)
    let displayMaterial = capfirst(`${material}`)

    event.create(`${th}_head_${material}`).displayName(`${displayMaterial} ${displaytool} Head`).texture(`kubejs:item/tools/${th}`).color(0, 0x69A4C4)

    })
})   

//====================================================================================================================================================================\\


QuickMetalChange.forEach(material => {
    toolBlade.forEach(tb => {
        let displaytoolswithBlade = capfirst(`${tb}`)
        let displayMaterial = capfirst(`${material}`)

    event.create(`${tb}_blade_${material}`).displayName(`${displayMaterial} ${displaytoolswithBlade} Blade`).texture(`kubejs:item/tools/${tb}`).color(0, 0x69A4C4)

    })
})  

//====================================================================================================================================================================\\


QuickMetalChange.forEach(material => {
    toolWithout.forEach(tw => {
        let displaytoolsWithout = capfirst(`${tw}`)
        let displayMaterial = capfirst(`${material}`)
    event.create(`${tw}_${material}`).displayName(`${displayMaterial} ${displaytoolsWithout}`).texture(`kubejs:item/tools/${tw}`).color(0, 0x69A4C4)

        })
    })     
})