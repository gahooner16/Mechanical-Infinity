ServerEvents.recipes(event => {
    event.recipes.justdirethings.goospread(
        'kubejs:goospread/replica',  // Recipe ID
        'mekanism:block_raw_osmium',  // Input block
        'replication:raw_replica_block',  // Output block
        2,  // Goo tier
        2000  // Crafting duration
    )
})
ServerEvents.recipes(event => {
    event.recipes.justdirethings.goospread(
        'kubejs:goospread/sky_stone',  // Recipe ID
        'minecraft:cobbled_deepslate',  // Input block
        'ae2:sky_stone_block',  // Output block
        2,  // Goo tier
        300  // Crafting duration
    )
})
ServerEvents.recipes(event => {
    event.recipes.justdirethings.goospread(
        'kubejs:goospread/flawless_certus',  // Recipe ID
        'minecraft:quartz_block',  // Input block
        'ae2:flawless_budding_quartz',  // Output block
        2,  // Goo tier
        2500  // Crafting duration
    )
})