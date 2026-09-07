const MINOSHROOM_GATEWAY_ID = "gateway_of_minoshroom";

ServerEvents.recipes(event => {

  Gateway.customBuilder(MINOSHROOM_GATEWAY_ID)
    .name("Gateway of The Minoshroom")
    .tooltipText("A multi‑wave undead trial ending with the Minoshroom")
    .size("large")
    .color(0xC82F2D)

    // ---------------------------------------------------------
    // WAVE 1
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("minecraft:zombie", 5);
      wave.maxTime(750);
      wave.setupTime(150);
      wave.addEntityLootReward("minecraft:zombie", 5);
      wave.buildWave();
    })

    // ---------------------------------------------------------
    // WAVE 2
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("minecraft:zombie", 5).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.33);
        entity.addAttribute("minecraft:generic.armor", 2.5);
        entity.addAttribute("minecraft:generic.attack_damage", 0.33);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.05);
        entity.addAttribute("minecraft:generic.movement_speed", 0.05);
        entity.finalizeSpawn(false);
      });

      wave.addEntity("minecraft:skeleton", 5).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.33);
        entity.addAttribute("minecraft:generic.armor", 2.5);
        entity.addAttribute("minecraft:generic.attack_damage", 0.33);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.05);
        entity.addAttribute("minecraft:generic.movement_speed", 0.05);
        entity.addNbt(`{HandItems: [{count: 1, id: "minecraft:bow"}, {}]}`)
        entity.finalizeSpawn(false);
      });

      wave.maxTime(750);
      wave.setupTime(150);

      wave.addEntityLootReward("minecraft:zombie", 10);
      wave.addEntityLootReward("minecraft:skeleton", 10);

      wave.buildWave();
    })

    // ---------------------------------------------------------
    // WAVE 3
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("minecraft:zombie", 10).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.66);
        entity.addAttribute("minecraft:generic.armor", 4);
        entity.addAttribute("minecraft:generic.attack_damage", 0.5);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.1);
        entity.addAttribute("minecraft:generic.movement_speed", 0.1);
        entity.finalizeSpawn(false);
      });

      wave.addEntity("minecraft:skeleton", 10).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.66);
        entity.addAttribute("minecraft:generic.armor", 4);
        entity.addAttribute("minecraft:generic.attack_damage", 0.5);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.1);
        entity.addAttribute("minecraft:generic.movement_speed", 0.1);
        entity.addNbt(`{HandItems: [{count: 1, id: "minecraft:bow"}, {}]}`)
        entity.finalizeSpawn(false);
      });

      wave.maxTime(1800);
      wave.setupTime(150);

      wave.addEntityLootReward("minecraft:zombie", 10);
      wave.addEntityLootReward("minecraft:skeleton", 10);

      wave.buildWave();
    })

    // ---------------------------------------------------------
    // WAVE 4
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("minecraft:zombie", 10).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.85);
        entity.addAttribute("minecraft:generic.armor", 5);
        entity.addAttribute("minecraft:generic.attack_damage", 0.66);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.15);
        entity.addAttribute("minecraft:generic.movement_speed", 0.15);
        entity.finalizeSpawn(false);
      });

      wave.addEntity("twilightforest:minotaur", 10).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.85);
        entity.addAttribute("minecraft:generic.armor", 5);
        entity.addAttribute("minecraft:generic.attack_damage", 0.66);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.15);
        entity.addAttribute("minecraft:generic.movement_speed", 0.15);
        entity.finalizeSpawn(false);
      });

      wave.addEntity("minecraft:skeleton", 10).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.85);
        entity.addAttribute("minecraft:generic.armor", 5);
        entity.addAttribute("minecraft:generic.attack_damage", 0.66);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.15);
        entity.addAttribute("minecraft:generic.movement_speed", 0.15);
        entity.addNbt(`{HandItems: [{count: 1, id: "minecraft:bow"}, {}]}`)
        entity.finalizeSpawn(false);
      });

      wave.maxTime(1800);
      wave.setupTime(150);

      wave.addEntityLootReward("minecraft:zombie", 10);
      wave.addEntityLootReward("twilightforest:minotaur", 10);
      wave.addEntityLootReward("minecraft:skeleton", 10);

      wave.buildWave();
    })

    // ---------------------------------------------------------
    // WAVE 5 – NAGA BOSS
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("twilightforest:minoshroom", 1);
      wave.maxTime(2400);
      wave.setupTime(150);
      wave.addEntityLootReward("twilightforest:minoshroom", 1);
      wave.buildWave();
    })

    // ---------------------------------------------------------
    // FINAL GATEWAY REWARD
    // ---------------------------------------------------------
    .addEntityLootReward("twilightforest:minoshroom", 5)

    .register();


  // ---------------------------------------------------------
  // PEARL RECIPE (8 dirt + 1 gravel)
  // ---------------------------------------------------------

  event.shaped(
    Gateway.createPearlItem(MINOSHROOM_GATEWAY_ID),
    [
      "EBE",
      "BCB",
      "EBE"
    ],
    {
      B: "minecraft:bone",
      E: "minecraft:ender_pearl",
      C: "twilightforest:lich_trophy"
    }
  );

});