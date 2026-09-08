priority: 0;
MMEvents.registerPorts((event) => {
  function port(name, id, type, config, tier) {
    var portname;
    tier = typeof tier === 'number' ? tier : 1;
    switch (type) {
      case 1:
        portname = 'mm:item';
        break;
      case 2:
        portname = 'mm:fluid';
        break;
      case 3:
        portname = 'mm:energy';
        break;
      case 4:
        portname = 'mm:create/kinetic';
        break;
      default:
        type = 1;
        portname = 'mm:item';
        break;
    }
    event
      .create(name.toLowerCase().split(' ').join('_'))
      .name(name)
      .controllerId(id)
      .config(portname, (c) => {
        switch (type) {
          case 1:
            c.rows(config[0]).columns(config[1]);
            break;

          case 2:
            c.rows(config[0]).columns(config[1]).slotCapacity(config[2]);
            break;

          case 3:
            c.capacity(config[0]).maxReceive(config[1]).maxExtract(config[2]);
            break;

          case 4:
            c.stress(config[0]);
            break;

          default:
            break;
        }
        c.tierRank(tier);
      });
  }


  // Energy Ports

  port('Energy Port', 'mm:controller', 3, [2147483647, 2147483647, 2147483647], 1);
});

MMEvents.registerPorts((event) => {
  event
    .create('colossal_gas_port')
    .name('Colossal Gas Port')
    .controllerId('mm:controller')
    .config('mm:mekanism/gas', (c) => {
      c.capacity(2147483647);
    });
  event
    .create('colossal_slurry_port')
    .name('Colossal Slurry Port')
    .controllerId('mm:controller')
    .config('mm:mekanism/slurry', (c) => {
      c.capacity(2147483647);
    });
  event
    .create('colossal_pigment_port')
    .name('Colossal Pigment Port')
    .controllerId('mm:controller')
    .config('mm:mekanism/pigment', (c) => {
      c.capacity(2147483647);
    });
  event
    .create('colossal_infuse_port')
    .name('Colossal Infuse Port')
    .controllerId('mm:controller')
    .config('mm:mekanism/infuse', (c) => {
      c.capacity(2147483647);
    });
});


