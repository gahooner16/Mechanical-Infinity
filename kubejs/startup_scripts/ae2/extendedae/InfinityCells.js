StartupEvents.registry('item', MR => {

    MR.create('lava_cell', 'custom_infinity_cell')
        .texture('kubejs:item/lava_cell')
        .fluidType('minecraft:lava')
        .cellModel('kubejs:block/drive/lava_cell');

    MR.create('water_cell', 'custom_infinity_cell')
        .texture('kubejs:item/water_cell')
        .fluidType('minecraft:water')
        .cellModel('kubejs:block/drive/water_cell');

    MR.create('cobblestone_cell', 'custom_infinity_cell')
        .texture('kubejs:item/cobblestone_cell')
        .itemType('minecraft:cobblestone')
        .cellModel('kubejs:block/drive/cobblestone_cell');

})