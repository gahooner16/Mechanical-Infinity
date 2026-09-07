const HYDRA_GATEWAY_ID = "gateway_of_hyra";

ServerEvents.recipes(event => {

  Gateway.customBuilder(HYDRA_GATEWAY_ID)
    .name("Gateway of Hydra")
    .tooltipText("A multi‑wave undead trial ending with the Hydra")
    .size("large")
    .color(0x5E0100)

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

      wave.addEntityLootReward("minecraft:zombie", 5);
      wave.addEntityLootReward("minecraft:skeleton", 5);

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

      wave.maxTime(750);
      wave.setupTime(150);

      wave.addEntityLootReward("minecraft:zombie", 5);
      wave.addEntityLootReward("minecraft:skeleton", 5);

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

      wave.addEntity("mutantzombies:spitter", 1)

      wave.addEntity("minecraft:skeleton", 10).modify(entity => {
        entity.addAttribute("minecraft:generic.max_health", 0.85);
        entity.addAttribute("minecraft:generic.armor", 5);
        entity.addAttribute("minecraft:generic.attack_damage", 0.66);
        entity.addAttribute("minecraft:generic.knockback_resistance", 0.15);
        entity.addAttribute("minecraft:generic.movement_speed", 0.15);
        entity.finalizeSpawn(false);
      });

      wave.maxTime(1800);
      wave.setupTime(150);

      wave.addEntityLootReward("minecraft:zombie", 5);
      wave.addEntityLootReward("mutantzombies:spitter", 5);
      wave.addEntityLootReward("minecraft:skeleton", 5);

      wave.buildWave();
    })

    // ---------------------------------------------------------
    // WAVE 5 – NAGA BOSS
    // ---------------------------------------------------------
    .addWave(wave => {
      wave.addEntity("twilightforest:hydra", 1);
      wave.maxTime(2400);
      wave.setupTime(150);
      wave.addEntityLootReward("twilightforest:hydra", 1);
      wave.buildWave();
    })

    // ---------------------------------------------------------
    // FINAL GATEWAY REWARD
    // ---------------------------------------------------------
    .addEntityLootReward("twilightforest:hydra", 5)

    .register();


  // ---------------------------------------------------------
  // PEARL RECIPE (8 dirt + 1 gravel)
  // ---------------------------------------------------------

  event.shaped(
    Gateway.createPearlItem(HYDRA_GATEWAY_ID),
    [
      "SMS",
      "MCM",
      "SMS"
    ],
    {
      M: "twilightforest:raw_meef",
      S: "twilightforest:meef_stroganoff",
      C: "twilightforest:minoshroom_trophy"
    }
  );

});