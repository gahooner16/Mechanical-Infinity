ServerEvents.recipes(event => {
  PMW.melt(event, 'kubejs:earth_essence', 'minecraft:lava', 10, 1000, 1000, 1)
  PMW.melt(event, 'kubejs:nether_essence', 'minecraft:lava', 1000, 2000, 1000, 1)
})