const AMETHYST_GATEWAY_ID = "gateway_of_amethyst";

ServerEvents.recipes(event => {

  Gateway.customBuilder(AMETHYST_GATEWAY_ID)
    .name("Gateway of Amethyst")
    .tooltipText("A Boss trial ending with Amethyst Fish")
    .size("large")
    .color(0x8662bf)

    // ---------------------------------------------------------
    // WAVE 1
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("cataclysm:amethyst_crab", 5);
      wave.maxTime(1800);
      wave.setupTime(150);
      wave.addEntityLootReward("cataclysm:amethyst_crab", 5);
      wave.buildWave();
    })

    // ---------------------------------------------------------
    // WAVE 5 – NAGA BOSS
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("oritechthings:amethyst_fish", 20);
      wave.maxTime(2400);
      wave.setupTime(150);
      wave.addEntityLootReward("oritechthings:amethyst_fish", 5);
      wave.buildWave();
    })

    // ---------------------------------------------------------
    // FINAL GATEWAY REWARD
    // ---------------------------------------------------------
    .addEntityLootReward("oritechthings:amethyst_fish", 5)
    .addReward("minecraft:budding_amethyst", 1)

    .register();


  // ---------------------------------------------------------
  // PEARL RECIPE (8 dirt + 1 gravel)
  // ---------------------------------------------------------

  event.shaped(
    Gateway.createPearlItem(AMETHYST_GATEWAY_ID),
    [
      "IYI",
      "YTY",
      "IYI"
    ],
    {
      I: "minecraft:amethyst_block",
      Y: "ars_nouveau:source_gem",
      T: "minecraft:diamond"
    }
  );

});