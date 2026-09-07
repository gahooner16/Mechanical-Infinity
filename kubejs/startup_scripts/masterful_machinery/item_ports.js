MMEvents.registerPorts(event => {
    event.create('item_port_tiny')
    .name('Tiny Item Port')
    .config('mm:item', e => {
        e.rows(1)
        e.columns(1)
        e.autoPush(true)
        e.tierRank(1)
        e.slotCapacity(64)
    });

    event.create('item_port_small')
    .name('Small Item Port')
    .config('mm:item', e => {
        e.rows(2)
        e.columns(2)
        e.autoPush(true)
        e.tierRank(2)
        e.slotCapacity(64)
    });

    event.create('item_port_moderate')
    .name('Moderate Item Port')
    .config('mm:item', e => {
        e.rows(3)
        e.columns(3)
        e.autoPush(true)
        e.tierRank(3)
        e.slotCapacity(64)
    });

    event.create('item_port_large')
    .name('Big Item Port')
    .config('mm:item', e => {
        e.rows(4)
        e.columns(4)
        e.autoPush(true)
        e.tierRank(4)
        e.slotCapacity(64)
    });

    event.create('item_port_massive')
    .name('Massive Item Port')
    .config('mm:item', e => {
        e.rows(5)
        e.columns(5)
        e.autoPush(true)
        e.tierRank(5)
        e.slotCapacity(64)
    });

    event.create('item_port_extreme')
    .name('Extreme Item Port')
    .config('mm:item', e => {
        e.rows(6)
        e.columns(6)
        e.autoPush(true)
        e.tierRank(6)
        e.slotCapacity(64)
    });

    event.create('item_port_extreme_gigantic')
    .name('Gigantic Item Port')
    .config('mm:item', e => {
        e.rows(6)
        e.columns(9)
        e.autoPush(true)
        e.tierRank(7)
        e.slotCapacity(64)
    });

})
