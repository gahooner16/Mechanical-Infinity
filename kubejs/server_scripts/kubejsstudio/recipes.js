// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.generateData('after_mods', event => {
    event.json('entangled:recipe/block', {"type":"minecraft:crafting_shaped","category":"misc","pattern":["#A#","ABA","#A#"],"key":{"#":{"item":"kubejs:quantum_essence"},"A":{"tag":"c:obsidians"},"B":{"tag":"c:chests/wooden"}},"result":{"id":"entangled:block","count":1}})
    event.json('sfm:recipe/cable', {"type":"minecraft:crafting_shaped","category":"misc","pattern":["#A#","BCB","#A#"],"key":{"#":{"item":"kubejs:ender_essence"},"A":{"item":"minecraft:light_weighted_pressure_plate"},"B":{"item":"minecraft:iron_bars"},"C":{"tag":"c:chests"}},"result":{"id":"sfm:cable","count":16}})
})

const matterTypes = global.MatterBlockConfig || [];

ServerEvents.recipes(event => {
    matterTypes.forEach(function (entry) {
        var key = entry.key;
        var maxCompression = entry.maxCompression || 5;

        for (var tier = 0; tier < maxCompression; tier++) {
            var currentId = tier === 0 ? key + '_essence_block' : key + '_essence_block_' + tier;
            var nextId = key + '_essence_block_' + (tier + 1);
            var compressId = 'kubejs:' + key + '_compress_' + tier + '_to_' + (tier + 1);
            var decompressId = 'kubejs:' + key + '_decompress_' + (tier + 1) + '_to_' + tier;

            event.shaped(Item.of(nextId, 1), [
                '###',
                '#A#',
                '###'
            ], {
                '#': currentId,
                A: currentId
            }).id(compressId);

            event.shapeless(Item.of(currentId, 9), [nextId]).id(decompressId);
        }
    });
});
