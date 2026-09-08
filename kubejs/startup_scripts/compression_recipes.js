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
