ServerEvents.recipes(event => {

    // Remove original Reinforced Alloy recipe
    event.remove({
        id: 'mekanism:metallurgic_infusing/alloy/reinforced'
    })

    // Reinforced Alloy
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemical_input": {
            "amount": 20,
            "chemical": "kubejs:diamond_infused_precious"
        },
        "item_input": {
            "count": 1,
            "tag": "mekanism:alloys/infused"
        },
        "output": {
            "count": 1,
            "id": "mekanism:alloy_reinforced"
        }
    }).id("kubejs:chem/alloy/reinforced")


    // Remove original Atomic Alloy recipe
    event.remove({
        id: 'mekanism:metallurgic_infusing/alloy/atomic'
    })

    // Atomic Alloy
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemical_input": {
            "amount": 40,
            "chemical": "kubejs:obsidian_infused_nether"
        },
        "item_input": {
            "count": 1,
            "tag": "mekanism:alloys/reinforced"
        },
        "output": {
            "count": 1,
            "id": "mekanism:alloy_atomic"
        }
    }).id("kubejs:chem/alloy/atomic")

event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemical_input": {
            "amount": 500,
            "chemical": "kubejs:tier_1_growth"
        },
        "item_input": {
            "count": 1,
            "item": "butchery:heart"
        },
        "output": {
            "count": 1,
            "id": "bhc:red_heart"
        }
    })

})
