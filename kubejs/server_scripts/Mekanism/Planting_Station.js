ServerEvents.recipes(event => {
    event.custom({
        "type": "mekmm:planting",
        "item_input": {
            "count": 1,
            "item": "mysticalagriculture:earth_seeds"
        },
        "chemical_input": {
            "amount": 1,
            "chemical": "kubejs:tier_1_growth"
        },
        "main_output": {
            "count": 10,
            "id": "kubejs:earth_essence"
        },
        "per_tick_usage": true
    }).id("mekmm:earth_seed")
})
ServerEvents.recipes(event => {
    event.custom({
        "type": "mekmm:planting",
        "item_input": {
            "count": 1,
            "item": "mysticalagriculture:iron_seeds"
        },
        "chemical_input": {
            "amount": 1,
            "chemical": "kubejs:tier_2_growth"
        },
        "main_output": {
            "count": 50,
            "id": "kubejs:metallic_essence"
        },
        "per_tick_usage": true
    }).id("mekmm:iron_seed")
})
ServerEvents.recipes(event => {
    event.custom({
        "type": "mekmm:planting",
        "item_input": {
            "count": 1,
            "item": "mysticalagriculture:nature_seeds"
        },
        "chemical_input": {
            "amount": 1,
            "chemical": "kubejs:tier_1_growth"
        },
        "main_output": {
            "count": 15,
            "id": "kubejs:organic_essence"
        },
        "per_tick_usage": true
    }).id("mekmm:nature_seed")
})
ServerEvents.recipes(event => {
    event.custom({
        "type": "mekmm:planting",
        "item_input": {
            "count": 1,
            "item": "mysticalagriculture:nether_seeds"
        },
        "chemical_input": {
            "amount": 1,
            "chemical": "kubejs:tier_3_growth"
        },
        "main_output": {
            "count": 15,
            "id": "kubejs:nether_essence"
        },
        "per_tick_usage": true
    }).id("mekmm:nether_seed")
})
ServerEvents.recipes(event => {
    event.custom({
        "type": "mekmm:planting",
        "item_input": {
            "count": 1,
            "item": "mysticalagriculture:end_seeds"
        },
        "chemical_input": {
            "amount": 1,
            "chemical": "kubejs:tier_4_growth"
        },
        "main_output": {
            "count": 15,
            "id": "kubejs:ender_essence"
        },
        "per_tick_usage": true
    }).id("mekmm:end_seed")
})