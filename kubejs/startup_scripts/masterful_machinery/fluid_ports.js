MMEvents.registerPorts(event => {
    event.create('fluid_port_small')
    .name('Small Fluid Port')
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(1)
        e.slotCapacity(4000)
        e.autoPush(true)
        e.tierRank(1)
    })

    event.create('fluid_port_normal')
    .name('Moderate Fluid Port')
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(1)
        e.slotCapacity(16000)
        e.autoPush(true)
        e.tierRank(2)
    })

    event.create('fluid_port_large')
    .name('Large Fluid Port')
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(1)
        e.slotCapacity(32000)
        e.autoPush(true)
        e.tierRank(3)
    })

    event.create('fluid_port_massive')
    .name('Massive Fluid Port')
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(1)
        e.slotCapacity(64000)
        e.autoPush(true)
        e.tierRank(4)
    })

    event.create('fluid_port_alpha')
    .name('Alpha Fluid Port')
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(1)
        e.slotCapacity(256000)
        e.autoPush(true)
        e.tierRank(5)
    })

    event.create('fluid_port_omega')
    .name('Omega Fluid Port')
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(3)
        e.slotCapacity(1024000)
        e.autoPush(true)
        e.tierRank(6)
    })

    event.create('fluid_port_beginning')
    .name('Fluid Port of the Beginning')
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(9)
        e.slotCapacity(4192000)
        e.autoPush(true)
        e.tierRank(9)
    })
})