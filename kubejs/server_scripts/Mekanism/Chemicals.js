ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:reaction",
        "duration": 300,
        "energyRequired": 1000,

        "fluid_input": {
            "amount": 500,
            "tag": "minecraft:water"
        },

        "chemical_input": {
            "amount": 500,
            "chemical": "mekanism:oxygen"
        },

        "item_input": {
            "count": 1,
            "item": "kubejs:earth_essence"
        },

        "chemical_output": {
            "amount": 1000,
            "id": "kubejs:tier_1_growth"
        }
    }).id("kubejs:tier_1_growth")
})

ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:reaction",
        "duration": 300,
        "energyRequired": 1000,

        "fluid_input": {
            "amount": 500,
            "tag": "minecraft:lava"
        },

        "chemical_input": {
            "amount": 500,
            "chemical": "mekanism:hydrogen"
        },

        "item_input": {
            "count": 10,
            "item": "kubejs:metallic_essence"
        },

        "chemical_output": {
            "amount": 1000,
            "id": "kubejs:tier_2_growth"
        }
    }).id("kubejs:tier_2_growth")
})

ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:reaction",
        "duration": 300,
        "energyRequired": 1000,

        "fluid_input": {
            "amount": 500,
            "fluid": "oritech:still_biofuel"
        },

        "chemical_input": {
            "amount": 500,
            "chemical": "mekanism:refined_obsidian"
        },

        "item_input": {
            "count": 1,
            "item": "kubejs:nether_essence"
        },

        "chemical_output": {
            "amount": 1000,
            "id": "kubejs:tier_3_growth"
        }
    }).id("kubejs:tier_3_growth")
})

ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:reaction",
        "duration": 300,
        "energyRequired": 1000,

        "fluid_input": {
            "amount": 500,
            "fluid": "oritech:still_fuel"
        },

        "chemical_input": {
            "amount": 500,
            "chemical": "mekanism:carbon"
        },

        "item_input": {
            "count": 1,
            "item": "kubejs:ender_essence"
        },

        "chemical_output": {
            "amount": 1000,
            "id": "kubejs:tier_4_growth"
        }
    }).id("kubejs:tier_4_growth")
})