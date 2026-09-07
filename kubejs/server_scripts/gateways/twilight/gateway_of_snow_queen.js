const SNOW_QUEEN_GATEWAY_ID = "gateway_of_snow_queen";

ServerEvents.recipes(event => {

  Gateway.customBuilder(SNOW_QUEEN_GATEWAY_ID)
    .name("Gateway of The Snow Queen")
    .tooltipText("A multi‑wave undead trial ending with the Snow Queen")
    .size("large")
    .color(0xCAF3FF)

    // ---------------------------------------------------------
    // WAVE 1
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("twilightforest:stable_ice_core", 5);
      wave.maxTime(750);
      wave.setupTime(150);
      wave.addEntityLootReward("twilightforest:stable_ice_core", 5);
      wave.buildWave();
    })

    // ---------------------------------------------------------
    // WAVE 2
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("twilightforest:stable_ice_core", 5).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.33);
        entity.addAttribute("minecraft:generic.armor", 2.5);
        entity.addAttribute("minecraft:generic.attack_damage", 0.33);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.05);
        entity.addAttribute("minecraft:generic.movement_speed", 0.05);
        entity.finalizeSpawn(false);
      });

      wave.addEntity("twilightforest:unstable_ice_core", 5).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.33);
        entity.addAttribute("minecraft:generic.armor", 2.5);
        entity.addAttribute("minecraft:generic.attack_damage", 0.33);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.05);
        entity.addAttribute("minecraft:generic.movement_speed", 0.05);
        entity.finalizeSpawn(false);
      });

      wave.maxTime(750);
      wave.setupTime(150);

      wave.addEntityLootReward("twilightforest:stable_ice_core", 10);
      wave.addEntityLootReward("twilightforest:unstable_ice_core", 10);

      wave.buildWave();
    })

    // ---------------------------------------------------------
    // WAVE 3
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("twilightforest:stable_ice_core", 10).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.66);
        entity.addAttribute("minecraft:generic.armor", 4);
        entity.addAttribute("minecraft:generic.attack_damage", 0.5);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.1);
        entity.addAttribute("minecraft:generic.movement_speed", 0.1);
        entity.finalizeSpawn(false);
      });

      wave.addEntity("twilightforest:unstable_ice_core", 10).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.66);
        entity.addAttribute("minecraft:generic.armor", 4);
        entity.addAttribute("minecraft:generic.attack_damage", 0.5);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.1);
        entity.addAttribute("minecraft:generic.movement_speed", 0.1);
        entity.finalizeSpawn(false);
      });

      wave.maxTime(1800);
      wave.setupTime(150);

      wave.addEntityLootReward("twilightforest:stable_ice_core", 10);
      wave.addEntityLootReward("twilightforest:unstable_ice_core", 10);

      wave.buildWave();
    })

    // ---------------------------------------------------------
    // WAVE 4
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("twilightforest:stable_ice_core", 10).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.85);
        entity.addAttribute("minecraft:generic.armor", 5);
        entity.addAttribute("minecraft:generic.attack_damage", 0.66);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.15);
        entity.addAttribute("minecraft:generic.movement_speed", 0.15);
        entity.finalizeSpawn(false);
      });

      wave.addEntity("twilightforest:ice_crystal", 3).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.85);
        entity.addAttribute("minecraft:generic.armor", 5);
        entity.addAttribute("minecraft:generic.attack_damage", 0.66);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.15);
        entity.addAttribute("minecraft:generic.movement_speed", 0.15);
        entity.finalizeSpawn(false);
      });

      wave.addEntity("twilightforest:unstable_ice_core", 10).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.85);
        entity.addAttribute("minecraft:generic.armor", 5);
        entity.addAttribute("minecraft:generic.attack_damage", 0.66);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.15);
        entity.addAttribute("minecraft:generic.movement_speed", 0.15);
        entity.finalizeSpawn(false);
      });

      wave.maxTime(1800);
      wave.setupTime(150);

      wave.addEntityLootReward("twilightforest:stable_ice_core", 10);
      wave.addEntityLootReward("quark:forgotten", 6);
      wave.addEntityLootReward("twilightforest:unstable_ice_core", 10);

      wave.buildWave();
    })

    // ---------------------------------------------------------
    // WAVE 5 – NAGA BOSS
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("twilightforest:snow_queen", 1);
      wave.maxTime(2400);
      wave.setupTime(150);
      wave.addEntityLootReward("twilightforest:snow_queen", 1);
      wave.buildWave();
    })

    // ---------------------------------------------------------
    // FINAL GATEWAY REWARD
    // ---------------------------------------------------------
    .addEntityLootReward("twilightforest:snow_queen", 5)

    .register();


  // ---------------------------------------------------------
  // PEARL RECIPE (8 dirt + 1 gravel)
  // ---------------------------------------------------------

  event.shaped(
    Gateway.createPearlItem(SNOW_QUEEN_GATEWAY_ID),
    [
      "IYI",
      "YTY",
      "IYI"
    ],
    {
      I: "twilightforest:ice_bomb",
      Y: "twilightforest:alpha_yeti_fur",
      T: "twilightforest:alpha_yeti_trophy"
    }
  );

});