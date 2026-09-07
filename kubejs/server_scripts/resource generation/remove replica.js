ServerEvents.tags('item', MR => {
    const REPLICATION = [
        '#c:gems',
        '#c:nuggets',
        '#c:ingots',
        '#c:dusts',
        '#c:dirty_dusts',
        'minecraft:coal',
        'minecraft:flint',
        'minecraft:blaze_powder',
        'oritech:packed_wheat',
        'minecraft:netherite_scrap',
        'minecraft:brewing_stand',
        'mekanism:dirty_netherite_scrap',
        'mysticalagriculture:prosperity_seed_base',
        'mysticalagriculture:prosperity_shard',
        '#c:chests',
        'allthecompressed:hay_block_1x',
        'allthecompressed:oak_log_2x',
        '#c:bricks',
        '#c:concretes',
        '@productive_metalworks',
        'allthecompressed:birch_log_2x',
        'allthecompressed:glowstone_2x',
        'allthecompressed:stone_2x',
        'minecraft:smooth_stone',
        'minecraft:packed_mud',
        'allthecompressed:obsidian_1x',
        'allthecompressed:podzol_1x',
        'allthecompressed:sand_2x',
        'allthecompressed:dirt_3x',
        'allthecompressed:clay_1x',
        'allthecompressed:cherry_log_2x',
        'allthecompressed:spruce_log_2x',
        'allthecompressed:mangrove_log_2x',
        'allthecompressed:jungle_log_2x',
        'allthecompressed:dark_oak_log_2x',
        'allthecompressed:acacia_log_2x',
        'allthecompressed:ancient_log_0_2x',
        '@botany_pots',
        'allthecompressed:blaze_rod_block',
        'allthecompressed:gravel_2x',
        'allthecompressed:grass_block_1x',
        'minecraft:soul_soil',
        'allthecompressed:soul_sand_1x',
        'productivemetalworks:fire_clay',
        'allthecompressed:mud_1x',
        'allthecompressed:cobblestone_4x',
        'allthecompressed:moss_block_1x',
        'minecraft:terracotta',
        'allthecompressed:mycelium_1x',
        'allthecompressed:cobbled_deepslate_1x',
        'allthecompressed:deepslate_1x'
    ];

    REPLICATION.forEach(item => {
        MR.add('replication:cant_be_scanned', item);
        MR.add('replication:cant_be_disintegrated', item);
        MR.add('replication:skip_calculation', item);
    });
});
ServerEvents.tags('item', MR => {
    const REPLICATION = [
        '#c:ores',
        '#c:replication_essence',
        'minecraft:gravel',
        'minecraft:sand',
        '#minecraft:dirt',
        '#minecraft:leaves',
        '#minecraft:logs',
        '#minecraft:planks',
        '#c:rods',
        'mekanism:hdpe_rod',
        'mekanism:hdpe_sheet',
        'mekanism:substrate',
        'mekanism:hdpe_pellet',
        'minecraft:lily_pad',
        '#c:silicon',
        '#c:shards',
        '#minecraft:glass',
        '#c:glass_blocks',
        '#c:glass_panes',
        '#mekanism:enriched',
        '#c:fuels',
        'minecraft:blaze_rod',
        'minecraft:furnace',
        'minecraft:granite',
        'minecraft:diorite',
        'botanypots:terracotta_botany_pot',
        'enderio:conduit_binder_composite',
        '@allthecompressed',
        '#c:storage_blocks',
        '#c:chipped_quark'

    ];
    REPLICATION.forEach(item => {
        MR.add('replication:skip_calculation', item);
    });
});
ServerEvents.tags('item', MR => {
    const REPLICATION = [
        '@allthecompressed',

    ];
    REPLICATION.forEach(item => {
        MR.add('replication:cant_be_scanned', item);
    });
});

ServerEvents.tags('item', MR => {
    const REPLICATION = [
        'oritech:small_iron_clump',
        '#c:clumps'
    ];

    REPLICATION.forEach(item => {
        MR.add('replication:cant_be_scanned', item);
        MR.add('replication:skip_calculation', item);
    });
});

ServerEvents.tags('item', MR => {
    const REPLICATION = [
        'minecraft:quartz',

    ];
    REPLICATION.forEach(item => {
        MR.add('replication:cant_be_disintegrated', item);
    });
});




        