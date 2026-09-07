BlockEvents.rightClicked(
    [
        'minecraft:grass_block',
        'minecraft:dirt',
        'farmersdelight:rich_soil'
    ],
    event => {
        const { block, player, level, server, facing } = event

        // Only activate while crouching
        if (!player.isCrouching()) return

        // Only activate while holding an iron shovel
        if (player.mainHandItem.id !== 'minecraft:iron_shovel') return

        // Don't activate if the cooldown is active
        if (player.cooldowns.isOnCooldown('kubejs:earth_essence')) return

        // Give 3 Earth Essence
        block.popItemFromFace(Item.of('kubejs:earth_essence', 5), facing)

        // 1 tick cooldown
        player.cooldowns.addCooldown('kubejs:earth_essence', 1)

        // particle
        level.runCommandSilent(
          `particle minecraft:block{block_state:{Name:"${block.id}"}} ${
            block.x + 0.5} ${block.y + 1.0} ${block.z + 0.5} 0.25 0.25 0.25 0.02 7`
        );

        // Cancel the right-click event
        event.cancel()
    }
)