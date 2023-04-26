// priority: 0

function capfirst(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

console.info('TFC Greggy Tools Working Flawlessly)')

onEvent('item.registry', event => {
    var QuickMetalChange = ["aluminium"]
    var tools = [`chisel`,`hammer`,`hoe`,`javalin`,`knife`,`mace`,`pickaxe`,`propick`,`saw`,`scythe`,`shovel`,`sword`,`chain`,`wrench`,`butchery_knife`,`buzzsaw`,`chainsaw`,`crowbar`,`drill`,`file`,`mallet`,`plunger`,`screwdriver`,`wire_cutter`]



    tools.forEach(tool => {
        QuickMetalChange.forEach(material => {
            let displayMaterial = capfirst(`${material}`)
            let displaytool = capfirst(`${tool}`)

    event.create(`${tool}_head_${material}`).displayName(`${displayMaterial} ${displaytool} Head`).texture(`kubejs:item/tools/${tool}`).color(0, 0x69A4C4)
           
            })        
        })            
    })