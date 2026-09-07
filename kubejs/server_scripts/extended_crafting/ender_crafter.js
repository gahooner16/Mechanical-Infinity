ServerEvents.recipes(event => {
    event.custom({
        type: 'extendedcrafting:shaped_ender_crafter',
        pattern: [
            'EDE',
            'DRD',
            'EDE'
        ],
        key: {
            D: {
                item: 'draconicevolution:draconium_ingot'
            },
            R: {
                item: 'replication:replica_block'
            },
            E: {
                item: 'justdirethings:eclipsealloy_ingot'
            }
        },
        result: {
            id: 'extendedcrafting:black_iron_ingot',
            count: 1
        }
    })
})