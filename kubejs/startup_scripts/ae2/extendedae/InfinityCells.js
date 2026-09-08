StartupEvents.registry('item', MR => {

    [
        { item: 'kubejs:earth_essence' },
        { item: 'kubejs:metallic_essence' },
        { item: 'kubejs:ender_essence' },
        { item: 'kubejs:nether_essence' },
        { item: 'kubejs:organic_essence' },
        { item: 'kubejs:precious_essence' },
        { item: 'kubejs:living_essence' },
        { item: 'kubejs:nuclear_essence' },
        { item: 'kubejs:plasma_essence' },
        { item: 'kubejs:draconic_essence' },
        { item: 'kubejs:chaotic_essence' },
        { item: 'kubejs:mystic_essence' },
        { item: 'kubejs:chrono_essence' },
        { item: 'kubejs:quantum_essence' },

        // Add entries using one of these properties:
        // { item: 'minecraft:iron_ingot' },
        // { block: 'minecraft:stone' },
        // { fluid: 'minecraft:water' },
    ].forEach(cell => {
        const type = Object.keys(cell)[0];
        const target = cell[type];
        const [namespace, path] = target.split(':');
        const textureType = type === 'block' ? 'block' : 'item';

        MR.create(`${path}_cell`, 'custom_infinity_cell')
            .texture(`${namespace}:${textureType}/${path}`)
            [`${type}Type`](target)
            .cellModel(`kubejs:block/drive/${path}_cell`);
    });

})
