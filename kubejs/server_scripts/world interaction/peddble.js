BlockEvents.rightClicked(
    [
        'minecraft:grass_block',
        'minecraft:dirt'
    ],
    event => {
        const { block, player, level, server, facing } = event

        // Only activate while crouching
        if (!player.isCrouching()) return

        // Only activate with an empty main hand
        if (!player.mainHandItem.empty) return

        // Don't activate if the cooldown is active
        if (player.cooldowns.isOnCooldown('kubejs:earth_essence')) return

        // Drop the item
        block.popItemFromFace(Item.of('kubejs:earth_essence', 1), facing)

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