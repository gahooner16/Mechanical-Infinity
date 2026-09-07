ServerEvents.recipes(event => {
    AE2Recipes.transformFluid(
        event,
        '#minecraft:water',
        [
            'mekanism:dust_obsidian',
            'minecraft:redstone',
            'minecraft:quartz'
        ],
        'fluxnetworks:flux_dust',
        1,
        'kubejs:ae2/transform/flux_dust'
    )
})