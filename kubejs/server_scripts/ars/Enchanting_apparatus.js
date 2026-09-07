ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'minecraft:gold_block', 'minecraft:gold_block'], // input items
        'bhc:red_heart', // reagent
        'bhc:yellow_heart', // output
        1000 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )

})