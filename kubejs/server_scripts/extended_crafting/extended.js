ServerEvents.recipes(event => {

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,

        "pattern": [
            "ABBBC",
            "BADCB",
            "BDEDB",
            "BCDAB",
            "CBBBA"
        ],

        "key": {
            "A": {
                "item": "extendedcrafting:enhanced_ender_ingot"
            },
            "B": {
                "item": "cognition:cognitive_alloy"
            },
            "C": {
                "item": "allthemodium:allthemodium_rod"
            },
            "D": {
                "item": "ironfurnaces:rainbow_plating"
            },
            "E": {
                "item": "bhc:green_heart"
            }
        },

        "result": {
            "id": "bhc:blue_heart",
            "count": 1
        }
    }).id("kubejs:bhc_blue_heart")

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,

        "pattern": [
            "AAAAA",
            "ADEDA",
            "ACECA",
            "ACECA",
            "ABBBA"
        ],

        "key": {
            "A": {
                "item": "mekanismgenerators:fission_reactor_casing"
            },
            "B": {
                "item": "mekanismgenerators:fission_reactor_port"
            },
            "C": {
                "item": "mekanismgenerators:fission_fuel_assembly"
            },
            "D": {
                "item": "mekanismgenerators:control_rod_assembly"
            },
            "E": {
                "item": "mekanism_extras:alloy_thermonuclear"
            }
        },

        "result": {
            "id": "compactmekanismmachines:compact_fission_reactor",
            "count": 1
        }
    }).id("kubejs:compactmekanismmachines_compact_fission_reactor")

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,

        "pattern": [
            "AAAAA",
            "ADEDA",
            "ACFCA",
            "ACGCA",
            "ABBBA"
        ],

        "key": {
            "A": {
                "item": "mekanismgenerators:turbine_casing"
            },
            "B": {
                "item": "mekanismgenerators:turbine_valve"
            },
            "C": {
                "item": "mekanismgenerators:turbine_blade"
            },
            "D": {
                "item": "powah:thermo_generator_hardened"
            },
            "E": {
                "item": "mekanismgenerators:rotational_complex"
            },
            "F": {
                "item": "mekanismgenerators:turbine_rotor"
            },
            "G": {
                "item": "oritech:steam_engine_block"
            }
        },

        "result": {
            "id": "compactmekanismmachines:compact_industrial_turbine",
            "count": 1
        }
    }).id("kubejs:compactmekanismmachines_compact_industrial_turbine")


})