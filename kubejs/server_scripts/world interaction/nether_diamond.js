BlockEvents.rightClicked(
    [
        'minecraft:obsidian'
    ],
    event => {
        const { block, player, level, server, facing } = event

        // Only activate while crouching
        if (!player.isCrouching()) return

        // Only activate while holding the Diamand Hacksaw
        if (player.mainHandItem.id !== 'butchery:diamond_hacksaw') return

        // Don't activate if the cooldown is active
        if (player.cooldowns.isOnCooldown('kubejs:nether_essence')) return

        // Drop 2 Metal Essence at the clicked block
        block.popItemFromFace(Item.of('kubejs:nether_essence', 1), facing)

        // 2 tick cooldown
        player.cooldowns.addCooldown('kubejs:nether_essence', 2)

        // particle
        level.runCommandSilent(
          `particle minecraft:block{block_state:{Name:"${block.id}"}} ${
            block.x + 0.5} ${block.y + 1.0} ${block.z + 0.5} 0.25 0.25 0.25 0.02 7`
        );

        // Cancel the right-click event
        event.cancel()
    }
)
