ServerEvents.recipes(MR => {
MR.remove({
   type: 'replication:matter_value'
})

});



ServerEvents.recipes(MR => {

  const VALUES = [
    {
      input: { tag: 'minecraft:logs' },
      matter: [
        { type: 'replication:organic', amount: 12 }
      ]
    },
    {
      input: { tag: 'c:raw_meat'},
      matter: [
        { type: 'replication:living', amount: 12 }
      ]
    },
  {
      input: { tag: 'minecraft:dirt' },
      matter: [
        { type: 'replication:earth', amount: 18 }
      ]
    },
    {
      input: { item: 'minecraft:cobblestone' },
      matter: [
        { type: 'replication:earth', amount: 16 },
        { type: 'replication:organic', amount: 12}
      ]
    },
    {
      input: { item: 'minecraft:oak_sapling' },
      matter: [
        { type: 'replication:earth', amount: 2 },
        { type: 'replication:organic', amount:16 }
      ]
    },
    {
      input: { item: 'minecraft:apple' },
      matter: [
        { type: 'replication:organic', amount:16 }
      ]
    },
    {
      input: { item: 'minecraft:wheat' },
      matter: [
        { type: 'replication:earth', amount: 1 },
        { type: 'replication:organic', amount:12 }
      ]
    },
    {
      input: { item: 'minecraft:bread' },
      matter: [
        { type: 'replication:earth', amount: 4 },
        { type: 'replication:organic', amount: 36}
      ]
    },
    {
      input: { item: 'minecraft:iron_ore' },
      matter: [
        { type: 'replication:metallic', amount: 16 }
      ]
    },
    {
      input: { item: 'kubejs:metallic_essence' },
      matter: [
        { type: 'replication:metallic', amount: 1 }
      ]
    },
    {
      input: { item: 'kubejs:earth_essence' },
      matter: [
        { type: 'replication:earth', amount: 2 }
      ]
    },
    {
      input: { item: 'kubejs:precious_essence' },
      matter: [
        { type: 'replication:precious', amount: 1 }
      ]
    },
    {
      input: { item: 'kubejs:nether_essence' },
      matter: [
        { type: 'replication:nether', amount: 1 }
      ]
    },
    {
      input: { item: 'kubejs:ender_essence' },
      matter: [
        { type: 'replication:ender', amount: 1 }
      ]
    },
    {
      input: { item: 'kubejs:living_essence' },
      matter: [
        { type: 'replication:living', amount: 1 }
      ]
    },
    {
      input: { item: 'kubejs:quantum_essence' },
      matter: [
        { type: 'replication:quantum', amount: 1 }
      ]
    },
    {
      input: { item: 'kubejs:organic_essence' },
      matter: [
        { type: 'replication:organic', amount: 2 }
      ]
    },
    {
      input: { item: 'oritech:nickel_ore' },
      matter: [
        { type: 'replication:metallic', amount: 24 }
      ]
    },
    {
      input: { item: 'minecraft:coal_ore' },
      matter: [
        { type: 'replication:earth', amount: 128 },
        { type: 'replication:organic', amount: 204 }
      ]
    },
    {
      input: { item: 'minecraft:coal' },
      matter: [
        { type: 'replication:earth', amount: 0 },
        { type: 'replication:organic', amount: 0 }
      ]
    },
    {
      input: { item: 'minecraft:gravel' },
      matter: [
        { type: 'replication:metallic', amount: 1 },
        { type: 'replication:earth', amount: 72 }
      ]
    },
    {
      input: { item: 'minecraft:sand' },
      matter: [
        { type: 'replication:metallic', amount: 1 },
        { type: 'replication:earth', amount: 184 }
      ]
    },
    {
      input: { item: 'minecraft:glowstone' },
      matter: [
        { type: 'replication:precious', amount: 24 }
      ]
    },
    {
      input: { item: 'minecraft:redstone_ore' },
      matter: [
        { type: 'replication:precious', amount: 12 },
        { type: 'replication:metallic', amount: 4 }
      ]
    },
    {
      input: { item: 'minecraft:gold_ore' },
      matter: [
        { type: 'replication:precious', amount: 50 },
        { type: 'replication:metallic', amount: 4 }
      ]
    },
    {
      input: { item: 'mekanism:osmium_ore' },
      matter: [
        { type: 'replication:precious', amount: 4 },
        { type: 'replication:metallic', amount: 240 }
      ]
    },
    {
      input: { item: 'minecraft:copper_ore' },
      matter: [
        { type: 'replication:metallic', amount: 104 }
      ]
    },
    {
      input: { item: 'minecraft:lapis_ore' },
      matter: [
        { type: 'replication:precious', amount: 170 }
      ]
    },
    {
      input: { item: 'minecraft:diamond_ore' },
      matter: [
        { type: 'replication:precious', amount: 366 },
        { type: 'replication:metallic', amount: 55 }
      ]
    },
    {
      input: { item: 'minecraft:obsidian' },
      matter: [
        { type: 'replication:nether', amount: 20 }
      ]
    },
    {
      input: { item: 'minecraft:blaze_rod' },
      matter: [
        { type: 'replication:nether', amount: 30 },
        { type: 'replication:living', amount: 20 }
      ]
    },
    {
      input: { item: 'minecraft:leather' },
      matter: [
        { type: 'replication:living', amount: 8 }
      ]
    },
    {
      input: { item: 'minecraft:rotten_flesh' },
      matter: [
        { type: 'replication:living', amount: 4 }
      ]
    },
    {
      input: { item: 'minecraft:ender_eye' },
      matter: [
        { type: 'replication:ender', amount: 1 }
      ]
    },
    {
      input: { item: 'minecraft:hay_block' },
      matter: [
        { type: 'replication:earth', amount: 9 },
        { type: 'replication:organic', amount: 108 }
      ]
    },
    {
      input: { item: 'minecraft:quartz' },
      matter: [
        { type: 'replication:nether', amount: 2 },
        { type: 'replication:precious', amount: 2 }
      ]
    },
    {
      input: { item: 'minecraft:ancient_debris' },
      matter: [
        { type: 'replication:nether', amount: 120 },
        { type: 'replication:precious', amount: 366 }
      ]
    },
    {
      input: { item: 'mysticalagriculture:prosperity_ore' },
      matter: [
        { type: 'replication:earth', amount: 120 },
        { type: 'replication:metallic', amount: 120 },
        { type: 'replication:precious', amount: 190 }
      ]
    },
    {
      input: { item: 'minecraft:cobbled_deepslate' },
      matter: [
        { type: 'replication:earth', amount: 10 }
      ]
    },
    {
      input: { item: 'oritech:deepslate_platinum_ore' },
      matter: [
        { type: 'replication:precious', amount: 54 },
        { type: 'replication:metallic', amount: 244 }
      ]
    },
    {
      input: { item: 'minecraft:emerald_ore' },
      matter: [
        { type: 'replication:precious', amount: 544 },
        { type: 'replication:metallic', amount: 34 }
      ]
    },
    {
      input: { tag: 'c:dyes' },
      matter: [
        { type: 'replication:organic', amount: 6 }
      ]
    },
    {
      input: { item: 'mekanism:tin_ore' },
      matter: [
        { type: 'replication:metallic', amount: 512 }
      ]
    },
    {
      input: { item: 'mekanism:lead_ore' },
      matter: [
        { type: 'replication:metallic', amount: 744 }
      ]
    },
    {
      input: { item: 'minecraft:netherrack' },
      matter: [
        { type: 'replication:nether', amount: 8 }
      ]
    },
    {
      input: { item: 'minecraft:end_stone' },
      matter: [
        { type: 'replication:ender', amount: 8 }
      ]
    },
    {
      input: { tag: 'c:chipped_quark' },
      matter: [
        { type: 'replication:organic', amount: 0 },
        { type: 'replication:earth', amount: 0 },
        { type: 'replication:metallic', amount: 0 },
        { type: 'replication:nether', amount: 0 },
        { type: 'replication:living', amount: 0 },
        { type: 'replication:ender', amount: 0 },
        { type: 'replication:quantum', amount: 0 },
        { type: 'replication:precious', amount: 0 },
      ]
    },
  ];

  VALUES.forEach(v => {
    MR.custom({
      type: 'replication:matter_value',
      input: v.input,
      matter: v.matter
    });
  });

});

