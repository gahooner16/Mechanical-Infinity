ServerEvents.recipes(event => {

    // Diamond Infused Precious
    event.custom({
        type: "mekanism:dissolution",
        item_input: {
            count: 1,
            item: "kubejs:precious_essence"
        },
        chemical_input: {
            amount: 1,
            chemical: "mekanism:diamond"
        },
        output: {
            amount: 100,
            id: "kubejs:diamond_infused_precious"
        },
        per_tick_usage: true
    }).id("kubejs:chem/diamond_infused_precious")

    // Obsidian Infused Nether
    event.custom({
        type: "mekanism:dissolution",
        item_input: {
            count: 1,
            item: "kubejs:nether_essence"
        },
        chemical_input: {
            amount: 2,
            chemical: "mekanism:refined_obsidian"
        },
        output: {
            amount: 200,
            id: "kubejs:obsidian_infused_nether"
        },
        per_tick_usage: true
    }).id("kubejs:chem/obsidian_infused_nether")

})