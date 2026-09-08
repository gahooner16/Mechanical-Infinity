// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.generateData('after_mods', event => {
    event.json('entangled:recipe/block', {"type":"minecraft:crafting_shaped","category":"misc","pattern":["#A#","ABA","#A#"],"key":{"#":{"item":"kubejs:quantum_essence"},"A":{"tag":"c:obsidians"},"B":{"tag":"c:chests/wooden"}},"result":{"id":"entangled:block","count":1}})
    event.json('sfm:recipe/cable', {"type":"minecraft:crafting_shaped","category":"misc","pattern":["#A#","BCB","#A#"],"key":{"#":{"item":"kubejs:ender_essence"},"A":{"item":"minecraft:light_weighted_pressure_plate"},"B":{"item":"minecraft:iron_bars"},"C":{"tag":"c:chests"}},"result":{"id":"sfm:cable","count":16}})
})

