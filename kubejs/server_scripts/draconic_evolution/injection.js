ServerEvents.recipes(event => {
  event.recipes.draconicevolution.fusion_crafting(
    'bhc:yellow_heart', // input item
    ['advancednetherite:netherite_emerald_ingot',
    'advancednetherite:netherite_emerald_ingot',
    'advancednetherite:netherite_emerald_ingot',
    'advancednetherite:netherite_emerald_ingot',
    'draconicevolution:draconium_core',
    'draconicevolution:draconium_block',
    'draconicevolution:draconium_block',
     ['quark:diamond_heart', false]], // diamond is used and obsidian is not 
    
     'bhc:green_heart',
    "draconic", // tier can be (draconium, wyvern, draconic, chaotic)
    1000000, //energy
  );
});