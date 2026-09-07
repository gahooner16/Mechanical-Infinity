LootJS.modifiers(event => {
    event
        .addTableModifier(LootType.ENTITY)
        .killedByPlayer()
        .addLoot(
            LootEntry.of("kubejs:living_essence")
                .randomChance(0.20)
        )
})
LootJS.modifiers(event => {
    event
        .addTableModifier(LootType.ENTITY)
        .removeLoot('bhc:red_heart')
})